import { useEffect, useRef } from "react";
import useOnClickOutside from "../useOnClickOutside";

/** Why the user dismissed the layer */
export type DismissReason = "escape" | "backdrop" | "outside";

export type DismissEvent = KeyboardEvent | React.MouseEvent | MouseEvent;

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
  /** Dismiss when Escape is pressed anywhere in the document (default `true`) */
  escapeKey?: boolean;
  /**
   * Dismiss on mousedown anywhere outside `ref` (default `false`).
   * Use this for non-modal layers that have no backdrop. A modal layer
   * should spread `backdropProps` instead; enabling both fires twice.
   */
  outsideClick?: boolean;
}

export interface UseDismissResult {
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
 *
 * Escape is observed on `document` while the layer is open, so it works
 * wherever focus is. An Escape keydown that something else already
 * handled (`event.defaultPrevented`) is ignored, so nested widgets like
 * a Combobox can close their own listbox first.
 */
const useDismiss = ({
  isOpen,
  onDismiss,
  ref,
  escapeKey = true,
  outsideClick = false,
}: UseDismissOptions): UseDismissResult => {
  const fallbackRef = useRef<HTMLElement | null>(null);

  // keep the latest handler without resubscribing the listener every render
  const onDismissRef = useRef(onDismiss);
  onDismissRef.current = onDismiss;

  useOnClickOutside(ref ?? fallbackRef, (event) => {
    if (isOpen && outsideClick) onDismissRef.current("outside", event);
  });

  useEffect(() => {
    if (!isOpen || !escapeKey) return undefined;
    const listener = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || event.defaultPrevented) return;
      onDismissRef.current("escape", event);
    };
    document.addEventListener("keydown", listener);
    return () => document.removeEventListener("keydown", listener);
  }, [isOpen, escapeKey]);

  const onMouseDown = (event: React.MouseEvent) => {
    if (!isOpen || event.target !== event.currentTarget) return;
    onDismissRef.current("backdrop", event);
  };

  return {
    backdropProps: { onMouseDown },
  };
};

export default useDismiss;
