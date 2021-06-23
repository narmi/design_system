import React from "react";
import Dropdown from "components/Dropdown";
import Typography from "components/Typography";
import { Centered } from "../../decorators";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  decorators: [Centered],
};

const Template = (args) => (<Dropdown {...args}>
  <div><Typography>One</Typography></div>
  <div><Typography>Two</Typography></div>
  <div><Typography>Three</Typography></div>
</Dropdown>);
const DefaultArgs = {
  triggerLabel: "Dropdown",
  triggerValue: undefined,
};

export const Selection = Template.bind({});
Selection.args = {
  ...DefaultArgs,
};
