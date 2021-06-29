import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { XCircle } from "react-feather";

import { ndsWhite, messagingRed } from "../../globalStyles";

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
  border-radius: ${(props) => (props.icon ? "0" : "4px")};

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
  top: 14px;
  left: 12px;
  background: transparent;
  transition: 300ms;
  color: var(--nds-grey-placeholder);
  font-size: 16px;
  font-family: var(--nds-font-family);

  ${StyledInput}:focus ~ & {
    color: var(--nds-primary-color);
  }

  ${StyledInput} ~ &.nds-disabled {
    color: var(--nds-grey-placeholder);
  }
  ${StyledInput} ~ &.nds-error {
    color: var(--nds-messaging-red);
  }

  ${StyledInput}:focus ~ &,
  ${StyledInput}:valid ~ &,
  ${StyledInput}:disabled ~ &,
  ${StyledInput} ~ &.nds-floated {
    transform: translate(0%, -9px);
    font-size: 12px;
    line-height: 16px;
  }
`;
const StyledDecorationWrapper = styled.div`
  width: 24px;
`;
const StyledError = styled.div`
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

  // transition
  background: transparent;
  transition: 300ms;
`;

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
  ...rest
}) => {
  // floating labels without forcing a controlled component: https://css-tricks.com/float-labels-css/#the-trick-3-of-3-the-valid-state
  const inputRef = React.useRef(null);
  return (
    <StyledColumn
      onClick={() => {
        inputRef.current.focus();
      }}
    >
      <StyledGroup
        label={label}
        icon={icon}
        className={[
          disabled ? "nds-disabled" : null,
          error ? "nds-error" : null,
        ]}
      >
        {icon ? icon : null}
        <StyledInput
          id={id}
          onChange={onChange}
          disabled={disabled}
          type={type}
          placeholder={placeholder}
          ref={inputRef}
          {...rest}
          required
        />
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
              size={12}
              color={ndsWhite}
              style={{ marginRight: "4px", fill: messagingRed }}
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
};

Input.defaultProps = {
  label: null,
  decoration: null,
  error: null,
  showNativeDatepicker: false,
  // native input props
  className: "",
  defaultValue: null,
  type: "text",
};

export default Input;
