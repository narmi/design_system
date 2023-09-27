import React from "react";
import PropTypes from "prop-types";

const ComboboxCategory = ({ children }) => <>{children}</>;

ComboboxCategory.displayName = "Combobox.Category";

ComboboxCategory.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default ComboboxCategory;
