import cc from "classcat";
import React, { useEffect, useRef, useState } from "react";
import TabsList from "./TabsList";
import TabsPanel from "./TabsPanel";
import TabsTab from "./TabsTab";
import TabsContext from "./context";

const noop = () => {};

interface TabsProps {
  /**
   * Direct children of `Tabs` should be one of:
   * `Tabs.List` or `Tabs.Panel`
   */
  children: React.ReactNode;
  /** Sets _default_ tab selection by index in source order */
  defaultSelectedIndex?: number;
  /**
   * Sets selected tab by index, making Tabs **fully controlled**.
   * When using this prop, you must use the `onTabChange` callback
   * to update the value of this prop to update the selected tab.
   */
  selectedIndex?: number;
  /** Callback invoked with the index of the tab the user is moving selection to */
  onTabChange?: (index: number) => void;
  /** Shows bottom border when `true` */
  hasBorder?: boolean;
  /** Optional value for `data-testid` attribute */
  testId?: string;
}

/**
 * Component that handles tabs and tab panels based on WAI-ARIA [best practices](https://www.w3.org/TR/wai-aria-practices/#tabpanel)
 * for the "tabs" design pattern.
 *
 * The `Tabs` component manages its own state, changing the visible tab panel based
 * on user events. Use the `onTabChange` callback to add any custom behaviors.
 */
const Tabs = ({
  children,
  defaultSelectedIndex = 0,
  selectedIndex = null,
  onTabChange = noop,
  hasBorder = true,
  testId,
}: TabsProps) => {
  const tabsListRef = useRef<HTMLUListElement>();
  const [tabIds, setTabIds] = useState<string[]>([]);
  const [hasPanels, setHasPanels] = useState(false);
  const [isResponsive, setIsResponsive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(defaultSelectedIndex);
  const isControlledComponent = selectedIndex !== null;

  const getScrollToIndexSize = (currentSelectedIndex) => {
    let totalSize = 0;
    if (!tabsListRef.current) {
      return totalSize;
    }
    const children = Array.from(tabsListRef.current.children);

    for (let i = 0; i < currentSelectedIndex; i += 1) {
      const tab = children[i] as HTMLElement;

      totalSize += tab.clientWidth + 40;
    }

    return totalSize;
  };

  useEffect(() => {
    if (isControlledComponent) {
      tabsListRef.current.scroll({
        left: getScrollToIndexSize(selectedIndex),
        behavior: "smooth",
      });
    }
  }, [selectedIndex]);

  const changeTabs = (tabId) => {
    const tabIndex = tabIds.indexOf(tabId);
    onTabChange(tabIndex);

    if (!isControlledComponent) {
      tabsListRef.current.scroll({
        left: getScrollToIndexSize(tabIndex),
        behavior: "smooth",
      });
      setCurrentIndex(tabIndex);
    }
  };

  return (
    <TabsContext.Provider
      value={{
        tabIds,
        setTabIds,
        currentIndex: isControlledComponent ? selectedIndex : currentIndex,
        hasPanels,
        setHasPanels,
        changeTabs,
        tabsListRef,
        isResponsive,
        setIsResponsive,
      }}
    >
      <div
        className={cc(["nds-tabs", { "nds-tabs--bordered": hasBorder }])}
        data-testid={testId}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
};

Tabs.List = TabsList;
Tabs.Tab = TabsTab;
Tabs.Panel = TabsPanel;

export default Tabs;
