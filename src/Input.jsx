import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { XCircle } from "react-feather";


const StyledColumn = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;

  min-width: 280px;
`;
const StyledGroup = styled.div`
  box-sizing: border-box;
  border: 1px solid var(--nds-grey-disabled);
  background: var(--nds-white);
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  &:focus-within {
    border: 1px solid var(--nds-primary-color);
  }

  padding: ${(props) => (props.label ? "19px 12px 5px" : "5px 12px")};
  border-radius: ${(props) => (!props.multiline && props.icon ? "0" : "4px")};

  &.nds-disabled,
  &.nds-disabled:focus-within {
    border: 1px solid var(--nds-grey-disabled);
    background: var(--nds-grey-disabled-fill);
  }

  &.nds-error {
    border: 1px solid var(--nds-messaging-red);
  }
`;

const StyledInput = styled.input`
  border: none;
  outline: 0;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0px;
  vertical-align: middle;
  color: var(--nds-grey-text);
  font-family: var(--nds-font-family);
  padding: 0;
  width: 100%;

  &:disabled {
    background: var(--nds-grey-disabled-fill);
    color: var(--nds-grey-placeholder);
  }

  &::-webkit-calendar-picker-indicator {
    visibility: hidden;
  }
  ${(props) => (props.showNativeDatepicker ? nativeDatepickerStyles : null)}
`;

const StyledTextArea = styled.textarea`
  resize: none;
  line-height: 1.2;
  vertical-align: middle;
  color: var(--nds-grey-text);
  font-family: var(--nds-font-family);
  border: none;
  outline: 0;
  padding: 0;
  overflow: visible;
  width: 100%;

  &:disabled {
    background: var(--nds-grey-disabled-fill);
    color: var(--nds-grey-placeholder);
  }

  &::-webkit-calendar-picker-indicator {
    visibility: hidden;
  }
  ${(props) => (props.showNativeDatepicker ? nativeDatepickerStyles : null)}
`;
const nativeDatepickerStyles = css`
  // Chrome adds its own datepicker icon, display if prop turned on
  &::-webkit-calendar-picker-indicator {
    visibility: visible;
    position: absolute;
    right: 13px;
    top: 13px;
    z-index: 10;
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 12px;
  background: transparent;
  pointer-events: none;
  transition: 0ms;
  color: var(--nds-grey-placeholder);
  font-size: 16px;
  font-family: var(--nds-font-family);

  ${StyledInput}:focus ~ &,
  ${StyledTextArea}:focus ~ & {
    color: var(--nds-primary-color);
  }

  ${StyledInput} ~ &.nds-disabled,
  ${StyledTextArea} ~ &.nds-disabled {
    color: var(--nds-grey-placeholder);
  }
  
  ${StyledTextArea} ~ &.nds-error,
  ${StyledInput} ~ &.nds-error {
    color: var(--nds-messaging-red);
  }

  ${StyledInput}:focus ~ &,
  ${StyledInput}:valid ~ &,
  ${StyledInput}:disabled ~ &,
  ${StyledInput} ~ &.nds-floated,
  ${StyledTextArea}:focus ~ &,
  ${StyledTextArea}:valid ~ &,
  ${StyledTextArea}:disabled ~ &,
  ${StyledTextArea} ~ &.nds-floated {
    font-size: 12px;
    line-height: 16px;
    top: 0;
    transform: translateY(25%);
  }
`;
const StyledDecorationWrapper = styled.div`
  margin-top: -10px;
`;
const StyledError = styled.div`
  margin-top: 4px;
  height: 18px;
  font-size: 12px;
  font-family: var(--nds-font-family);
  font-weight: 400;
  line-height: 22px;
  color: var(--nds-messaging-red);

  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  background: transparent;
  transition: 300ms;
`;

function handleKeyUp(e) {
  e.target.style.height = "inherit";
  e.target.style.height = `${e.target.scrollHeight}px`;
}

const Input = ({
  id,
  label,
  icon,
  disabled,
  onChange,
  decoration,
  error,
  type,
  placeholder,
  multiline,
  required,
  ...rest
}) => {
  // floating labels without forcing a controlled component: https://css-tricks.com/float-labels-css/#the-trick-3-of-3-the-valid-state
  const inputRef = React.useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  }, [inputRef]);

  return (
    <StyledColumn
      onClick={() => {
        inputRef.current.focus();
      }}
    >
      <StyledGroup
        multiline={multiline}
        label={label}
        icon={icon}
        className={[
          disabled ? "nds-disabled" : null,
          error ? "nds-error" : null,
        ]}
      >
        {icon ? icon : null}
        {!multiline ? (
          <StyledInput
            id={id}
            onChange={onChange}
            disabled={disabled}
            type={type}
            placeholder={placeholder}
            ref={inputRef}
            required={required}
            {...rest}
          />
        ) : (
          <StyledTextArea
            wrap="hard"
            ref={inputRef}
            onChange={onChange}
            disabled={disabled}
            type={type}
            placeholder={placeholder}
            required={required}
            {...rest}
            onKeyUp={handleKeyUp}
            minRows="1"
            rows="1"
          />
        )}
        <StyledLabel
          htmlFor={id}
          className={[
            disabled ? "nds-disabled" : null,
            error ? "nds-error" : null,
            type === "date" ? "nds-floated" : null,
            placeholder ? "nds-floated" : null,
          ]}
        >
          {label}
        </StyledLabel>
        {decoration ? (
          <StyledDecorationWrapper>{decoration}</StyledDecorationWrapper>
        ) : null}
      </StyledGroup>

      {
        /* Error messages */
        error && error.length > 0 ? (
          <StyledError>
            <XCircle
              size={14}
            />{" "}
            {error}
          </StyledError>
        ) : null
      }
    </StyledColumn>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  decoration: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  error: PropTypes.string,
  showNativeDatepicker: PropTypes.bool,
  // native input props
  id: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
};

Input.defaultProps = {
  label: null,
  decoration: null,
  error: null,
  required: true,
  showNativeDatepicker: false,
  // native input props
  className: "",
  defaultValue: null,
  type: "text",
};

export default Input;
