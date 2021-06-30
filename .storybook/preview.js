/*
 *  Global config for all Stories
 *
 *  - adds params
 *  - adds global Decorators
 */

import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../src/globalStyles";

/* default empty theme - can be overridden in Storybook or per-component:
 * https://styled-components.com/docs/advanced#function-theme
 */
const defaultTheme = {
  name: "default",
  primaryColor: null,
  secondaryColor: null,
  tertiaryColor: null,
};

export const decorators = [
  (Story) => (
    <div style={{backgroundColor: "pink"}}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    </div>
  ),
];

// the actual exports for .storybook
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  addons: ["storybook-addon-styled-component-theme/dist/preset"],
};
