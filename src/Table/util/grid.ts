import type { ColLayoutConfig, CSSValue, ViewportBreakpoint } from "..";

/**
 * Determine the final `grid-template-columns` value to apply
 * to a rowgroup element.
 *
 * Only string (legacy) layouts are consumed here; array layouts are handled by
 * the animated code path in the `Table` component.
 */
export const columnTemplateFromBreakpoints = (
  currentBreakpoint: ViewportBreakpoint,
  colLayout: ColLayoutConfig,
  visibleCols: number,
): CSSValue => {
  let gridTemplateColumns = `repeat(${visibleCols}, 1fr)`;
  const layout = colLayout[currentBreakpoint];
  if (typeof layout === "string" && layout) {
    gridTemplateColumns = layout;
  }
  return gridTemplateColumns;
};
