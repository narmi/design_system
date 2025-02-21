/* eslint-disable jsx-a11y/no-autofocus */
import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
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
  const threshold = 1; // Scrollheight in firefox is reported as 1px taller
  let result = false;
  if (contentRef.current) {
    result =
      contentRef.current.scrollHeight >
      contentRef.current.clientHeight + threshold;
  }
  return result;
};

export interface DialogProps {
  /** Scrollable contents of the Dialog */
  children: React.ReactNode;
  /** Heading in the top of the Dialog */
  title?: string;
  /** Optional notification content to render pinned under the header */
  notification?: React.ReactNode;
  /** Contents of Dialog footer, typically reserved for action buttons */
  footer?: React.ReactNode;
  /** Visual style for Dialog header */
  headerStyle?: "bordered" | "plain" | "banner";
  /** Controls open/close state of the modal. Use the `onUserDismiss` callback to update. */
  isOpen?: boolean;
  /**
   * Callback to handle user taking an action to dismiss the modal
   * (click outside, Escape key, click close button)
   */
  onUserDismiss?: () => void;
  /**
   * Sets a custom modal width.
   * Use the full CSS value with the unit (e.g. "400px")
   */
  width?: string;
  /** Optional value for `data-testid` attribute */
  testId?: string;
  id?: string;
}

/**
 * Renders a centered modal dialog with an overlay
 *
 * This component uses a `ReactDOM` portal to render it as a direct
 * child of `document.body`.
 */
const Dialog = ({
  isOpen = false,
  onUserDismiss = noop,
  title = "",
  headerStyle = "bordered",
  children,
  notification,
  footer,
  width = "500px",
  testId,
}: DialogProps) => {
  const [isContentOverflowing, setIsContentOverflowing] = useState(false);
  const contentRef = useRef(null);
  const shimRef = useRef(null);
  const isBanner = headerStyle === "banner";
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

  const closeButtonJSX = (
    <button
      className={cc([
        "resetButton",
        "nds-dialog-closeButton",
        { "nds-dialog-closeButton--banner": isBanner },
      ])}
      aria-label="close"
      onClick={onUserDismiss}
    >
      <span className="narmi-icon-x"></span>
    </button>
  );

  // the shim has events for mouse users only; does not require a role
  /* eslint-disable jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */
  const dialogJSX = (
    <CSSTransition timeout={1} classNames="nds-dialog-transition" appear in>
      <div className="nds-dialog-root">
        <div className="nds-shim--dark" ref={shimRef} onClick={handleShimClick}>
          <FocusLock autoFocus={false} className="nds-dialog-focuslock">
            <div
              role="dialog"
              aria-labelledby="aria-dialog-label"
              aria-modal="true"
              className="nds-dialog"
              // @ts-expect-error DetailedHTMLProps does not specify arbitrary custom properties
              style={{ "--dialog-preferred-width": width }}
              data-testid={testId}
            >
              <div
                className={`nds-dialog-header nds-dialog-header--${headerStyle}`}
              >
                {isBanner ? (
                  <div className="margin--y--s">
                    <div
                      className="padding--y--xxs"
                      id="aria-dialog-label"
                      style={{ textAlign: "center" }}
                    >
                      {title}
                    </div>
                    {closeButtonJSX}
                  </div>
                ) : (
                  <>
                    <h4 id="aria-dialog-label">{title}</h4>
                    {closeButtonJSX}
                  </>
                )}
              </div>
              {notification && (
                <div className="nds-dialog-notification padding--y padding--x--xl">
                  {notification}
                </div>
              )}
              <div
                // content padding here
                ref={contentRef}
                className={cc([
                  "nds-dialog-content nds-typography padding--top--xs",
                  { "padding--bottom--xl": !footer || isContentOverflowing },
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
      </div>
    </CSSTransition>
  );
  /* eslint-enable jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */

  function renderDialogInOutlet() {
    // create a single outlet
    if (!document.getElementById("outlet")) {
      const outlet = document.createElement("div");
      outlet.setAttribute("id", "outlet");
      outlet.setAttribute("class", "outlet");
      document.body.appendChild(outlet);
    }
    return ReactDOM.createPortal(dialogJSX, document.getElementById("outlet"));
  }

  return <>{isOpen && document && renderDialogInOutlet()}</>;
};

export default Dialog;
