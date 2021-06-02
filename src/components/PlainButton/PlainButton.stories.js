import React from "react";
import PlainButton from "components/PlainButton";
import { Centered } from "../../decorators";

export default {
  title: "Components/PlainButton",
  component: PlainButton,
  decorators: [Centered],
};

const Template = (args) => <PlainButton {...args} />;
export const Big = Template.bind({});
Big.args = {
  label: "Text",
  small: false,
  children: [],
};
export const Small = Template.bind({});
Small.args = {
  ...Big.args,
  small: true,
};
