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

export const decorators = [NdsStyles, ExamplesBackground];
export const tags = ["autodocs"];
