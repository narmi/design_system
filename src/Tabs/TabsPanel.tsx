import PropTypes from "prop-types";
import React, { useContext, useEffect } from "react";
import TabsContext from "./context";

interface TabsPanelProps {
  /** The content of the tab panel (any node type) */
  children: React.ReactNode;
  /** String ID used to link the `Tabs.Panel` to a `Tabs.Tab` */
  tabId: string;
  /** Optional value for `data-testid` attribute */
  testId?: string;
}

const TabsPanel: React.FC<TabsPanelProps> = ({ children, tabId, testId }) => {
  const { currentIndex, tabIds, hasPanels, setHasPanels, isResponsive } =
    useContext(TabsContext);
  const selectedId = tabIds[currentIndex];

  useEffect(() => {
    if (!hasPanels) {
      setHasPanels(true);
    }
  }, [hasPanels, setHasPanels]);

  return (
    <div
      className="nds-tabs-panel"
      tabIndex={0}
      role="tabpanel"
      id={`${tabId}-tabpanel`}
      aria-labelledby={`${tabId}-tab`}
      hidden={tabId !== selectedId ? true : undefined}
      data-testid={testId}
    >
      {isResponsive ? (
        <div className="panel-responsive">{children}</div>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

TabsPanel.propTypes = {
  /** The content of the tab panel (any node type) */
  // @ts-expect-error ts v5 doesn't recognize this as ReactNodeLike
  children: PropTypes.node.isRequired,
  /** String ID used to link the `Tabs.Panel` to a `Tabs.Tab` */
  tabId: PropTypes.string.isRequired,
  /** Optional value for `data-testid` attribute */
  testId: PropTypes.string,
};

TabsPanel.displayName = "Tabs.Panel";

export default TabsPanel;
