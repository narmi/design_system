import React from "react";
import PropTypes from "prop-types";
import cc from "classcat";
import FieldToken from "../FieldToken";

const noop = () => {};

/**
 * Generic trigger button for dropdowns. `DropdownTrigger` can be composed with
 * other components like `Popover` to create a wide range of dropdown, popover, and menu components.
 *
 * The entire clickable area is a `button` element to ensure dropdown triggers are accessible.
 *
 *  **Additional props will be spread on the `button` element.**
 */
const DropdownTrigger = React.forwardRef(
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
      startContent = <></>,
      endContent = <></>,
      ...otherProps
    },
    ref,
  ) => {
    return (
      <>
        <div className="nds-dropdownTrigger" style={{ minWidth }}>
          <button
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
            {startContent}
            {labelText && (
              <label className="nds-dropdownTrigger-label" {...labelProps}>
                {labelText}
              </label>
            )}
            {displayValue && (
              <span className="nds-dropdownTrigger-value">{displayValue}</span>
            )}
            {endContent}
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
    );
  },
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
  displayValue: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Error message. When this prop is passed, an error state is dsiplayed */
  errorText: PropTypes.string,
  /**
   * Sets a mimimum width.
   * Use the full CSS value with the unit (e.g. "400px")
   */
  minWidth: PropTypes.string,
  /** Optional value for `data-testid` attribute */
  testId: PropTypes.string,
  /**
   * Pass labels to show a token list of current selections
   */
  tokens: PropTypes.arrayOf(PropTypes.string),
  /**
   * Called with new list of tokens. Called whenever a user
   * adds or dismisses a token.
   * `onTokensChange={(tokens) => setTokens(tokens)}`
   */
  onTokensChange: PropTypes.func,
};

export default DropdownTrigger;
