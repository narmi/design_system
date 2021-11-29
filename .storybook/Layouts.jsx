import React from "react";
import {
  Title,
  Description,
  ArgsTable,
  Primary,
  Stories,
  PRIMARY_STORY,
} from "@storybook/addon-docs";
import ImportCopy from "./helpers/ImportCopy";

/**
 * `preview.js` is configured to use this layout instead of
 * the default `addon-docs` configuration.
 *
 * This allows us to insert custom elements or change the order
 * of doc blocks as we see fit.
 */
export const Layout = () => (
  <>
    <Title />
    <Description />
    <Primary />
    <ImportCopy />
    <ArgsTable story={PRIMARY_STORY} />
    <Stories />
  </>
);

/**
 * Docs tab layout just for the Dialog story
 * (does not show an initial preview)
 */
export const DialogLayout = () => (
  <>
    <Title />
    <Description />
    <ImportCopy />
    <ArgsTable story={PRIMARY_STORY} />
    <Stories />
  </>
);
