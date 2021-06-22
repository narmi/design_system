import React from "react";
import PropTypes, { bool } from "prop-types";
import styled, { css } from "styled-components";
import { deviceBreakpoints } from "../../globalStyles";
import Typography from "../Typography";

const StyledHeader = styled.span`
  background: var(--nds-white);
  box-shadow: var(--nds-dropshadow-dark);
  position: absolute;
  left: 0%;
  top: 0%;
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
    left: ${(props) => (props.logo ? "31px" : "0px")};
  }
  @media ${`(min-width: ${deviceBreakpoints.laptop})`} {
    left: ${(props) => (props.logo ? "62px" : "0px")};
  }
  @media ${`(min-width: ${deviceBreakpoints.desktop})`} {
    left: ${(props) => (props.logo ? "70px" : "0px")};
  }

  @media ${`(min-width: ${deviceBreakpoints.mobileMax})`} {
    position: relative;
    align-items: center;
    display: flex;
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

const StyledA = styled.div`
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
  :hover {
    font-weight: 600;
    color: var(--nds-primary-color);
  }
  ::before {
    display: block;
    content: attr(data-text);
    font-weight: 600;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }
`;

const NavBar = (props) => {
  return (
    <StyledHeader {...props}>
      <StyledNavLeft logo={props.logo}>
        {props.logo ? <div>{props.logo}</div> : null}
        {props.leftChildren.map((option, idx) => (
          <StyledMenuItem key={idx}>
            <Typography>
              <StyledA
                data-text={
                  typeof option.props.children === "string"
                    ? option.props.children
                    : null
                }
              >
                {option}
              </StyledA>
            </Typography>
          </StyledMenuItem>
        ))}
      </StyledNavLeft>
      <StyledNavRight>
        {props.rightChildren.map((option, idx) => (
          <StyledMenuItem key={idx}>{option}</StyledMenuItem>
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
