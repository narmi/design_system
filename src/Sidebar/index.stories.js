import React, { useState } from "react";
import Sidebar from "./";
import SidebarItem from "./SidebarItem";

const Template = (args) => (
  <Sidebar {...args} />
);

const children = [
  <SidebarItem
    label="Home"
    isActive={true}
    onClick={() => console.log("clicked")}
  />,
  <SidebarItem
    label="Accounts"
    onClick={() => console.log("clicked")}
  />,
  <SidebarItem
    label="Transactions"
    onClick={() => console.log("clicked")}
  />,
  <SidebarItem
    label="Settings"
    onClick={() => console.log("clicked")}
  />,
  <SidebarItem
    label="Help"
    onClick={() => console.log("clicked")}
  />,
  <SidebarItem
    label="Logout"
    onClick={() => console.log("clicked")}
  />,
];

const childrenWithIcons = [
  <SidebarItem
    label="Home"
    startIcon="feed"
    isActive={true}
    onClick={() => console.log("clicked")}
  />,
  <SidebarItem
    label="Accounts"
    startIcon="solid-circle"
    onClick={() => console.log("clicked")}
  />,
  <SidebarItem
    label="Transactions"
    startIcon="bill"
    onClick={() => console.log("clicked")}
  />,
  <SidebarItem
    label="Settings"
    startIcon="settings"
    onClick={() => console.log("clicked")}
  />,
  <SidebarItem
    label="Help"
    startIcon="question"
    onClick={() => console.log("clicked")}
  />,
  <SidebarItem
    label="Logout"
    startIcon="log-out"
    endIcon="smile"
    onClick={() => console.log("clicked")}
  />,
];


export const Overview = Template.bind({});
Overview.args = {
  children,
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  children: childrenWithIcons,
};

export default {
  title: "Components/Sidebar",
  component: Sidebar,
  subcomponents: { "Sidebar.Item": SidebarItem }
};


