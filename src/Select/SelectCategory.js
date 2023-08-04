/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import PropTypes from "prop-types";

const SelectCategory = ({ children }) => {
  return <>{children}</>;
};

SelectCategory.displayName = "Select.Category";

SelectCategory.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default SelectCategory;
