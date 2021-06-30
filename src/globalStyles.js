/*
 *  GlobalStyles the CSS-in-JS way
 *  - https://www.joshwcomeau.com/css/css-variables-for-react-devs/
 *
 *  Styled-components, CSS variables and themes.
 *
 */

import { createGlobalStyle, css } from "styled-components";
import { darken, lighten, transparentize, opacify } from "polished";

// TBD: themes can take input from institutionSettings/vars via <ThemeProvider />
// you can lighten() cssVars downstream once they're mounted to a component,
// but we have to use JSvars here in the global before we can write them to CSS
// - https://github.com/styled-components/polished/issues/494
const narmiPurple = "#2A4494";
const narmiTurquoise = "#44CFCB";
const narmiBlue = "#4EA5D9";
const Theme = {
  primaryColor: (props) => props.theme.primaryColor || narmiPurple,
  secondaryColor: (props) => props.theme.secondaryColor || narmiTurquoise,
  tertiaryColor: (props) => props.theme.tertiaryColor || narmiBlue,
};

export const ndsWhite = "#fff";
export const messagingRed = "#d93b3b";

export const deviceBreakpoints = {
  mobile: "375px",
  mobileMax: "425px", // different from spec
  tablet: "768px",
  laptop: "1280px",
  desktop: "1440px",
};

const GlobalStyles = createGlobalStyle`
  :root {
    --nds-narmi-purple: ${narmiPurple};
    --nds-grey-disabled: #d9d9d9;
    --nds-grey-disabled-fill: #f3f3f3;
    --nds-grey-placeholder: #8c8c8c;
    --nds-grey-text: #4c4c4c;
    --nds-grey-scrim-light: ${(p) => lighten(0.3, "rgba(80, 80, 80, 0.7)")};
    --nds-grey-hover: rgba(42,68,148,0.05);
    --nds-white: ${ndsWhite};
    --nds-black: #333;
    --nds-red-error: ${messagingRed};

    --nds-messaging-green: #37b374;
    --nds-messaging-green-light: #e3fae7;
    --nds-messaging-yellow: #eac348;
    --nds-messaging-yellow-light: #fef8e3;
    --nds-messaging-red: ${messagingRed};
    --nds-messaging-red-light: #fdf1f1;

    --nds-background-bluegrey: #f4f6fa;          // Tables, rows
    --nds-background-neutralgrey: #f9f9f9;       // Used as the background color for most pages
    --nds-background-smokegrey: #f3f3f3;         // Hover color for dropdown, table, etcA
    --nds-background-legacy-cloudgrey: #e9e9e9;  // legacy: do not use
    --nds-background-legacy-snowgrey: #fbfbfb;   // legacy: do not use

    --nds-font-family: 'Mulish';
    --nds-primary-color: ${(p) => Theme.primaryColor(p)};
    --nds-secondary-color: ${(p) => Theme.secondaryColor(p)};
    --nds-tertiary-color: ${(p) => Theme.tertiaryColor(p)};

    --nds-primary-color-dark: ${(p) => darken(0.1, Theme.primaryColor(p))};
    --nds-primary-color-light: ${(p) =>
      transparentize(0.8, Theme.primaryColor(p))};
    --nds-primary-color-lighter: ${(p) =>
      transparentize(0.9, Theme.primaryColor(p))};
    --nds-primary-color-lightest: ${(p) =>
      transparentize(0.95, Theme.primaryColor(p))};

    --nds-dropshadow-dark: 0 2px 12px rgba(80, 80, 80, 0.2);
    --nds-dropshadow-light: 0 2px 12px rgba(80, 80, 80, 0.05);
  }
  body {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
