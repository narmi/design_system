import React, { useState } from "react";
import PropTypes from "prop-types";
import TabsContext from "./context";
import TabsList from "./TabsList";
import TabsTab from "./TabsTab";
import TabsPanel from "./TabsPanel";

const noop = () => {};

/**
 * Component that handles tabs and tab panels based on WAI-ARIA [best practices](https://www.w3.org/TR/wai-aria-practices/#tabpanel)
 * for the "tabs" design pattern.
 *
 * The `Tabs` component mananges its own state, changing the visible tab panel based
 * on user events. Use the `onTabChange` callback to add any custom behaviors.
 */
const Tabs = ({ children, defaultSelectedIndex = 0, onTabChange = noop }) => {
  const [tabIds, setTabIds] = useState([]);
  const [hasPanels, setHasPanels] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(defaultSelectedIndex);

  const changeTabs = (tabId) => {
    onTabChange(tabId);
    setSelectedIndex(tabIds.indexOf(tabId));
  };

  const handleKeyDown = ({ key }) => {
    let newIndex;
    switch (key) {
      case "ArrowLeft":
        newIndex = selectedIndex - 1;
        if (newIndex >= 0) {
          changeTabs(tabIds[newIndex]);
        }
        break;
      case "ArrowRight":
        newIndex = selectedIndex + 1;
        if (newIndex <= tabIds.length - 1) {
          changeTabs(tabIds[newIndex]);
        }
        break;
    }
  };

  return (
    <TabsContext.Provider
      value={{
        tabIds,
        setTabIds,
        selectedIndex,
        setSelectedIndex,
        hasPanels,
        setHasPanels,
        changeTabs,
        handleKeyDown,
      }}
    >
      <div className="nds-tabs">{children}</div>
    </TabsContext.Provider>
  );
};

Tabs.propTypes = {
  /**
   * Direct children of `Tabs` should be one of:
   * `Tabs.List` or `Tabs.Panel`
   */
  children: PropTypes.node.isRequired,
  /**
   * Sets default tab selection by index in source order
   */
  defaultSelectedIndex: PropTypes.number,
  /** Callback invoked with `tabId` of the tab as the argument */
  onTabChange: PropTypes.func,
};

Tabs.List = TabsList;
Tabs.Tab = TabsTab;
Tabs.Panel = TabsPanel;

export default Tabs;
