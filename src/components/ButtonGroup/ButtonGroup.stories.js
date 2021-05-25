import React from "react";
import Button from "components/Button";
import ButtonGroup from "components/ButtonGroup";
import { Centered } from "../../decorators";

export default {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  decorators: [Centered],
};

const Template = (args) => <ButtonGroup {...args} />;
const DefaultArgs = {
  primaryButton: {
    text: "Button",
    onClick: () => console.log("Button"),
  },
  secondaryButton: {
    text: "Cancel", 
    onClick: () => console.log("Cancel"),
  }
};

export const ButtonGroupTest = Template.bind({});
ButtonGroupTest.args = {
  ...DefaultArgs,
  primaryButton: {
    text: "Save", 
    onClick: () => console.log("Save"),
  }
};
