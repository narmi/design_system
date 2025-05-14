import React from "react";

import useBreakpoints from "../hooks/useBreakpoints";
import Header from "./Header";
import Body from "./Body";
import Cell from "./Cell";
import { default as TableRow } from "./Row";
import TableLayoutContext from "./util/tableLayoutContext";

/** Minimum size at which to show a column. "*" means "all" */
export type ColBreakpoint = "*" | "s" | "m" | "l";
/** Subset of breakpoints that can be returned by `useBreakpoints` hook */
export type ViewportBreakpoint = "s" | "m" | "l";

/**
 * Valid CSS value for `grid-template-columns`.
 * TODO: can we use CSS supports validation in a type guard? This provides a documentation hint but no real enforcement
 */
export type CSSValue = string;

/** For each breakpoint key, a function that returns a valid `grid-template-columns` value */
export type ColLayoutConfig = {
  s?: CSSValue;
  m?: CSSValue;
  l?: CSSValue;
};

interface TableProps {
  children: React.ReactNode;
  /**
   * Array describing when each column should be visible.
   * If omitted, all columns will be visible regardless of viewport size.
   *
   * @usage
   * First and last col always shown, middle col shown at "m" and up:
   * `[ "*", "m", "*" ]`
   */
  colVisibility: ColBreakpoint[];
  /**
   * Specify a function that returns a `grid-template-columns` CSS value for each breakpoint.
   * These are "mobile-first", so "m" means "the browser is at m or larger".
   *
   * Each function is provided with a `cols` argument.
   */
  colLayout?: ColLayoutConfig;
}

export const DEFAULT_COLS = 5;

// By default all columns are shown
export const defaultColVisibility = [
  ...Array(DEFAULT_COLS).fill("*"),
] as ColBreakpoint[];

/**
 * ⚠️ IN ACTIVE DEVELOPMENT ⚠️
 * Availalbe for import, but not ready for production.
 * Please leave storybook stories commented out until `@narmi/platform-ui` says so.
 */
const Table = ({
  children,
  colVisibility = defaultColVisibility,
  colLayout = {},
}: TableProps) => {
  const { m, l } = useBreakpoints();

  // This order is important!
  // TODO: extract to `findCurrentFromBreakpoints({}: ViewportBreakpoints )` and unit test
  let currentBreakpoint = "s";
  if (m) {
    currentBreakpoint = "m";
  }
  if (l) {
    currentBreakpoint = "l";
  }

  // Invalid CSS passed to any of the breakpoint keys in `colLayout`
  // will fall back to the default `1fr`.
  const validLayouts = Object.fromEntries(
    Object.entries(colLayout).filter(
      ([, cssVal]) =>
        // In browser environments, the CSS global has a `supports` method intended
        // for feature detection. It also returns false if the property name
        // or value passed in is invalid, acting as a validator.
        CSS?.supports("grid-template-columns", cssVal) ?? true,
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
