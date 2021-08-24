import React, {useEffect} from "react";
import PropTypes from "prop-types";
import Input from "Input";

const TextInput = (props) => {
  const { multiline, React, ...nativeElementProps } = props;
  const ref = props.React.useRef();

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
          name={props.name}
          defaultValue={props.defaultValue}
          onChange={props.onChange}
        />
      ) : (
        <input key={"nds-text"} ref={ref} type="text" required placeholder={props.label} name={props.name} onChange={props.onChange} defaultValue={props.defaultValue}/>
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
