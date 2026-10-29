import { useInsertionEffect, useLayoutEffect, useRef } from "react";

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
 * treated as `false` by React 19). Setting it in effects behaves the same
 * under both.
 *
 * The work is split across two effect phases so that several elements
 * changing in the same commit (e.g. one table cell collapsing while its
 * neighbor is revealed) are handled correctly:
 *
 * 1. `useInsertionEffect` runs for every element before any layout effect.
 *    It records whether this element contains focus, then toggles `inert`.
 *    By the time any layout effect runs, every element's `inert` state is
 *    already settled, so a relocation target revealed in this commit can take
 *    focus. Recording focus first matters because the browser drops focus as
 *    soon as an ancestor becomes inert. On the initial mount the ref is not
 *    attached yet, so this phase does nothing and step 2 sets the attribute.
 * 2. `useLayoutEffect` relocates focus if step 1 found it inside, and sets
 *    `inert` again (a no-op except on the initial mount).
 */
const useInert = ({ ref, isInert, onRelocateFocus }: UseInertOptions) => {
  // read the latest callback inside the effect without re-running it
  const onRelocateFocusRef = useRef(onRelocateFocus);
  onRelocateFocusRef.current = onRelocateFocus;
  const focusedElementRef = useRef<HTMLElement | null>(null);

  useInsertionEffect(() => {
    const el = ref.current;
    if (!el) return;

    const activeElement = document.activeElement;
    focusedElementRef.current =
      isInert &&
      activeElement instanceof HTMLElement &&
      el.contains(activeElement)
        ? activeElement
        : null;

    el.toggleAttribute("inert", isInert);
  });

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    // consume the focus recorded by the insertion effect for this commit
    const focusedElement = focusedElementRef.current;
    focusedElementRef.current = null;
    if (isInert && focusedElement && el.contains(focusedElement)) {
      onRelocateFocusRef.current?.();
      const active = document.activeElement;
      if (active instanceof HTMLElement && el.contains(active)) {
        active.blur();
      }
    }

    el.toggleAttribute("inert", isInert);
  });
};

export default useInert;
