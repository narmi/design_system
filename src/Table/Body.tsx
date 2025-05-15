import React, { useContext } from "react";
import TableSectionContext from "./util/tableSectionContext";
import TableLayoutContext from "./util/tableLayoutContext";
import { columnTemplateFromBreakpoints } from "./util/grid";

// TODO: a lot of this logic belongs in a `./util/hook`
const Body = ({ children }: { children: React.ReactNode }) => {
  const { currentBreakpoint, colLayout, visibleCols } =
    useContext(TableLayoutContext);
  const gridTemplateColumns = columnTemplateFromBreakpoints(
    currentBreakpoint,
    colLayout,
    visibleCols,
  );

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
