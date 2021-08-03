import React from "react";
import Input from "Input";

const TextInput = (props) => {
  function handleKeyUp(e) {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  }

  const field = props.multiline
    ? React.forwardRef((props, ref) => (
        <textarea
          wrap="hard"
          onKeyUp={handleKeyUp}
          minRows="1"
          rows="1"
          key={"nds-text"}
          ref={ref}
          {...props}
        />
      ))
    : React.forwardRef((props, ref) => (
        <input key={"nds-text"} ref={ref} type="text" {...props} />
      ));
  return <Input field={field} {...props} />;
};

TextInput.defaultProps = {};

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
