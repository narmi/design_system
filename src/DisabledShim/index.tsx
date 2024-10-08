import React from "react";
import PropTypes from "prop-types";
import cc from "classcat";

interface DisabledShimProps {
  children: React.ReactNode;
  isDisabled?: boolean;
}

/**
 * Disables any area of a page with a white overlay shim and the
 * applicable `aria-disabled` value.
 */
const DisabledShim = ({ isDisabled = false, children }: DisabledShimProps) => (
  <div
    className={cc([
      "nds-disabledShim",
      { "nds-disabledShim--disabled": isDisabled },
    ])}
    aria-disabled={isDisabled ? "true" : "false"}
  >
    {children}
  </div>
);

DisabledShim.propTypes = {
  /**
   * Sets disabled state over all `children` passed in.
   */
  isDisabled: PropTypes.bool,
  /** Content that can be disabled */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default DisabledShim;
