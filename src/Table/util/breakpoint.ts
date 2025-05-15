import type { ColBreakpoint } from "..";

const breakpointOrder = ["s", "m", "l"] as const;
type OrderedBreakpoint = (typeof breakpointOrder)[number];

/**
 * We use "mobile-first" breakpoints, meaning that
 * "m" is `true` for medium viewports and larger.
 * (e.g. "l" satisfies "m")
 */
export const isBreakpointSatisfied = (
  minRequired: ColBreakpoint,
  current: OrderedBreakpoint,
): boolean => {
  // For columns set as "*" or undefined, default to showing the column
  if (minRequired === "*" || minRequired === undefined) {
    return true;
  }
  const currentIndex = breakpointOrder.indexOf(current);
  const requiredIndex = breakpointOrder.indexOf(
    minRequired as OrderedBreakpoint,
  );
  return currentIndex >= requiredIndex;
};
