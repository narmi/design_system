import React from "react";

const ButtonBar = ({ className, children }) => (
  <div className={`nds-buttonbar ${className}`}>
    {children}
  </div>
);
export default ButtonBar;
