import React from "react";
import iconSelection from "dist/icons/selection.json";

export default {
  title: "Style/Icons",
};

export const Icons = () => {
  const iconNames = [];

  iconSelection.icons.forEach((iconData) => {
    const namesAndAliases = iconData.properties.name.split(",");
    namesAndAliases.forEach((name) => {
      iconNames.push(name.trim());
    });
  });

  return (
    <div className="nds-typography">
      <div className="icon-demo">
        {iconNames.map((name) => (
          <div key={name} className="icon-demo-box">
            <span className={`icon-demo-icon narmi-icon-${name}`}> </span>
            <span className="icon-demo-title">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
