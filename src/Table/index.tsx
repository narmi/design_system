import React from "react";
import cc from "classcat";

import useBreakpoints from "../hooks/useBreakpoints";
import Header from "./Header";
import Body from "./Body";
import Cell from "./Cell";
import HeaderCell from "./HeaderCell";
import { default as TableRow } from "./Row";
import ColVisibilityContext from "./util/colVisibilityContext";
import { isBreakpointSatisfied } from "./util/breakpoint";
import { columnTemplateFromBreakpoints } from "./util/grid";

/** Minimum size at which to show a column. "*" means "all" */
export type ColMinBreakpoint = "*" | "s" | "m" | "l";
/** Subset of breakpoints that can be returned by `useBreakpoints` hook */
export type ViewportBreakpoint = "s" | "m" | "l";

/**
 * Valid CSS value for `grid-template-columns`.
 */
export type CSSValue = string;

/** For each breakpoint key, a valid `grid-template-columns` value */
export type ColLayoutConfig = {
  s: CSSValue;
  m: CSSValue;
  l: CSSValue;
};

export interface TableProps {
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
  /**
   * Per-column base track size, parallel to `colVisibility`.
   * Used only when `transitionColumns` is true. Defaults to `"1fr"` per column.
   *
   * In animated mode `colWidths` supersedes `colLayout`: an opaque per-breakpoint
   * layout string cannot be safely collapsed track-by-track, so animated tables
   * describe each column's width individually here.
   */
  colWidths?: CSSValue[];
  /**
   * Opt in to animated column show/hide.
   *
   * When `true`, columns animate open/closed across breakpoint changes via a CSS
   * `transition` on `grid-template-columns` (respecting `prefers-reduced-motion`).
   * The track count stays constant (`colVisibility.length`) at every breakpoint and
   * hidden columns collapse to `minmax(0, 0fr)` rather than being removed.
   *
   * Default `false` → existing (track-dropping) behavior, unchanged.
   */
  transitionColumns?: boolean;
  rowDensity?: "default" | "compact";
  kind?: "default" | "editable";
  /**
   * Pin edge columns while middle columns scroll horizontally.
   * - `"none"` (default): no pinning, no horizontal scroll
   * - `"start"` — pin the first column
   * - `"end"` — pin the last column
   * - `"both"` — pin both first and last columns
   *
   * When set to a value other than `"none"`, the table becomes horizontally scrollable.
   */
  pinColumns?: "none" | "start" | "end" | "both";
}

export const DEFAULT_COLS = 5;

// By default all columns are shown
export const defaultColVisibility = [
  ...Array(DEFAULT_COLS).fill("*"),
] as ColMinBreakpoint[];

/**
 * Layout helper for building responsive tables.
 * This component allows you to define the visibility of each column by named breakpoint.
 * You may also specify a custom `grid-template-columns` CSS value for each breakpoint.
 *
 * If a design calls for a different presentation of the data at the smallest viewports, you may use `useBreakpoints` to conditionally render a list view.
 */
const Table = ({
  children,
  colVisibility = defaultColVisibility,
  colLayout = { s: "auto", m: "auto", l: "auto" },
  colWidths,
  transitionColumns = false,
  rowDensity = "default",
  kind = "default",
  pinColumns = "none",
}: TableProps) => {
  const { largestSatisfiedBreakpoint } = useBreakpoints();
  const currentBreakpoint =
    largestSatisfiedBreakpoint === "none"
      ? "s"
      : largestSatisfiedBreakpoint === "xl"
        ? "l"
        : largestSatisfiedBreakpoint;

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

  /**
   * In animated mode we build the template directly from `colVisibility` so the
   * track count is always `colVisibility.length` (a prerequisite for grid tracks
   * to interpolate). Visible columns use their `colWidths` size; hidden columns
   * collapse to `minmax(0, 0fr)`.
   *
   * `<flex>` widths are wrapped in `minmax(0, …)` so a track can actually reach
   * zero even when its cell content has an intrinsic min-size, and so both
   * endpoints share a type (`<flex>` ↔ `<flex>`) and therefore interpolate.
   */
  const toTrack = (w: CSSValue) =>
    /^\s*\d*\.?\d+fr\s*$/.test(w) ? `minmax(0, ${w.trim()})` : w;

  const animatedTemplate = colVisibility
    .map((min, i) =>
      isBreakpointSatisfied(min, currentBreakpoint as ViewportBreakpoint)
        ? toTrack(colWidths?.[i] ?? "1fr")
        : "minmax(0, 0fr)",
    )
    .join(" ");

  const gridTemplateColumns = transitionColumns
    ? animatedTemplate
    : columnTemplateFromBreakpoints(
        currentBreakpoint as ViewportBreakpoint,
        finalLayout,
        visibleCols,
      );

  const isPinnedStart = pinColumns === "start" || pinColumns === "both";
  const isPinnedEnd = pinColumns === "end" || pinColumns === "both";
  const isScrollable = isPinnedStart || isPinnedEnd;

  const tableEl = (
    <ColVisibilityContext.Provider
      value={{
        colVisibility,
        currentBreakpoint: currentBreakpoint as ViewportBreakpoint,
        transitionColumns,
      }}
    >
      <div
        role="table"
        className={cc([
          "nds-table",
          `nds-table--${rowDensity}`,
          `nds-table--${kind}`,
          {
            "nds-table--pinned-start": isPinnedStart,
            "nds-table--pinned-end": isPinnedEnd,
          },
        ])}
        /**
         * We apply a CSS value for grid-template-columns on the root
         * of this table component, so the grid column tracks may be
         * shared among all rows via `subgrid`.
         */
        style={{ gridTemplateColumns }}
      >
        {children}
      </div>
    </ColVisibilityContext.Provider>
  );

  if (isScrollable) {
    return <div className="nds-table-scroll-container">{tableEl}</div>;
  }

  return tableEl;
};

Table.Header = Header;
Table.Body = Body;
Table.Row = TableRow;
Table.Cell = Cell;
Table.HeaderCell = HeaderCell;

export default Table;
