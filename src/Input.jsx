import React from "react";
import PropTypes from "prop-types";
import { XCircle } from "react-feather";

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
  const inputRef = React.createRef();

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  }, [inputRef]);

  return (
    <div
      className={`nds-input${disabled ? " disabled" : ""}${
        error ? " error" : ""
      }`}
      onClick={() => {
        inputRef.current.focus();
      }}
    >
      <div className="nds-input-box">
        {icon}
        <props.field ref={inputRef} {...props} />
        <label htmlFor={id}>{label}</label>
        {decoration}
      </div>{" "}
      <Error error={error} />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  decoration: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  error: PropTypes.string,
};

Input.defaultProps = {
  label: null,
  icon: null,
  decoration: null,
  error: null,
};

const verticalPadding = "5px";
Input.styles = `
  .nds-input {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    min-width: 280px;
  }

  .nds-input .nds-input-box {
    box-sizing: border-box;
    border: 1px solid rgb(var(--nds-disabled));
    background: rgb(var(--nds-background));
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 19px 12px ${verticalPadding};
    border-radius: 4px;
  }
  .nds-input .nds-input-box:focus-within {
    border: 1px solid rgb(var(--nds-primary-color));
  }
  .nds-input .nds-input-box:focus-within > label {
    color: rgb(var(--nds-primary-color));
  }
  .nds-input.disabled .nds-input-box {
    pointer-events: none;
    border: 1px solid rgb(var(--nds-disabled));
  }
  .nds-input.error .nds-input-box {
    border: 1px solid rgb(var(--nds-error));
  }

  .nds-input label {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 12px;
    background: transparent;
    pointer-events: none;
    font-size: 16px;
    font-family: var(--nds-font-family);
    font-weight: 400;
  }
  .nds-input *:focus + label, .nds-input *:valid + label {
    font-size: 12px;
    line-height: 16px;
    top: ${verticalPadding};
    transform: none;
  }

  .nds-input .nds-input-error {
    margin-top: 4px;
    height: 18px;
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    color: rgb(var(--nds-error));
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }
`;

export default Input;
