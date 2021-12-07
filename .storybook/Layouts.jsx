import React, { useContext } from "react";
import {
  Title,
  Description,
  ArgsTable,
  Primary,
  Stories,
  PRIMARY_STORY,
  DocsContext,
} from "@storybook/addon-docs";
import ImportCopy from "./helpers/ImportCopy";

/**
 * Determines if the story being rendered is in the "Components" category
 * @param {*} DocsContext Context from addon-docs
 * @returns {Boolean}
 */
const useIsComponent = (DocsContext) => {
  const { kind } = useContext(DocsContext);
  const [category] = kind.split("/");
  return category === "Components";
};

/**
 * `preview.js` is configured to use this layout instead of
 * the default `addon-docs` configuration.
 *
 * This allows us to insert custom elements or change the order
 * of doc blocks as we see fit.
 */
export const Layout = () => {
  const isComponent = useIsComponent(DocsContext);
  return (
    <>
      <Title />
      <Description />
      {isComponent && <ImportCopy />}
      <Primary />
      <ArgsTable story={PRIMARY_STORY} />
      <Stories />
    </>
  );
};

/**
 * Docs tab layout just for the Dialog story
 * (does not show an initial preview)
 */
export const DialogLayout = () => {
  const isComponent = useIsComponent(DocsContext);
  return (
    <>
      <Title />
      {isComponent && <ImportCopy />}
      <Description />
      <ArgsTable story={PRIMARY_STORY} />
      <Stories />
    </>
  );
};
