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
  argTypes: {
    children: { control: false }, // never show a control for `children` prop
  },
  controls: {
    sort: "requiredFirst",
    matchers: {
      color: /(background|color)$/i,
    },
  },
};

export const decorators = [NdsStyles];
