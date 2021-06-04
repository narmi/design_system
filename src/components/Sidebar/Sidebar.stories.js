import React from "react";
import Sidebar from "components/Sidebar";
import Typography from "components/Typography";
import { Menu } from "react-feather";

export default {
  title: "Components/Sidebar",
  component: Sidebar,
};

const Template = (args) => <Sidebar {...args} />;

export const SidebarMenu = Template.bind({});
SidebarMenu.args = {
  icon: <Menu />,
  menuItems: [
    <Typography>Dashboard</Typography>,
    <Typography>Documents</Typography>,
    <Typography>Support</Typography>,
  ],
};
