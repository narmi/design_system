import React from "react";
import "./story-styles.css";
import "dist/style.css";
import { NdsStyles } from "./decorators";
import { Layout } from "./Layouts";
import { docs } from "./theme/narmi";

export const parameters = {
  viewMode: "docs",
  previewTabs: {
    "storybook/docs/panel": { index: -1 },
  },
  docs: {
    page: () => <Layout />,
    theme: docs,
  },
  actions: {
    argTypesRegex: "^on[A-Z].*",
  },
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
        "Utilities",
        ["Formatters", "Hooks"],
      ],
    },
  },
};

export const decorators = [NdsStyles];
