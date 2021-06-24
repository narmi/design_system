import React from "react";
import Typography from "components/Typography";
import { Centered } from "../../decorators";

export default {
  title: "Components/Typography",
  component: Typography,
  decorators: [Centered],
};

const allLetters = "The wizard quickly jinxed the gnomes before they vaporized";

const Template = (args) => <Typography {...args} />;
const DefaultArgs = {
  children: [allLetters],
};

export const TypographySpan = Template.bind({});
TypographySpan.args = {
  ...DefaultArgs,
  children: [allLetters],
};

export const Header1 = Template.bind({});
Header1.args = {
  ...DefaultArgs,
  h1: true,
  children: [allLetters],
};

export const Header2 = Template.bind({});
Header2.args = {
  ...DefaultArgs,
  h2: true,
  children: [allLetters],
};

export const Header3 = Template.bind({});
Header3.args = {
  ...DefaultArgs,
  h3: true,
  children: [allLetters],
};

export const Subheader = Template.bind({});
Subheader.args = {
  ...DefaultArgs,
  subheader: true,
  children: [allLetters],
};

export const P1Regular = Template.bind({});
P1Regular.args = {
  ...DefaultArgs,
  p1: true,
  children: [allLetters],
};

export const P1semibold = Template.bind({});
P1semibold.args = {
  ...DefaultArgs,
  p1: true,
  semibold: true,
  children: [allLetters],
};

export const P2Regular = Template.bind({});
P2Regular.args = {
  ...DefaultArgs,
  p2: true,
  children: [allLetters],
};

export const P2semibold = Template.bind({});
P2semibold.args = {
  ...DefaultArgs,
  p2: true,
  semibold: true,
  children: [allLetters],
};

export const P3Regular = Template.bind({});
P3Regular.args = {
  ...DefaultArgs,
  p3: true,
  children: [allLetters],
};

export const P3semibold = Template.bind({});
P3semibold.args = {
  ...DefaultArgs,
  p3: true,
  semibold: true,
  children: [allLetters],
};
