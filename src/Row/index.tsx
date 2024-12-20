import React from "react";
import AsElement from "../util/AsElement";
import RowItem from "./RowItem";
import cc from "classcat";

export interface RowProps {
  /**
   * Adjusts size of gap between row items.
   * Sizes map to `var(--space-<size>)` variables.
   * Set `gapSize="none"` to remove gaps between all row items.
   */
  alignItems?: "top" | "center";
  /** Controls vertical alignment of items within the row */
  justifyContent?: "start" | "end" | "space-between";
  /** Controls horizontal flex justification */
  gapSize?: "xxs" | "xs" | "s" | "m" | "l" | "xl" | "none";
  /** The html element to render as the root node of `Row` */
  as?: "span" | "div" | "ul";
  /** Optional: controls className while maintaining default nds-row styling if left unspecified */
  className?: string;
  /** Children must be of type `Row.Item` */
  children: React.ReactNode;
  /** Optional value for `data-testid` attribute */
  testId?: string;
}

/**
 * builds style object for `Row`
 * @param alignItems
 * @param justifyContent
 * @param gapSize
 */
const _getRowStyle = (
  alignItems: RowProps["alignItems"],
  justifyContent: RowProps["justifyContent"],
  gapSize: RowProps["gapSize"],
) => {
  const result: {
    gap: string;
    alignItems: string;
    justifyContent: string;
  } = {
    gap: `var(--space-${gapSize})`,
    alignItems: "flex-start",
    justifyContent: `flex-${justifyContent}`,
  };
  if (gapSize && gapSize === "none") {
    result.gap = "0";
  }
  if (alignItems !== "top") {
    result.alignItems = alignItems;
  }
  if (justifyContent === "space-between") {
    result.justifyContent = justifyContent;
  }
  return result;
};

/**
 * Basic flexbox helper that arranges content into a non-wrapping row.
 * `Row` will grow to fill the width with its parent container.
 * Items of `Row` will grow to fit remaining space by default.
 * When a `Row.Item` has a boolean prop of `shrink`, it will shrink to content width.
 */
const Row = ({
  alignItems = "top",
  justifyContent = "start",
  gapSize = "l",
  as = "div",
  className = "",
  children,
  testId,
}: RowProps) => (
  <AsElement
    elementType={as}
    className={cc([className, "nds-row"])}
    style={_getRowStyle(alignItems, justifyContent, gapSize)}
    data-testid={testId}
  >
    {children}
  </AsElement>
);

Row.Item = RowItem;
export default Row;
