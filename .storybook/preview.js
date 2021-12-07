import React from "react";
import "./story-styles.css";
import "dist/style.css";
import { NdsStyles } from "./decorators";
import { Layout } from "./Layouts";

export const parameters = {
  viewMode: "docs",
  previewTabs: {
    "storybook/docs/panel": { index: -1 },
  },
  docs: {
    page: () => <Layout />,
  },
  controls: {
    sort: "requiredFirst",
    matchers: {
      color: /(background|color)$/i,
    },
  },
  options: {
    storySort: {
      order: ["Introduction", "Design Tokens", "Style", "Components"],
    },
  },
};

export const decorators = [NdsStyles];
