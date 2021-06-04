import React from "react";
import Icon from "components/Icon";
import Narmi from "../../assets/narmi-logo.svg";
import { Centered } from "../../decorators";

export default {
  title: "Components/Icon",
  component: Icon,
  decorators: [Centered],
};

const Template = (args) => <Icon {...args} />;
export const NarmiIcon = Template.bind({});
NarmiIcon.args = {
  image: Narmi,
  children: [],
};
