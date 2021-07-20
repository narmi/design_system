import React from "react";
import PropTypes from "prop-types";
import Typography from "../Typography";
import styled from "styled-components";

const StyledRadioGroup = styled.div`
  margin: 0.5rem 0 0;
`;

const StyledRadio = styled.div`
  margin: 8px;
  cursor: pointer;
  width: 20px;
  height: 20px;
  position: relative;
  &::before {
    content: "";
    border-radius: 100%;
    border: 2px solid var(--nds-grey-disabled);
    background: transparent;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    box-sizing: border-box;
    z-index: 0;
  }
`;

const StyledFill = styled.div`
  background: var(--nds-narmi-purple);
  width: 0;
  height: 0;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 1;
  box-sizing: content-box;

  &::before {
    content: "";
    opacity: 0;
    width: calc(20px - 4px);
    position: absolute;
    height: calc(20px - 4px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid var(--nds-narmi-purple);
    border-radius: 100%;
  }
`;

const StyledInput = styled.input`
  opacity: 0;
  z-index: 2;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:checked {
    & ~ ${StyledFill} {
      width: calc(100% - 8px);
      height: calc(100% - 8px);

      &::before {
        opacity: 1;
        box-sizing: content-box;
      }
    }
  }
`;

const StyledLabel = styled.label`
  cursor: pointer;
  margin-left: 28px;
  
  &:hover ${StyledFill}::before {
    opacity: 1;
    box-sizing: content-box;
  }
`;

const RadioButtons = (props) => {
  return (
    <StyledRadioGroup>
      {props.options.map((item, i) => (
        <StyledRadio key={i + "_radio"}>
          <StyledLabel key={i + "_label"}>
            <Typography key={i + "_typ"}>{item}</Typography>
            <StyledInput
              type="radio"
              name="setting_value"
              value={item}
              key={i + "_input"}
            />
            <StyledFill key={i + "_fill"} />
          </StyledLabel>
        </StyledRadio>
      ))}
    </StyledRadioGroup>
  );
};

RadioButtons.propTypes = {
  options: PropTypes.array,
};

RadioButtons.defaultProps = {
  options: [],
};

export default RadioButtons;
