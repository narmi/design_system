/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import PropTypes from "prop-types";

interface SelectCategoryProps {
  label: string;
  children: React.ReactNode;
}

const SelectCategory: React.FC<SelectCategoryProps> = ({ children }) => {
  return <>{children}</>;
};

SelectCategory.displayName = "Select.Category";

SelectCategory.propTypes = {
  label: PropTypes.string.isRequired,
  // @ts-expect-error ts v5 doesn't recognize this as ReactNodeLike
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default SelectCategory;
