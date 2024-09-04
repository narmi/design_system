/* eslint-disable jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";
import Error from "../Error";
import IconButton from "../IconButton";

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
  startContent,
  endContent,
  tailContent,
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

  return (
    <div className={className} onClick={onClick} style={style}>
      <div className="nds-input-box">
        {startContent && <div>{startContent}</div>}
        {startIconClass && (
          <div
            className={`nds-input-icon nds-input-icon--faded ${startIconClass}`}
          ></div>
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
        {endIconClass && (
          <div
            className={`nds-input-icon nds-input-icon--faded ${endIconClass}`}
          ></div>
        )}
        {showClearButton && (
          <IconButton
            label="Clear"
            onClick={clearInput}
            name="x"
            textSize="l"
          />
        )}
        {endContent && <div>{endContent}</div>}
      </div>
      <div className="nds-input-subline">
        {/* this is styled using row-reverse to 1. make it easier to render and 2. accommodate screen reading order better */}
        {tailContent && (
          <div className="nds-input-tail margin--top--xxs">{tailContent}</div>
        )}
        <Error error={error} />
      </div>
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  /** full `narmi-icon-<shape>` className for icon at start of input */
  startIconClass: PropTypes.string,
  /** full `narmi-icon-<shape>` className for icon at end of input */
  endIconClass: PropTypes.string,
  /** arbitrary JSX to place at the start of the input */
  startContent: PropTypes.node,
  /** arbitrary JSX to place at the end of the input */
  endContent: PropTypes.node,
  /** arbitrary JSX to place at the end of the subtitle/error */
  tailContent: PropTypes.node,
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
