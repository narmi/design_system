import { createContext } from "react";
import type { ColMinBreakpoint, ViewportBreakpoint } from "..";

interface ColVisibilityContextProps {
  currentBreakpoint: ViewportBreakpoint;
  colVisibility: ColMinBreakpoint[];
}

/**
 * Takes layout options passed into the root `Table` component
 * and makes them available via context to all subcomponents.
 */
const ColVisibilityContext = createContext<ColVisibilityContextProps>({
  currentBreakpoint: "l",
  colVisibility: ["*"],
});

export default ColVisibilityContext;
