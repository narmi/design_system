import { useEffect, useRef } from "react";
import {
  captureFocusRestore,
  focusFirstElement,
  focusLastElement,
  focusNextElement,
  focusPrevElement,
  moveFocusInside,
} from "focus-lock";

export type FocusTrapInitialFocus = "first" | "container" | "none";

export interface UseFocusTrapOptions {
  /** Ref to the element that bounds focus */
  ref: React.RefObject<HTMLElement | null>;
  /** Whether the trap is active */
  isActive: boolean;
  /**
   * Where focus goes when the trap activates (default `"first"`).
   * - `"first"`: the first tabbable descendant (or one marked `data-autofocus`)
   * - `"container"`: the bounding element itself
   * - `"none"`: focus is left where it is until the user tabs into the element
   */
  initialFocus?: FocusTrapInitialFocus;
  /** Restore focus to the previously focused element when the trap deactivates (default `true`) */
  returnFocus?: boolean;
}

export interface UseFocusTrapResult {
  /** Props to spread onto the bounding element */
  trapProps: {
    /** Lets the element itself take focus */
    tabIndex: -1;
    onKeyDown: (event: React.KeyboardEvent) => void;
  };
}

/**
 * Keeps keyboard focus inside an element while active.
 *
 * Tab and Shift+Tab wrap around the element's tabbable descendants via a
 * React `onKeyDown` on the element. On activation, focus moves into the
 * element; on deactivation, it returns to wherever it was before.
 * Tab order and focusability come from `focus-lock`.
 *
 * This traps the keyboard only. Pointer and assistive-technology focus
 * changes are left to a backdrop and `aria-modal`, which is enough for
 * modal dialogs and keeps the hook free of global listeners.
 */
const useFocusTrap = ({
  ref,
  isActive,
  initialFocus = "first",
  returnFocus = true,
}: UseFocusTrapOptions): UseFocusTrapResult => {
  // read the latest option values inside the effect without re-running it
  const optionsRef = useRef({ initialFocus, returnFocus });
  optionsRef.current = { initialFocus, returnFocus };

  useEffect(() => {
    if (!isActive) return undefined;
    const container = ref.current;
    if (!container) return undefined;

    const previous = document.activeElement;
    const restore = captureFocusRestore(previous);
    const { initialFocus } = optionsRef.current;

    if (!container.contains(previous)) {
      if (initialFocus === "first") moveFocusInside(container, previous);
      if (initialFocus === "container") container.focus();
    }

    return () => {
      if (optionsRef.current.returnFocus)
        (restore() as HTMLElement | undefined)?.focus();
    };
  }, [isActive, ref]);

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (!isActive || event.key !== "Tab" || event.defaultPrevented) return;
    event.preventDefault();
    const scope = event.currentTarget as HTMLElement;
    const active = document.activeElement;
    const options = { scope, cycle: true, onlyTabbable: true };

    if (active && active !== scope && scope.contains(active)) {
      (event.shiftKey ? focusPrevElement : focusNextElement)(active, options);
    } else {
      (event.shiftKey ? focusLastElement : focusFirstElement)(scope, options);
    }
  };

  return {
    trapProps: { tabIndex: -1, onKeyDown },
  };
};

export default useFocusTrap;
