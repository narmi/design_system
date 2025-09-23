import React from "react";
import PropTypes from "prop-types";
import cc from "classcat";
import Error from "../Error";

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
      disabled = false,
      labelText,
      labelProps,
      displayValue,
      errorText,
      hasError = false,
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
            disabled={disabled}
            ref={ref}
            data-testid={testId || "dropdownTriggerButton"}
            className={cc([
              "nds-dropdownTrigger-button button--reset",
              "padding--x--s rounded--all",
              {
                "nds-dropdownTrigger-button--hasValue": Boolean(displayValue),
                "nds-dropdownTrigger-button--hasError":
                  Boolean(errorText) || hasError,
                "nds-dropdownTrigger-button--isActive": isOpen,
                "nds-dropdownTrigger-button--disabled": disabled,
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
            {showOpenIndicator && !disabled && (
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
        {/* Consumers can compose their own error outside the component via hasError */}
        {errorText && <Error error={errorText} />}
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
  /** Error message. When this prop is passed, an error state is displayed */
  errorText: PropTypes.string,
  /** Set to `true` to display error state without providing error text */
  hasError: PropTypes.bool,
  /**
   * Sets a minimum width.
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
  /** arbitrary JSX to place at the start of the faux input */
  startContent: PropTypes.node,
  /** arbitrary JSX to place at the end of the faux input */
  endContent: PropTypes.node,
  /**
   * Renders the button with the appearance of a disabled input and
   * prevents user interaction.
   */
  disabled: PropTypes.bool,
};

export default DropdownTrigger;
