import React from "react";
import SeparatorList from "../SeparatorList";

export type Detail = {
  label: string;
  description?: string;
};

export interface CalloutProps {
  /**
   * Take full control of rendering,
   * allowing arbitrary JSX content
   */
  renderContent?: () => React.ReactNode;
  /**
   * Details to render in a list.
   */
  detailList?: Detail[];
}

export const Callout = ({ renderContent, detailList = [] }: CalloutProps) => (
  <div className="nds-callout">
    <div className="nds-callout-content">
      {renderContent ? (
        renderContent()
      ) : (
        <ul className="nds-callout-list list--reset fontSize--s">
          {detailList.map(({ label, description }) => (
            <li key={label}>
              <SeparatorList
                separator="⬝"
                items={[
                  <strong key={`label-${label}`}>{label}</strong>,
                  description ? (
                    <span key={`description-${label}`}>{description}</span>
                  ) : null,
                ]}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);
