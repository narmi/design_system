import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import cc from "classcat";
import LoadingShim from "../LoadingShim";

/**
 * Checkbox behavior with the visual treatment of a physical toggle switch.
 */
const Toggle = ({
  defaultActive = false,
  isActive,
  disabled = false,
  isLoading,
  onChange = () => {},
  labelledBy,
  label,
  testId,
  enabledLabel = "on",
  disabledLabel = "off",
}) => {
  const isControlled = isActive !== undefined;
  const [active, setActive] = useState(defaultActive);

  useEffect(() => {
    if (isControlled) {
      setActive(isActive);
    }
  }, [isActive, isControlled]);

  const handleToggle = () => {
    if (!isControlled) {
      setActive(!active);
    }
    onChange(!active);
  };

  const buttonJsx = (
    <div
      className={cc([
        "nds-toggle-button-container",
        {
          "nds-toggle-button-container--active": active,
        },
      ])}
    >
      <button
        className={cc([
          "resetButton",
          "nds-toggle",
          { "nds-toggle--loading": isLoading },
        ])}
        type="button"
        role="switch"
        aria-checked={active}
        onClick={handleToggle}
        disabled={disabled || isLoading}
        aria-labelledby={labelledBy}
        data-testid={testId}
      >
        <span className="nds-toggle-indicator elevation--low" />
        <div className="nds-toggle-loading-overlay">
          <LoadingShim size="small" isLoading />
        </div>
        <span className="nds-toggle-buttonText">
          {active ? enabledLabel : disabledLabel}
        </span>
      </button>
    </div>
  );

  return label ? (
    <label
      className="alignChild--center--center"
      aria-disabled={disabled || isLoading}
    >
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
  /**
   * Sets active state of toggle; makes the component fully controlled.
   * When using `isActive` you **must** use the `onChange` callback
   * to update the active state of the toggle.
   */
  isActive: PropTypes.bool,
  /**
   * Shows a disabled state for the toggle when set to `true`.
   */
  isLoading: PropTypes.bool,
  /**
   * Shows a loading state for the toggle when set to `true`.
   */
  isLoading: PropTypes.bool,
  /** Label element to render to the right of the toggle */
  label: PropTypes.string,
  /** ID of element that labels the toggle control (e.g. `my-label-element`)*/
  labelledBy: PropTypes.string,
  /** Optional value for `data-testid` attribute */
  testId: PropTypes.string,
  /** Label for enabled state. Not displayed, used for screen readers. */
  enabledLabel: PropTypes.string,
  /** Label for disabled state. Not displayed, used for screen readers. */
  disabledLabel: PropTypes.string,
};

export default Toggle;
