import React from "react";
import PropTypes from "prop-types";
import cc from "classcat";

/**
 *
 */
const Row = ({ gapSize, children }) => (
  <div
    className="nds-row"
    className={cc([
      "nds-row",
      {
        [`nds-row--${gapSize}Gap`]: Boolean(gapSize),
      },
    ])}
  >
    {children}
  </div>
);

Row.propTypes = {
  /**
   * Adjusts size of gap between row items.
   * Sizes map to `var(--space-<size>)` variables.
   * Set `gapSize="none"` to remove gaps between all row items.
   */
  gapSize: PropTypes.oneOf(["xxs", "xs", "s", "m", "l", "xl", "none"]),
};

/**
 *
 */
const RowItem = ({ shrink = false, children }) => (
  <div className={cc(["nds-row-item", { "nds-row-item--shrink": shrink }])}>
    {children}
  </div>
);

RowItem.propTypes = {
  /**
   * When `true`, the row item shrinks to content size of its children.
   * Otherwise, the item will expand to fill remaining space in the row.
   */
  shrink: PropTypes.bool,
};

Row.Item = RowItem;
export default Row;
