/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import cc from "classcat";
import React, { LegacyRef, useContext, useEffect, useState } from "react";
import Arrow from "./Arrow";
import TabsContext from "./context";

const noop = () => {};

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

  const {
    tabIds,
    setTabIds,
    changeTabs,
    currentIndex,
    hasPanels,
    tabsListRef,
    setIsResponsive,
    isResponsive,
    kind,
  } = useContext(TabsContext);
  const childArray = React.Children.toArray(children);

  const updateScrollButtonState = () => {
    if (!tabsListRef.current) return;
    const { scrollWidth, clientWidth, scrollLeft } = tabsListRef.current;
    const nextShowLeftArrow = scrollLeft > 1;
    const nextShowRightArrow = scrollLeft < scrollWidth - clientWidth - 1;

    setShowLeftArrow(nextShowLeftArrow);
    setShowRightArrow(nextShowRightArrow);
    setIsResponsive(nextShowLeftArrow || nextShowRightArrow);
  };

  // ResizeObserver to detect when container size changes
  useEffect(() => {
    if (!tabsListRef.current) return;
    const observer = new ResizeObserver(updateScrollButtonState);
    observer.observe(tabsListRef.current);
    return () => observer.disconnect();
  }, []);

  // Scroll listener for touch/programmatic scroll updates
  useEffect(() => {
    const el = tabsListRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollButtonState);
    return () => el.removeEventListener("scroll", updateScrollButtonState);
  }, []);

  // Initial check
  useEffect(() => {
    updateScrollButtonState();
  }, []);

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

  const onLeftClick = () => {
    tabsListRef.current.scroll({
      left: tabsListRef.current.scrollLeft - tabsListRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const onRightClick = () => {
    tabsListRef.current.scroll({
      left: tabsListRef.current.scrollLeft + tabsListRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <div style={isResponsive ? { display: "flex" } : undefined}>
      <Arrow direction="left" onClick={onLeftClick} show={showLeftArrow} />
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
      <Arrow direction="right" onClick={onRightClick} show={showRightArrow} />
    </div>
  );
};

export default TabsList;
