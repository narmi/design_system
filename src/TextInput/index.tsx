import React, { ReactNode, useState } from "react";
import Input from "../Input";
import { VALID_ICON_NAMES } from "../icons/iconNames";
import type { IconName } from "../types/Icon.types";

export { VALID_ICON_NAMES };

type TextInputElement = HTMLInputElement | HTMLTextAreaElement;

interface TextInputBaseProps {
  /**
   * Label used as input placeholder _and_ floating label.
   * Also wired to `aria-label` — when omitted, provide an accessible
   * name some other way (e.g. `aria-label` or `aria-labelledby`).
   */
  label?: string;
  /** Sets the controlled value of the input */
  value?: string | number;
  /** Sets the [uncontrolled](https://reactjs.org/docs/uncontrolled-components.html) value of the input */
  defaultValue?: string | number;
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
  /** Applies search styling to the input box (forwarded to the base Input) */
  search?: boolean;
  /** When false, the consumer can take full control over where the error renders */
  renderError?: boolean;
  /** Text of error message to display under the input */
  error?: string | string[] | null;
  /** Maximum number of characters allowed in the input */
  maxLength?: number;
  /** Optional value for `data-testid` attribute */
  testId?: string;
  /** Native `type` of the input element; ignored when `multiline` is set */
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

// children: TextInput renders its own input element; stray children
// would fall through the rest spread onto it (a React error on
// <textarea> with a value)
type OverriddenNativeKeys =
  | "onChange"
  | "onBlur"
  | "type"
  | "value"
  | "defaultValue"
  | "children"
  | "maxLength"
  | "required";

export interface SingleLineTextInputProps
  extends
    TextInputBaseProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, OverriddenNativeKeys> {
  /** When true, the input is displayed as an auto-growing textarea */
  multiline?: false;
  /** Callback invoked with event object on input change */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /** Callback invoked with event object on input blur */
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

export interface MultilineTextInputProps
  extends
    TextInputBaseProps,
    Omit<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      OverriddenNativeKeys
    > {
  /** When true, the input is displayed as an auto-growing textarea */
  multiline: true;
  /** Callback invoked with event object on textarea change */
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  /** Callback invoked with event object on textarea blur */
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
}

export type TextInputProps = SingleLineTextInputProps | MultilineTextInputProps;

/* eslint-disable @typescript-eslint/no-unused-vars */
const nativeProps = <P extends TextInputProps>({
  startIcon,
  endIcon,
  startContent,
  endContent,
  showClearButton,
  formatter,
  multiline,
  defaultValue,
  onChange,
  onBlur,
  maxLength,
  testId,
  type,
  error,
  renderError,
  required,
  ...rest
}: P) => rest;
/* eslint-enable @typescript-eslint/no-unused-vars */

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
      defaultValue,
      onChange,
      maxLength,
      testId,
      error,
      renderError = true,
      required = false,
    } = props;

    const [inputValue, setInputValue] = useState(
      defaultValue ? String(defaultValue) : "",
    );

    // The clear button fires a MouseEvent, which is forwarded to the
    // consumer's onChange as-is
    function _onClearInput(e: React.MouseEvent) {
      onChange?.(
        e as unknown as React.ChangeEvent<
          HTMLInputElement & HTMLTextAreaElement
        >,
      );
      setInputValue("");
    }

    const charCount = String(props.value || inputValue).length;
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
        {props.multiline === true ? (
          <div
            className="nds-input-multiline-grid"
            data-textarea-value={inputValue}
          >
            <textarea
              key={"nds-text"}
              wrap="soft"
              ref={forwardedRef as React.Ref<HTMLTextAreaElement>}
              value={inputValue}
              onChange={(e) => {
                props.onChange?.(e);
                setInputValue(e.target.value);
              }}
              onBlur={(e) => {
                props.onBlur?.(e);
                setInputValue(formatter(e.target.value));
              }}
              required={required}
              placeholder={props.label}
              aria-label={props.label}
              data-testid={testId}
              data-error={inputError}
              {...nativeProps(props)}
            />
          </div>
        ) : (
          <input
            key={"nds-text"}
            value={inputValue}
            onChange={(e) => {
              props.onChange?.(e);
              setInputValue(e.target.value);
            }}
            onBlur={(e) => {
              props.onBlur?.(e);
              setInputValue(formatter(e.target.value));
            }}
            ref={forwardedRef as React.Ref<HTMLInputElement>}
            type={props.type ?? "text"}
            required={required}
            aria-label={props.label}
            placeholder={props.label}
            data-testid={testId}
            data-error={inputError}
            {...nativeProps(props)}
          />
        )}
      </Input>
    );
  },
);

TextInput.displayName = "TextInput";

export default TextInput;
