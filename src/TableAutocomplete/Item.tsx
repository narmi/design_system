import React from "react";

export interface TableAutocompleteItemProps {
  /**
   * String representation of the option.
   */
  value: string;
  /**
   * Custom typeahead string. By default, typeahead uses `value`.
   */
  searchValue?: string;
  children?: React.ReactNode;
}

const TableAutocompleteItem: React.FC<TableAutocompleteItemProps> = ({
  children,
  value,
}) => <>{children || value}</>;
TableAutocompleteItem.displayName = "TableAutocomplete.Item";

export default TableAutocompleteItem;
