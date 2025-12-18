import React, { useContext } from "react";
import { isBreakpointSatisfied } from "./util/breakpoint";
import ColVisibilityContext from "./util/colVisibilityContext";

export interface CellProps {
  children: React.ReactNode;

  textAlign?: "start" | "end" | "center" | "left" | "right";

  /**
   * PRIVATE
   * Prop for internal implementation. Matches the cell
   * to it's corresponding entry in `colVisibility`
   */
  _colIndex?: number;
}

const Cell = ({ children, textAlign = "start", _colIndex = 0 }: CellProps) => {
  const { currentBreakpoint, colVisibility } = useContext(ColVisibilityContext);
  const minBreakpoint = colVisibility[_colIndex];
  const isVisible = isBreakpointSatisfied(minBreakpoint, currentBreakpoint);

  return isVisible ? (
    <div className="nds-table-cell" role="cell" style={{ textAlign }}>
      {children}
    </div>
  ) : null;
};

export default Cell;
