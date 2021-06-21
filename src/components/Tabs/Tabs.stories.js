import React from "react";
import Tabs from "components/Tabs";

export default {
  title: "Components/Table",
  component: Tabs,
};

const Template = (args) => <Tabs {...args} />;
const DefaultArgs = {
  items: ["Tab One", "Tab Two", "Tab Three"],
};

export const BasicTabs = Template.bind({});
BasicTabs.args = {
  ...DefaultArgs,
};
