import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import TabsContext from "./context";

const TabsPanel = ({ children, tabId }) => {
  const { selectedIndex, tabIds, hasPanels, setHasPanels } =
    useContext(TabsContext);
  const selectedId = tabIds[selectedIndex];

  useEffect(() => {
    if (!hasPanels) {
      setHasPanels(true);
    }
  }, [hasPanels, setHasPanels]);

  return (
    <div
      className="nds-tabs-panel"
      tabIndex="0"
      role="tabpanel"
      id={`${tabId}-tabpanel`}
      aria-labelledby={`${tabId}-tab`}
      hidden={tabId !== selectedId ? true : undefined}
    >
      {children}
    </div>
  );
};

TabsPanel.propTypes = {
  /** The content of the tab panel (any node type) */
  children: PropTypes.node.isRequired,
  /** String ID used to link the `Tabs.Panel` to a `Tabs.Tab` */
  tabId: PropTypes.string.isRequired,
};

TabsPanel.displayName = "Tabs.Panel";

export default TabsPanel;
