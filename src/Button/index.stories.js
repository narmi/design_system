import React from "react";
import Button, { VALID_ICON_NAMES } from "./";

const Template = (args) => <Button {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  label: "Submit",
};

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
    children: { control: false },
    startIcon: { options: ["", ...VALID_ICON_NAMES] },
    endIcon: { options: ["", ...VALID_ICON_NAMES] },
  },
};
