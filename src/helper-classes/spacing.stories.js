import React from "react";
import {
  margin as marginHelpers,
  padding as paddingHelpers,
} from "dist/docs/classManifest";
import ClassExample from "helpers/ClassExample";

export default {
  title: "Style/Helper Classes/Spacing",
};

export const Margin = {
  render: () => (
    <ClassExample
      signature="margin--<amount|side|axis>(--<amount>)"
      classCategory={marginHelpers}
    >
      <div
        style={{
          background: "antiquewhite",
        }}
      >
        Element with margin helper
      </div>
    </ClassExample>
  ),

  name: "Margin",
};

export const Padding = {
  render: () => (
    <ClassExample
      signature="padding--<amount|side|axis>(--<amount>)"
      classCategory={paddingHelpers}
    >
      <div
        style={{
          background: "antiquewhite",
        }}
      >
        Element with padding helper
      </div>
    </ClassExample>
  ),

  name: "Padding",
};
