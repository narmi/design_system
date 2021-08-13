import React from "react";
import PropTypes from "prop-types";
import Input from "Input";

const TextInput = (props) => {
  function handleKeyUp(e) {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  }

  const { multiline, React, ...newProps } = props;

  const ref = props.React.useRef();
  return (
    <Input
      onClick={() => {
        ref.current?.focus();
      }}
      {...props}
    >
      {props.multiline ? (
        <textarea
          wrap="hard"
          onKeyUp={handleKeyUp}
          rows="1"
          key={"nds-text"}
          ref={ref}
          required
          {...newProps}
        />
      ) : (
        <input key={"nds-text"} ref={ref} type="text" required {...props} />
      )}
    </Input>
  );
};
TextInput.propTypes = {
  multiline: PropTypes.bool,
};

TextInput.defaultProps = {
  React,
};

TextInput.styles = `
  .nds-input input[type="text"] {
    border: none;
    outline: 0;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0px;
    vertical-align: middle;
    font-family: var(--nds-font-family);
    padding: 0;
    width: 100%;
  }

  .nds-input textarea {
    line-height: 1.2;
    vertical-align: middle;
    color: var(--nds-grey-text);
    font-family: var(--nds-font-family);
    border: none;
    outline: 0;
    padding: 0;
    width: 100%;
    overflow: hidden;
    resize: none;
  }
`;

export default TextInput;
