import React from "react";
import PropTypes from "prop-types";

/**
 * Takes a list of elements and places a visual separator between items.
 */
const SeparatorList = ({ separator = "|", items = [] }) => (
  <ul className="list--reset nds-typography nds-separatorList">
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
};

export default SeparatorList;
