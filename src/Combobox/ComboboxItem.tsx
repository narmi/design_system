import React from "react";
import PropTypes from "prop-types";

export interface ComboboxItemProps {
  /**
   * String representation of the option.
   *
   * This value is also used as a typeahead; if a user types "n" while
   * the Select is open, highlight will move to the first item with a
   * value starting with `n`.
   */
  value: string;
  /**
   * Custom typeahead string. By default, typeahead uses `value`.
   * Use this prop to pass in a custom string you'd like the user to search
   * against when using typeahead.
   */
  searchValue?: string;
  children?: React.ReactNode;
}

const ComboboxItem = ({ children, value }: ComboboxItemProps) => (
  <>{children || value}</>
);

ComboboxItem.displayName = "Combobox.Item";

ComboboxItem.propTypes = {
  /**
   * String representation of the option.
   *
   * This value is also used as a typeahead; if a user types "n" while
   * the Select is open, highlight will move to the first item with a
   * value starting with `n`.
   */
  value: PropTypes.string.isRequired,
  /**
   * Custom typeahead string. By default, typeahead uses `value`.
   * Use this prop to pass in a custom string you'd like the user to search
   * against when using typeahead.
   */
  searchValue: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default ComboboxItem;
