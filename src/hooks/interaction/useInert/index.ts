import { useLayoutEffect, useRef } from "react";

export interface UseInertOptions {
  /** Ref to the element to make inert */
  ref: React.RefObject<HTMLElement | null>;
  /** Whether the element (and everything inside it) is inert */
  isInert: boolean;
  /**
   * Called when the element becomes inert while it contains the focused
   * element. Use it to move focus to an appropriate visible control. If focus
   * is still inside the element afterwards, it is blurred so it cannot linger
   * on content that is no longer interactive.
   */
  onRelocateFocus?: () => void;
}

/**
 * Toggles the `inert` attribute on an element.
 *
 * `inert` removes the element and its descendants from sequential focus
 * navigation, pointer interaction, and the accessibility tree. Use it for
 * content that stays mounted while visually hidden (e.g. so it can animate
 * closed), where `aria-hidden` alone would leave descendant controls
 * focusable.
 *
 * The attribute is set imperatively rather than rendered as a prop because
 * React 18 does not recognize `inert` (the `""` workaround it needs is in turn
 * treated as `false` by React 19). Setting it in a layout effect behaves the
 * same under both.
 */
const useInert = ({ ref, isInert, onRelocateFocus }: UseInertOptions) => {
  // read the latest callback inside the effect without re-running it
  const onRelocateFocusRef = useRef(onRelocateFocus);
  onRelocateFocusRef.current = onRelocateFocus;

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (isInert && el.contains(document.activeElement)) {
      onRelocateFocusRef.current?.();
      const active = document.activeElement;
      if (active instanceof HTMLElement && el.contains(active)) {
        active.blur();
      }
    }

    el.toggleAttribute("inert", isInert);
  }, [ref, isInert]);
};

export default useInert;
