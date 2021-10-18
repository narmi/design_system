import React, { useState } from "react";
import PropTypes from "prop-types";

const Modal = ({ open, setOpen, handleClose, children, classes, header, actions }) => {
  const setNotOpen = setOpen ? setOpen.bind(null, false) : handleClose;
  return (
    <div
      className={`nds-modal ${classes}`}
      data-open={open.toString()}
      style={{borderRadius:"8px"}}
    >
      <div
        className="nds-modal-overlay"
        onClick={setNotOpen}
      ></div>
      <div className="nds-modal-container">
        <div
          className="nds-modal-dismiss"
          onClick={setNotOpen}
        >
          <span className={"narmi-icon-x"} style={{ fontSize:"20px", color: "rgb(var(--nds-black))" }} />
        </div>
        {header ? <><h4 className="nds-sans">{header}</h4> <hr className="nds-hr"/> </>: ""}
        {children}
        <div
          className="nds-modal-action-row"
        >
          {actions}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  handleClose: PropTypes.func, // deprecated
  children: PropTypes.node,
  header: PropTypes.node,
  actions: PropTypes.node,
  classes: PropTypes.string,
};

Modal.defaultProps = {
  open: false,
  setOpen: () => {},
  classes: "center",
};

export default Modal;
