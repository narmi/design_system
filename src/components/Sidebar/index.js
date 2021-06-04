import React from "react";
import PropTypes, { bool } from "prop-types";
import styled, { css } from "styled-components";
import Button from "components/Button";
import { deviceBreakpoints } from "../../globalStyles";
import { Menu, X } from "react-feather";

const StyledSideBar = styled.div`
  position: fixed;
  top: 0;
  left: ${(p) => (p.slideFromRight ? null : 0)};
  right: ${(p) => (p.slideFromRight ? 0 : null)};
  height: 100vh;
  float: right;
  width: 75%;
  z-index: 100;
  min-width: 200px;
  background-color: var(--nds-white);
  border-radius: 4px;
  box-shadow: var(--nds-dropshadow-dark);
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  transition: visibility 5s linear;
  float: ${(p) => (p.slideFromRight ? "right" : "left")};
`;

const StyledIcon = styled.div`
  position: relative;
  float: ${(props) => (props.slideFromRight ? "right" : "left")};
`;

const StyledMobileMenuScrim = styled.span`
  @media ${`(min-width: ${deviceBreakpoints.mobileMax})`} {
    display: none;
  }
  display: block;
  height: 100vh;
  width: 100%;
  position: fixed;
  z-index: 100;
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  background: var(--nds-grey-scrim-light);
  transition: visibility 5s linear;
`;

const CloseIcon = styled.span`
  float: ${(props) => (props.slideFromRight ? "right" : "left")};
`;

const Sidebar = (props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <StyledIcon
        open={open}
        {...props}
        onClick={() => {
          setOpen(true);
        }}
      >
        {props.icon}
      </StyledIcon>
      <StyledMobileMenuScrim open={open} />
      <StyledSideBar open={open} {...props}>
        <CloseIcon slideFromRight={props.slideFromRight}>
          <X
            onClick={() => {
              setOpen(false);
            }}
          />
        </CloseIcon>
        {props.menuItems.map((option) => (
          <div>{option}</div>
        ))}
      </StyledSideBar>
    </>
  );
};

Sidebar.propTypes = {
  icon: PropTypes.node,
  menuItems: PropTypes.node,
  slideFromRight: PropTypes.bool,
  children: PropTypes.node, // numbers, string, DOM elements, arrays, fragments, ...
};

Sidebar.defaultProps = {
  slideFromRight: false,
};

export default Sidebar;
