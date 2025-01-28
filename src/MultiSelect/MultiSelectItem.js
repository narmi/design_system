import React from "react";
import PropTypes from "prop-types";

const MultiSelectItem = ({ children }) => <>{children}</>;

MultiSelectItem.displayName = "MultiSelect.Item";

MultiSelectItem.propTypes = {
  /**
   * String representation of the option.
   *
   * This value is also used as a typeahead; if a user types "n" while
   * the Select is open, highlight will move to the first item with a
   * value starting with `n`.
   */
  value: PropTypes.string.isRequired,
  /** JSX representation of item */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default MultiSelectItem;
