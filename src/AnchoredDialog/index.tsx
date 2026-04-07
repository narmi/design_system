/* eslint-disable jsx-a11y/no-autofocus */
import React, { useEffect } from "react";
import { useOnClickOutside } from "usehooks-ts";
import FocusLock from "react-focus-lock";
import useDropdownLayer from "../hooks/useDropdownLayer";

export interface AnchoredDialogProps {
  /** Renders the dialog content */
  children: React.ReactNode;
  /** Optional header content to render at the top of the dialog */
  renderHeader?: () => React.ReactNode;
  /** Optional footer content to render at the bottom of the dialog */
  renderFooter?: () => React.ReactNode;
  /** Controls open/close state of the dialog */
  isOpen?: boolean;
  /** Callback to handle user dismissing the dialog */
  onUserDismiss?: () => void;
  /** Whether the dialog is rendered in a Portal with fixed positioning and higher z-index */
  isPortalled?: boolean;
  /** Optional value for `data-testid` attribute */
  testId?: string;
  /** Trigger element (button, etc.) that anchors this dialog */
  trigger?: React.ReactElement;
}

/**
 * A dialog component that can anchor to a trigger element.
 * Supports positioning and z-index customization via layout options.
 */
const AnchoredDialog = ({
  isOpen = false,
  onUserDismiss = () => {},
  renderHeader,
  renderFooter,
  isPortalled = false,
  children,
  testId,
  trigger,
}: AnchoredDialogProps) => {
  const { anchorProps, layerProps } = useDropdownLayer({
    isOpen,
    setIsOpen: onUserDismiss,
    matchWidth: false,
    isPortalled,
    ariaPopupType: "dialog",
  });

  useOnClickOutside(layerProps.ref as React.RefObject<HTMLDivElement>, () => {
    onUserDismiss();
  });

  const handleKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onUserDismiss();
    }
  };

  // Key listener for Escape
  useEffect(() => {
    if (!isOpen) return;

    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, onUserDismiss]);

  if (!isOpen && !trigger) {
    return null;
  }

  // Clone trigger element and attach anchor props if provided
  const triggerElement = trigger
    ? React.cloneElement(trigger, {
        ref: anchorProps.ref,
        style: {
          ...trigger.props.style,
          ...anchorProps.style,
        },
        "aria-haspopup": anchorProps["aria-haspopup"],
        "aria-expanded": anchorProps["aria-expanded"],
      })
    : null;

  return (
    <>
      {triggerElement}
      {isOpen && (
        <div
          ref={layerProps.ref as React.RefObject<HTMLDivElement>}
          className="nds-anchoredDialog"
          data-testid={testId}
          style={layerProps.style as React.CSSProperties}
        >
          <FocusLock
            returnFocus={true}
            autoFocus={true}
            className="nds-anchoredDialog-inner"
          >
            {renderHeader && (
              <div className="nds-anchoredDialog-header border--bottom">
                {renderHeader()}
              </div>
            )}
            <div className="nds-anchoredDialog-content">{children}</div>
            {renderFooter && (
              <div className="nds-anchoredDialog-footer border--top">
                {renderFooter()}
              </div>
            )}
          </FocusLock>
        </div>
      )}
    </>
  );
};

export default AnchoredDialog;
