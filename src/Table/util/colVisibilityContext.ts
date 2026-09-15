import { createContext } from "react";
import type { ColMinBreakpoint, ViewportBreakpoint } from "..";

export interface ColVisibilityContextProps {
  currentBreakpoint: ViewportBreakpoint;
  colVisibility: ColMinBreakpoint[];
  /**
   * When true, the current breakpoint uses an array (animated) layout: hidden
   * cells stay mounted (collapsed) so their tracks can animate to/from
   * `minmax(0, 0fr)` instead of being removed from the grid.
   */
  isAnimated: boolean;
}

/**
 * Takes layout options passed into the root `Table` component
 * and makes them available via context to all subcomponents.
 */
const ColVisibilityContext = createContext<ColVisibilityContextProps>({
  currentBreakpoint: "l",
  colVisibility: ["*"],
  isAnimated: false,
});

export default ColVisibilityContext;
