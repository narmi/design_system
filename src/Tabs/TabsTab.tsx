import cc from "classcat";
import React, { useContext, useRef } from "react";
import TabsContext from "./context";

export interface TabsTabProps {
  /** Label of the tab button */
  label: string;
  /** String ID used to link the `Tabs.Tab` to a `Tabs.Panel` */
  tabId: string;
  /** Optional value for `data-testid` attribute */
  testId?: string;
}

const TabsTab = ({ label, tabId, testId }: TabsTabProps) => {
  const { currentIndex, tabIds, hasPanels, changeTabs } =
    useContext(TabsContext);
  const tabRef = useRef();
  const isSelected = tabId === tabIds[currentIndex];

  const onTabClick = () => {
    changeTabs(tabId);
  };

  return (
    // @ts-expect-error need to extend the type to support aria label
    <li
      role={hasPanels ? "tab" : undefined}
      aria-selected={hasPanels ? isSelected.toString() : undefined}
      aria-controls={hasPanels ? `${tabId}-tabpanel` : undefined}
      className={cc([
        "nds-tabs-tabItem",
        {
          "nds-tabs-tabItem--selected": isSelected,
        },
      ])}
      ref={tabRef}
    >
      <button
        className={cc([
          "resetButton",
          "nds-tabs-button",
          {
            "nds-tabs-button--selected": isSelected,
          },
        ])}
        id={`${tabId}-tab`}
        tabIndex={hasPanels ? -1 : 0}
        onClick={onTabClick}
        data-testid={testId}
      >
        {label}
      </button>
    </li>
  );
};

export default TabsTab;
