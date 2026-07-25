import React from "react";
import PropTypes from "prop-types";

interface SelectActionProps {
  /** Side effect to run on selection */
  onSelect?: () => void;
  children?: React.ReactNode;
}

const SelectAction = ({ children }: SelectActionProps) => <>{children}</>;

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
