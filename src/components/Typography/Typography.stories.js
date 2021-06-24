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
  h1: true,
  children: ["test"],
};

export const Header2 = Template.bind({});
Header2.args = {
  ...DefaultArgs,
  h2: true,
  children: ["test"],
};

export const Header3 = Template.bind({});
Header3.args = {
  ...DefaultArgs,
  h3: true,
  children: ["test"],
};

export const Subheader = Template.bind({});
Subheader.args = {
  ...DefaultArgs,
  subheader: true,
  children: ["test"],
};

export const P1Regular = Template.bind({});
P1Regular.args = {
  ...DefaultArgs,
  p1: true,
  children: ["test"],
};

export const P1semibold = Template.bind({});
P1semibold.args = {
  ...DefaultArgs,
  p1: true,
  semibold: true,
  children: ["test"],
};

export const P2Regular = Template.bind({});
P2Regular.args = {
  ...DefaultArgs,
  p2: true,
  children: ["test"],
};

export const P2semibold = Template.bind({});
P2semibold.args = {
  ...DefaultArgs,
  p2: true,
  semibold: true,
  children: ["test"],
};

export const P3Regular = Template.bind({});
P3Regular.args = {
  ...DefaultArgs,
  p3: true,
  children: ["test"],
};

export const P3semibold = Template.bind({});
P3semibold.args = {
  ...DefaultArgs,
  p3: true,
  semibold: true,
  children: ["test"],
};
