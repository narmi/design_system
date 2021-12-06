import React from "react";
import PropTypes, { bool } from "prop-types";
import { deviceBreakpoints } from "global";
import Details from "Details";
import Button from "Button";
import ButtonBar from "ButtonBar";
import Modal from "Modal";

const NavBar = (props) => {
  const [open, setOpen] = props.React.useState(false);
  return (
    <div className="nds-navbar">
      <div className="nds-navbar-logo">{props.logo}</div>
      <Modal open={open} setOpen={setOpen} classes="right">
        <div className={`nds-navbar-container`}>
          <ButtonBar className="nds-navbar-mainmenu">
            {props.children}
          </ButtonBar>{" "}
          {/* .nds-navbar-mainmenu */}
          <ButtonBar className="nds-navbar-usermenu">
            <Details
              summary={
                <Button type="menu">{props.user.username || "User"}</Button>
              }
              key={name}
              React={props.React}
            >
              <Button type="menu" href="/settings">
                Settings
              </Button>
              <Button type="menu" href="/logout">
                Logout
              </Button>
            </Details>
          </ButtonBar>{" "}
          {/* .nds-navbar-usermenu */}
        </div>{" "}
        {/* .nds-navbar-container */}
      </Modal>
      <div
        className="nds-navbar-hamburger"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className="narmi-icon-menu" />
      </div>{" "}
      {/* .nds-navbar-hamburger */}
    </div>
  );
};

NavBar.propTypes = {
  logo: PropTypes.node,
  user: PropTypes.object,
};

NavBar.defaultProps = {
  user: {},
  React,
};

export default NavBar;
