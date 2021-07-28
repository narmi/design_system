import React from "react";
import { deviceBreakpoints } from "global";

const ButtonBar = ({ className, children }) => (
  <div className={`nds-buttonbar ${className}`}>
    {children}
  </div>
);

ButtonBar.styles = `
  .nds-buttonbar {
    display: flex;
    flex-direction: column;
  }
  @media ${`(min-width: ${deviceBreakpoints.desktop})`} {
    .nds-buttonbar {
      flex-direction: row;
    }
  }
`;
export default ButtonBar;
