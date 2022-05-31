import React, { useState } from "react";
import PropTypes from "prop-types";
import cc from "classcat";

/**
 * Checkbox behavior with the visual treatment of a physical toggle switch.
 */
const Toggle = ({
  defaultActive = false,
  onChange = () => {},
  labelledBy,
  label,
  testId,
}) => {
  const [isActive, setIsActive] = useState(defaultActive);

  const toggleActive = () => {
    onChange(!isActive);
    setIsActive(!isActive);
  };

  const buttonJsx = (
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
      onClick={toggleActive}
      aria-labelledby={labelledBy}
      data-testid={testId}
    >
      <span className="nds-toggle-indicator elevation--low" />
      <span className="nds-toggle-buttonText">{isActive ? "on" : "off"}</span>
    </button>
  );

  return label ? (
    <label className="alignChild--center--center">
      {buttonJsx}
      <span className="padding--left--xs">{label}</span>
    </label>
  ) : (
    buttonJsx
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
  /** Label element to render to the right of the toggle */
  label: PropTypes.string,
  /** ID of element that labels the toggle control (e.g. `my-label-element`)*/
  labelledBy: PropTypes.string,
  /** Optional value for `data-testid` attribute */
  testId: PropTypes.string,
};

export default Toggle;
