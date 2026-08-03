/* eslint-disable jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */
import React, { ReactNode } from "react";
import Error from "../Error";
import IconButton from "../IconButton";

/*
The Narmi TextInput component is designed for text-based form fields.

If `multiline` is true, it creates a <textarea>; otherwise, it creates an <input type="text">.
If `icon` is provided, the value of the icon property must match an available icon class.
By default, if neither `multiline` nor `icon` are provided, an overhanging label will be shown in the input.

*/

export interface InputProps {
  id?: string;
  label?: string;
  /** full `narmi-icon-<shape>` className for icon at start of input */
  startIconClass?: string;
  /** full `narmi-icon-<shape>` className for icon at end of input */
  endIconClass?: string;
  /** arbitrary JSX to place at the start of the input */
  startContent?: ReactNode;
  /** arbitrary JSX to place at the end of the input */
  endContent?: ReactNode;
  /** arbitrary JSX to place at the end of the subtitle/error */
  tailContent?: ReactNode;
  showClearButton?: boolean;
  clearInput?: (event: React.MouseEvent) => void;
  decoration?: ReactNode;
  multiline?: boolean;
  disabled?: boolean;
  search?: boolean;
  onClick?: (event: React.MouseEvent) => void;
  style?: React.CSSProperties;
  error?: string | string[] | null;
  /** Gives consumers control over where to render the error when `false` */
  renderError?: boolean;
  children?: ReactNode;
}

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
  renderError = true,
  children,
}: InputProps) => {
  const className = [
    "nds-input",
    disabled ? "disabled" : "",
    multiline ? "multiline" : "",
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
        {renderError && <Error error={error} />}
      </div>
    </div>
  );
};

export default Input;
