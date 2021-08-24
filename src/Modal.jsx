import React, { useState } from "react";
import PropTypes from "prop-types";

const Modal = ({ open, handleClose, children, classes, header, actions }) => {
  return (
    <div
      className={`nds-modal ${classes}`}
      data-open={open.toString()}
      style={{ borderRadius: "8px" }}
    >
      <div className="nds-modal-overlay"></div>
      <div className="nds-modal-container">
        <div className="nds-modal-dismiss" onClick={handleClose}>
          <span
            className={"narmi-icon-x"}
            style={{ fontSize: "20px", color: "rgb(var(--nds-text-header))" }}
          />
        </div>
        {header ? (
          <>
            <h3 className="nds-sans">{header}</h3> <hr className="nds-hr" />{" "}
          </>
        ) : (
          ""
        )}
        {children}
        <div className="nds-modal-action-row">{actions}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  children: PropTypes.node,
  classes: PropTypes.string,
};

Modal.defaultProps = {
  open: false,
  setOpen: () => {},
  classes: "center",
};

export default Modal;
