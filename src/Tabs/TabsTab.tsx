import cc from "classcat";
import PropTypes from "prop-types";
import React, { useContext, useRef } from "react";
import TabsContext from "./context";

const TabsTab = ({ label, tabId, testId }) => {
  const { currentIndex, tabIds, hasPanels, changeTabs } =
    useContext(TabsContext);
  const tabRef = useRef();
  const isSelected = tabId === tabIds[currentIndex];

  const onTabClick = () => {
    changeTabs(tabId);
  };

  return (
    <li
      role={hasPanels ? "tab" : undefined}
      aria-selected={isSelected}
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

TabsTab.propTypes = {
  /** Label of the tab button */
  label: PropTypes.string.isRequired,
  /** String ID used to link the `Tabs.Tab` to a `Tabs.Panel` */
  tabId: PropTypes.string.isRequired,
  /** Optional value for `data-testid` attribute */
  testId: PropTypes.string,
};

TabsTab.displayName = "Tabs.Tab";

export default TabsTab;
