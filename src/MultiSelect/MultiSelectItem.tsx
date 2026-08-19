import React from "react";
import PropTypes from "prop-types";

export interface MultiSelectItemProps {
  /**
   * String representation of the option.
   *
   * This value is also used as a typeahead; if a user types "n" while
   * the Select is open, highlight will move to the first item with a
   * value starting with `n`.
   */
  value: string;
  /** String to use for typeahead behavior */
  searchValue?: string;
  /**
   * Text to display in the token and summary for this item.
   * Falls back to `searchValue`, then `value`, when not provided.
   */
  tokenLabel?: string;
  /** JSX representation of item */
  children?: React.ReactNode;
}

const MultiSelectItem = ({ children }: MultiSelectItemProps) => <>{children}</>;

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
  /** String to use for typeahead behavior */
  searchValue: PropTypes.string,
  /**
   * Text to display in the token and summary for this item.
   * Falls back to `searchValue`, then `value`, when not provided.
   */
  tokenLabel: PropTypes.string,
  /** JSX representation of item */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default MultiSelectItem;
