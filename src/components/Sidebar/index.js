import React from "react";
import PropTypes, { bool } from "prop-types";
import styled, { css } from "styled-components";
import Button from "components/Button";
import { deviceBreakpoints } from "../../globalStyles";
import { Menu, X } from "react-feather";

const StyledSideBar2 = styled.div`
    background-color: var(--nds-white);
    border-radius: 4px;
    box-shadow: var(--nds-dropshadow-dark);
    box-sizing: border-box;
    transform: translate(0%);
    height: 100%;
    width: 75%;
    top: 0;
    right; 0;
`;

const StyledSideBar = styled.div`
    position: relative;
    top: 0;
    right: 0;
    height: 100vh;
    width: 75%;
    background-color: var(--nds-white);
    border-radius: 4px;
    box-shadow: var(--nds-dropshadow-dark);
    float: ${(p) => p.slideFromRight ? "right" : "left"};
`;

const StyledIcon = styled.div`
    position: relative;
    display: ${(props) => props.open ? "none" : "inline"};
    float: ${(props) => props.slideFromRight ? "right" : "left"};
`;

const Sidebar = (props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div >
        <StyledIcon open={open} {...props} onClick={()=>{setOpen(true)}}>
          {props.icon}
        </StyledIcon>
      {open ? (
        <StyledSideBar open={open} {...props}>
            <X style={{"float":props.slideFromRight ? "right" : "left"}} onClick={()=>{setOpen(false)}}/>
          {props.menuItems.map((option) => (
            <div>{option}</div>
          ))}
        </StyledSideBar>
      ) : null}
    </div>
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
