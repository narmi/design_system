/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import PropTypes from "prop-types";

const SelectCategory = ({ children }) => {
  return <>{children}</>;
};

SelectCategory.displayName = "Select.Category";

SelectCategory.propTypes = {
  label: PropTypes.string,
  /**
   * heading: default bold heading
   * label: match input floating label
   */
  kind: PropTypes.oneOf(["heading", "label"]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  isFlat: PropTypes.bool,
};

export default SelectCategory;
