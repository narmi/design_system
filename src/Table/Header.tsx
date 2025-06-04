import React from "react";

const Header = ({ children }: { children: React.ReactNode }) => (
  <div className="nds-table-header" role="rowgroup">
    {children}
  </div>
);

export default Header;
