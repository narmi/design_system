import React from "react";
import PropTypes from "prop-types";

const ComboboxItem = ({ children }) => <>{children}</>;

ComboboxItem.propTypes = {
  /**
   * String representation of the option. This string should match
   * the text displayed in the option.
   *
   * This value is also used as a typeahead; if a user types "n" while
   * the Select is open, highlight will move to the first item with a
   * value starting with `n`.
   */
  value: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default ComboboxItem;
