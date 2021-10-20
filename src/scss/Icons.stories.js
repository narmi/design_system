import React from "react";
import IconSelection from "dist/icons/selection.json";

export default {
  title: "Style/Icons",
};

export const Icons = () => {
  return (
    <div className="nds-typography">
      <h4 className="nds-sans">Our Icons</h4>
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
