import React from "react";
import PropTypes from "prop-types";
import cc from "classcat";
import AsElement from "../util/AsElement";

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
}) => (
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

RowItem.propTypes = {
  /**
   * When `true`, the row item shrinks to content size of its children.
   * Otherwise, the item will expand to fill remaining space in the row.
   */
  shrink: PropTypes.bool,
  /** The html element to render as the root node of `Row` */
  as: PropTypes.oneOf(["div", "span", "li"]),
  /** Optional: controls className while maintaining default nds-row-item styling if left unspecified */
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  /** Optional value for `data-testid` attribute */
  testId: PropTypes.string,
};

export default RowItem;
