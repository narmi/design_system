import React from "react";
import PropTypes from "prop-types";

interface SelectActionProps {
  /** Side effect to run on selection */
  onSelect: () => void;
  children: React.ReactNode;
}

const SelectAction: React.FC<SelectActionProps> = ({ children }) => (
  <>{children}</>
);

SelectAction.displayName = "Select.Action";

SelectAction.propTypes = {
  /** Side effect to run on selection */
  onSelect: PropTypes.func.isRequired,
  // @ts-expect-error ts v5 doesn't recognize this as ReactNodeLike
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default SelectAction;
