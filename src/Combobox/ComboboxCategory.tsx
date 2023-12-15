import React from "react";

interface ComboboxCategoryProps {
  children: React.ReactNode;
  label?: string;
}

const ComboboxCategory: React.FC<ComboboxCategoryProps> = ({ children }) => (
  <>{children}</>
);

ComboboxCategory.displayName = "Combobox.Category";

export default ComboboxCategory;
