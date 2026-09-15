import React, { useContext, useRef } from "react";
import TabsContext from "./context";

export interface TabsTabProps {
  /** Label of the tab button */
  label: string;
  /** String ID used to link the `Tabs.Tab` to a `Tabs.Panel` */
  tabId: string;
  /** Optional value for `data-testid` attribute */
  testId?: string;
  /** Optional prop to show an "update" notification dot in the tab */
  hasStatusIndicator?: boolean;
  /**
   * Renders arbitrary content (e.g. an icon) at the inline-start of the tab,
   * before the label. Receives the tab's selected state.
   */
  renderStartContent?: (isSelected: boolean) => React.ReactNode;
  /**
   * Renders arbitrary content (e.g. a count) at the inline-end of the tab,
   * after the label. Receives the tab's selected state.
   */
  renderEndContent?: (isSelected: boolean) => React.ReactNode;
}

const TabsTab = ({
  label,
  tabId,
  testId,
  hasStatusIndicator,
  renderStartContent,
  renderEndContent,
}: TabsTabProps) => {
  const { currentIndex, tabIds, hasPanels, changeTabs, kind } =
    useContext(TabsContext);
  const tabRef = useRef<HTMLLIElement>(null);
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
      data-selected={isSelected || undefined}
      className={`nds-tabs-tabItem nds-tabs-tabItem--${kind}${isSelected ? " nds-tabs-tabItem--selected" : ""}`}
      ref={tabRef}
    >
      <button
        className="resetButton nds-tabs-button"
        id={`${tabId}-tab`}
        tabIndex={hasPanels ? -1 : 0}
        onClick={onTabClick}
        data-testid={testId}
      >
        {(renderStartContent || hasStatusIndicator) && (
          <span className="nds-tabs-startContent">
            {renderStartContent && renderStartContent(isSelected)}
            {hasStatusIndicator && (
              <span className="nds-tabs-statusIndicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  viewBox="0 0 6 6"
                  fill="none"
                  aria-hidden="true"
                  focusable="false"
                >
                  <circle cx="3" cy="3" r="3" fill="var(--color-successDark)" />
                </svg>
              </span>
            )}
          </span>
        )}
        <span className="nds-tabs-label">{label}</span>
        {renderEndContent && (
          <span className="nds-tabs-endContent">
            {renderEndContent(isSelected)}
          </span>
        )}
      </button>
    </li>
  );
};

export default TabsTab;
