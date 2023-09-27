/* eslint-disable jsx-a11y/no-autofocus */
import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import rafSchd from "raf-schd";
import cc from "classcat";
import useLockBodyScroll from "../hooks/useLockBodyScroll";
import { CSSTransition } from "react-transition-group";
import FocusLock from "react-focus-lock";

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
  testId,
}) => {
  const [isContentOverflowing, setIsContentOverflowing] = useState(false);
  const contentRef = useRef(null);
  const shimRef = useRef(null);
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

  const handleShimClick = ({ target }) => {
    if (shimRef.current && target === shimRef.current) {
      onUserDismiss();
    }
  };

  // the shim has events for mouse users only; does not require a role
  /* eslint-disable jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */
  const dialogJSX = (
    <CSSTransition timeout={1} classNames="nds-dialog-transition" appear in>
      <div className="nds-shim--dark" ref={shimRef} onClick={handleShimClick}>
        <FocusLock autoFocus={false}>
          <div
            role="dialog"
            aria-labelledby="aria-dialog-label"
            aria-modal="true"
            className="nds-dialog"
            style={{ "--dialog-preferred-width": width }}
            data-testid={testId}
          >
            <div
              className={`nds-dialog-header nds-dialog-header--${headerStyle}`}
            >
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
              className={cc([
                "nds-dialog-content nds-typography padding--top--xs",
                { "padding--bottom--xl": !footer },
              ])}
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
        </FocusLock>
      </div>
    </CSSTransition>
  );
  /* eslint-enable jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */

  return (
    <>{isOpen && document && ReactDOM.createPortal(dialogJSX, document.body)}</>
  );
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
  /** Optional value for `data-testid` attribute */
  testId: PropTypes.string,
};

export default Dialog;
