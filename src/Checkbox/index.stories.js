import React from "react";
import Checkbox from "./";

const Template = (args) => <Checkbox {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  label: "I agree to receive spam",
  name: "spam",
};

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    onChange: { action: "change" },
  },
};
