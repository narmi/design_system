import React from "react";
import List from "components/List";
import { Centered } from "../../decorators";

export default {
  title: "Components/List",
  component: List,
  decorators: [Centered],
};

const Template = (args) => <List {...args} />;
const DefaultArgs = {
  divided: false,
  horizontal: false,
  children: [],
};

export const Vertical = Template.bind({});
Vertical.args = {
  ...DefaultArgs,
  horizontal: false,
  children: [
    <p>Link a new profile</p>,
    <p>Settings</p>,
    <p>Log out</p>,
    <p>Forget this device</p>,
  ],
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  ...DefaultArgs,
  horizontal: true,
  children: [
    <p>Link a new profile</p>,
    <p>Settings</p>,
    <p>Log out</p>,
    <p>Forget this device</p>,
  ],
};
