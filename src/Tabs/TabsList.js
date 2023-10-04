/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import PropTypes from "prop-types";
import rafSchd from "raf-schd";
import React, { useContext, useEffect } from "react";
import TabsContext from "./context";

const noop = () => {};

const TabsList = ({ children, xPadding = "none" }) => {
  const {
    tabIds,
    setTabIds,
    changeTabs,
    currentIndex,
    hasPanels,
    tabsListRef,
    setIsResponsive,
    isResponsive,
    setMarginRight,
  } = useContext(TabsContext);
  const childArray = React.Children.toArray(children);

  const updateTabPadding = () => {
    const { scrollWidth, clientWidth, scrollLeft } = tabsListRef.current;
    setIsResponsive(
      scrollLeft > 1 || scrollLeft < scrollWidth - clientWidth - 1
    );
    const tabsSize = getTabsSize();
    // adjust tab padding based on scroll sizing
    if (isResponsive) {
      if (tabsSize < clientWidth - 20) {
        setMarginRight("xxl");
      }
      if (tabsSize >= clientWidth - 20) {
        setMarginRight("m");
      }
    }
  };

  const scheduleTabPaddingUpdate = () => {
    if (tabsListRef.current) {
      rafSchd(() => updateTabPadding());
    }
  };

  useEffect(() => {
    updateTabPadding();
  }, [tabIds]);

  useEffect(() => {
    window.addEventListener("resize", scheduleTabPaddingUpdate);

    return () => {
      window.removeEventListener("resize", scheduleTabPaddingUpdate);
    };
  }, []);

  useEffect(() => {
    tabsListRef.current.addEventListener("scroll", scheduleTabPaddingUpdate);

    return () => {
      tabsListRef?.current?.removeEventListener(
        "scroll",
        scheduleTabPaddingUpdate
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
        tabsListRef.current.scroll({
          left: tabsListRef.current.scrollLeft - getTabsSize(),
          behavior: "smooth",
        });
        break;
      case "ArrowRight":
        newIndex = currentIndex + 1;
        if (newIndex <= tabIds.length - 1) {
          changeTabs(tabIds[newIndex]);
        }
        tabsListRef.current.scroll({
          left: tabsListRef.current.scrollLeft + getTabsSize(),
          behavior: "smooth",
        });
        break;
    }
  };

  // Heavily inspired from https://github.com/mui/material-ui/blob/master/packages/mui-material-next/src/Tabs/Tabs.js#L395
  const getTabsSize = () => {
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

  return (
    <div className={isResponsive ? "display-flex" : ""}>
      <ul
        ref={tabsListRef}
        role={hasPanels ? "tablist" : undefined}
        className={`nds-tabs-tabsList list--reset padding--x--${xPadding}`}
        onKeyDown={hasPanels ? handleKeyDown : noop}
        tabIndex={hasPanels ? "0" : undefined}
        data-testid="nds-tablist"
      >
        {children}
      </ul>
    </div>
  );
};

TabsList.propTypes = {
  /** Children must be of type `Tabs.Tab` */
  children: PropTypes.node.isRequired,
  /**
   * Amount of padding to apply on the x axis to indent tabs
   * from edges of the `Tabs.Panel`
   * */
  xPadding: PropTypes.oneOf(["xxs", "xs", "s", "m", "l", "xl", "none"]),
};

TabsList.displayName = "Tabs.List";

export default TabsList;
