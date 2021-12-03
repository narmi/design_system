import React from "react";
import Toggle from "./";

const Template = (args) => <Toggle {...args} />;

export const Overview = Template.bind({});

export default {
  title: "Components/Toggle",
  component: Toggle,
  argTypes: {
    children: { table: { disable: true } },
    onChange: { action: "clicked" },
  },
};
