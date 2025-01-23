import React from "react";
import { bgColor, scrim } from "dist/docs/classManifest";
import ClassExample from "helpers/ClassExample";

export default {
  title: "Style/Helper Classes/Background",
};

export const BackgroundColor = {
  render: () => (
    <ClassExample signature="bgColor--<color>" classCategory={bgColor}>
      <div>Element with a background helper applied</div>
    </ClassExample>
  ),

  name: "Background Color",
};

export const BackgroundScrim = {
  render: () => (
    <ClassExample signature="scrim--<color>" classCategory={scrim}>
      <div>Element with a scrim helper applied</div>
    </ClassExample>
  ),

  name: "Background Scrim",
};
