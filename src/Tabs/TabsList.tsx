/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import PropTypes from "prop-types";
import rafSchd from "raf-schd";
import React, { useContext, useEffect, useState } from "react";
import Arrow from "./Arrow";
import TabsContext from "./context";

interface TabsListProps {
  /** Children must be of type `Tabs.Tab` */
  children: React.ReactNode;
  /**
   * Amount of padding to apply on the x axis to indent tabs
   * from edges of the `Tabs.Panel`
   * */
  xPadding: "xxs" | "xs" | "s" | "m" | "l" | "xl" | "none";
}

const noop = () => {};

const TabsList: React.FC<TabsListProps> = ({ children, xPadding = "none" }) => {
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
  } = useContext(TabsContext);
  const childArray = React.Children.toArray(children);

  const updateScrollButtonState = () => {
    const { scrollWidth, clientWidth, scrollLeft } = tabsListRef.current;
    const nextShowLeftArrow = scrollLeft > 1;
    const nextShowRightArrow = scrollLeft < scrollWidth - clientWidth - 1;

    setShowLeftArrow(nextShowLeftArrow);
    setShowRightArrow(nextShowRightArrow);
    setIsResponsive(nextShowLeftArrow || nextShowRightArrow);
  };

  const scheduleScrollButtonUpdate = () => {
    if (tabsListRef.current) {
      rafSchd(updateScrollButtonState());
    }
  };

  useEffect(() => {
    scheduleScrollButtonUpdate();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", scheduleScrollButtonUpdate);

    return () => {
      window.removeEventListener("resize", scheduleScrollButtonUpdate);
    };
  }, []);

  useEffect(() => {
    tabsListRef.current.addEventListener("scroll", scheduleScrollButtonUpdate);

    return () => {
      tabsListRef?.current?.removeEventListener(
        "scroll",
        scheduleScrollButtonUpdate
      );
    };
  }, [tabsListRef.current]);

  // populate tabIds state variable in root component
  // with tabId props from `Tabs.Tab` children passed into `Tabs.List`
  useEffect(() => {
    if (tabIds.length !== childArray.length) {
      setTabIds(childArray.map((t) => t.props.tabId));
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

  // Heavily inspired from https://github.com/mui/material-ui/blob/master/packages/mui-material-next/src/Tabs/Tabs.js#L395
  const getScrollSize = () => {
    const containerSize = tabsListRef.current.clientWidth;
    let totalSize = 0;
    const children = Array.from(tabsListRef.current.children);

    for (let i = 0; i < children.length; i += 1) {
      const tab = children[i];
      if (totalSize + tab.clientWidth > containerSize) {
        // If the first item is longer than the container size, then only scroll
        // by the container size.
        if (i === 0) {
          totalSize = containerSize;
        }
        break;
      }
      totalSize += tab.clientWidth;
    }

    return totalSize;
  };

  const onLeftClick = () => {
    tabsListRef.current.scroll({
      left: tabsListRef.current.scrollLeft - getScrollSize(),
      behavior: "smooth",
    });
  };

  const onRightClick = () => {
    tabsListRef.current.scroll({
      left: tabsListRef.current.scrollLeft + getScrollSize(),
      behavior: "smooth",
    });
  };

  return (
    <div className={isResponsive ? "display-flex" : ""}>
      <Arrow direction="left" onClick={onLeftClick} show={showLeftArrow} />
      <ul
        ref={tabsListRef}
        role={hasPanels ? "tablist" : undefined}
        className={`nds-tabs-tabsList list--reset padding--x--${xPadding}`}
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

TabsList.propTypes = {
  /** Children must be of type `Tabs.Tab` */
  // @ts-expect-error ts v5 doesn't recognize this as ReactNodeLike
  children: PropTypes.node.isRequired,
  /**
   * Amount of padding to apply on the x axis to indent tabs
   * from edges of the `Tabs.Panel`
   * */
  xPadding: PropTypes.oneOf(["xxs", "xs", "s", "m", "l", "xl", "none"]),
};

TabsList.displayName = "Tabs.List";

export default TabsList;
