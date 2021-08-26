import React, {useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";
import Input from "Input";

const TextInput = (props) => {
  const { format, multiline, defaultValue, onChange, ...nativeElementProps } = props;
  const ref = useRef(null);

  const initialState = format ? format(defaultValue) : defaultValue;
  const [value, setValue] = useState(initialState || "")

  function handleKeyUp(e) {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  }

  useEffect(() => {
    multiline ? handleKeyUp({target: ref.current}) : undefined;
    format ? setValue(format(ref.current.value)) : undefined;
  }, [ref]);

  function updateValue(e) {
    const newValue = format ? format(ref.current.value) : ref.current.value
    setValue(newValue)
    e.target.value = newValue // Patch the event to reflect the new value
    onChange ? onChange(e): undefined;
  }

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
          wrap="hard"
          ref={ref}
          required
          value={value}
          onChange={updateValue}
          {...nativeElementProps}
        />
      ) : (
        <input key={"nds-text"}
               ref={ref}
               type="text"
               required
               placeholder={props.label}
               value={value}
               onChange={updateValue}
               {...nativeElementProps} />
      )}
    </Input>
  );
};
TextInput.propTypes = {
  multiline: PropTypes.bool,
};

TextInput.defaultProps = {
  multiline: false,
};

export default TextInput;
