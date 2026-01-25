import React from "react";

export interface TableSelectItemProps {
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

const TableSelectItem: React.FC<TableSelectItemProps> = ({
  children,
  value,
}) => <>{children || value}</>;
TableSelectItem.displayName = "TableSelect.Item";

export default TableSelectItem;
