/* eslint-disable jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";
import Error from "../Error";

/*
The Narmi TextInput component is designed for text-based form fields.

If `multiline` is true, it creates a <textarea>; otherwise, it creates an <input type="text">.
If `icon` is provided, the value of the icon property must match an available icon class.
By default, if neither `multiline` nor `icon` are provided, an overhanging label will be shown in the input.

*/

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
  endIconClass,
  showClearButton,
  clearInput,
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

  const endIconJsx = showClearButton ? (
    <div
      className={`nds-input-icon nds-input-close narmi-icon-x`}
      onClick={clearInput}
      role="button"
      tabIndex="0"
      aria-label="Clear Input"
    ></div>
  ) : (
    <div className={`nds-input-icon ${endIconClass}`}></div>
  );

  return (
    <div className={className} onClick={onClick} style={style}>
      <div className="nds-input-box">
        {startIconClass && (
          <div className={`nds-input-icon ${startIconClass}`}></div>
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
        {(endIconClass || showClearButton) && endIconJsx}
      </div>
      <Error error={error} />
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  /** full `narmi-icon-<shape>` className for icon at start of input */
  startIconClass: PropTypes.node,
  /** full `narmi-icon-<shape>` className for icon at end of input */
  endIconClass: PropTypes.node,
  showClearButton: PropTypes.bool,
  clearInput: PropTypes.func,
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
