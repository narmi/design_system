import React from "react";
import { color } from "dist/tokens/js/manifest.esm.js";
import TokenTable, { toTokenRows } from "helpers/TokenTable";

export default {
  title: "Design Tokens/Color",
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
