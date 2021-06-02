import React from "react";
import PropTypes, { bool } from "prop-types";
import styled, { css } from "styled-components";
import { deviceBreakpoints } from "../../globalStyles";

const StyledHeader = styled.span`
  background: var(--nds-white);

  box-shadow: var(--nds-dropshadow-dark);

  position: absolute;

  @media ${`(max-width: ${deviceBreakpoints.mobileMax})`} {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
  }

  @media ${`(min-width: ${deviceBreakpoints.tablet})`} {
    display: flex;

    position: absolute;
    height: 82px;
    width: 1280px;
  }
`;

const StyledNavLeft = styled.span`
  @media ${`(min-width: ${deviceBreakpoints.tablet})`} {
    position: relative;
    width: 50%;
    left: 4.84%;
    align-items: center;
    display: flex;
  }
`;

const StyledNavRight = styled.span`
  @media ${`(min-width: ${deviceBreakpoints.tablet})`} {
    display: flex;
    position: relative;
    width: 50%;
    flex-direction: row-reverse;
    align-items: center;
  }
`;

const StyledMenuItem = styled.span`
  @media ${`(max-width: ${deviceBreakpoints.mobileMax})`} {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
  @media ${`(min-width: ${deviceBreakpoints.tablet})`} {
    padding-right: 40px;
  }
`;

const StyledMenuIcon = styled.span`
  @media ${`(max-width: ${deviceBreakpoints.mobileMax})`} {
    visibility: hidden;
    position: absolute;
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
      <StyledNavLeft>
        <StyledMenuIcon>{props.icon} </StyledMenuIcon>
        {props.leftChildren.map((option) => (
          <StyledMenuItem>{option}</StyledMenuItem>
        ))}
      </StyledNavLeft>
      <StyledNavRight>
        {props.rightChildren.map((option) => (
          <StyledMenuItem>{option}</StyledMenuItem>
        ))}
      </StyledNavRight>
    </StyledHeader>
  );
};

NavBar.propTypes = {
  icon: PropTypes.icon,
  leftChildren: PropTypes.node,
  rightChildren: PropTypes.node,
};

NavBar.defaultProps = {
  leftChildren: [],
  rightChildren: [],
};

export default NavBar;
