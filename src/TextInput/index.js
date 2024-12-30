import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "../Input";
import iconSelection from "src/icons/selection.json";

export const VALID_ICON_NAMES = iconSelection.icons.map(
  (icon) => icon.properties.name,
);

/**
 * Narmi flavored text input with floating label
 */
const TextInput = React.forwardRef((props, forwardedRef) => {
  const {
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
    type = "text",
    error,
    ...nativeElementProps
  } = props;

  const [inputValue, setInputValue] = useState(
    defaultValue ? defaultValue : "",
  );

  function _onBlur(e) {
    if (onBlur) {
      onBlur(e);
    }
    setInputValue(formatter(e.target.value));
  }
  function _onChange(e) {
    if (onChange) {
      onChange(e);
    }
    setInputValue(e.target.value);
  }
  function _onClearInput(e) {
    _onChange(e);
    setInputValue("");
  }

  const charCount = (nativeElementProps?.value || inputValue).length;
  const showCharacterCounter = maxLength && charCount > 0;
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
      startIconClass={startIcon ? `narmi-icon-${startIcon}` : undefined}
      endIconClass={endIcon ? `narmi-icon-${endIcon}` : undefined}
      startContent={startContent}
      endContent={endContent}
      showClearButton={showClearButton && inputValue}
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
            ref={forwardedRef}
            value={inputValue}
            onChange={_onChange}
            onBlur={_onBlur}
            required={props.required}
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
          ref={forwardedRef}
          type={type}
          required={props.required}
          aria-label={props.label}
          placeholder={props.label}
          data-testid={testId}
          data-error={inputError}
          {...nativeElementProps}
        />
      )}
    </Input>
  );
});

TextInput.displayName = "TextInput";

TextInput.propTypes = {
  /** Label used as input placeholder _and_ floating label */
  label: PropTypes.string.isRequired,
  /** Callback invoked with event object on input change */
  onChange: PropTypes.func,
  /** Callback invoked with event object on input blur */
  onBlur: PropTypes.func,
  /** Sets the [uncontrolled](https://reactjs.org/docs/uncontrolled-components.html) value of the input */
  defaultValue: PropTypes.string,
  /** When true, the input is displayed as an auto-growing textarea */
  multiline: PropTypes.bool,
  /** function that formats the input value on blur */
  formatter: PropTypes.func,
  /** Name of Narmi icon to place at the start of the input box */
  startIcon: PropTypes.oneOf(VALID_ICON_NAMES),
  /** Name of Narmi icon to place at the end of the input box */
  endIcon: PropTypes.oneOf(VALID_ICON_NAMES),
  /** JSX content slot at input start for custom buttons and icons  */
  startContent: PropTypes.node,
  /** JSX content slot at input end for custom buttons and icons  */
  endContent: PropTypes.node,
  /** Display an X at the end of label that clears input and calls onChange on click. */
  showClearButton: PropTypes.bool,
  /** Text of error message to display under the input */
  error: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  /** Maximum number of characters allowed in the input */
  maxLength: PropTypes.number,
  /** Optional value for `data-testid` attribute */
  testId: PropTypes.string,
  type: PropTypes.oneOf([
    "text",
    "tel",
    "number",
    "email",
    "password",
    "search",
    "time",
    "datetime-local",
  ]),
  /** Native element prop passed to the underlying input/textarea element. Defaults to true. */
  required: PropTypes.bool,
};

TextInput.defaultProps = {
  multiline: false,
  formatter: (x) => x,
  required: true,
};

export default TextInput;
