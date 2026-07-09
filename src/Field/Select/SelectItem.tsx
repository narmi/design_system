import React from "react";

export interface FieldSelectItemProps {
  /** The value submitted when this item is selected */
  value: string;
  /** Display content for the option */
  children: React.ReactNode;
}

/**
 * Compound child for Field.Select.
 * Renders its children directly — all positioning and interaction
 * is handled by the parent FieldSelect via downshift.
 */
const FieldSelectItem: React.FC<FieldSelectItemProps> = ({ children }) => (
  <>{children}</>
);

FieldSelectItem.displayName = "Field.Select.Item";

export default FieldSelectItem;
