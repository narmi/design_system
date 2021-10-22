import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Input from "../Input";

/**
 * Narmi flavored text input with floating label
 */
const TextInput = (props) => {
  const {
    formatter,
    multiline,
    defaultValue,
    onChange,
    onBlur,
    ...nativeElementProps
  } = props;

  const [inputValue, setInputValue] = useState(
    props.defaultValue ? props.defaultValue : ""
  );
  const ref = useRef();

  function _onBlur(e) {
    if (onBlur) {
      onBlur(e);
    }
    setInputValue(props.formatter(ref.current.value));
  }
  function _onChange(e) {
    if (onChange) {
      onChange(e);
    }
    setInputValue(ref.current.value);
  }

  function handleKeyUp(e) {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  }
  useEffect(
    () => (multiline ? handleKeyUp({ target: ref.current }) : undefined),
    []
  );
  return (
    <Input
      onClick={() => {
        ref.current?.focus();
      }}
      {...props}
    >
      {multiline ? (
        <textarea
          onKeyUp={handleKeyUp}
          key={"nds-text"}
          wrap="soft"
          ref={ref}
          value={inputValue}
          onChange={_onChange}
          onBlur={_onBlur}
          required
          {...nativeElementProps}
        />
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
};

TextInput.defaultProps = {
  multiline: false,
  formatter: (x) => x,
};

export default TextInput;
