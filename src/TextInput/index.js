import React, { useState, useRef, useImperativeHandle } from "react";
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
    onInputClear = () => {},
    onBlur,
    testId,
    type = "text",
    ...nativeElementProps
  } = props;

  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState(
    defaultValue ? defaultValue : ""
  );

  // allows us to use the forwarded ref internally
  useImperativeHandle(forwardedRef, () => inputRef.current);

  function _onBlur(e) {
    if (onBlur) {
      onBlur(e);
    }
    setInputValue(formatter(e.target.value));
  }
  function _onChange(e) {
    e.preventDefault();
    if (onChange) {
      onChange(e);
    }
    setInputValue(e.target.value);
  }
  function _onClearInput(e) {
    e.preventDefault(); // don't let the event bubble up to the input

    // refocus the input when user clears it via the clear button
    if (inputRef.current) {
      inputRef.current.focus();
    }

    _onChange(e);
    onInputClear();
  }

  return (
    <Input
      {...props}
      startContent={startContent}
      endContent={endContent}
      startIconClass={startIcon ? `narmi-icon-${startIcon}` : undefined}
      endIconClass={endIcon ? `narmi-icon-${endIcon}` : undefined}
      showClearButton={showClearButton && Boolean(inputValue)}
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
            ref={inputRef}
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
          ref={inputRef}
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
  /** Callback invoked when user clicks on clear button */
  onInputClear: PropTypes.func,
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
  /** Accepts a JSX node to act as a custom `startIcon` */
  startContent: PropTypes.node,
  /** Accepts a JSX node to act as a custom `endIcon` */
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
