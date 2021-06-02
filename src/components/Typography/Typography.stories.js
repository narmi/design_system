import React from "react";
import Typography from "components/Typography";
import { Centered } from "../../decorators";

export default {
  title: "Components/Typography",
  component: Typography,
  decorators: [Centered],
};

const Template = (args) => <Typography {...args} />;
const DefaultArgs = {
    text: "",
    hover: false,
};

export const TypographySpan = Template.bind({});
TypographySpan.args = {
  ...DefaultArgs,
  text: "test",
  hover: false,
};

export const TypographyHover = Template.bind({});
TypographyHover.args = {
  ...DefaultArgs,
  text: "test",
  hover: true,
};