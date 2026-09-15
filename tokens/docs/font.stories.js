import React from "react";
import { font } from "dist/tokens/js/manifest.esm.js";
import TokenTable, { toTokenRows } from "helpers/TokenTable";

// Meta information for Storybook
export default {
  title: "Design Tokens/Font",
};

const Template = (args) => <TokenTable {...args} />;

export const Color = Template.bind({});
Color.args = {
  previewType: "color",
  rows: toTokenRows(font, "color", "font-color"),
};

export const Size = () => (
  <>
    <h2>Size</h2>
    <TokenTable rows={toTokenRows(font, "size", "font-size")} />
  </>
);

export const Family = () => (
  <>
    <h2>Family</h2>
    <TokenTable rows={toTokenRows(font, "family", "font-family")} />
  </>
);

export const Weight = () => (
  <>
    <h2>Weight</h2>
    <TokenTable rows={toTokenRows(font, "weight", "font-weight")} />
  </>
);

export const LineHeight = () => (
  <>
    <h2>Style</h2>
    <TokenTable rows={toTokenRows(font, "lineHeight", "font-lineHeight")} />
  </>
);
