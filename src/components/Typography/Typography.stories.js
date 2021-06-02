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
  children: ["test"],
};

export const TypographySpan = Template.bind({});
TypographySpan.args = {
  ...DefaultArgs,
  children: ["test"],
};
