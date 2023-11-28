import React from "react";
import PropTypes from "prop-types";
import cc from "classcat";

interface DropdownTriggerProps {
  /** Set this to `true` when the associated popup is open */
  isOpen?: boolean;
  /** Set to `false` to hide the chevron icon indicating open state */
  showOpenIndicator?: boolean;
  /** Text of `label` element */
  labelText?: string;
  /** Props to spread onto the `label` element */
  labelProps?: object;
  /**
   * Renders a string or node as the value displayed in the `DropdownTrigger`
   * Usually, this represents the name of a selected option
   */
  displayValue?: string | React.ReactNode;
  /** Error message. When this prop is passed, an error state is dsiplayed */
  errorText?: string;
  /**
   * Sets a mimimum width.
   * Use the full CSS value with the unit (e.g. "400px")
   */
  minWidth?: string;
  /** Optional value for `data-testid` attribute */
  testId?: string;
}

/**
 * Generic trigger button for dropdowns. `DropdownTrigger` can be composed with
 * other components like `Popover` to create a wide range of dropdown, popover, and menu components.
 *
 * The entire clickable area is a `button` element to ensure dropdown triggers are accessible.
 *
 *  **Additional props will be spread on the `button` element.**
 */
const DropdownTrigger = React.forwardRef<HTMLElement, DropdownTriggerProps>(
  (
    {
      isOpen = false,
      showOpenIndicator = true,
      labelText,
      labelProps,
      displayValue,
      errorText,
      minWidth = "auto",
      testId,
      ...otherProps
    },
    ref
  ) => (
    <>
      <div className="nds-dropdownTrigger" style={{ minWidth }}>
        <button
          // @ts-expect-error fix for React 18
          ref={ref}
          data-testid={testId || "dropdownTriggerButton"}
          className={cc([
            "nds-dropdownTrigger-button button--reset padding--x--s",
            "bgColor--white rounded--all",
            {
              "nds-dropdownTrigger-button--hasValue": Boolean(displayValue),
              "nds-dropdownTrigger-button--hasError": Boolean(errorText),
              "nds-dropdownTrigger-button--isActive": isOpen,
            },
          ])}
          aria-expanded={isOpen ? "true" : "false"}
          type="button"
          {...otherProps}
        >
          {labelText && (
            <label className="nds-dropdownTrigger-label" {...labelProps}>
              {labelText}
            </label>
          )}
          {displayValue && (
            <span className="nds-dropdownTrigger-value">{displayValue}</span>
          )}
          {showOpenIndicator && (
            <span
              role="img"
              aria-label={isOpen ? "popup open" : "popup closed"}
              className={cc([
                "nds-dropdownTrigger-chevron fontSize--l fontColor--secondary",
                `narmi-icon-chevron-${isOpen ? "up" : "down"}`,
              ])}
            />
          )}
        </button>
      </div>
      {errorText && (
        <div className="nds-dropdownTrigger-error fontColor--error">
          <span role="img" className="narmi-icon-x-circle fontSize--s" />
          <span className="padding--left--xxs fontColor--error fontSize--xs">
            {errorText}
          </span>
        </div>
      )}
    </>
  )
);
DropdownTrigger.displayName = "DropdownTrigger";

DropdownTrigger.propTypes = {
  /** Set this to `true` when the associated popup is open */
  isOpen: PropTypes.bool,
  /** Set to `false` to hide the chevron icon indicating open state */
  showOpenIndicator: PropTypes.bool,
  /** Text of `label` element */
  labelText: PropTypes.string,
  /** Props to spread onto the `label` element */
  labelProps: PropTypes.object,
  /**
   * Renders a string or node as the value displayed in the `DropdownTrigger`
   * Usually, this represents the name of a selected option
   */
  displayValue: PropTypes.any,
  /** Error message. When this prop is passed, an error state is dsiplayed */
  errorText: PropTypes.string,
  /**
   * Sets a mimimum width.
   * Use the full CSS value with the unit (e.g. "400px")
   */
  minWidth: PropTypes.string,
  /** Optional value for `data-testid` attribute */
  testId: PropTypes.string,
};

export default DropdownTrigger;
