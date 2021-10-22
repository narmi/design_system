import React from "react";
import "../story-styles.css";
import "../../dist/style.css";
import Layout from "./Layout";
import { docPage } from "./theme/narmi";

export const parameters = {
  previewTabs: {
    "storybook/docs/panel": { index: -1 },
  },
  docs: {
    page: () => <Layout />,
    theme: docPage,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
    },
  },
};
