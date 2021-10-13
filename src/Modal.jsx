import React, { useState } from "react";
import PropTypes from "prop-types";

const Modal = ({ open, setOpen, children, classes, header, actions }) => {
  return (
    <div
      className={`nds-modal ${classes}`}
      data-open={open.toString()}
      style={{borderRadius:"8px"}}
    >
      <div
        className="nds-modal-overlay"
        onClick={setOpen.bind(null, false)}
      ></div>
      <div className="nds-modal-container">
        <div
          className="nds-modal-dismiss"
          onClick={setOpen.bind(null, false)}
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
