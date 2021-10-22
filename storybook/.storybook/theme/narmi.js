import { create } from "@storybook/theming";
import colors from "./colors";

/**
 * Themes the "Docs" tab contents
 */
export const docPage = create({
  base: "light",
  appContentBg: colors.lightSand,
  appBorderRadius: 8,
  fontBase: '"Mulish", sans-serif',
  fontCode: "Monaco, Consolas, monospace",
});

/**
 * Themes storybook UI/chrome
 */
export const ui = create({
  base: "dark",

  colorPrimary: colors.pistachio,
  colorSecondary: colors.moss,

  // UI
  appBg: colors.pine,
  appContentBg: colors.lightSand,
  appBorderColor: "#EED6C3",
  appBorderRadius: 8,

  // Typography
  fontBase: '"Mulish", sans-serif',
  fontCode: "Monaco, Consolas, monospace",

  // Text colors
  textInverseColor: "hotpink",
  textMutedColor: colors.pistachio,

  // Toolbar default and active colors
  barTextColor: colors.darkSand,
  barSelectedColor: colors.cove,
  barBg: colors.lightSand,

  brandTitle: "Narmi Design System",
  brandUrl: "https://github.com/narmi/design_system",
  brandImage:
    "https://raw.githubusercontent.com/narmi/design_system/master/storybook/.storybook/theme/narmi-logo-white.png?token=AABYOVG4ZKK3PXBZMBDOUADBPRDLA",
});
