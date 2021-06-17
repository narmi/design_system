import React from "react";
import Sidebar from "components/Sidebar";
import Typography from "components/Typography";
import { Menu } from "react-feather";
import { Right } from "../../decorators";

export default {
  title: "Components/Sidebar",
  component: Sidebar,
  decorators: [Right],
};

const Template = (args) => <Sidebar {...args} />;

export const SidebarMenu = Template.bind({});
SidebarMenu.args = {
  icon: <Menu />,
  menuItems: (
    <div
      style={{ display: "flex", flexDirection: "column", marginTop: "10px" }}
    >
      <Typography>Dashboard</Typography>
      <Typography>Documents</Typography>
      <Typography>Support</Typography>
    </div>
  ),
};
