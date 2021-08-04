import React from "react";
import PropTypes from "prop-types";

import { X } from "react-feather";
import { deviceBreakpoints } from "global";

export const modalZIndex = 100;

const Modal = ({ open, setOpen, children, type }) => {
  return <div className={`nds-modal${open?" open":""} ${type}`}>
    <div
      className="nds-modal-overlay"
      onClick={() => {setOpen(false)}}
    />
    <div className="nds-modal-container">
      <div className="nds-modal-dismiss" onClick={() => {setOpen(false)}}>
        <X/>
      </div>
      {children}
    </div>
  </div>;
};

Modal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  children: PropTypes.node,
  type: PropTypes.str,
};

Modal.defaultProps = {
  open: false,
  setOpen: () => {},
  type: "center",
};

Modal.styles = `
  .nds-modal .nds-modal-overlay {
    display: none;
    z-index: ${modalZIndex};
    background: #000;
    opacity: 70%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .nds-modal.open > .nds-modal-overlay {
    display: block;
  }

  .nds-modal .nds-modal-dismiss {
    display: none;
    position: absolute;
    top: 18px;
    right: 18px;
  }
  .nds-modal.open > .nds-modal-container > .nds-modal-dismiss {
    display: block;
  }
  .nds-modal > .nds-modal-container {
    display: none;
    z-index: ${modalZIndex};
    position: fixed;
    background: rgb(var(--nds-background));
  }
  .nds-modal.open > .nds-modal-container {
    display: block;
  }

  /* right styles */
  .nds-modal.right > .nds-modal-container {
    top: 0;
    right: 0;
    bottom: 0;
    min-width: 335px;
    padding: 40px 25px 40px 20px;
  }

  /* details styles */
  .nds-modal.details.open .nds-modal-overlay {
    display: none;
  }
  .nds-modal.details.open > .nds-modal-container > .nds-modal-dismiss {
    display: none;
  }
  .nds-modal.details > .nds-modal-container {
    position: static;
  }
  @media ${`(min-width: ${deviceBreakpoints.desktop})`} {
    .nds-modal.details.open .nds-modal-overlay {
      display: block;
      opacity: 0;
    }
    .nds-modal.details > .nds-modal-container {
      position: fixed;
    }
  }
`;

export default Modal;
