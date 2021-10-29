import React from "react";
import Button from "./";

const Template = (args) => <Button {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  children: "Submit",
};

export default {
  title: "Components/Button",
  component: Button,
};
