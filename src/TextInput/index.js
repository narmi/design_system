import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import Input from "../Input";
import iconSelection from "src/icons/selection.json";

export const VALID_ICON_NAMES = iconSelection.icons.map(
  (icon) => icon.properties.name
);

/**
 * Narmi flavored text input with floating label
 */
const TextInput = (props) => {
  const {
    icon,
    formatter,
    multiline,
    defaultValue,
    onChange,
    onBlur,
    ...nativeElementProps
  } = props;

  const [inputValue, setInputValue] = useState(
    defaultValue ? defaultValue : ""
  );
  const ref = useRef();

  function _onBlur(e) {
    if (onBlur) {
      onBlur(e);
    }
    setInputValue(formatter(ref.current.value));
  }
  function _onChange(e) {
    if (onChange) {
      onChange(e);
    }
    setInputValue(ref.current.value);
  }

  return (
    <Input
      onClick={() => {
        ref.current?.focus();
      }}
      {...props}
      icon={icon ? `narmi-icon-${icon}` : undefined}
    >
      {multiline ? (
        <div
          className="nds-input-multiline-grid"
          data-textarea-value={inputValue}
        >
          <textarea
            key={"nds-text"}
            wrap="soft"
            ref={ref}
            value={inputValue}
            onChange={_onChange}
            onBlur={_onBlur}
            required
            {...nativeElementProps}
          />
        </div>
      ) : (
        <input
          key={"nds-text"}
          value={inputValue}
          onChange={_onChange}
          onBlur={_onBlur}
          ref={ref}
          type="text"
          required
          placeholder={props.label}
          {...nativeElementProps}
        />
      )}
    </Input>
  );
};
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
  icon: PropTypes.oneOf(VALID_ICON_NAMES),
};

TextInput.defaultProps = {
  multiline: false,
  formatter: (x) => x,
};

export default TextInput;
