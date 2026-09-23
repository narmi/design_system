import React from "react";
import ShimmerText from "./";

const Template = (args) => <ShimmerText {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  text: "Generating a response…",
};

export const LongText = Template.bind({});
LongText.args = {
  text: "Reviewing your recent transactions and drafting a summary of anything that looks unusual, this may take a few seconds…",
};
LongText.decorators = [
  (Story) => (
    <div style={{ maxWidth: 320 }}>
      <Story />
    </div>
  ),
];

export default {
  title: "Components/ShimmerText",
  component: ShimmerText,
};
