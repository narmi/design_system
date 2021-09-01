import React, {useEffect, useRef} from "react";
import PropTypes from "prop-types";
import Input from "Input";

const TextInput = (props) => {
  const { multiline, style, ...nativeElementProps } = props;
  const ref = useRef();

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
          wrap="hard"
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
  multiline: PropTypes.bool,
};

TextInput.defaultProps = {
  multiline: false,
};

export default TextInput;
