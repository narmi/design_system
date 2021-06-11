import React from "react";
import Button from "components/Button";
import { Centered } from "../../decorators";

export default {
  title: "Components/Button",
  component: Button,
  decorators: [Centered],
};

const Template = (args) => <Button {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
  disabled: false,
  children: [],
};
export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  ...Primary.args,
  disabled: true,
};
export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  secondary: true,
};
export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  ...Primary.args,
  secondary: true,
  disabled: true,
};
export const WithNestedChildren = Template.bind({});
WithNestedChildren.args = {
  ...Primary.args,
  label: null,
  children: [<div>This is a div inside a Button</div>],
};
