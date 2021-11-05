import React from "react";
import {
  Title,
  Description,
  ArgsTable,
  Primary,
  Stories,
  PRIMARY_STORY,
} from "@storybook/addon-docs";

/**
 * `preview.js` is configured to use this layout instead of
 * the default `addon-docs` configuration.
 *
 * This allows us to insert custom elements or change the order
 * of doc blocks as we see fit.
 */
const Layout = () => (
  <>
    <Title />
    <Description />
    <Primary />
    <ArgsTable story={PRIMARY_STORY} />
    <Stories />
  </>
);

export default Layout;
