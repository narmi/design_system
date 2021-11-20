import React from "react";
import PropTypes from "prop-types";
import cc from "classcat";

export const VALID_GAP_SIZES = ["xxs", "xs", "s", "m", "l", "xl", "none"];

/**
 * Basic flexbox helper that arranges content into a non-wrapping row.
 * Row will grow to fill the width of its parent container.
 *
 * Items of Row will grow to fit remaining space by default.
 * When a `Row.Item` has a boolean prop of `shrink`, it will shirnk to content width.
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
  gapSize: PropTypes.oneOf([VALID_GAP_SIZES]),
};

/**
 * Child component of `Row`.
 * When a `Row.Item` has a boolean prop of `shrink`, it will shirnk to content width.
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
