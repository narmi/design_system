import { createContext } from "react";
import type { ColBreakpoint, ColLayoutConfig, ViewportBreakpoint } from "..";

interface TableLayoutContextProps {
  currentBreakpoint: ViewportBreakpoint;
  colVisibility: ColBreakpoint[];
  colLayout: ColLayoutConfig;
}

/**
 * Takes layout options passed into the root `Table` component
 * and makes them available via context to all subcomponents.
 */
const TableLayoutContext = createContext<TableLayoutContextProps>({
  currentBreakpoint: "l",
  colVisibility: ["*"],
  colLayout: {
    s: `repeat(auto-fit, 1fr)`,
    m: `repeat(auto-fit, 1fr)`,
    l: `repeat(auto-fit, 1fr)`,
  },
});

export default TableLayoutContext;
