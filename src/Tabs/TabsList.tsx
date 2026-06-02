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

  const {
    tabIds,
    setTabIds,
    changeTabs,
    currentIndex,
    hasPanels,
    tabsListRef,
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

  // Uses cached layout measurements — only reads `scrollLeft` from the DOM.
  const updateScrollButtonState = () => {
    if (!tabsListRef.current) return;
    const { scrollLeft } = tabsListRef.current;
    const contentWidth = contentWidthRef.current;
    const available = availableRef.current;
    const isOverflowing = contentWidth > available;

    // Use the same `available` width for arrow visibility, not the current
    // `ul.clientWidth`. Otherwise on the first overflowing frame the arrows
    // aren't shown yet, the `ul` has full wrapper width, isn't actually
    // overflowing, and we'd never flip the arrows on.
    const nextShowLeftArrow = isOverflowing && scrollLeft > 1;
    const nextShowRightArrow =
      isOverflowing && scrollLeft < contentWidth - available - 1;

    setShowLeftArrow(nextShowLeftArrow);
    setShowRightArrow(nextShowRightArrow);
    setIsResponsive(isOverflowing);
  };

  // ResizeObserver to detect when container size changes
  useEffect(() => {
    if (!wrapperRef.current) return;
    const observer = new ResizeObserver(updateLayoutCache);
    observer.observe(wrapperRef.current);
    updateLayoutCache();
    return () => observer.disconnect();
  }, []);

  // Scroll listener for touch/programmatic scroll updates — only reads scrollLeft.
  useEffect(() => {
    const el = tabsListRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollButtonState);
    return () => el.removeEventListener("scroll", updateScrollButtonState);
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

  // When the next paged scroll would land near a scroll limit, snap exactly
  // to the limit. Otherwise the trailing/leading tab can come to rest under
  // the fade mask (`--mask-width`) and read as cut off mid-word.
  const getSnapBuffer = (el: HTMLElement) => {
    const raw = getComputedStyle(el).getPropertyValue("--mask-width").trim();
    const parsed = parseFloat(raw);
    return Number.isFinite(parsed) ? parsed : 0;
  };

  const onLeftClick = () => {
    const el = tabsListRef.current;
    const naive = el.scrollLeft - el.clientWidth;
    const buffer = getSnapBuffer(el);
    el.scroll({
      left: naive <= buffer ? 0 : naive,
      behavior: "smooth",
    });
  };

  const onRightClick = () => {
    const el = tabsListRef.current;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const naive = el.scrollLeft + el.clientWidth;
    const buffer = getSnapBuffer(el);
    el.scroll({
      left: naive >= maxScroll - buffer ? maxScroll : naive,
      behavior: "smooth",
    });
  };

  return (
    <div ref={wrapperRef}>
      <Row gapSize="none" alignItems="center">
        {showLeftArrow && (
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
        {showRightArrow && (
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
