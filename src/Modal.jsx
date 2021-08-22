import React from "react";
import PropTypes from "prop-types";
import { X } from "react-feather";

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

export default Modal;
