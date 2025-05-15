import React, { useContext } from "react";
import TableSectionContext from "./util/tableSectionContext";
import TableLayoutContext from "./util/tableLayoutContext";
import { isBreakpointSatisfied } from "./util/breakpoint";

// TODO: a lot of this logic belongs in a `./util/hook`
const Body = ({ children }: { children: React.ReactNode }) => {
  const { currentBreakpoint, colLayout, totalColumns } =
    useContext(TableLayoutContext);

  // TODO: find a better fallback via pure fn to determine config key cascade
  let gridTemplateColumns = `repeat(${totalColumns}, 1fr)`;

  // FIXME: we want total number of _visible_ columns for the bp, not all of them
  if (colLayout[currentBreakpoint]) {
    gridTemplateColumns = colLayout[currentBreakpoint];
  }

  // FIXME: we need a pure function that can determine how the keys of the config are resolved against current BP
  console.info(
    `CURRENT: ${currentBreakpoint} | ${[...Array(30).fill("-")].join("")}`,
  );
  console.info(isBreakpointSatisfied(currentBreakpoint, "s"));
  console.info(isBreakpointSatisfied(currentBreakpoint, "m"));
  console.info(isBreakpointSatisfied(currentBreakpoint, "l"));

  return (
    <div
      className="nds-table-body"
      role="rowgroup"
      /**
       * Use the layout configuration passed to `Table` to set grid
       * tracks that Row grids will participate in via CSS subgrid
       */
      style={{ gridTemplateColumns }}
    >
      <TableSectionContext.Provider value={{ section: "body" }}>
        {children}
      </TableSectionContext.Provider>
    </div>
  );
};

export default Body;
