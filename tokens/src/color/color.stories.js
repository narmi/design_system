import React from "react";
import { color } from "dist/tokens/js/manifest.esm.js";
import TokenTable, { toTokenRows } from "helpers/TokenTable";

export default {
  title: "Design Tokens/Color",
};

const Template = (args) => <TokenTable {...args} />;

export const Base = Template.bind({});
Base.args = {
  previewType: "color",
  rows: toTokenRows(color, "narmi", "color").filter(({ name }) => {
    // filter out offset brand colors (e.g. `moss100`) from documentation for now
    const isOffsetColor = new RegExp(/[0-9]/).test(name);
    return !isOffsetColor;
  }),
};

export const Theme = () => (
  <>
    <h2>Theme Colors</h2>
    <TokenTable
      previewType="color"
      rows={toTokenRows(color, "theme", "theme")}
    />
  </>
);

export const Background = () => (
  <>
    <h2>Background Colors</h2>
    <TokenTable
      previewType="color"
      rows={toTokenRows(color, "background", "bgColor")}
    />
  </>
);

export const System = () => (
  <>
    <h2>System Colors</h2>
    <TokenTable
      previewType="color"
      rows={toTokenRows(color, "system", "color")}
    />
  </>
);

export const Transparency = () => (
  <>
    <h2>Alpha Values</h2>
    <TokenTable rows={toTokenRows(color, "alpha", "alpha")} />
  </>
);
