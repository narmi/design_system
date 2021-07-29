import React from "react";
import Input from "Input";

const TextInput = (props) => {
  const field = props.multiline ?
    props.React.forwardRef((props, ref) => <textarea ref={ref} required {...props} />) :
    props.React.forwardRef((props, ref) => <input ref={ref} type="text" required {...props} />);
  return <Input
    field={field}
    {...props}
  />;
};

TextInput.defaultProps = {
  React,
}

TextInput.styles = `
  .nds-input input[type="text"] {
    border: none;
    outline: 0;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0px;
    vertical-align: middle;
    padding: 0;
    width: 100%;
  }

  .nds-input textarea {
    resize: none;
    line-height: 1.2;
    vertical-align: middle;
    border: none;
    outline: 0;
    padding: 0;
    overflow: visible;
    width: 100%;
  }
`;

export default TextInput;
