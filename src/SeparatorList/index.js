import React from "react";
import PropTypes from "prop-types";
import cc from "classcat";

/**
 * Takes a list of elements and places a visual separator between items.
 */
const SeparatorList = ({
  separator = "|",
  noWrap = false,
  items = [],
  testId,
}) => (
  <ul
    className={cc([
      "list--reset nds-typography nds-separatorList",
      { "nds-separatorList--noWrap": noWrap },
    ])}
    data-testid={testId}
  >
    {items.map((item, i) => {
      const itemProps = {};
      if (i !== items.length - 1) {
        itemProps["data-separator"] = separator;
      }
      return (
        <li key={`${i}-${separator}`} {...itemProps}>
          {item}
        </li>
      );
    })}
  </ul>
);

SeparatorList.propTypes = {
  /**
   * Items to render in the list
   */
  items: PropTypes.arrayOf(PropTypes.node),
  /**
   * Character to use as separator between items
   */
  separator: PropTypes.string,
  /**
   * When `true`, the separator list will be forced to a single line
   */
  noWrap: PropTypes.bool,
  /** Optional value for `data-testid` attribute */
  testId: PropTypes.string,
};

export default SeparatorList;
