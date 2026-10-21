import { useEffect, useRef } from "react";

export interface UseFocusTrapOptions {
  /** Ref to the element that bounds focus */
  ref: React.RefObject<HTMLElement | null>;
  /** Whether the trap is active */
  isActive: boolean;
  /**
   * Move focus into the element when the trap activates (default `true`).
   * Focuses the first tabbable descendant, or the element itself.
   */
  autoFocus?: boolean;
  /** Restore focus to the previously focused element when the trap deactivates (default `true`) */
  returnFocus?: boolean;
}

export interface UseFocusTrapResult {
  /** Props to spread onto the bounding element */
  trapProps: {
    /** Lets the element itself take focus when it has no tabbable descendants */
    tabIndex: -1;
    onKeyDown: (event: React.KeyboardEvent) => void;
  };
}

const TABBABLE_SELECTOR = [
  "a[href]",
  "area[href]",
  "button",
  "input",
  "select",
  "textarea",
  "iframe",
  "summary",
  "audio[controls]",
  "video[controls]",
  "[contenteditable]",
  "[tabindex]",
].join(",");

const isTabbable = (el: HTMLElement) => {
  if (el.tabIndex < 0) return false;
  if (el.hasAttribute("disabled") || el.hasAttribute("hidden")) return false;
  if (el.getAttribute("contenteditable") === "false") return false;
  if (el instanceof HTMLInputElement && el.type === "hidden") return false;
  // jsdom and older browsers lack checkVisibility; treat as visible there
  return el.checkVisibility?.() ?? true;
};

/** Tabbable descendants of `container`, in DOM order */
export const getTabbables = (container: HTMLElement): HTMLElement[] =>
  Array.from(container.querySelectorAll<HTMLElement>(TABBABLE_SELECTOR)).filter(
    isTabbable,
  );

/**
 * Keeps keyboard focus inside an element while active.
 *
 * Tab and Shift+Tab wrap around the element's tabbable descendants via a
 * React `onKeyDown` on the element. On activation, focus moves into the
 * element; on deactivation, it returns to wherever it was before.
 *
 * This traps the keyboard only. Pointer and assistive-technology focus
 * changes are left to a backdrop and `aria-modal`, which is enough for
 * modal dialogs and keeps the hook free of global listeners.
 */
const useFocusTrap = ({
  ref,
  isActive,
  autoFocus = true,
  returnFocus = true,
}: UseFocusTrapOptions): UseFocusTrapResult => {
  // read the latest option values inside the effect without re-running it
  const optionsRef = useRef({ autoFocus, returnFocus });
  optionsRef.current = { autoFocus, returnFocus };

  useEffect(() => {
    if (!isActive) return undefined;
    const container = ref.current;
    if (!container) return undefined;

    const previous = document.activeElement as HTMLElement | null;

    if (optionsRef.current.autoFocus && !container.contains(previous)) {
      (getTabbables(container)[0] ?? container).focus();
    }

    return () => {
      if (optionsRef.current.returnFocus && previous?.isConnected) {
        previous.focus();
      }
    };
  }, [isActive, ref]);

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (!isActive || event.key !== "Tab" || event.defaultPrevented) return;
    const container = event.currentTarget as HTMLElement;
    const tabbables = getTabbables(container);
    const first = tabbables[0];
    const last = tabbables[tabbables.length - 1];
    const active = document.activeElement;

    if (!first) {
      event.preventDefault();
      container.focus();
    } else if (event.shiftKey && (active === first || active === container)) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return {
    trapProps: { tabIndex: -1, onKeyDown },
  };
};

export default useFocusTrap;
