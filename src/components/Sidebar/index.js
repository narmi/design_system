import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { deviceBreakpoints } from "../../globalStyles";
import { X } from "react-feather";

const StyledSideBar = styled.div`
  position: fixed;
  top: 0;
  left: ${(p) => (p.slideFromRight ? null : 0)};
  right: ${(p) => (p.slideFromRight ? 0 : null)};
  height: 100vh;
  width: 335px;
  z-index: 100;
  min-width: 200px;
  background-color: var(--nds-white);
  border-radius: 4px;
  box-shadow: var(--nds-dropshadow-dark);
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  transition: visibility 0.2s linear;
  float: ${(p) => (p.slideFromRight ? "right" : "left")};
`;

const StyledIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
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
  transition: visibility 0.2s linear;
`;

const CloseIcon = styled.span`
  float: right;
  padding-right: 15px;
  padding-top: 15px;
`;

const Sidebar = (props) => {
  const [open, setOpen] = React.useState(false);
  const openSidebar = () => {
    setOpen(true);
  };

  const closeSidebar = () => {
    setOpen(false);
  };
  return (
    <>
      <StyledIcon onClick={openSidebar}>{props.icon}</StyledIcon>
      <StyledMobileMenuScrim open={open} />
      <StyledSideBar open={open} {...props}>
        <CloseIcon slideFromRight={props.slideFromRight}>
          <X onClick={closeSidebar} />
        </CloseIcon>
        {props.children}
      </StyledSideBar>
    </>
  );
};

Sidebar.propTypes = {
  icon: PropTypes.node,
  slideFromRight: PropTypes.bool,
  children: PropTypes.node, // numbers, string, DOM elements, arrays, fragments, ...
};

Sidebar.defaultProps = {
  slideFromRight: false,
};

export default Sidebar;
