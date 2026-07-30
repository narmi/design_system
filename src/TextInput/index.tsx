import React, { ReactNode, useState } from "react";
import Input from "../Input";
import { VALID_ICON_NAMES } from "../icons/iconNames";
import type { IconName } from "../types/Icon.types";

export { VALID_ICON_NAMES };

type TextInputElement = HTMLInputElement | HTMLTextAreaElement;

export interface TextInputProps
  extends Omit<
    React.InputHTMLAttributes<TextInputElement>,
    "onChange" | "onBlur" | "type" | "value" | "defaultValue"
  > {
  /**
   * Label used as input placeholder _and_ floating label.
   * Also wired to `aria-label` — when omitted, provide an accessible
   * name some other way (e.g. `aria-label` or `aria-labelledby`).
   */
  label?: string;
  /**
   * Callback invoked with event object on input change.
   * Typed as a union of single-element handlers (rather than one handler
   * taking `input | textarea`) so consumer handlers written against a
   * plain `HTMLInputElement` event type-check under strictFunctionTypes.
   */
  onChange?:
    | React.ChangeEventHandler<HTMLInputElement>
    | React.ChangeEventHandler<HTMLTextAreaElement>;
  /** Callback invoked with event object on input blur */
  onBlur?:
    | React.FocusEventHandler<HTMLInputElement>
    | React.FocusEventHandler<HTMLTextAreaElement>;
  /** Sets the controlled value of the input */
  value?: string | number;
  /** Sets the [uncontrolled](https://reactjs.org/docs/uncontrolled-components.html) value of the input */
  defaultValue?: string | number;
  /** When true, the input is displayed as an auto-growing textarea */
  multiline?: boolean;
  /** function that formats the input value on blur */
  formatter?: (value: string) => string;
  /** Name of Narmi icon to place at the start of the input box */
  startIcon?: IconName;
  /** Name of Narmi icon to place at the end of the input box */
  endIcon?: IconName;
  /** JSX content slot at input start for custom buttons and icons  */
  startContent?: ReactNode;
  /** JSX content slot at input end for custom buttons and icons  */
  endContent?: ReactNode;
  /** Display an X at the end of label that clears input and calls onChange on click. */
  showClearButton?: boolean;
  /** When false, the consumer can take full control over where the error renders */
  renderError?: boolean;
  /** Text of error message to display under the input */
  error?: string | string[] | null;
  /** Maximum number of characters allowed in the input */
  maxLength?: number;
  /** Optional value for `data-testid` attribute */
  testId?: string;
  type?:
    | "text"
    | "tel"
    | "number"
    | "email"
    | "password"
    | "search"
    | "time"
    | "date"
    | "datetime-local";
  /** Native element prop passed to the underlying input/textarea element. Defaults to false. */
  required?: boolean;
}

/**
 * Narmi flavored text input with floating label
 */
const TextInput = React.forwardRef<TextInputElement, TextInputProps>(
  (props, forwardedRef) => {
    const {
      startIcon,
      endIcon,
      startContent,
      endContent,
      showClearButton,
      formatter = (x) => x,
      multiline = false,
      defaultValue,
      onChange,
      onBlur,
      maxLength,
      testId,
      type = "text",
      error,
      renderError = true,
      required = false,
      ...nativeElementProps
    } = props;

    const [inputValue, setInputValue] = useState(
      defaultValue ? String(defaultValue) : "",
    );

    function _onBlur(e: React.FocusEvent<TextInputElement>) {
      if (onBlur) {
        // union-of-handlers is only invocable with the event intersection;
        // both members accept every event the element actually produces
        (onBlur as (event: React.FocusEvent<TextInputElement>) => void)(e);
      }
      setInputValue(formatter(e.target.value));
    }
    function _onChange(e: React.ChangeEvent<TextInputElement>) {
      if (onChange) {
        (onChange as (event: React.ChangeEvent<TextInputElement>) => void)(e);
      }
      setInputValue(e.target.value);
    }
    // The clear button fires a MouseEvent, which is forwarded to the
    // consumer's onChange as-is (pre-TS behavior, kept for compatibility)
    function _onClearInput(e: React.MouseEvent) {
      _onChange(e as unknown as React.ChangeEvent<TextInputElement>);
      setInputValue("");
    }

    const charCount = String(nativeElementProps?.value || inputValue).length;
    const showCharacterCounter = maxLength;
    const characterCounter = showCharacterCounter ? (
      <div className="nds-input-character-counter">
        {charCount}/{maxLength}
      </div>
    ) : null;

    const inputError =
      error ||
      (maxLength && inputValue.length > maxLength
        ? "Exceeds character limits."
        : undefined);

    return (
      <Input
        {...props}
        error={inputError}
        renderError={renderError}
        startIconClass={startIcon ? `narmi-icon-${startIcon}` : undefined}
        endIconClass={endIcon ? `narmi-icon-${endIcon}` : undefined}
        startContent={startContent}
        endContent={endContent}
        showClearButton={Boolean(showClearButton && inputValue)}
        clearInput={_onClearInput}
        tailContent={characterCounter}
      >
        {multiline ? (
          <div
            className="nds-input-multiline-grid"
            data-textarea-value={inputValue}
          >
            <textarea
              key={"nds-text"}
              wrap="soft"
              ref={forwardedRef as React.Ref<HTMLTextAreaElement>}
              value={inputValue}
              onChange={_onChange}
              onBlur={_onBlur}
              required={required}
              placeholder={props.label}
              aria-label={props.label}
              data-testid={testId}
              data-error={inputError}
              {...nativeElementProps}
            />
          </div>
        ) : (
          <input
            key={"nds-text"}
            value={inputValue}
            onChange={_onChange}
            onBlur={_onBlur}
            ref={forwardedRef as React.Ref<HTMLInputElement>}
            type={type}
            required={required}
            aria-label={props.label}
            placeholder={props.label}
            data-testid={testId}
            data-error={inputError}
            {...nativeElementProps}
          />
        )}
      </Input>
    );
  },
);

TextInput.displayName = "TextInput";

export default TextInput;
