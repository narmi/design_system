import React from "react";
import Tabs from "./";
import Button from "../Button";

const Template = (args) => (
  <Tabs {...args}>
    <Tabs.List>
      <Tabs.Tab label="Tab One" tabId="apple" />
      <Tabs.Tab label="Tab Two" tabId="orange" />
      <Tabs.Tab label="Tab Three" tabId="pineapple" />
    </Tabs.List>
    <Tabs.Panel tabId="apple">
      <div className="padding--all--s">🍎🍎🍎</div>
    </Tabs.Panel>
    <Tabs.Panel tabId="orange">
      <div className="padding--all--s">🍊🍊🍊</div>
    </Tabs.Panel>
    <Tabs.Panel tabId="pineapple">
      <div className="padding--all--s">🍍🍍🍍</div>
    </Tabs.Panel>
  </Tabs>
);

export const Overview = Template.bind({});
Overview.argTypes = {
  onTabChange: { action: "tab change" },
};

export const DefaultSelectedTab = Template.bind({});
DefaultSelectedTab.args = {
  defaultSelectedIndex: 1,
};

export const WithoutPanels = () => (
  <Tabs>
    <Tabs.List>
      <Tabs.Tab label="Apples" tabId="apple" />
      <Tabs.Tab label="Oranges" tabId="orange" />
      <Tabs.Tab label="Pineapples" tabId="pineapple" />
    </Tabs.List>
  </Tabs>
);
WithoutPanels.parameters = {
  docs: {
    description: {
      story:
        "You can decouple tabs from conent by omitting the panel components. Use the `onTabChange` callback to respond to user events.",
    },
  },
};

export default {
  title: "Components/Tabs",
  component: Tabs,
};
