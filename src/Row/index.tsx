import React from "react";
import PropTypes from "prop-types";
import AsElement from "../util/AsElement";
import RowItem from "./RowItem";

interface RowProps {
  /**
   * Adjusts size of gap between row items.
   * Sizes map to `var(--space-<size>)` variables.
   * Set `gapSize="none"` to remove gaps between all row items.
   */
  gapSize?: "xxs" | "xs" | "s" | "m" | "l" | "xl" | "none";
  /** Controls vertical alignment of items within the row */
  alignItems?: "top" | "center";
  /** Controls horizontal flex justification */
  justifyContent?: "start" | "end";
  /** The html element to render as the root node of `Row` */
  as?: "div" | "ul";
  /** Optional value for `data-testid` attribute */
  testId?: string;
  /** Children must be of type `Row.Item` */
  children: React.ReactNode[];
}

/**
 * builds style object for `Row`
 * @param {String} alignItems
 * @param {String} gapSize
 * @returns {Object} style object for `Row`
 */
const _getRowStyle = (alignItems, justifyContent, gapSize) => {
  interface RowStyleResult {
    gap?: string;
    alignItems?: string;
    justifyContent?: string;
  }
  const result: RowStyleResult = {};
  if (gapSize) {
    result.gap = gapSize === "none" ? "0" : `var(--space-${gapSize})`;
  }
  result.alignItems = alignItems === "top" ? "flex-start" : alignItems;
  result.justifyContent = `flex-${justifyContent}`;
  return result;
};

/**
 * Basic flexbox helper that arranges content into a non-wrapping row.
 * `Row` will grow to fill the width of its parent container.
 * Items of `Row` will grow to fit remaining space by default.
 * When a `Row.Item` has a boolean prop of `shrink`, it will shirnk to content width.
 */
const Row: React.FC<RowProps> & {
  Item: typeof RowItem;
} = ({
  alignItems = "top",
  justifyContent = "start",
  gapSize = "l",
  as = "div",
  children,
  testId,
}) => (
  <AsElement
    elementType={as}
    className="nds-row"
    style={_getRowStyle(alignItems, justifyContent, gapSize)}
    data-testid={testId}
  >
    {children}
  </AsElement>
);

Row.propTypes = {
  /**
   * Adjusts size of gap between row items.
   * Sizes map to `var(--space-<size>)` variables.
   * Set `gapSize="none"` to remove gaps between all row items.
   */
  gapSize: PropTypes.oneOf(["xxs", "xs", "s", "m", "l", "xl", "none"]),
  /** Controls vertical alignment of items within the row */
  alignItems: PropTypes.oneOf(["top", "center"]),
  /** Controls horizontal flex justification */
  justifyContent: PropTypes.oneOf(["start", "end"]),
  /** The html element to render as the root node of `Row` */
  as: PropTypes.oneOf(["div", "ul"]),
  /** Children must be of type `Row.Item` */
  // @ts-expect-error ts v5 doesn't recognize this as ReactNodeLike
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  /** Optional value for `data-testid` attribute */
  testId: PropTypes.string,
};

Row.Item = RowItem;
export default Row;
