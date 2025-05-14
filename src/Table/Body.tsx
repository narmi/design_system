import React, { useContext } from "react";
import TableSectionContext from "./util/tableSectionContext";
import TableLayoutContext from "./util/tableLayoutContext";

const Body = ({ children }: { children: React.ReactNode }) => {
  const { currentBreakpoint, colLayout, colVisibility } =
    useContext(TableLayoutContext);

  return (
    <div
      className="nds-table-body"
      role="rowgroup"
      /**
       * Use the layout configuration passed to `Table` to set grid
       * tracks that Row grids will participate in via CSS subgrid
       */
      style={{
        gridTemplateColumns: colLayout[currentBreakpoint](colVisibility.length),
      }}
    >
      <TableSectionContext.Provider value={{ section: "body" }}>
        {children}
      </TableSectionContext.Provider>
    </div>
  );
};

export default Body;
