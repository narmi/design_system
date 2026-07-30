import React, { ReactNode, forwardRef } from "react";
import cc from "classcat";
import Error from "../Error";

export interface DropdownTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Set this to `true` when the associated popup is open */
  isOpen?: boolean;
  /** Set to `false` to hide the chevron icon indicating open state */
  showOpenIndicator?: boolean;
  /** Variant of the trigger. Use "table" when used inside table cells */
  kind?: "default" | "table";
  /** Text of `label` element */
  labelText?: string;
  /** Props to spread onto the `label` element */
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  /**
   * Renders a string or node as the value displayed in the `DropdownTrigger`
   * Usually, this represents the name of a selected option
   */
  displayValue?: string | ReactNode;
  /** Render function that returns JSX to display as the value */
  renderDisplayValue?: () => ReactNode;
  /** Error message. When this prop is passed, an error state is displayed */
  errorText?: string;
  /** Set to `true` to display error state without providing error text */
  hasError?: boolean;
  /**
   * Sets a minimum width.
   * Use the full CSS value with the unit (e.g. "400px")
   */
  minWidth?: string;
  /** Optional value for `data-testid` attribute */
  testId?: string;
  /** arbitrary JSX to place at the start of the faux input */
  startContent?: ReactNode;
  /** arbitrary JSX to place at the end of the faux input */
  endContent?: ReactNode;
}

/**
 * Generic trigger button for dropdowns. `DropdownTrigger` can be composed with
 * other components like `Popover` to create a wide range of dropdown, popover, and menu components.
 *
 * The entire clickable area is a `button` element to ensure dropdown triggers are accessible.
 *
 *  **Additional props will be spread on the `button` element.**
 */
const DropdownTrigger = forwardRef<HTMLButtonElement, DropdownTriggerProps>(
  (
    {
      isOpen = false,
      showOpenIndicator = true,
      disabled = false,
      labelText,
      labelProps,
      displayValue,
      renderDisplayValue,
      errorText,
      hasError = false,
      minWidth = "auto",
      kind = "default",
      testId,
      startContent = <></>,
      endContent = <></>,
      ...otherProps
    },
    ref,
  ) => {
    return (
      <>
        <div
          className={`nds-dropdownTrigger nds-dropdownTrigger--${kind}`}
          style={{ minWidth }}
        >
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
            {renderDisplayValue
              ? renderDisplayValue()
              : displayValue && (
                  <span className="nds-dropdownTrigger-value">
                    {displayValue}
                  </span>
                )}
            {endContent}
            {showOpenIndicator && !disabled && (
              <span
                role="img"
                aria-label={isOpen ? "popup open" : "popup closed"}
                className={cc([
                  "nds-dropdownTrigger-chevron fontSize--xl fontColor--secondary",
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

export default DropdownTrigger;
