import React from "react";

export interface FieldComboboxItemProps {
  /** The value passed to `onChange` when this item is selected */
  value: string;
  /**
   * Text shown in the input when this item is selected, and matched against
   * as the user types. Defaults to `children` when it's a string,
   * otherwise `value`.
   */
  searchValue?: string;
  /** Display content for the option */
  children: React.ReactNode;
}

/**
 * Compound child for Field.Combobox.
 * Renders its children directly — all filtering and interaction
 * is handled by the parent FieldCombobox via downshift.
 */
const FieldComboboxItem: React.FC<FieldComboboxItemProps> = ({ children }) => (
  <>{children}</>
);

FieldComboboxItem.displayName = "Field.Combobox.Item";

export default FieldComboboxItem;
