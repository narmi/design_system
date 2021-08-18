import React from "react";
import PropTypes from "prop-types";
import { XCircle } from "react-feather";

/*
The Narmi TextInput component is designed for text-based form fields.

If `multiline` is true, it creates a <textarea>; otherwise, it creates an <input type="text">.
If `icon` is provided, the value of the icon property must match an available icon class.
By default, if neither `multiline` nor `icon` are provided, an overhanging label will be shown in the input.

*/

const Error = ({ error }) => {
  if (!error) return null;
  return <div className="nds-input-error">
    <XCircle
      size={14}
    />{" "}
    {error}
  </div>;
};

const Input = ({ id, label, icon, disabled, decoration, error, ...props }) => {
  const className = [
    "nds-input",
    disabled ? "disabled" : "",
    props.multiline ? "multiline" : "",
    props.label ? "labeled" : "",
    error ? "error" : ""
  ].join(" ")

  return (
    <div
      className={className}
      onClick={props.onClick}
      style={props.style}
    >
      <div className="nds-input-box">
        {icon ? <div className={`nds-input-icon ${icon}`}></div> : ""}
        <div className={`nds-input-column ${icon && !props.multiline ? "no-label" : ""}`}>
          {props.children}
          {decoration}
          {!props.multiline ? <label htmlFor={id}>{label}</label> : ""}
        </div>
      </div>
      <Error error={error} />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.node,
  decoration: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  multiline: PropTypes.bool,
  error: PropTypes.string,
};

Input.defaultProps = {
  label: null,
  placeholder: "",
  icon: null,
  decoration: null,
  error: null,
  React,
};

export default Input;
