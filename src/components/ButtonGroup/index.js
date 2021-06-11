import React from "react";
import PropTypes, { bool } from "prop-types";
import styled, { css } from "styled-components";
import Button from "components/Button";
import { deviceBreakpoints } from "../../globalStyles";

const StyledButton = styled(Button)`
  @media ${`(max-width: ${deviceBreakpoints.mobileMax})`} {
    margin-top: 16px;
    display: flex;
    flex-direction: row;
  }

  @media ${`(min-width: ${deviceBreakpoints.tablet})`} {
    margin-left: 16px;
  }

  border: none;
`;

const StyledButtonGroup = styled.div`
  @media ${`(min-width: ${deviceBreakpoints.tablet})`} {
    display: flex;
    flex-direction: row-reverse; // sets elements in a reversed column
  }
`;

const ButtonGroup = ({children, ...rest}) => {
  return (
    <StyledButtonGroup {...rest}>
      {children}
    </StyledButtonGroup>
  );
};

ButtonGroup.propTypes = {
  children: PropTypes.node, // numbers, string, DOM elements, arrays, fragments, ...
};

export default ButtonGroup;
