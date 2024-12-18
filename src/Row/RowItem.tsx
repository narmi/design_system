import React from "react";
import cc from "classcat";
import AsElement from "../util/AsElement";

export interface RowItemProps {
  /**
   * When `true`, the row item shrinks to content size of its children.
   * Otherwise, the item will expand to fill remaining space in the row.
   */
  shrink?: boolean;
  /** The html element to render as the root node of `Row` */
  as?: "div" | "span" | "li";
  /** Optional: controls className while maintaining default nds-row-item styling if left unspecified */
  className?: string;
  children?: React.ReactNode;
  /** Optional value for `data-testid` attribute */
  testId?: string;
}

/**
 * Child component of `Row`.
 * When a `Row.Item` has a boolean prop of `shrink`, it will shrink to content width.
 */
const RowItem = ({
  shrink = false,
  as = "div",
  className = "",
  children,
  testId,
}: RowItemProps) => (
  <AsElement
    elementType={as}
    className={cc([
      className,
      "nds-row-item",
      { "nds-row-item--shrink": shrink },
    ])}
    data-testid={testId}
  >
    {children}
  </AsElement>
);

export default RowItem;
