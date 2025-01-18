import React from "react";
import { button } from "dist/docs/classManifest";
import ClassExample from "helpers/ClassExample";

export default {
  title: "Style/Helper Classes/Forms",
};

export const ButtonReset = {
  render: () => (
    <ClassExample signature="button--reset" classCategory={button} hideBorder>
      <button>
        This is a button element with styles reset to look like normal text
      </button>
    </ClassExample>
  ),

  name: "Button Reset",
};
