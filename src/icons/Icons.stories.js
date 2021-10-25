import React from "react";
import IconSelection from "./selection.json";

export default {
  title: "Style/Icons",
};

export const Icons = () => {
  return (
    <div className="nds-typography">
      <div className="icon-demo">
        {IconSelection.icons.map((icon) => (
          <div className="icon-demo-box">
            <span
              className={`icon-demo-icon narmi-icon-${icon.properties.name}`}
            >
              {" "}
            </span>
            <span className="icon-demo-title">{icon.properties.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
