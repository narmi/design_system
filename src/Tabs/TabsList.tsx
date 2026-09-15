/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import cc from "classcat";
import React, {
  LegacyRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Arrow from "./Arrow";
import Row from "../Row";
import TabsContext from "./context";

const noop = () => {};

// Width reserved for each arrow column (see `.arrow-reponsive` in index.scss).
// We always subtract space for both arrows when deciding whether content
// overflows, even when the arrows aren't currently rendered. This keeps the
// overflow decision monotonic in container size and avoids a feedback loop
// where showing/hiding the arrows changes `ul.clientWidth`, which in turn
// changes the overflow decision.
const ARROW_RESERVE_PX = 32 * 2;

// Hysteresis for turning responsive mode back off. Flipping `isResponsive`
// changes layout outside the wrapper (`.panel-responsive` adds 64px of
// padding, page scrollbars may toggle), which can feed back into the wrapper
// width. Without slack, a wrapper sitting exactly at the overflow threshold
// oscillates between states indefinitely, remounting panel content on every
// flip. Once responsive, we stay responsive until the content fits with room
// to absorb the largest of those feedback effects.
const RESPONSIVE_HYSTERESIS_PX = 64;

// Tolerance when comparing `scrollLeft` against the scroll limits. Fractional
// device pixel ratios and browser zoom make these values non-integral, so an
// exact `=== 0` / `=== maxScroll` comparison can never be satisfied.
const SCROLL_EPSILON_PX = 1;

export interface TabsListProps {
  /** Children must be of type `Tabs.Tab` */
  children: React.ReactNode;
  /**
   * Amount of padding to apply on the x axis to indent tabs
   * from edges of the `Tabs.Panel`
   * */
  xPadding?: "xxs" | "xs" | "s" | "m" | "l" | "xl" | "none";
}

const TabsList = ({ children, xPadding = "none" }: TabsListProps) => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Cached layout measurements - recomputed on resize/children/selection changes,
  // not on every scroll tick.
  const contentWidthRef = useRef(0);
  const availableRef = useRef(0);
  const isOverflowingRef = useRef(false);

  // Coalesces scroll-driven arrow-state updates to one per animation frame.
  const scrollRafRef = useRef<number | null>(null);

  const {
    tabIds,
    setTabIds,
    changeTabs,
    currentIndex,
    hasPanels,
    tabsListRef,
    isResponsive,
    setIsResponsive,
    kind,
  } = useContext(TabsContext);
  const childArray = React.Children.toArray(children);

  // Recomputes the cached layout measurements and updates arrow/overflow state.
  // Should be called whenever the container is resized or children/selection change.
  const updateLayoutCache = () => {
    if (!tabsListRef.current || !wrapperRef.current) return;
    const el = tabsListRef.current;

    // Measure intrinsic content width from in-flow children only, so the
    // absolutely-positioned pill pseudo-element can't skew the result.
    // Include flex `gap` between items so the comparison is exact.
    const items = Array.from(el.children) as HTMLElement[];
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    contentWidthRef.current =
      items.reduce((sum, item) => sum + item.offsetWidth, 0) +
      Math.max(0, items.length - 1) * gap;

    // Compare against wrapper width with arrow space always reserved, even
    // when arrows aren't currently shown. This breaks the feedback loop
    // between arrow visibility and the overflow decision.
    availableRef.current = wrapperRef.current.clientWidth - ARROW_RESERVE_PX;

    updateScrollButtonState();
  };

  // Check content overflow
  const updateScrollButtonState = () => {
    const el = tabsListRef.current;
    if (!el) return;

    const contentWidth = contentWidthRef.current;
    const available = availableRef.current;
    const isOverflowing = isOverflowingRef.current
      ? contentWidth > available - RESPONSIVE_HYSTERESIS_PX
      : contentWidth > available;
    isOverflowingRef.current = isOverflowing;

    const maxScroll = el.scrollWidth - el.clientWidth;
    const atStart = el.scrollLeft <= SCROLL_EPSILON_PX;
    const atEnd = el.scrollLeft >= maxScroll - SCROLL_EPSILON_PX;

    setShowLeftArrow(isOverflowing && !atStart);
    setShowRightArrow(isOverflowing && !atEnd);
    setIsResponsive(isOverflowing);
  };

  // Runs on every scroll event (touch, wheel, or the smooth arrow scroll).
  // Coalesces recomputation to once per frame.
  const handleScroll = () => {
    if (typeof requestAnimationFrame !== "function") {
      updateScrollButtonState();
      return;
    }
    if (scrollRafRef.current !== null) return;
    scrollRafRef.current = requestAnimationFrame(() => {
      scrollRafRef.current = null;
      updateScrollButtonState();
    });
  };

  // ResizeObserver to detect when container size changes.
  // The `ul` is observed alongside the wrapper because the arrow columns
  // appearing at the responsive threshold shrink the `ul` without changing the
  // wrapper. That shrink is what creates the scroll range, so `atEnd` has to be
  // recomputed once it lands.
  useEffect(() => {
    if (!wrapperRef.current) return;
    const observer = new ResizeObserver(updateLayoutCache);
    observer.observe(wrapperRef.current);
    if (tabsListRef.current) observer.observe(tabsListRef.current);
    updateLayoutCache();
    return () => observer.disconnect();
  }, []);

  // Scroll listener for touch/programmatic scroll updates.
  useEffect(() => {
    const el = tabsListRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll);
    return () => {
      el.removeEventListener("scroll", handleScroll);
      if (scrollRafRef.current !== null) {
        cancelAnimationFrame(scrollRafRef.current);
      }
    };
  }, []);

  // Initial check
  useEffect(() => {
    updateLayoutCache();
  }, []);

  // Re-cache layout measurements when children or selection change, since tab
  // widths may change (e.g. bold weight on selected tab).
  useEffect(() => {
    updateLayoutCache();
  }, [childArray.length, currentIndex]);

  // populate tabIds state variable in root component
  // with tabId props from `Tabs.Tab` children passed into `Tabs.List`
  useEffect(() => {
    if (tabIds.length !== childArray.length) {
      setTabIds(childArray.map((t: React.ReactElement) => t.props.tabId));
    }
  }, [tabIds, setTabIds, childArray]);

  const handleKeyDown = ({ key }) => {
    let newIndex;
    switch (key) {
      case "ArrowLeft":
        newIndex = currentIndex - 1;
        if (newIndex >= 0) {
          changeTabs(tabIds[newIndex]);
        }
        break;
      case "ArrowRight":
        newIndex = currentIndex + 1;
        if (newIndex <= tabIds.length - 1) {
          changeTabs(tabIds[newIndex]);
        }
        break;
    }
  };

  // Arrow clicks page by one container width. Where the list comes to rest is
  // CSS's job: `scroll-snap-type` on the list aligns the resting position to a
  // tab boundary, so there is no target math to do here.
  const onLeftClick = () => {
    const el = tabsListRef.current;
    if (!el) return;
    el.scrollBy({ left: -el.clientWidth, behavior: "smooth" });
  };

  const onRightClick = () => {
    const el = tabsListRef.current;
    if (!el) return;
    el.scrollBy({ left: el.clientWidth, behavior: "smooth" });
  };

  return (
    <div ref={wrapperRef}>
      <Row gapSize="none" alignItems="center">
        {isResponsive && (
          <Row.Item shrink>
            <Arrow
              direction="left"
              onClick={onLeftClick}
              show={showLeftArrow}
            />
          </Row.Item>
        )}
        <Row.Item>
          <ul
            ref={tabsListRef as LegacyRef<HTMLUListElement>}
            role={hasPanels ? "tablist" : undefined}
            className={cc([
              "nds-tabs-tabsList",
              `nds-tabs-tabsList--${kind}`,
              "list--reset",
              `padding--x--${xPadding}`,
              {
                "nds-tabs-tabsList--overflowLeft": showLeftArrow,
                "nds-tabs-tabsList--overflowRight": showRightArrow,
              },
            ])}
            onKeyDown={hasPanels ? handleKeyDown : noop}
            tabIndex={hasPanels ? 0 : undefined}
            data-testid="nds-tablist"
          >
            {children}
          </ul>
        </Row.Item>
        {isResponsive && (
          <Row.Item shrink>
            <Arrow
              direction="right"
              onClick={onRightClick}
              show={showRightArrow}
            />
          </Row.Item>
        )}
      </Row>
    </div>
  );
};

export default TabsList;
