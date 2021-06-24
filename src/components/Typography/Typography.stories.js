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
  children: ["test"],
};

export const TypographySpan = Template.bind({});
TypographySpan.args = {
  ...DefaultArgs,
  children: ["test"],
};

export const Header1 = Template.bind({});
Header1.args = {
  ...DefaultArgs,
  children: ["test"],
};

export const Header2 = Template.bind({});
Header2.args = {
  ...DefaultArgs,
  children: ["test"],
};

export const Header3 = Template.bind({});
Header3.args = {
  ...DefaultArgs,
  children: ["test"],
};

export const SubHeader = Template.bind({});
SubHeader.args = {
  ...DefaultArgs,
  children: ["test"],
};

export const P1Regular = Template.bind({});
P1Regular.args = {
  ...DefaultArgs,
  children: ["test"],
};

export const P1SemiBold = Template.bind({});
P1SemiBold.args = {
  ...DefaultArgs,
  children: ["test"],
};

export const P2Regular = Template.bind({});
P2Regular.args = {
  ...DefaultArgs,
  children: ["test"],
};

export const P2SemiBold = Template.bind({});
P2SemiBold.args = {
  ...DefaultArgs,
  children: ["test"],
};

export const P3Regular = Template.bind({});
P3Regular.args = {
  ...DefaultArgs,
  children: ["test"],
};

export const P3SemiBold = Template.bind({});
P3SemiBold.args = {
  ...DefaultArgs,
  children: ["test"],
};
