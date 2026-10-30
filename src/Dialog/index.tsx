/* eslint-disable jsx-a11y/no-autofocus */
import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import cc from "classcat";
import { CSSTransition } from "react-transition-group";
import useDialog from "../hooks/interaction/useDialog";

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
  onUserDismiss?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
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
  const transitionRef = useRef(null);
  const isBanner = headerStyle === "banner";
  const { dialogProps, backdropProps, titleProps, closeButtonProps } =
    useDialog({
      isOpen,
      initialFocus: "container",
      // `onUserDismiss` only ever received the close button's click event
      onDismiss: (reason, event) => {
        onUserDismiss(
          reason === "close"
            ? (event as React.MouseEvent<HTMLButtonElement>)
            : undefined,
        );
      },
    });

  const checkContentOverflow = () => {
    setIsContentOverflowing(getIsContentTooLong(contentRef));
  };

  useEffect(() => {
    if (!isOpen) return undefined;
    checkContentOverflow(); // run when the dialog initially opens
    window.addEventListener("resize", checkContentOverflow);
    return () => {
      window.removeEventListener("resize", checkContentOverflow);
    };
  }, [checkContentOverflow, isOpen]);

  const closeButtonJSX = (
    <button
      {...closeButtonProps}
      className={cc([
        "resetButton",
        "nds-dialog-closeButton",
        { "nds-dialog-closeButton--banner": isBanner },
      ])}
      aria-label="close"
    >
      <span className="narmi-icon-x"></span>
    </button>
  );

  // the shim has events for mouse users only; does not require a role
  /* eslint-disable jsx-a11y/no-static-element-interactions,jsx-a11y/no-noninteractive-element-interactions */
  const dialogJSX = (
    <CSSTransition
      timeout={1}
      classNames="nds-dialog-transition"
      appear
      in
      nodeRef={transitionRef}
    >
      <div className="nds-dialog-root" ref={transitionRef}>
        <div className="nds-shim--dark" {...backdropProps}>
          <div className="nds-dialog-focuslock">
            <div
              {...dialogProps}
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
                      {...titleProps}
                      className="padding--y--xxs"
                      style={{ textAlign: "center" }}
                    >
                      {title}
                    </div>
                    {closeButtonJSX}
                  </div>
                ) : (
                  <>
                    <h4 {...titleProps}>{title}</h4>
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
          </div>
        </div>
      </div>
    </CSSTransition>
  );
  /* eslint-enable jsx-a11y/no-static-element-interactions,jsx-a11y/no-noninteractive-element-interactions */

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
