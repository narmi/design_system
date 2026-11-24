import React, { useContext, useRef } from "react";
import cc from "classcat";
import { isBreakpointSatisfied } from "./util/breakpoint";
import ColVisibilityContext from "./util/colVisibilityContext";
import { focusFirstVisibleInRow } from "./util/focusRow";
import useInert from "../hooks/interaction/useInert";

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
  const { currentBreakpoint, colVisibility, isAnimated } =
    useContext(ColVisibilityContext);
  const minBreakpoint = colVisibility[_colIndex];
  // `"none"` is only hidden in animated mode; in legacy mode it falls back to
  // always-visible (matching the parent Table's `console.error` warning).
  const isVisible =
    minBreakpoint === "none"
      ? !isAnimated
      : isBreakpointSatisfied(minBreakpoint, currentBreakpoint);
  const isCollapsed = !isVisible && isAnimated;
  const cellRef = useRef<HTMLDivElement>(null);

  // Collapsed cells are visually hidden but stay mounted, so make them inert
  // to keep their content out of the tab order and the accessibility tree.
  useInert({
    ref: cellRef,
    isInert: isCollapsed,
    onRelocateFocus: () => {
      if (cellRef.current) focusFirstVisibleInRow(cellRef.current);
    },
  });

  // Legacy (deprecated string colLayout): hidden columns are removed from the
  // DOM entirely. In animated mode (array colLayout) hidden cells must stay in
  // flow (collapsed) so their tracks can interpolate and auto-placement stays
  // aligned to the tracks. This `return null` branch goes away when string
  // layouts are removed in the next major version.
  if (!isVisible && !isAnimated) return null;

  return (
    <div
      ref={cellRef}
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
