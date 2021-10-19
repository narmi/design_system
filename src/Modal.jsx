import React from "react";
import PropTypes from "prop-types";

const Modal = ({
  open = false,
  setOpen,
  handleClose,
  children,
  classes = "center",
  header,
  actions,
}) => {
  const setNotOpen = setOpen ? () => setOpen(false) : handleClose;
  React.useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else {
      document.body.style.overflow = "";
    }
  }, [open]);
  return (
    <div
      className={`nds-modal ${classes}`}
      data-open={open.toString()}
      style={{ borderRadius: "8px" }}
    >
      <div className="nds-modal-overlay" onClick={setNotOpen}></div>
      <div className="nds-modal-container">
        <div className="nds-modal-dismiss" onClick={setNotOpen}>
          <span
            className={"narmi-icon-x"}
            style={{ fontSize: "20px", color: "rgb(var(--nds-black))" }}
          />
        </div>
        {header ? (
          <>
            <h4 className="nds-sans">{header}</h4> <hr className="nds-hr" />{" "}
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
  handleClose: PropTypes.func, // deprecated
  children: PropTypes.node,
  header: PropTypes.node,
  actions: PropTypes.node,
  classes: PropTypes.string,
};

export default Modal;
