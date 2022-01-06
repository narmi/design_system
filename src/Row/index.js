import React from "react";
import PropTypes from "prop-types";
import cc from "classcat";
import AsElement from "../util/AsElement";

/**
 * builds style object for `Row`
 * @param {String} alignItems
 * @param {String} gapSize
 * @returns {Object} style object for `Row`
 */
const _getRowStyle = (alignItems, justifyContent, gapSize) => {
  let result = {};
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
const Row = ({
  alignItems = "top",
  justifyContent = "start",
  gapSize = "l",
  as = "div",
  children,
}) => (
  <AsElement
    elementType={as}
    className="nds-row"
    style={_getRowStyle(alignItems, justifyContent, gapSize)}
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
};

/**
 * Child component of `Row`.
 * When a `Row.Item` has a boolean prop of `shrink`, it will shirnk to content width.
 */
const RowItem = ({ shrink = false, as = "div", children }) => (
  <AsElement
    elementType={as}
    className={cc(["nds-row-item", { "nds-row-item--shrink": shrink }])}
  >
    {children}
  </AsElement>
);

RowItem.propTypes = {
  /**
   * When `true`, the row item shrinks to content size of its children.
   * Otherwise, the item will expand to fill remaining space in the row.
   */
  shrink: PropTypes.bool,
  /** The html element to render as the root node of `Row` */
  as: PropTypes.oneOf(["div", "li"]),
};

Row.Item = RowItem;
export default Row;
