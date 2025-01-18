import React from "react";
import { layout } from "dist/tokens/js/manifest";
import TokenTable, { toTokenRows } from "helpers/TokenTable";

export default {
  title: "Design Tokens/Layout",
};

const Template = (args) => <TokenTable {...args} />;

export const Spacing = Template.bind({});
Spacing.args = {
  previewType: "spacing",
  rows: toTokenRows(layout, "space"),
};
