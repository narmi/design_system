import React from "react";
import PropTypes from "prop-types";

const SelectAction = ({ children }) => <>{children}</>;

SelectAction.displayName = "Select.Action";

SelectAction.propTypes = {
  /** Side effect to run on selection */
  onSelect: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default SelectAction;
