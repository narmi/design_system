import { createContext } from "react";
import type { ColBreakpoint, ColLayoutConfig, ViewportBreakpoint } from "..";
import { defaultColLayout, defaultColVisibility } from "..";

interface TableLayoutContextProps {
  currentBreakpoint: ViewportBreakpoint;
  colVisibility: ColBreakpoint[] | undefined;
  colLayout: ColLayoutConfig;
}

/**
 * Takes layout options passed into the root `Table` component
 * and makes them available via context to all subcomponents.
 */
const TableLayoutContext = createContext<TableLayoutContextProps>({
  currentBreakpoint: "l",
  colVisibility: defaultColVisibility,
  colLayout: defaultColLayout,
});

export default TableLayoutContext;
