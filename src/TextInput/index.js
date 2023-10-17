import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "../Input";
import iconSelection from "src/icons/selection.json";

export const VALID_ICON_NAMES = iconSelection.icons.map(
  (icon) => icon.properties.name
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
    testId,
    type = "text",
    ...nativeElementProps
  } = props;

  const [inputValue, setInputValue] = useState(
    defaultValue ? defaultValue : ""
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

  return (
    <Input
      {...props}
      startIconClass={startIcon ? `narmi-icon-${startIcon}` : undefined}
      endIconClass={endIcon ? `narmi-icon-${endIcon}` : undefined}
      startContent={startContent}
      endContent={endContent}
      showClearButton={showClearButton && inputValue}
      clearInput={_onClearInput}
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
            required
            aria-label={props.label}
            data-testid={testId}
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
          required
          aria-label={props.label}
          placeholder={props.label}
          data-testid={testId}
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
  /** Display an X at the end of label that clears input and calls onChange on click. Takes precedence over endIcon when input is not empty */
  showClearButton: PropTypes.bool,
  /** Text of error message to display under the input */
  error: PropTypes.string,
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
};

TextInput.defaultProps = {
  multiline: false,
  formatter: (x) => x,
};

export default TextInput;
