import React, { useState } from "react";
import PropTypes from "prop-types";
import cc from "classcat";

/**
 * Checkbox behavior with the visual treatment of a physical toggle switch.
 */
const Toggle = ({ defaultActive = false, onChange = () => {} }) => {
  const [isActive, setIsActive] = useState(defaultActive);

  const toggleActive = () => {
    onChange(!isActive);
    setIsActive(!isActive);
  };

  return (
    <button
      className={cc([
        "resetButton",
        "nds-toggle",
        {
          "nds-toggle--active": isActive,
        },
      ])}
      type="button"
      role="switch"
      aria-checked={isActive.toString()}
      value={isActive ? "on" : "off"}
      onClick={toggleActive}
    >
      <span className="nds-toggle-indicator elevation--low" />
    </button>
  );
};

Toggle.propTypes = {
  /**
   * Callback invoked with current active state (bool) as the function argument
   * when user changes the active state of the Toggle
   */
  onChange: PropTypes.func,
  /** When set to `true`, the toggle will initially render as active */
  defaultActive: PropTypes.bool,
};

export default Toggle;
