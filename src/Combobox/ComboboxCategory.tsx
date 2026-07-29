import React from "react";
import PropTypes from "prop-types";

interface ComboboxCategoryProps {
  label: string;
  children?: React.ReactNode;
}

const ComboboxCategory = ({ children }: ComboboxCategoryProps) => (
  <>{children}</>
);

ComboboxCategory.displayName = "Combobox.Category";

ComboboxCategory.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default ComboboxCategory;
