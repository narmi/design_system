import React, { useState } from "react";
import PropTypes from "prop-types";
import cc from "classcat";
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
const Tabs = ({
  children,
  defaultSelectedIndex = 0,
  selectedIndex = null,
  onTabChange = noop,
  hasBorder = true,
}) => {
  const [tabIds, setTabIds] = useState([]);
  const [hasPanels, setHasPanels] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(defaultSelectedIndex);
  const isControlledComponent = selectedIndex !== null;

  const changeTabs = (tabId) => {
    const tabIndex = tabIds.indexOf(tabId);

    onTabChange(tabIndex);

    if (!isControlledComponent) {
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
      }}
    >
      <div className={cc(["nds-tabs", { "nds-tabs--bordered": hasBorder }])}>
        {children}
      </div>
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
   * Sets _default_ tab selection by index in source order
   */
  defaultSelectedIndex: PropTypes.number,
  /**
   * Sets selected tab by index, making Tabs **fully controlled**.
   * When using this prop, you must use the `onTabChange` callback
   * to update the value of this prop to update the selected tab.
   */
  selectedIndex: PropTypes.number,
  /** Callback invoked with the index of the tab the user is moving selection to */
  onTabChange: PropTypes.func,
  /** Shows bottom border when `true` */
  hasBorder: PropTypes.bool,
};

Tabs.List = TabsList;
Tabs.Tab = TabsTab;
Tabs.Panel = TabsPanel;

export default Tabs;
