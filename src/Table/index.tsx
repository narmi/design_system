import React from "react";
import cc from "classcat";
import Row from "../Row";

import useBreakpoints from "../hooks/useBreakpoints";

import Header from "./Header";
import Body from "./Body";
import Cell from "./Cell";
import { default as TableRow } from "./Row";
import TableLayoutContext from "./util/tableLayoutContext";

export type ColBreakpoint = "*" | "s" | "m" | "l";
export type ViewportBreakpoint = "s" | "m" | "l";
export type ColLayoutConfig = { s: string; m: string; l: string };

/**
 * Valid CSS value for `grid-template-columns`.
 */
export type CSSValue = string;

interface TableProps {
  children: React.ReactNode;
  /**
   * Controls column widths by breakpoint.
   * These are "mobile-first", so "m" means "the browser is at m or larger"
   *
   * @usage
   * Set all cols to 1fr: `{ default: "1fr" }`
   */
  colLayout?: ColLayoutConfig;
  /**
   * Array describing when each column should be visible.
   * If omitted, all columns will be visible regardless of viewport size.
   *
   * @usage
   * First and last col always shown, middle col shown at "m" and up:
   * `[ "*", "m", "*" ]`
   */
  colVisibility?: ColBreakpoint[];
}

// By default, columns are even at all breakpoints
export const defaultColLayout = {
  s: "1fr",
  m: "1fr",
  l: "1fr",
};

// FIXME: is there a better interface for this? This is more of an exploit...
// By default all columns are shown.
export const defaultColVisibility = ["*"] as ColBreakpoint[];

const Table = ({
  children,
  colLayout = defaultColLayout,
  colVisibility = defaultColVisibility,
}: TableProps) => {
  // FIXME: find the right place to validate all breakpoints
  // const hasValidLayout = CSS?.supports("grid-template-columns", colLayout);
  const { m, l } = useBreakpoints();
  let currentBreakpoint = "s";
  if (l) {
    currentBreakpoint = "l";
  } else if (m) {
    currentBreakpoint = "m";
  }

  // Invalid CSS passed to any of the breakpoint keys in `colLayout`
  // will fall back to the default `1fr`.
  const validLayouts = Object.fromEntries(
    Object.entries(colLayout).filter(([, cssVal]) =>
      CSS?.supports("grid-template-columns", cssVal),
    ),
  );

  return (
    <TableLayoutContext.Provider
      value={{
        colLayout: validLayouts as ColLayoutConfig,
        colVisibility,
        currentBreakpoint: currentBreakpoint as ViewportBreakpoint,
      }}
    >
      <div role="table">{children}</div>
    </TableLayoutContext.Provider>
  );
};

Table.Header = Header;
Table.Body = Body;
Table.Row = TableRow;
Table.Cell = Cell;

export default Table;
