/* eslint-disable jsx-a11y/no-autofocus */
import React, { useRef } from "react";
import useOnClickOutside from "../hooks/interaction/useOnClickOutside";
import useDismiss from "../hooks/interaction/useDismiss";
import useFocusTrap from "../hooks/interaction/useFocusTrap";
import useDropdownLayer from "../hooks/layout/useDropdownLayer";

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
    alignment: "start",
  });
  const trapRef = useRef<HTMLDivElement>(null);
  const { trapProps } = useFocusTrap({ ref: trapRef, isActive: isOpen });
  useDismiss({ isOpen, onDismiss: () => onUserDismiss() });

  useOnClickOutside(layerProps.ref as React.RefObject<HTMLDivElement>, () => {
    onUserDismiss();
  });

  if (!isOpen && !trigger) {
    return null;
  }

  const triggerWithAria =
    trigger &&
    React.cloneElement(trigger, {
      "aria-haspopup": anchorProps["aria-haspopup"],
      "aria-expanded": isOpen,
    });

  return (
    <>
      {trigger && (
        <div
          ref={anchorProps.ref as React.RefObject<HTMLDivElement>}
          style={anchorProps.style as React.CSSProperties}
        >
          {triggerWithAria}
        </div>
      )}
      {isOpen && (
        <div
          ref={layerProps.ref as React.RefObject<HTMLDivElement>}
          className="nds-anchoredDialog"
          data-testid={testId}
          style={layerProps.style as React.CSSProperties}
        >
          <div
            className="nds-anchoredDialog-inner"
            ref={trapRef}
            {...trapProps}
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
          </div>
        </div>
      )}
    </>
  );
};

export default AnchoredDialog;
