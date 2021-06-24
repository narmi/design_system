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
  H1: true,
  children: ["test"],
};

export const Header2 = Template.bind({});
Header2.args = {
  ...DefaultArgs,
  H2: true,
  children: ["test"],
};

export const Header3 = Template.bind({});
Header3.args = {
  ...DefaultArgs,
  H3: true,
  children: ["test"],
};

export const Subheader = Template.bind({});
Subheader.args = {
  ...DefaultArgs,
  Subheader: true,
  children: ["test"],
};

export const P1Regular = Template.bind({});
P1Regular.args = {
  ...DefaultArgs,
  P1: true,
  children: ["test"],
};

export const P1SemiBold = Template.bind({});
P1SemiBold.args = {
  ...DefaultArgs,
  P1: true,
  SemiBold: true,
  children: ["test"],
};

export const P2Regular = Template.bind({});
P2Regular.args = {
  ...DefaultArgs,
  P2: true,
  children: ["test"],
};

export const P2SemiBold = Template.bind({});
P2SemiBold.args = {
  ...DefaultArgs,
  P2: true,
  SemiBold: true,
  children: ["test"],
};

export const P3Regular = Template.bind({});
P3Regular.args = {
  ...DefaultArgs,
  P3: true,
  children: ["test"],
};

export const P3SemiBold = Template.bind({});
P3SemiBold.args = {
  ...DefaultArgs,
  P3: true,
  SemiBold: true,
  children: ["test"],
};

export const Link = Template.bind({});
Link.args = {
  ...DefaultArgs,
  P1: true,
  Link: true,
  children: ["test"],
};

export const SmallLink = Template.bind({});
SmallLink.args = {
  ...DefaultArgs,
  P1: true,
  SmallLink: true,
  children: ["test"],
};
