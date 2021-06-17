import React from "react";
import Sidebar from "components/Sidebar";
import styled from "styled-components";
import Typography from "components/Typography";
import { Menu } from "react-feather";
import { Right } from "../../decorators";

export default {
  title: "Components/Sidebar",
  component: Sidebar,
  decorators: [Right],
};

const Template = (args) => <Sidebar {...args} />;

const StyledSidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const SidebarMenu = Template.bind({});
SidebarMenu.args = {
  icon: <Menu />,
  menuItems: (
    <StyledSidebarMenu>
      <Typography>Dashboard</Typography>
      <Typography>Documents</Typography>
      <Typography>Support</Typography>
    </StyledSidebarMenu>
  ),
};
