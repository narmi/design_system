import React from "react";
import PropTypes from "prop-types";
import Input from "Input";

const TextInput = (props) => {
  function handleKeyUp(e) {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  }

  const { multiline, React, ...nativeElementProps } = props;
  const ref = props.React.useRef();
  return (
    <Input
      onClick={() => {
        ref.current?.focus();
      }}
      {...props}
    >
      {multiline ? (
        <textarea
          wrap="hard"
          onKeyUp={handleKeyUp}
          rows="1"
          key={"nds-text"}
          ref={ref}
          required
          {...nativeElementProps}
        />
      ) : (
        <input key={"nds-text"} ref={ref} type="text" required placeholder={props.label} {...nativeElementProps} />
      )}
    </Input>
  );
};
TextInput.propTypes = {
  React: PropTypes.object,
  multiline: PropTypes.bool,
};

TextInput.defaultProps = {
  React,
  multiline: false,
};

export default TextInput;
