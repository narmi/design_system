import React, { useRef, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import TabsContext from "./context";
import cc from "classcat";

const TabsTab = ({ label, tabId }) => {
  const buttonRef = useRef(null);
  const { selectedIndex, tabIds, hasPanels, changeTabs } =
    useContext(TabsContext);
  const selectedId = tabIds[selectedIndex];
  const isSelected = tabId === selectedId;

  useEffect(() => {
    if (tabId === selectedId) {
      buttonRef.current.focus();
    }
  }, [buttonRef, tabId, selectedId]);

  return (
    <li
      className={cc([
        "nds-tabs-tabItem",
        {
          "nds-tabs-tabItem--selected": isSelected,
        },
      ])}
    >
      <button
        ref={buttonRef}
        className={cc([
          "resetButton",
          "nds-tabs-button",
          {
            "nds-tabs-button--selected": isSelected,
          },
        ])}
        role={hasPanels ? "tab" : undefined}
        aria-selected={Boolean(tabId === selectedId).toString()}
        aria-controls={hasPanels ? `${tabId}-tabpanel` : undefined}
        id={`${tabId}-tab`}
        tabIndex={tabId !== selectedId && hasPanels ? "-1" : "0"}
        onClick={() => changeTabs(tabId)}
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
};

TabsTab.displayName = "Tabs.Tab";

export default TabsTab;
