import React, { useState } from "react";
import Tabs from "./";
import TabsList from "./TabsList";
import TabsPanel from "./TabsPanel";
import TabsTab from "./TabsTab";

const Template = (args) => (
  <Tabs {...args}>
    <Tabs.List>
      <Tabs.Tab label="Apples" tabId="apple" />
      <Tabs.Tab label="Oranges" tabId="orange" />
      <Tabs.Tab label="Pineapples" tabId="pineapple" />
      <Tabs.Tab label="Snow leopard" tabId="snowLeopard" />
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
    <Tabs.Panel tabId="snowLeopard">
      <div className="padding--all--s">️❄️🐆</div>
    </Tabs.Panel>
  </Tabs>
);

export const Overview = Template.bind({});
Overview.args = {
  onTabChange: () => {},
};

export const DefaultSelectedTab = Template.bind({});
DefaultSelectedTab.args = {
  defaultSelectedIndex: 1,
};

export const ResponsiveTabs = (args) => (
  <div
    style={{
      display: "flex",
      width: 200,
      flexDirection: "column",
    }}
  >
    <Tabs {...args}>
      <Tabs.List>
        <Tabs.Tab label="Apples" tabId="apple" />
        <Tabs.Tab label="Oranges" tabId="orange" />
        <Tabs.Tab label="Pineapples" tabId="pineapple" />
        <Tabs.Tab label="Bird" tabId="bird" />
        <Tabs.Tab label="Cat" tabId="cat" />
        <Tabs.Tab label="Dog" tabId="dog" />
        <Tabs.Tab label="Snow leopard" tabId="snowLeopard" />
        <Tabs.Tab label="My absolute favorite animal of all time" tabId="penguin" />
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
      <Tabs.Panel tabId="bird">
        <div className="padding--all--s">🐦🐦🐦</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="cat">
        <div className="padding--all--s">🐈🐈🐈</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="dog">
        <div className="padding--all--s">🐕🐕🐕</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="snowLeopard">
        <div className="padding--all--s">️❄️🐆</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="penguin">
        <div className="padding--all--s">️🐧🐧🐧</div>
      </Tabs.Panel>
    </Tabs>
  </div>
);

export const WithoutPanels = (args) => (
  <Tabs {...args}>
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
        "You can decouple tabs from content by omitting the panel components. Use the `onTabChange` callback to respond to user events.",
    },
  },
};

export const WithoutBorder = () => (
  <Tabs hasBorder={false}>
    <Tabs.List>
      <Tabs.Tab label="Apples" tabId="apple" />
      <Tabs.Tab label="Oranges" tabId="orange" />
      <Tabs.Tab label="Pineapples" tabId="pineapple" />
    </Tabs.List>
  </Tabs>
);
WithoutBorder.parameters = {
  docs: {
    description: {
      story:
        "You can render tabs without a border via the `hasBorder` prop. This is useful when the element directly below the tabs list has a top border already.",
    },
  },
};

export const PaddedTabsList = () => (
  <Tabs>
    <Tabs.List xPadding="l">
      <Tabs.Tab label="Apples" tabId="apple" />
      <Tabs.Tab label="Oranges" tabId="orange" />
      <Tabs.Tab label="Pineapples" tabId="pineapple" />
    </Tabs.List>
  </Tabs>
);
PaddedTabsList.parameters = {
  docs: {
    description: {
      story:
        "You may offset the tabs from the edge using the `xPadding` prop on `Tabs.TabsList`.",
    },
  },
};

export const FullyControlledTabs = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <Tabs
      selectedIndex={selectedTab}
      onTabChange={(index) => setSelectedTab(index)}
    >
      <Tabs.List>
        <Tabs.Tab label="Apples" tabId="apple" />
        <Tabs.Tab label="Oranges" tabId="orange" />
        <Tabs.Tab label="Pineapples" tabId="pineapple" />
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
};
FullyControlledTabs.parameters = {
  docs: {
    description: {
      story:
        "Using the `selectedIndex` prop will make Tabs fully controlled. When using this prop, you **must** use the `onTabChange` callback to respond to user events and update the selected tab.",
    },
  },
};

export default {
  title: "Components/Tabs",
  component: Tabs,
  subcomponents: { TabsList, TabsTab, TabsPanel },
};
