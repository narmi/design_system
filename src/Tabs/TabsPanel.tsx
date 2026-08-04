import React, { useContext, useEffect } from "react";
import TabsContext from "./context";

export interface TabsPanelProps {
  /** The content of the tab panel (any node type) */
  children: React.ReactNode;
  /** String ID used to link the `Tabs.Panel` to a `Tabs.Tab` */
  tabId: string;
  /** Optional value for `data-testid` attribute */
  testId?: string;
}

const TabsPanel = ({ children, tabId, testId }: TabsPanelProps) => {
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
      <div className={isResponsive ? "panel-responsive" : undefined}>
        {children}
      </div>
    </div>
  );
};

export default TabsPanel;
