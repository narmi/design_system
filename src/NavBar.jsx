import React from "react";
import PropTypes, { bool } from "prop-types";
import { Menu } from "react-feather";
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
      <Modal open={open} setOpen={setOpen} type="right">
        <div className={`nds-navbar-container`}>
          <ButtonBar className="nds-navbar-mainmenu">
            {props.children}
          </ButtonBar> {/* .nds-navbar-mainmenu */}
          <ButtonBar className="nds-navbar-usermenu">
            <Details summary={<Button type="menu">{props.user.email||"User"}</Button>} key={name} React={props.React}>
              <Button type="menu" href="/settings">Settings</Button>
              <Button type="menu" href="/logout">Logout</Button>
            </Details>
          </ButtonBar> {/* .nds-navbar-usermenu */}
        </div> {/* .nds-navbar-container */}
      </Modal>
      <div
        className="nds-navbar-hamburger"
        onClick={() => {setOpen(!open)}}
      >
        <Menu />
      </div> {/* .nds-navbar-hamburger */}
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

NavBar.styles = `
  .nds-navbar {
    z-index: 1;
    background: rgb(var(--nds-background));
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;
  }
  .nds-navbar .nds-navbar-hamburger {
    cursor: pointer;
  }
  .nds-navbar .nds-navbar-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: auto;
  }
  .nds-navbar .nds-navbar-container .nds-navbar-mainmenu {
    flex-grow: 1;
  }

  @media ${`(min-width: ${deviceBreakpoints.desktop})`} {
    .nds-navbar {
      position: static;
      padding: 0;
      justify-content: normal;
    }
    .nds-navbar .nds-navbar-container {
      flex-direction: row;
    }
    .nds-navbar .nds-navbar-hamburger {
      display: none;
    }
    .nds-navbar > .nds-modal {
      flex-grow: 1;
    }
    .nds-navbar > .nds-modal > .nds-modal-container {
      display: block;
      position: static;
    }
    .nds-navbar > .nds-modal.open > .nds-modal-overlay {
      display: none;
    }
    .nds-navbar .nds-details {
      padding-right: 30px;
    }
  }
`;

export default NavBar;
