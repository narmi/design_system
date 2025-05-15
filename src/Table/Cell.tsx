import React, { useContext } from "react";
import { isBreakpointSatisfied } from "./util/breakpoint";
import TableSectionContext from "./util/tableSectionContext";
import TableLayoutContext from "./util/tableLayoutContext";

export interface CellProps {
  children: React.ReactNode;

  textAlign?: "start" | "end" | "center";

  /**
   * PRIVATE
   * Prop for internal implementation. Matches the cell
   * to it's corresponding entry in `colVisibility`
   */
  _colIndex?: number;
}

const Cell = ({ children, textAlign = "start", _colIndex = 0 }: CellProps) => {
  const { section } = useContext(TableSectionContext);
  const { currentBreakpoint, colVisibility } = useContext(TableLayoutContext);

  const role = section === "header" ? "columnheader" : "cell";
  const minBreakpoint = colVisibility[_colIndex];
  const isVisible = isBreakpointSatisfied(minBreakpoint, currentBreakpoint);

  return isVisible ? (
    <div className="nds-table-cell" role={role} style={{ textAlign }}>
      {children}
    </div>
  ) : null;
};

export default Cell;
