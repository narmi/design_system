import React from "react";
import { border } from "dist/tokens/js/manifest";
import TokenTable, { toTokenRows } from "helpers/TokenTable";

// Meta information for Storybook
export default {
  title: "Design Tokens/Border",
};

// Template to create the BorderColor story
const Template = (args) => <TokenTable {...args} />;

export const BorderColor = Template.bind({});
BorderColor.args = {
  previewType: "color",
  rows: toTokenRows(border, "color"),
};

// Story for Border Size
export const BorderSize = () => (
  <>
    <h2>Border Size</h2>
    <TokenTable rows={toTokenRows(border, "size")} />
  </>
);

// Story for Border Radius
export const BorderRadius = () => (
  <>
    <h2>Border Radius</h2>
    <TokenTable rows={toTokenRows(border, "radius")} />
  </>
);
