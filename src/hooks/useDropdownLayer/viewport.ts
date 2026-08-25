/**
 * Shared viewport measurement for the dropdown positioning polyfill.
 *
 * Two coordinate spaces are in play on mobile:
 *
 * - The **layout viewport**: the coordinate space of
 *   `getBoundingClientRect()` and of `top`/`bottom` insets on
 *   `position: fixed` elements. It does NOT shrink when the soft keyboard
 *   opens (under the default `interactive-widget=resizes-visual` behavior
 *   on Chromium/Android).
 * - The **visual viewport**: the portion of the layout viewport actually
 *   visible to the user. The soft keyboard and pinch-zoom shrink it, and
 *   it can be panned; `visualViewport.offsetTop` is its offset within the
 *   layout viewport.
 *
 * All positioning math must MEASURE available space against the visual
 * viewport (what the user can see) but WRITE styles in layout-viewport
 * coordinates (what `position: fixed` insets mean). Mixing the two — e.g.
 * subtracting a layout-coordinate rect from `visualViewport.height` —
 * misplaces the layer by the keyboard-height delta.
 */

export interface VisibleBounds {
  /** Top edge of the visible region, in layout-viewport coordinates */
  top: number;
  /** Bottom edge of the visible region, in layout-viewport coordinates */
  bottom: number;
  /** Height of the layout viewport itself; the base that `bottom` insets
   * on fixed-position elements resolve against. */
  layoutHeight: number;
}

/**
 * Bounds of the visible portion of the layout viewport, in layout-viewport
 * coordinates. With no keyboard or pinch-zoom, `top` is 0 and `bottom`
 * equals `layoutHeight`.
 */
export const getVisibleBounds = (): VisibleBounds => {
  if (typeof window === "undefined") {
    return { top: 0, bottom: 0, layoutHeight: 0 };
  }
  const layoutHeight =
    (typeof document !== "undefined" &&
      document.documentElement?.clientHeight) ||
    window.innerHeight;
  const vv = window.visualViewport;
  const top = vv?.offsetTop ?? 0;
  const height = vv?.height ?? layoutHeight;
  return { top, bottom: top + height, layoutHeight };
};

/**
 * Visible space above and below an anchor rect, after gap/clearance.
 * Used by both the flip decision (`calculatePosition`) and the max-height
 * clamp (`useDropdownMaxHeight`) so the two can never disagree.
 */
export const getAvailableSpace = (
  anchorRect: Pick<DOMRect, "top" | "bottom">,
  anchorGap: number,
  edgeClearance: number,
): { spaceAbove: number; spaceBelow: number } => {
  const bounds = getVisibleBounds();
  return {
    spaceAbove: anchorRect.top - bounds.top - anchorGap - edgeClearance,
    spaceBelow: bounds.bottom - anchorRect.bottom - anchorGap - edgeClearance,
  };
};
