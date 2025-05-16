import React from "react";
import TableSectionContext from "./util/tableSectionContext";

const Header = ({ children }: { children: React.ReactNode }) => (
  <div className="nds-table-header" role="rowgroup">
    <TableSectionContext.Provider value={{ section: "header" }}>
      {children}
    </TableSectionContext.Provider>
  </div>
);

export default Header;
