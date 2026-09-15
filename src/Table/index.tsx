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

/**
 * Minimum size at which to show a column.
 * - `"*"` — always shown
 * - `"s" | "m" | "l"` — shown at that viewport breakpoint or larger
 * - `"none"` — programmatically hidden (never shown)
 *
 * `"none"` only collapses/animates when the matching breakpoint's `colLayout`
 * is provided as a track array (see `ColLayoutConfig`). With a string layout it
 * falls back to `"*"` and logs a `console.error`.
 */
export type ColMinBreakpoint = "*" | "s" | "m" | "l" | "none";
/** Subset of breakpoints that can be returned by `useBreakpoints` hook */
export type ViewportBreakpoint = "s" | "m" | "l";

/**
 * Valid CSS value for `grid-template-columns`.
 */
export type CSSValue = string;

/**
 * A per-column track array parallel to `colVisibility`
 * (e.g. `["1fr", "1fr", "min-content"]`). The recommended layout form: only
 * arrays keep a constant track count, so hidden columns can animate and
 * `colVisibility: "none"` works.
 */
export type ColTrackList = CSSValue[];

/**
 * A raw `grid-template-columns` CSS string (e.g. `"repeat(2, 1fr) min-content"`).
 *
 * @deprecated Use a per-column track array instead (see {@link ColTrackList}).
 * String layouts can't animate or support `colVisibility: "none"`, and are
 * removed in the next major version.
 */
export type LegacyColLayoutString = CSSValue;

/**
 * For each breakpoint key, either a {@link ColTrackList} (recommended) or a
 * {@link LegacyColLayoutString} (deprecated).
 */
export type ColLayoutValue = ColTrackList | LegacyColLayoutString;
export type ColLayoutConfig = {
  s: ColLayoutValue;
  m: ColLayoutValue;
  l: ColLayoutValue;
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
   * Column layout per breakpoint (mobile-first: "m" means "m or larger").
   *
   * Provide each value as a per-column track array parallel to `colVisibility`,
   * e.g. `["1fr", "1fr", "min-content"]`. This keeps the track count constant so
   * hidden columns can animate open/closed and `colVisibility: "none"` works.
   *
   * @deprecated Passing a `grid-template-columns` string (e.g.
   * `"repeat(4, 1fr) min-content"`) is deprecated and removed in the next major.
   * Use an array instead: `["1fr", "1fr", "1fr", "1fr", "min-content"]`.
   */
  colLayout?: ColLayoutConfig;
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

  /**
   * The layout for the current breakpoint decides the rendering mechanism:
   * - a track **array** → animated mode (constant track count, hidden columns
   *   collapse to `minmax(0, 0fr)` and transition; `"none"` is honored).
   * - a **string** → legacy mode (variable track count, hidden columns drop
   *   their track and unmount; `"none"` falls back to `"*"`).
   *
   * NOTE: `isAnimated` and the legacy (string) branch exist only to keep the
   * deprecated string `colLayout` form working. Once string layouts are removed
   * in the next major version, every table is array-based/animated, this flag is
   * always `true`, and both the flag and the legacy branch can be deleted.
   */
  const layoutForBreakpoint =
    colLayout[currentBreakpoint as ViewportBreakpoint];
  let isAnimated = Array.isArray(layoutForBreakpoint);

  // Animated mode requires one track per column so tracks can interpolate.
  if (isAnimated && layoutForBreakpoint.length !== colVisibility.length) {
    // eslint-disable-next-line no-console
    console.error(
      `Table: colLayout["${currentBreakpoint}"] has ${layoutForBreakpoint.length} ` +
        `tracks but colVisibility has ${colVisibility.length} columns. ` +
        `Array layouts must be parallel to colVisibility. ` +
        `Falling back to non-animated layout for this breakpoint.`,
    );
    isAnimated = false;
  }

  const hasNone = colVisibility.some((min) => min === "none");
  if (!isAnimated && hasNone) {
    // eslint-disable-next-line no-console
    console.error(
      `Table: colVisibility uses "none" but colLayout["${currentBreakpoint}"] ` +
        `is not a track array. "none" requires an array layout ` +
        `(e.g. ["1fr", "1fr", "min-content"]) to collapse a single track. ` +
        `Treating "none" as "*" (always visible) for this breakpoint.`,
    );
  }

  /**
   * Effective visibility for a column at the current breakpoint. `"none"` is
   * only ever hidden in animated mode; in legacy mode it falls back to `"*"`.
   */
  const isColumnVisible = (min: ColMinBreakpoint): boolean =>
    min === "none"
      ? !isAnimated
      : isBreakpointSatisfied(min, currentBreakpoint as ViewportBreakpoint);

  const visibleCols: number = colVisibility.filter(isColumnVisible).length;

  const defaultLayout = {
    s: `repeat(${visibleCols}, 1fr)`,
    m: `repeat(${visibleCols}, 1fr)`,
    l: `repeat(${visibleCols}, 1fr)`,
  };

  const validLayoutsFromProps = Object.fromEntries(
    Object.entries(colLayout).filter(
      ([, cssVal]) =>
        // Only string layouts feed the legacy template. Array layouts are
        // handled separately below.
        typeof cssVal === "string" &&
        // In browser environments, the CSS global has a `supports` method intended
        // for feature detection. It also returns false if the property name
        // or value passed in is invalid, acting as a validator.
        (CSS?.supports("grid-template-columns", cssVal) ?? true),
    ),
  );

  const finalLayout = { ...defaultLayout, ...validLayoutsFromProps };

  /**
   * `<flex>` widths are wrapped in `minmax(0, …)` so a track can actually reach
   * zero even when its cell content has an intrinsic min-size, and so both
   * endpoints share a type (`<flex>` ↔ `<flex>`) and therefore interpolate.
   */
  const toTrack = (w: CSSValue) =>
    /^\s*\d*\.?\d+fr\s*$/.test(w) ? `minmax(0, ${w.trim()})` : w;

  /**
   * In animated mode we build the template directly from the array layout so the
   * track count is always `colVisibility.length` (a prerequisite for grid tracks
   * to interpolate). Visible columns use their track size; hidden columns
   * (breakpoint-hidden or `"none"`) collapse to `minmax(0, 0fr)`.
   */
  const gridTemplateColumns =
    isAnimated && Array.isArray(layoutForBreakpoint)
      ? colVisibility
          .map((min, i) =>
            isColumnVisible(min)
              ? toTrack(layoutForBreakpoint[i])
              : "minmax(0, 0fr)",
          )
          .join(" ")
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
        isAnimated,
      }}
    >
      <div
        role="table"
        className={cc([
          "nds-table",
          `nds-table--${rowDensity}`,
          `nds-table--${kind}`,
          {
            "nds-table--animated": isAnimated,
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
