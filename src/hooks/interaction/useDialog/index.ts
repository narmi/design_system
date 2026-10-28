import { useCallback, useId, useRef, useState } from "react";
import useDismiss from "../useDismiss";
import type { DismissEvent, DismissReason } from "../useDismiss";
import useFocusTrap from "../useFocusTrap";
import type { FocusTrapInitialFocus } from "../useFocusTrap";
import useLockBodyScroll from "../../layout/useLockBodyScroll";

/**
 * Why the user dismissed the dialog. Extends `DismissReason` with
 * `"close"`, fired by the element carrying `closeButtonProps`.
 */
export type DialogDismissReason = DismissReason | "close";

export type DialogDismissEvent = DismissEvent;

export interface UseDialogOptions {
  /** Whether the dialog is currently open */
  isOpen: boolean;
  /**
   * Called when the user takes a dismissing action: Escape, a backdrop
   * click, an outside click, or the close button. Set `isOpen` to
   * `false` here; the hook never closes the dialog on its own.
   */
  onDismiss: (reason: DialogDismissReason, event: DialogDismissEvent) => void;
  /**
   * Whether the dialog is modal (default `true`).
   *
   * A modal dialog sets `aria-modal`, locks body scroll, and dismisses
   * on a backdrop click. A non-modal dialog does none of those and
   * instead dismisses on a click anywhere outside the dialog.
   */
  isModal?: boolean;
  /**
   * Accessible name for the dialog. Use this only when the dialog has
   * no visible title; otherwise spread `titleProps` onto the title
   * element and the dialog is labelled by it. A dialog with neither
   * has no accessible name.
   */
  label?: string;
  /** Where focus goes when the dialog opens (default `"first"`) */
  initialFocus?: FocusTrapInitialFocus;
  /** Restore focus to the previously focused element on close (default `true`) */
  returnFocus?: boolean;
  /** Dismiss on Escape (default `true`) */
  escapeKey?: boolean;
  /**
   * Dismiss on mousedown outside the dialog. Defaults to `true` for a
   * non-modal dialog and `false` for a modal one, which uses the
   * backdrop instead.
   */
  outsideClick?: boolean;
}

export interface UseDialogResult {
  /** Props to spread onto the dialog element */
  dialogProps: {
    ref: React.RefCallback<HTMLElement>;
    role: "dialog";
    "aria-modal"?: true;
    "aria-label"?: string;
    "aria-labelledby"?: string;
    "aria-describedby"?: string;
    /** Lets the element itself take focus */
    tabIndex: -1;
    onKeyDown: (event: React.KeyboardEvent) => void;
  };
  /**
   * Props to spread onto a full-screen backdrop behind a modal dialog.
   * Render the dialog element as a child of the backdrop.
   */
  backdropProps: {
    onMouseDown: (event: React.MouseEvent) => void;
  };
  /**
   * Props to spread onto the element that names the dialog. While it is
   * mounted, the dialog carries `aria-labelledby` pointing at it.
   */
  titleProps: {
    id: string;
    ref: React.RefCallback<HTMLElement>;
  };
  /**
   * Props to spread onto the element that describes the dialog. While it
   * is mounted, the dialog carries `aria-describedby` pointing at it.
   */
  descriptionProps: {
    id: string;
    ref: React.RefCallback<HTMLElement>;
  };
  /** Props to spread onto a button that closes the dialog */
  closeButtonProps: {
    type: "button";
    "aria-label": string;
    onClick: (event: React.MouseEvent) => void;
  };
}

/**
 * Wires up an accessible dialog from your own markup.
 *
 * Composes `useFocusTrap`, `useDismiss`, and `useLockBodyScroll` and
 * returns prop bags to spread onto the dialog, its backdrop, its title
 * and description, and a close button. The hook owns the ARIA
 * attributes, the ids that link them, focus management, dismissal, and
 * scroll locking; you own the open state, the rendering, and the
 * styling.
 *
 * Open state is controlled: pass `isOpen` and set it to `false` in
 * `onDismiss`. The hook does not render a portal; render the dialog
 * wherever makes sense for its stacking context.
 *
 * Every ref the hook returns is a callback ref. To attach your own ref
 * to the same element, merge the two with `useMergeRefs`.
 */
const useDialog = ({
  isOpen,
  onDismiss,
  isModal = true,
  label,
  initialFocus = "first",
  returnFocus = true,
  escapeKey = true,
  outsideClick = !isModal,
}: UseDialogOptions): UseDialogResult => {
  const id = useId();
  const titleId = `${id}-title`;
  const descriptionId = `${id}-description`;

  const dialogRef = useRef<HTMLElement | null>(null);
  const setDialogRef = useCallback((node: HTMLElement | null) => {
    dialogRef.current = node;
  }, []);

  // the ARIA relationships are only written while their targets exist,
  // so a dialog without a description never points at a missing id
  const [hasTitle, setHasTitle] = useState(false);
  const setTitleRef = useCallback((node: HTMLElement | null) => {
    setHasTitle(node !== null);
  }, []);
  const [hasDescription, setHasDescription] = useState(false);
  const setDescriptionRef = useCallback((node: HTMLElement | null) => {
    setHasDescription(node !== null);
  }, []);

  // keep the latest handler without rebuilding the prop bags every render
  const onDismissRef = useRef(onDismiss);
  onDismissRef.current = onDismiss;

  useLockBodyScroll(isOpen && isModal);

  const { trapProps } = useFocusTrap({
    ref: dialogRef,
    isActive: isOpen,
    initialFocus,
    returnFocus,
  });

  const { backdropProps } = useDismiss({
    isOpen,
    ref: dialogRef,
    escapeKey,
    outsideClick,
    onDismiss: (reason, event) => onDismissRef.current(reason, event),
  });

  const onCloseClick = useCallback((event: React.MouseEvent) => {
    onDismissRef.current("close", event);
  }, []);

  const dialogProps: UseDialogResult["dialogProps"] = {
    ref: setDialogRef,
    role: "dialog",
    ...trapProps,
  };
  if (isModal) dialogProps["aria-modal"] = true;
  if (label) dialogProps["aria-label"] = label;
  if (hasTitle && !label) dialogProps["aria-labelledby"] = titleId;
  if (hasDescription) dialogProps["aria-describedby"] = descriptionId;

  return {
    dialogProps,
    backdropProps,
    titleProps: { id: titleId, ref: setTitleRef },
    descriptionProps: { id: descriptionId, ref: setDescriptionRef },
    closeButtonProps: {
      type: "button",
      "aria-label": "Close",
      onClick: onCloseClick,
    },
  };
};

export default useDialog;
