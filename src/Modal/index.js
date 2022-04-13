/* eslint-disable */ // file will be removed in a future release
import React from "react";
import PropTypes from "prop-types";

/**
 * **⚠️ DEPRECATED ⚠️**
 *
 * This component will be removed in a future release.
 * Please use `Dialog` instead to display a centered modal window.
 */
const Modal = ({
  open = false,
  setOpen,
  handleClose,
  children,
  classes = "center",
  maxWidth,
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
      <div
        className="nds-modal-container"
        style={{ maxWidth: `${maxWidth}px` }}
      >
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
        {actions && <div className="nds-modal-action-row">{actions}</div>}
      </div>
    </div>
  );
};

Modal.propTypes = {
  /** JSX content to render within the Modal body */
  children: PropTypes.node.isRequired,
  /** JSX content to render as the Modal header */
  header: PropTypes.node,
  /** When true, the Modal will be open */
  open: PropTypes.bool,
  /**
   * Callback called when user takes and opening or dismissal action on the modal.
   * Function is invoked with a boolean representing the new `open` value to set.
   */
  setOpen: PropTypes.func,
  /**
   * ⚠️ DEPRECATED
   * This prop will be removed in a future release.
   * Callback invoked on user dismissal actions.
   */
  handleClose: PropTypes.func,
  /** JSX content to render within the actions area of the Modal */
  actions: PropTypes.node,
  /** Additional classes to pass to the root Modal element */
  classes: PropTypes.oneOf(["center", "right", "details", "wide details"]),
  /** Sets a max-width for the Modal container */
  maxWidth: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
};

export default Modal;
