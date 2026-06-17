import { addons } from "storybook/manager-api";
import { ui } from "./theme/narmi";

addons.setConfig({
  theme: ui,
  sidebar: {
    collapsedRoots: [
      "components",
      "design-tokens",
      "examples",
      "hooks",
      "style",
      "utilities",
    ],
  },
});
