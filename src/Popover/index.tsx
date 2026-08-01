/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState, useEffect, useCallback } from "react";
import cc from "classcat";
import FocusLock from "react-focus-lock";
import useDropdownLayer from "../hooks/useDropdownLayer";
import type { Placement } from "../hooks/useDropdownLayer";

const noop = () => {};

export interface PopoverProps {
  /** Content of popover */
  content: React.ReactNode;
  /**
   * The root node of JSX passed into Tooltip as children will act as the tooltip trigger
   *
   * @deprecated use `renderTrigger` instead.
   */
  children?: React.ReactNode;
  /**
   * Render function for a custom trigger aware of the open state of the Popover.
   * Called with `(isOpen) => {}`, the state of the Popover.
   */
  renderTrigger?: (isOpen?: boolean) => React.ReactNode;
  /** Sets preferred side of the trigger the tooltip should appear */
  side?: Placement;
  /** CSS `display` value for the element that wraps the Tooltip children */
  wrapperDisplay?: "inline-flex" | "inline-block" | "inline" | "block" | "flex";
  /** When `true`, the Popover container will match the width of its triggering element */
  matchTriggerWidth?: boolean;
  /** Optional value for `data-testid` attribute */
  testId?: string;
  /** Close the popover if the User clicks on the content */
  closeOnContentClick?: boolean;
  /** If isOpen is set the component becomes a controlled component. Use the `onUserDismiss` callback to update. */
  isOpen?: boolean;
  /**
   * Callback to handle user taking an action to __dismiss__ the popover
   * (click outside, Escape key)
   */
  onUserDismiss?: () => void;
  /**
   * Callback to handle user taking an action to __enable__ the popover
   * (click or key interaction on the trigger button rendered in Popover)
   */
  onUserEnable?: () => void;
  /**
   * When set to `true`, the first focusable element will automatically receive focus
   * whenever the popover opens
   */
  autoFocus?: boolean;
  /**
   * When set to `false` the popover positioned element will not have a box shadow.
   * Useful for adding a custom box shadow.
   */
  hasShadow?: boolean;
}

/**
 * Generic Popover component. Renders a floating element that can contain any content,
 * positioned relatively to its triggering element.
 *
 * This Popover only appears on "click" (focus + activate or mouse click) interactions.
 * The Escape key and clicking outside of the Popover will dismiss it.
 * For a hover-based informative popover, use `Tooltip`.
 *
 * The popover will position itself based on the `side` prop, but will
 * automatically reposition to avoid collisions with viewport edges.
 */
const Popover = ({
  side = "bottom",
  content,
  children,
  renderTrigger = () => <></>,
  wrapperDisplay = "inline-flex",
  matchTriggerWidth = false,
  testId,
  closeOnContentClick = false,
  isOpen,
  autoFocus = false,
  hasShadow = true,
  onUserDismiss = noop,
  onUserEnable = noop,
}: PopoverProps) => {
  const isControlled = isOpen === true || isOpen === false;
  const hasChildren = React.Children.count(children) > 0;
  const [open, setOpen] = useState(false);
  const shouldRenderPopover = isControlled ? !!isOpen : open;
  const popoverContent =
    closeOnContentClick && React.isValidElement(content)
      ? React.cloneElement(
          content as React.ReactElement<{ onClick?: () => void }>,
          {
            onClick: () => {
              setOpen(false);
              onUserDismiss();
            },
          },
        )
      : content;

  const closePopover = useCallback(() => {
    setOpen(false);
    onUserDismiss();
  }, [onUserDismiss]);

  const togglePopover = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (isControlled) {
      if (isOpen) {
        onUserDismiss();
      } else {
        onUserEnable();
      }
    } else {
      setOpen((open) => !open);
    }
  };

  const handleKeyDown = ({ key }: React.KeyboardEvent) => {
    if (key === "Enter") {
      setOpen(true);
      onUserEnable();
    }
  };

  const { anchorProps, layerProps } = useDropdownLayer({
    isOpen: shouldRenderPopover,
    setIsOpen: (v) => {
      if (!v) closePopover();
    },
    matchWidth: matchTriggerWidth,
    placement: side,
  });

  const { ref: anchorRef, style: anchorStyle, ...anchorRest } = anchorProps;
  const { ref: layerRef, ...layerRest } = layerProps;

  useEffect(() => {
    if (!shouldRenderPopover) return;

    const handleOutsideClick = (event: MouseEvent) => {
      const anchor = typeof anchorRef === "object" ? anchorRef?.current : null;
      const layer = typeof layerRef === "object" ? layerRef?.current : null;
      if (
        anchor &&
        !anchor.contains(event.target as Node) &&
        layer &&
        !layer.contains(event.target as Node)
      ) {
        closePopover();
      }
    };

    const handleEscape = ({ key }: KeyboardEvent) => {
      if (key === "Escape") closePopover();
    };

    document.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("keydown", handleEscape);
    };
  }, [shouldRenderPopover, closePopover, anchorRef, layerRef]);

  return (
    <>
      <div
        ref={anchorRef as React.Ref<HTMLDivElement>}
        {...anchorRest}
        style={{ ...anchorStyle, display: wrapperDisplay }}
        onClick={togglePopover}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        className="nds-popover-trigger"
        data-testid="nds-popover-trigger"
        aria-haspopup="true"
        aria-expanded={shouldRenderPopover}
      >
        {/* Support both legacy (children) and standard (render prop) triggers */}
        {hasChildren ? children : renderTrigger(isOpen)}
      </div>
      <div
        ref={layerRef as React.Ref<HTMLDivElement>}
        {...layerRest}
        className={cc([
          "nds-typography nds-popover",
          "rounded--all bgColor--white",
          {
            "nds-popover--elevated": hasShadow,
          },
        ])}
        style={layerRest.style}
        data-testid={testId}
      >
        {shouldRenderPopover && (
          <div tabIndex={-1}>
            <FocusLock autoFocus={autoFocus}>{popoverContent}</FocusLock>
          </div>
        )}
      </div>
    </>
  );
};

export default Popover;
