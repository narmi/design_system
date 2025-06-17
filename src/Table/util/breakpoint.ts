import type { ColMinBreakpoint, ViewportBreakpoint } from "..";

/**
 * Maps breakpoints to their relative order, where a higher number means a larger viewport.
 */
const BREAKPOINT_ORDER = {
  s: 0,
  m: 1,
  l: 2,
};

/**
 * Determines if a current viewport breakpoint satisfies a minimum required breakpoint.
 * Uses "mobile-first" logic where a larger viewport satisfies smaller breakpoint requirements.
 * For example: `l` viewport satisfies `m` minimum requirement.
 */
export const isBreakpointSatisfied = (
  minRequired: ColMinBreakpoint,
  current: ViewportBreakpoint,
): boolean =>
  minRequired === "*"
    ? true
    : BREAKPOINT_ORDER[current] >= BREAKPOINT_ORDER[minRequired];
