import React from "react";
import PropTypes from "prop-types";
import cc from "classcat";
import AsElement from "../util/AsElement";

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
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default RowItem;
