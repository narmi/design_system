import React from "react";

const Body = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="nds-table-body" role="rowgroup">
      {children}
    </div>
  );
};

export default Body;
