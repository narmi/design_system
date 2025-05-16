import type { ColLayoutConfig, CSSValue, ViewportBreakpoint } from "..";

/**
 * Determine the final `grid-template-columns` value to apply
 * to a rowgroup element.
 */
export const columnTemplateFromBreakpoints = (
  currentBreakpoint: ViewportBreakpoint,
  colLayout: ColLayoutConfig,
  visibleCols: number,
): CSSValue => {
  let gridTemplateColumns = `repeat(${visibleCols}, 1fr)`;
  if (colLayout[currentBreakpoint]) {
    gridTemplateColumns = colLayout[currentBreakpoint];
  }
  return gridTemplateColumns;
};
