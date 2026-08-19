import React from "react";
import PropTypes from "prop-types";

export interface SelectActionProps {
  /** Side effect to run on selection */
  onSelect: () => void;
  children?: React.ReactNode;
  /** Never set on Select.Action; `value` belongs to selectable Select.Items */
  value?: never;
  searchValue?: never;
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
