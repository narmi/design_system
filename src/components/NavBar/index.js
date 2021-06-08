import React from "react";
import PropTypes, { bool } from "prop-types";
import styled, { css } from "styled-components";
import { deviceBreakpoints } from "../../globalStyles";

const StyledHeader = styled.span`
  background: var(--nds-white);
  box-shadow: var(--nds-dropshadow-dark);
  position: absolute;
  left: 0%;
  right: 0%;

  @media ${`(max-width: ${deviceBreakpoints.mobileMax})`} {
    display: flex;
  }

  @media ${`(min-width: ${deviceBreakpoints.mobileMax})`} {
    display: flex;
    justify-content: space-between;
    height: 82px;
  }
`;

const StyledNavLeft = styled.span`
  @media ${`(max-width: ${deviceBreakpoints.mobile})`} {
    left: 20px;
    padding-left: 20px;
  }
  @media ${`(min-width: ${deviceBreakpoints.tablet})`} {
    left: 31px;
  }
  @media ${`(min-width: ${deviceBreakpoints.laptop})`} {
    left: 62px;
  }
  @media ${`(min-width: ${deviceBreakpoints.desktop})`} {
    left: 70px;
  }

  @media ${`(min-width: ${deviceBreakpoints.mobileMax})`} {
    position: relative;
    align-items: center;
    display: flex;
  }
  & ${StyledMenuItem}:first-child {
    padding-left: 0px;
  }
`;

const StyledNavRight = styled.span`
  @media ${`(max-width: ${deviceBreakpoints.mobile})`} {
    right: 20px;
  }
  @media ${`(min-width: ${deviceBreakpoints.tablet})`} {
    right: 31px;
  }
  @media ${`(min-width: ${deviceBreakpoints.laptop})`} {
    right: 62px;
  }
  @media ${`(min-width: ${deviceBreakpoints.desktop})`} {
    right: 70px;
  }

  @media ${`(min-width: ${deviceBreakpoints.mobileMax})`} {
    display: flex;
    position: relative;
    flex-direction: row-reverse;
    align-items: center;
  }
`;

const StyledMenuItem = styled.span`
  @media ${`(max-width: ${deviceBreakpoints.mobileMax})`} {
    display: none;
  }
  @media ${`(min-width: ${deviceBreakpoints.mobileMax})`} {
    padding-left: 40px;
  }
`;

const StyledMobileMenuContainer = styled.span`
  @media ${`(min-width: ${deviceBreakpoints.mobileMax})`} {
    display: none;
  }
  @media ${`(max-width: ${deviceBreakpoints.mobileMax})`} {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    right: 20px;
  }
`;

const NavBar = (props) => {
  return (
    <StyledHeader {...props}>
      <StyledNavLeft>
        {props.logo ? <div>{props.logo}</div> : null}
        {props.leftChildren.map((option) => (
          <StyledMenuItem>{option}</StyledMenuItem>
        ))}
      </StyledNavLeft>
      <StyledNavRight>
        {props.rightChildren.map((option) => (
          <StyledMenuItem>{option}</StyledMenuItem>
        ))}
      </StyledNavRight>
      <StyledMobileMenuContainer {...props}>
        {props.mobileMenuIcon}
      </StyledMobileMenuContainer>
    </StyledHeader>
  );
};

NavBar.propTypes = {
  logo: PropTypes.node,
  mobileMenuIcon: PropTypes.node,
  leftChildren: PropTypes.node,
  rightChildren: PropTypes.node,
};

NavBar.defaultProps = {
  leftChildren: [],
  rightChildren: [],
};

export default NavBar;
