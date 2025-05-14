import React from "react";
import TableSectionContext from "./util/tableSectionContext";

const Body = ({ children }: { children: React.ReactNode }) => (
  <div role="rowgroup">
    <TableSectionContext.Provider value={{ section: "body" }}>
      {children}
    </TableSectionContext.Provider>
  </div>
);

export default Body;
