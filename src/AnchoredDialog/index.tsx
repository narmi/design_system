import React, { useRef, useEffect } from "react";
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
}: AnchoredDialogProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const { layerProps } = useDropdownLayer({
    isOpen,
    setIsOpen: onUserDismiss,
    matchWidth: false,
    isPortalled,
    ariaPopupType: "dialog",
  });

  const handleKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onUserDismiss();
    }
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onUserDismiss();
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    document.addEventListener("keydown", handleKey);
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen, onUserDismiss]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      ref={modalRef}
      className="nds-anchoredDialog"
      data-testid={testId}
      {...(layerProps as React.HTMLAttributes<HTMLDivElement>)}
    >
      {renderHeader && (
        <div className="nds-anchoredDialog-header">{renderHeader()}</div>
      )}
      <div className="nds-anchoredDialog-content">{children}</div>
      {renderFooter && (
        <div className="nds-anchoredDialog-footer">{renderFooter()}</div>
      )}
    </div>
  );
};

export default AnchoredDialog;
