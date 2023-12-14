import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import cc from "classcat";

interface ToggleProps {
  /**
   * Callback invoked with current active state (bool) as the function argument
   * when user changes the active state of the Toggle
   */
  onChange?: React.EventHandler<React.SyntheticEvent>;
  /** When set to `true`, the toggle will initially render as active */
  defaultActive?: boolean;
  /**
   * Sets active state of toggle; makes the component fully controlled.
   * When using `isActive` you **must** use the `onChange` callback
   * to update the active state of the toggle.
   */
  isActive?: boolean;
  /** Label element to render to the right of the toggle */
  label?: string;
  /** ID of element that labels the toggle control (e.g. `my-label-element`)*/
  labelledBy?: string;
  /** Optional value for `data-testid` attribute */
  testId?: string;
  /** Label for enabled state. Not displayed, used for screen readers. */
  enabledLabel?: string;
  /** Label for disabled state. Not displayed, used for screen readers. */
  disabledLabel?: string;
}

/**
 * Checkbox behavior with the visual treatment of a physical toggle switch.
 */
const Toggle = ({
  defaultActive = false,
  isActive,
  onChange = () => {},
  labelledBy,
  label,
  testId,
  enabledLabel = "on",
  disabledLabel = "off",
}: ToggleProps) => {
  const isControlled = isActive !== undefined;
  const [isActiveInternal, setIsActiveInternal] = useState(
    isControlled ? isActive : defaultActive || false
  );

  useEffect(() => {
    if (isControlled) {
      setIsActiveInternal(isActive);
    }
  }, [isActive]);

  const toggleActive = () => {
    if (!isControlled) {
      setIsActiveInternal(!isActiveInternal);
    }
    onChange(!isActiveInternal);
  };

  const buttonJsx = (
    // @ts-expect-error `aria-checked` should be on this button
    <button
      className={cc([
        "resetButton",
        "nds-toggle",
        {
          "nds-toggle--active": isActiveInternal,
        },
      ])}
      type="button"
      role="switch"
      aria-checked={isActiveInternal.toString()}
      onClick={toggleActive}
      aria-labelledby={labelledBy}
      data-testid={testId}
    >
      <span className="nds-toggle-indicator elevation--low" />
      <span className="nds-toggle-buttonText">
        {isActiveInternal ? enabledLabel : disabledLabel}
      </span>
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
  /**
   * Sets active state of toggle; makes the component fully controlled.
   * When using `isActive` you **must** use the `onChange` callback
   * to update the active state of the toggle.
   */
  isActive: PropTypes.bool,
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
