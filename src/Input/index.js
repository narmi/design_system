/* eslint-disable jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";

/*
The Narmi TextInput component is designed for text-based form fields.

If `multiline` is true, it creates a <textarea>; otherwise, it creates an <input type="text">.
If `icon` is provided, the value of the icon property must match an available icon class.
By default, if neither `multiline` nor `icon` are provided, an overhanging label will be shown in the input.

*/

const Error = ({ error }) => {
  if (!error) return null;
  return (
    <div className="nds-input-error">
      <div className="fontSize--s margin--right--xxs narmi-icon-x-circle" />
      {error}
    </div>
  );
};

Error.propTypes = {
  error: PropTypes.string,
};

/**
 * PRIVATE
 *
 * This component has no stories because it is only used internally by NDS.
 * In a future release, this base Input component will be merged with TextInput.
 */
const Input = ({
  id,
  label,
  startIconClass,
  disabled,
  multiline = false,
  decoration,
  error,
  search,
  onClick,
  style,
  children,
  ...props
}) => {
  const className = [
    "nds-input",
    disabled ? "disabled" : "",
    props.multiline ? "multiline" : "",
    error ? "error" : "",
    search ? "search" : "",
  ].join(" ");

  return (
    <div className={className} onClick={onClick} style={style}>
      <div className="nds-input-box">
        {startIconClass ? (
          <div className={`nds-input-icon ${startIconClass}`}></div>
        ) : (
          ""
        )}
        <div
          className={`nds-input-column ${
            !label || (startIconClass && !multiline) ? "no-label" : ""
          }`}
        >
          {children}
          {decoration}
          {!multiline ? <label htmlFor={id}>{label}</label> : ""}
        </div>
      </div>
      <Error error={error} />
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  /** full `narmi-icon-<shape>` className for icon at start of input*/
  startIconClass: PropTypes.node,
  decoration: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  multiline: PropTypes.bool,
  disabled: PropTypes.bool,
  search: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.object,
  error: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default Input;
