import React from "react";
import ProgressBar from "./";

const Template = (args) => <ProgressBar {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  percentComplete: 25,
};

export default {
  title: "Components/ProgressBar",
  component: ProgressBar,
};
