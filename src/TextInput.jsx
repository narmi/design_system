import React, {useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";
import Input from "Input";

const TextInput = (props) => {
  const { formatter, multiline, style, defaultValue, onChange, ...nativeElementProps } = props;

  const [inputValue, setInputValue] = useState(props.defaultValue ? props.defaultValue : "");
  const ref = useRef();

  function _onChange(e){
    if (props.onChange) {
      props.onChange(e);
    }
    setInputValue(props.formatter(ref.current.value));
  }

  function handleKeyUp(e) {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  }
  useEffect(() => multiline ? handleKeyUp({target: ref.current}) : undefined, []);
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
          required
          {...nativeElementProps}
        />
      ) : (
        <input key={"nds-text"} value={inputValue} onChange={_onChange} ref={ref} type="text" required placeholder={props.label} {...nativeElementProps} />
      )}
    </Input>
  );
};
TextInput.propTypes = {
  multiline: PropTypes.bool,
  formatter: PropTypes.func,
};

TextInput.defaultProps = {
  multiline: false,
  formatter: (x) => x,
};

export default TextInput;
