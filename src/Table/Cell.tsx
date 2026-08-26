import React, { useContext } from "react";
import cc from "classcat";
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
  const { currentBreakpoint, colVisibility, transitionColumns } =
    useContext(ColVisibilityContext);
  const minBreakpoint = colVisibility[_colIndex];
  const isVisible = isBreakpointSatisfied(minBreakpoint, currentBreakpoint);

  // Default behavior: hidden columns are removed from the DOM entirely.
  // In animated mode hidden cells must stay in flow (collapsed) so their
  // tracks can interpolate and auto-placement stays aligned to the tracks.
  if (!isVisible && !transitionColumns) return null;

  const isCollapsed = !isVisible;

  return (
    <div
      className={cc([
        "nds-table-cell",
        { "nds-table-cell--collapsed": isCollapsed },
      ])}
      role="cell"
      aria-hidden={isCollapsed || undefined}
      style={{ textAlign }}
    >
      {children}
    </div>
  );
};

export default Cell;
