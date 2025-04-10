import React from "react";
import Spinner from "./";

const Template = (args) => <Spinner {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  size: 28,
  strokeWidth: 3,
  color: "var(--theme-secondary)",
};

export default {
  title: "Components/Spinner",
  component: Spinner,
  argTypes: {
    size: {
      control: {
        type: "number",
      },
    },
    strokeWidth: {
      control: {
        type: "number",
      },
    },
    color: {
      control: {
        type: "color",
      },
    },
  },
};
