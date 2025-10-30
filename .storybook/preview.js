import React from "react";
import "./story-styles.css";
import "../src/index.scss";
import { NdsStyles } from "./decorators";
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

export const decorators = [NdsStyles];
export const tags = ["autodocs"];
