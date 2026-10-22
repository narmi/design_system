import React from "react";
import "./story-styles.css";
import "../src/index.scss";
// Injects the required viewport meta tag into the preview iframe, matching
// what published consumers get via `src/index.ts`.
import "../src/util/viewport";
import { NdsStyles, ExamplesBackground } from "./decorators";
import { docs } from "./theme/narmi";

export const parameters = {
  viewMode: "docs",
  a11y: {
    // Fail `pnpm run test:storybook` (and the Storybook a11y CI job) on any
    // axe violation. Pre-existing violations are tolerated through
    // `.storybook/a11y-baseline.json`; see scripts/testStorybook.mjs.
    test: "error",
  },
  previewTabs: {
    "storybook/docs/panel": { index: -1 },
  },
  docs: {
    theme: docs,
  },
  actions: {},
  controls: {
    sort: "requiredFirst",
    exclude: /children/,
    matchers: {
      color: /(background|color)$/i,
    },
  },
  options: {
    storySort: {
      order: [
        "Introduction",
        ["Welcome", "Release Notes"],
        "Design Tokens",
        "Style",
        "Components",
        "Hooks",
        "Utilities",
        ["Formatters"],
      ],
    },
  },
};

export const globalTypes = {
  contrast: {
    description: "Color contrast mode",
    toolbar: {
      title: "Contrast",
      items: [
        { value: "system", title: "System" },
        { value: "standard", title: "Standard" },
        { value: "more", title: "High Contrast" },
      ],
      dynamicTitle: true,
    },
  },
  colorVision: {
    description: "Color vision deficiency simulation palette",
    toolbar: {
      title: "Color Vision",
      items: [
        { value: "none", title: "Typical Vision" },
        { value: "red-green", title: "Protanopia / Deuteranopia" },
        { value: "tritanopia", title: "Tritanopia" },
      ],
      dynamicTitle: true,
    },
  },
};

export const initialGlobals = { contrast: "system", colorVision: "none" };

export const decorators = [NdsStyles, ExamplesBackground];
export const tags = ["autodocs"];
