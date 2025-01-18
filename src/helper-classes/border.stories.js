import React from "react";
import { border as borderHelpers, rounded } from "dist/docs/classManifest";
import ClassExample from "helpers/ClassExample";

export default {
  title: "Style/Helper Classes/Border",
};

export const Border = {
  render: () => (
    <ClassExample
      signature="border--<side>"
      classCategory={borderHelpers}
      hideBorder
    >
      <div>Element with a border helper applied</div>
    </ClassExample>
  ),

  name: "Border",
};

export const BorderRadius = {
  render: () => (
    <ClassExample
      signature="rounded--<side>(--<amount>)"
      classCategory={rounded}
      hideBorder
    >
      <div className="padding--all--xs bgColor--cloudGrey">
        Element with a border helper applied
      </div>
    </ClassExample>
  ),

  name: "Border Radius",
};
