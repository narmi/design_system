import { createContext } from "react";
import type { ColMinBreakpoint, ViewportBreakpoint } from "..";

export interface ColVisibilityContextProps {
  currentBreakpoint: ViewportBreakpoint;
  colVisibility: ColMinBreakpoint[];
  /**
   * When true, hidden cells stay mounted (collapsed) so their tracks can
   * animate to/from `minmax(0, 0fr)` instead of being removed from the grid.
   */
  transitionColumns: boolean;
}

/**
 * Takes layout options passed into the root `Table` component
 * and makes them available via context to all subcomponents.
 */
const ColVisibilityContext = createContext<ColVisibilityContextProps>({
  currentBreakpoint: "l",
  colVisibility: ["*"],
  transitionColumns: false,
});

export default ColVisibilityContext;
