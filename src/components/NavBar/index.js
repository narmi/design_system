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
    display: none;
    position: absolute;
    flex-direction: column;
  }

  @media ${`(min-width: ${deviceBreakpoints.mobileMax})`} {
    display: flex;
    justify-content: space-between;
    position: absolute;
    height: 82px;
    left: 0%;
    right: 0%;
  }
`;

const StyledNavLeft = styled.span`
  @media ${`(max-width: ${deviceBreakpoints.mobile})`} {
    left: 20px;
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
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
  @media ${`(min-width: ${deviceBreakpoints.mobileMax})`} {
    padding-left: 40px;
  }
`;

const StyledMenuLogo = styled.span`
  @media ${`(max-width: ${deviceBreakpoints.mobileMax})`} {
    visibility: hidden;
    position: absolute;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
`;

const MobilePopover = (props) => {
  return <div {...props}>{props.mobileMenuIcon}</div>;
};

const NavBar = (props) => {
  return (
    <>
      <MobilePopover {...props} />
      <StyledHeader {...props}>
        <StyledNavLeft>
          {props.logo ? <StyledMenuLogo>{props.logo}</StyledMenuLogo> : null}
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
    </>
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
