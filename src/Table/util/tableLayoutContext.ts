import { createContext } from "react";
import type { ColBreakpoint, ColLayoutConfig, ViewportBreakpoint } from "..";

interface TableLayoutContextProps {
  currentBreakpoint: ViewportBreakpoint;
  colVisibility: ColBreakpoint[];
  colLayout: ColLayoutConfig;
  totalColumns: number;
}

/**
 * Takes layout options passed into the root `Table` component
 * and makes them available via context to all subcomponents.
 */
const TableLayoutContext = createContext<TableLayoutContextProps>({
  currentBreakpoint: "l",
  colVisibility: ["*"],
  colLayout: {
    s: (cols) => `repeat(${cols}, 1fr)`,
    m: (cols) => `repeat(${cols}, 1fr)`,
    l: (cols) => `repeat(${cols}, 1fr)`,
  },
  totalColumns: 1,
});

export default TableLayoutContext;
