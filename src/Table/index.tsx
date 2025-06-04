import React from "react";
import cc from "classcat";

import useBreakpoints from "../hooks/useBreakpoints";
import Header from "./Header";
import Body from "./Body";
import Cell from "./Cell";
import HeaderCell from "./HeaderCell";
import { default as TableRow } from "./Row";
import ColVisibilityContext from "./util/colVisibilityContext";
import {
  findCurrentFromBreakpoints,
  isBreakpointSatisfied,
} from "./util/breakpoint";
import { columnTemplateFromBreakpoints } from "./util/grid";

/** Minimum size at which to show a column. "*" means "all" */
export type ColMinBreakpoint = "*" | "s" | "m" | "l";
/** Subset of breakpoints that can be returned by `useBreakpoints` hook */
export type ViewportBreakpoint = "s" | "m" | "l";

/**
 * Valid CSS value for `grid-template-columns`.
 * TODO: can we use CSS supports validation in a type guard? This provides a documentation hint but no real enforcement
 */
export type CSSValue = string;

/** For each breakpoint key, a valid `grid-template-columns` value */
export type ColLayoutConfig = {
  // TODO: we may want a "default" here after all. S to M is quite a big jump
  s: CSSValue;
  m: CSSValue;
  l: CSSValue;
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
  colVisibility: ColMinBreakpoint[];
  /**
   * Specify a function that returns a `grid-template-columns` CSS value for each breakpoint.
   * These are "mobile-first", so "m" means "the browser is at m or larger".
   *
   * Each function is provided with a `cols` argument.
   */
  colLayout?: ColLayoutConfig;
  rowDensity?: "default" | "compact";
}

export const DEFAULT_COLS = 5;

// By default all columns are shown
export const defaultColVisibility = [
  ...Array(DEFAULT_COLS).fill("*"),
] as ColMinBreakpoint[];

/**
 * ⚠️ IN ACTIVE DEVELOPMENT ⚠️
 * Availalbe for import, but not ready for production.
 * Please leave storybook stories commented out until `@narmi/platform-ui` says so.
 */
const Table = ({
  children,
  colVisibility = defaultColVisibility,
  colLayout = { s: "auto", m: "auto", l: "auto" },
  rowDensity = "default",
}: TableProps) => {
  const { m, l } = useBreakpoints();
  const currentBreakpoint = findCurrentFromBreakpoints({ m, l });

  const visibleCols: number = colVisibility.filter(
    (minRequired: ColMinBreakpoint) =>
      isBreakpointSatisfied(
        minRequired,
        currentBreakpoint as ViewportBreakpoint,
      ),
  ).length;

  const defaultLayout = {
    s: `repeat(${visibleCols}, 1fr)`,
    m: `repeat(${visibleCols}, 1fr)`,
    l: `repeat(${visibleCols}, 1fr)`,
  };

  const validLayoutsFromProps = Object.fromEntries(
    Object.entries(colLayout).filter(
      ([, cssVal]) =>
        // In browser environments, the CSS global has a `supports` method intended
        // for feature detection. It also returns false if the property name
        // or value passed in is invalid, acting as a validator.
        CSS?.supports("grid-template-columns", cssVal) ?? true,
    ),
  );

  const finalLayout = { ...defaultLayout, ...validLayoutsFromProps };
  const gridTemplateColumns = columnTemplateFromBreakpoints(
    currentBreakpoint as ViewportBreakpoint,
    finalLayout,
    visibleCols,
  );

  return (
    <ColVisibilityContext.Provider
      value={{
        colVisibility,
        currentBreakpoint: currentBreakpoint as ViewportBreakpoint,
      }}
    >
      <div
        role="table"
        className={cc(["nds-table", `nds-table--${rowDensity}`])}
        /**
         * We apply a CSS value for grid-tempalte-columns on the root
         * of this table component, so the grid column tracks may be
         * shared among all rows via `subgrid`.
         */
        style={{ gridTemplateColumns }}
      >
        {children}
      </div>
    </ColVisibilityContext.Provider>
  );
};

Table.Header = Header;
Table.Body = Body;
Table.Row = TableRow;
Table.Cell = Cell;
Table.HeaderCell = HeaderCell;

export default Table;
