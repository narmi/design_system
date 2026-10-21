import { useRef } from "react";
import useOnClickOutside from "../useOnClickOutside";

/** Why the user dismissed the layer */
export type DismissReason = "escape" | "backdrop" | "outside";

export type DismissEvent = React.KeyboardEvent | React.MouseEvent | MouseEvent;

export interface UseDismissOptions {
  /** Whether the layer is currently open */
  isOpen: boolean;
  /** Called when the user takes a dismissing action */
  onDismiss: (reason: DismissReason, event: DismissEvent) => void;
  /**
   * Ref to the layer element. Required for `outsideClick`; mousedowns
   * inside this element never count as outside.
   */
  ref?: React.RefObject<HTMLElement | null>;
  /** Dismiss when Escape is pressed with focus inside the layer (default `true`) */
  escapeKey?: boolean;
  /**
   * Dismiss on mousedown anywhere outside `ref` (default `false`).
   * Use this for non-modal layers that have no backdrop. A modal layer
   * should spread `backdropProps` instead; enabling both fires twice.
   */
  outsideClick?: boolean;
}

export interface UseDismissResult {
  /** Props to spread onto the layer element (dialog, popover, menu) */
  layerProps: {
    onKeyDown: (event: React.KeyboardEvent) => void;
  };
  /**
   * Props to spread onto a full-screen backdrop behind a modal layer.
   * Fires only for mousedowns directly on the backdrop, not on its children.
   */
  backdropProps: {
    onMouseDown: (event: React.MouseEvent) => void;
  };
}

/**
 * Wires up the ways a user can dismiss a floating layer: the Escape key,
 * a click on a backdrop, or a click outside the layer. Reports every
 * dismissal through a single `onDismiss(reason)` callback.
 */
const useDismiss = ({
  isOpen,
  onDismiss,
  ref,
  escapeKey = true,
  outsideClick = false,
}: UseDismissOptions): UseDismissResult => {
  const fallbackRef = useRef<HTMLElement | null>(null);

  useOnClickOutside(ref ?? fallbackRef, (event) => {
    if (isOpen && outsideClick) onDismiss("outside", event);
  });

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (!isOpen || !escapeKey) return;
    if (event.key !== "Escape" || event.defaultPrevented) return;
    onDismiss("escape", event);
  };

  const onMouseDown = (event: React.MouseEvent) => {
    if (!isOpen || event.target !== event.currentTarget) return;
    onDismiss("backdrop", event);
  };

  return {
    layerProps: { onKeyDown },
    backdropProps: { onMouseDown },
  };
};

export default useDismiss;
