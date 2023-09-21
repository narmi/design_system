import React from "react";
import ResponsiveFlex from "./";

const debugStyle = {
  minHeight: "140px",
  minWidth: "140px",
  fontSize: "56px",
};

export const Overview = (args) => {
  return (
    <div className="fontWeight--thin fontColor--white">
      <ResponsiveFlex {...args}>
        <div
          style={debugStyle}
          className="alignChild--center--center bgColor--cactus"
        >
          1
        </div>
        <div
          style={debugStyle}
          className="alignChild--center--center bgColor--moss"
        >
          2
        </div>
        <div
          style={debugStyle}
          className="alignChild--center--center bgColor--pine"
        >
          3
        </div>
      </ResponsiveFlex>
    </div>
  );
};
Overview.args = {
  direction: "column",
  toRowAt: "m",
  toColumnAt: "xl",
  reverseAt: "l",
};

export default {
  title: "Components/ResponsiveFlex",
  component: ResponsiveFlex,
};
