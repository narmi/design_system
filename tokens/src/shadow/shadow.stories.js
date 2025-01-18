import React from "react";
import { shadow } from "dist/tokens/js/manifest";
import TokenTable, { toTokenRows } from "helpers/TokenTable";

// Meta information for Storybook
export default {
  title: "Design Tokens/Shadow",
};

const Template = (args) => <TokenTable {...args} />;

export const Elevation = Template.bind({});
Elevation.args = {
  previewType: "shadow",
  rows: toTokenRows(shadow, "elevation"),
};
