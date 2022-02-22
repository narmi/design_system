import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import rafSchd from "raf-schd";
import cc from "classcat";
import useLockBodyScroll from "./useLockBodyScroll";

const noop = () => {};

/**
 * Checks if content in content area is overflowing
 * @param {Object} contentRef ref of the element to check
 * @returns {Boolean}
 */
const getIsContentTooLong = (contentRef) => {
  let result = false;
  if (contentRef.current) {
    result = contentRef.current.scrollHeight > contentRef.current.clientHeight;
  }
  return result;
};

/**
 * Renders a centered modal dialog with an overlay
 *
 * This component uses a `ReactDOM` portal to render it as a direct
 * child of `document.body`.
 */
const Dialog = ({
  isOpen = false,
  onUserDismiss = noop,
  title,
  headerStyle = "bordered",
  children,
  footer,
  width = "500px",
}) => {
  const [isContentOverflowing, setIsContentOverflowing] = useState(false);
  const contentRef = useRef(null);
  const dialogRef = useRef(null);
  useLockBodyScroll(isOpen);

  // `rafSchd` uses `requestAnimationFrame` to schedule the state update
  // for the next frame the browser draws - good for performance
  const checkContentOverflow = () => {
    rafSchd(setIsContentOverflowing(getIsContentTooLong(contentRef)));
  };

  const handleKeyDown = ({ key }) => {
    if (key === "Escape") {
      onUserDismiss();
    }
  };

  useEffect(() => {
    if (isOpen) checkContentOverflow(); // run when the dialog initially opens
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", checkContentOverflow);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", checkContentOverflow);
    };
  }, [handleKeyDown, checkContentOverflow, isOpen]);

  const handleClick = (event) => {
    const isClickInside = dialogRef?.current?.contains(event?.target);
    if (isOpen && !isClickInside) onUserDismiss();
  };

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [isOpen]);

  const dialogJSX = (
    <div className="nds-shim--dark">
      <div
        role="dialog"
        aria-labelledby="aria-dialog-label"
        aria-modal="true"
        className="nds-dialog"
        style={{ width }}
        ref={dialogRef}
      >
        <div className={`nds-dialog-header nds-dialog-header--${headerStyle}`}>
          <h4 id="aria-dialog-label">{title}</h4>
          <button
            className="resetButton nds-dialog-closeButton"
            aria-label="close"
            onClick={onUserDismiss}
          >
            <span className="narmi-icon-x"></span>
          </button>
        </div>
        <div
          ref={contentRef}
          className="nds-dialog-content nds-typography padding--top--xs"
        >
          {children}
        </div>
        {footer && (
          <div
            className={cc([
              "nds-dialog-footer",
              { "nds-dialog-footer--overflowing": isContentOverflowing },
            ])}
          >
            {footer}
          </div>
        )}
      </div>
    </div>
  );

  return <>{isOpen && ReactDOM.createPortal(dialogJSX, document.body)}</>;
};

Dialog.propTypes = {
  /** Scrollable contents of the Dialog */
  children: PropTypes.node.isRequired,
  /** Heading in the top of the Dialog */
  title: PropTypes.string.isRequired,
  /** Contents of Dialog footer, typically reserved for action buttons */
  footer: PropTypes.node,
  /** Visual style for Dialog header */
  headerStyle: PropTypes.oneOf(["bordered", "plain"]),
  /** Controls open/close state of the modal. Use the `onUserDismiss` callback to update. */
  isOpen: PropTypes.bool,
  /**
   * Callback to handle user taking an action to dismiss the modal
   * (click outside, Escape key, click close button)
   */
  onUserDismiss: PropTypes.func,
  /**
   * Sets a custom modal width.
   * Use the full CSS value with the unit (e.g. "400px")
   */
  width: PropTypes.string,
};

export default Dialog;
