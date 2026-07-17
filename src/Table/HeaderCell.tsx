import React, { useContext } from "react";
import { isBreakpointSatisfied } from "./util/breakpoint";
import ColVisibilityContext from "./util/colVisibilityContext";

export interface HeaderCellProps {
  children: React.ReactNode;

  textAlign?: "start" | "end" | "center";

  onClick?: (e: React.MouseEvent | React.KeyboardEvent) => void;

  /**
   * PRIVATE
   * Prop for internal implementation. Matches the cell
   * to it's corresponding entry in `colVisibility`
   */
  _colIndex?: number;
}

/**
 * A cell unique to the table header.
 * This component renders as a button when an `onClick` handler is passed.
 *
 * This component is an ARIA live region so the header cell content is
 * re-announced if it changes as the result of user interaction.
 */
const HeaderCell = ({
  children,
  textAlign = "start",
  onClick,
  _colIndex = 0,
}: HeaderCellProps) => {
  const { currentBreakpoint, colVisibility } = useContext(ColVisibilityContext);
  const minBreakpoint = colVisibility[_colIndex];
  const isVisible = isBreakpointSatisfied(minBreakpoint, currentBreakpoint);
  const isButton = typeof onClick === "function";

  if (!isVisible) return null;

  return isButton ? (
    <button
      aria-live="polite"
      onClick={onClick}
      className="nds-table-cell button--reset"
      role="columnheader"
      style={{ textAlign }}
    >
      {children}
    </button>
  ) : (
    <div
      aria-live="polite"
      className="nds-table-cell"
      role="columnheader"
      style={{ textAlign }}
    >
      {children}
    </div>
  );
};

export default HeaderCell;
