import React from "react";
import { alignChild, rotate } from "dist/docs/classManifest";
import ClassExample from "helpers/ClassExample";

export default {
  title: "Style/Helper Classes/Position",
};

export const ChildAlignment = {
  render: () => (
    <ClassExample
      signature="alignChild--<xAlign>--<yAlign>"
      classCategory={alignChild}
      hideBorder
    >
      <div
        style={{
          width: "120px",
          height: "120px",
          outline: "1px solid hotpink",
        }}
      >
        <div className="bgColor--cactus fontColor--white">Child</div>
      </div>
    </ClassExample>
  ),

  name: "Child Alignment",
};

export const Rotation = {
  render: () => (
    <ClassExample
      signature="rotate--<degrees number>"
      classCategory={rotate}
      hideBorder
    >
      <div
        className="bgColor--moss"
        style={{
          width: "60px",
          height: "60px",
          textAlign: "center",
          verticalAlign: "bottom",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <span className="fontColor--white fontSize--heading0">旋</span>
      </div>
    </ClassExample>
  ),

  name: "Rotation",
};
