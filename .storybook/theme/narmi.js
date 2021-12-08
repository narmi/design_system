import { create } from "@storybook/theming";
import {
  ColorNarmiSand800 as lightSand,
  ColorNarmiCove200 as darkCove,
  ColorNarmiAzul as azul,
} from "../../dist/tokens/js/colors";
import logo from "./narmi-logo.png";

const shared = {
  base: "light",
  appBorderRadius: 8,
  fontBase: '"Mulish", sans-serif',
  fontCode: "Monaco, Consolas, monospace",
  appContentBg: "white",
};

/**
 * Thmes the contents of the docs area
 */
export const docs = create({
  ...shared,
});

/**
 * Thmes the Storybook UI (sidebar, toolbars, etc)
 */
export const ui = create({
  ...shared,

  // logo/branding
  brandTitle: "Narmi Design System",
  brandUrl: "https://github.com/narmi/design_system",
  brandImage: logo,

  colorPrimary: azul,
  colorSecondary: darkCove,

  // Page background
  appBg: lightSand,

  // Toolbar active tab/control
  barSelectedColor: azul,
});
