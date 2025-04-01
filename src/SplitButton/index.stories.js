/* eslint-disable jsx-a11y/anchor-is-valid,react/jsx-key */
import React, { useState } from "react";
import SplitButton from "./";

const Template = (args) => <SplitButton {...args} />;
export const Overview = Template.bind({});
Overview.args = {
  children: <>lol</>,
};

export default {
  title: "Components/SplitButton",
  component: SplitButton,
};
