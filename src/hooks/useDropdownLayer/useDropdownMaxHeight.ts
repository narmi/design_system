import { useLayoutEffect } from "react";
import { getAvailableSpace } from "./viewport";

interface UseDropdownMaxHeightParams {
  anchorRef: React.RefObject<HTMLElement>;
  layerRef: React.RefObject<HTMLElement>;
  isOpen: boolean;
  /**
   * When false, the hook is a no-op. `useDropdownLayer` passes false when
   * the native anchor-positioning path is active; in that case max-height
   * is handled by CSS (`calc(100dvh - anchor(bottom) - ...)` on the layer
   * and equivalent inside `@position-try --nds-dropdown-above`) and this
   * hook has nothing to contribute.
   */
  enabled: boolean;
}

/**
 * Resolves a CSS custom property (e.g. `--space-xs`) to a pixel number.
 * Falls back to `fallback` if the property is not set or cannot be parsed.
 */
export const resolveSpaceToken = (
  property: string,
  fallback: number,
): number => {
  if (typeof document === "undefined") return fallback;
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
 * Runs only when the polyfill path is active (`enabled === true`). On the
 * native anchor-positioning path, max-height is handled by pure CSS
 * (`calc(100dvh - anchor(bottom) - ...)`) so this hook is skipped.
 */
const useDropdownMaxHeight = ({
  anchorRef,
  layerRef,
  isOpen,
  enabled,
}: UseDropdownMaxHeightParams): void => {
  useLayoutEffect(() => {
    if (!isOpen || !enabled) return;

    const anchorEl = anchorRef.current;
    const layerEl = layerRef.current;
    if (!anchorEl || !layerEl) return;

    // Clamp to the space on the larger side of the anchor, measured against
    // the *visual* viewport (shrunken by the soft keyboard) via the same
    // helper `calculatePosition` uses for its flip decision — so the clamp
    // always matches the side the layer is actually placed on.
    const applyMaxHeight = () => {
      const anchorRect = anchorEl.getBoundingClientRect();
      if (anchorRect.width === 0) return;

      const anchorGap = resolveSpaceToken("--space-xxs", 4);
      const edgeClearance = resolveSpaceToken("--space-l", 20);
      const { spaceAbove, spaceBelow } = getAvailableSpace(
        anchorRect,
        anchorGap,
        edgeClearance,
      );
      const maxHeight = Math.max(spaceAbove, spaceBelow, 0);

      layerEl.style.setProperty("--js-dropdown-max-height", `${maxHeight}px`);
    };

    applyMaxHeight();

    // Re-clamp when the soft keyboard opens/closes (visual viewport resize);
    // the keyboard often finishes opening after the initial measurement.
    const vv = typeof window !== "undefined" ? window.visualViewport : null;
    vv?.addEventListener?.("resize", applyMaxHeight);

    return () => {
      vv?.removeEventListener?.("resize", applyMaxHeight);
      layerEl.style.removeProperty("--js-dropdown-max-height");
    };
  }, [isOpen, enabled, anchorRef, layerRef]);
};

export default useDropdownMaxHeight;
