import React from "react";
import PropTypes from "prop-types";
import cc from "classcat";
import AsElement from "../util/AsElement";

interface RowItemProps {
  /**
   * When `true`, the row item shrinks to content size of its children.
   * Otherwise, the item will expand to fill remaining space in the row.
   */
  shrink?: boolean;
  /** The html element to render as the root node of `Row` */
  as?: "div" | "li";
  /** Optional value for `data-testid` attribute */
  testId?: string;
  children: React.ReactNode;
}

/**
 * Child component of `Row`.
 * When a `Row.Item` has a boolean prop of `shrink`, it will shirnk to content width.
 */
const RowItem: React.FC<RowItemProps> = ({
  shrink = false,
  as = "div",
  children,
  testId,
}) => (
  <AsElement
    elementType={as}
    className={cc(["nds-row-item", { "nds-row-item--shrink": shrink }])}
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
  as: PropTypes.oneOf(["div", "li"]),
  // @ts-expect-error TS infers the wrong thing from oneOfType
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  /** Optional value for `data-testid` attribute */
  testId: PropTypes.string,
};

export default RowItem;
