import { useLayoutEffect } from "react";

interface UseDropdownMaxHeightParams {
  anchorRef: React.RefObject<HTMLElement>;
  layerRef: React.RefObject<HTMLElement>;
  isOpen: boolean;
}

/**
 * Resolves a CSS custom property (e.g. `--space-xs`) to a pixel number.
 * Falls back to `fallback` if the property is not set or cannot be parsed.
 */
export const resolveSpaceToken = (
  property: string,
  fallback: number,
): number => {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue(property)
    .trim();
  const parsed = parseFloat(raw);
  return isNaN(parsed) ? fallback : parsed;
};

/**
 * Measures available space above and below the anchor element and writes
 * `--js-dropdown-max-height` to the layer element as a pixel value.
 *
 * Sets the value to `max(spaceAbove, spaceBelow)` so it is correct regardless
 * of which side the dropdown ends up on — both the native CSS anchor
 * positioning path (via `position-try-order: most-height`) and the JS polyfill
 * path always choose the side with more space.
 *
 * Re-runs on `visualViewport` resize to handle virtual keyboard changes.
 */
const useDropdownMaxHeight = ({
  anchorRef,
  layerRef,
  isOpen,
}: UseDropdownMaxHeightParams): void => {
  useLayoutEffect(() => {
    if (!isOpen) return;

    const anchorEl = anchorRef.current;
    const layerEl = layerRef.current;
    if (!anchorEl || !layerEl) return;

    const calculate = () => {
      const anchorRect = anchorEl.getBoundingClientRect();
      if (anchorRect.width === 0) return;

      const anchorGap = resolveSpaceToken("--space-xxs", 4);
      const edgeClearance = resolveSpaceToken("--space-l", 20);
      const vvHeight = window.visualViewport?.height ?? window.innerHeight;

      const spaceBelow =
        vvHeight - anchorRect.bottom - anchorGap - edgeClearance;
      const spaceAbove = anchorRect.top - anchorGap - edgeClearance;
      const maxHeight = Math.max(spaceAbove, spaceBelow, 0);

      layerEl.style.setProperty("--js-dropdown-max-height", `${maxHeight}px`);
    };

    calculate();

    const handleViewportResize = () => calculate();
    window.visualViewport?.addEventListener("resize", handleViewportResize);

    return () => {
      window.visualViewport?.removeEventListener(
        "resize",
        handleViewportResize,
      );
      layerEl.style.removeProperty("--js-dropdown-max-height");
    };
  }, [isOpen, anchorRef, layerRef]);
};

export default useDropdownMaxHeight;
