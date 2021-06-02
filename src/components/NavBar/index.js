import React from "react";
import PropTypes, { bool } from "prop-types";
import styled, { css } from "styled-components";
import { deviceBreakpoints } from "../../globalStyles";

const StyledHeader = styled.span`
  background: var(--nds-white);

  box-shadow: var(--nds-dropshadow-dark);

  @media ${`(max-width: ${deviceBreakpoints.mobileMax})`} {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
  }

  @media ${`(min-width: ${deviceBreakpoints.tablet})`} {
    display: flex;

    position: absolute;
    left: 0%;
    right: 0%;
    top: 0px;
    height: 82px;
  }
`;

const StyledLeftDiv = styled.span`
  @media ${`(min-width: ${deviceBreakpoints.tablet})`} {
    position: relative;
    width: 50%;
    left: 4.84%;
    align-items: center;
    display: flex;
  }
`;

const StyledRightDiv = styled.span`
  @media ${`(min-width: ${deviceBreakpoints.tablet})`} {
    display: flex;
    position: relative;
    width: 50%;
    flex-direction: row-reverse;
    align-items: center;
  }
`;

const StyledDivTab = styled.span`
  @media ${`(max-width: ${deviceBreakpoints.mobileMax})`} {
    visibility: ${(props) => (props.icon ? "hidden" : "visible")};
    position: ${(props) => (props.icon ? "absolute" : "relative")};
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
  @media ${`(min-width: ${deviceBreakpoints.tablet})`} {
    padding-right: 40px;
  }
`;

const NavBar = (props) => {
  return (
    <StyledHeader {...props}>
      <StyledLeftDiv>
        <StyledDivTab icon={true}>{props.icon} </StyledDivTab>
        {props.leftChildren.map((option) => (
          <StyledDivTab>{option}</StyledDivTab>
        ))}
      </StyledLeftDiv>
      <StyledRightDiv>
        {props.rightChildren.map((option) => (
          <StyledDivTab>{option}</StyledDivTab>
        ))}
      </StyledRightDiv>
    </StyledHeader>
  );
};

NavBar.propTypes = {
  icon: PropTypes.icon,
  leftChildren: PropTypes.node,
  rightChildren: PropTypes.node,
  hover: PropTypes.bool,
  select: PropTypes.bool,
};

NavBar.defaultProps = {
  leftChildren: [],
  rightChildren: [],
};

export default NavBar;
