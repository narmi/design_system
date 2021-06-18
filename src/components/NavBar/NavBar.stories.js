import React from "react";
import NavBar from "components/NavBar";
import { Top } from "../../decorators";
import styled from "styled-components";
import Popover from "components/Popover";
import List from "components/List";
import Sidebar from "components/Sidebar";
import Typography from "components/Typography";
import { Menu } from "react-feather";
import Icon from "components/Icon";
import Narmi from "../../assets/narmi-logo.svg";
import { PopoverNavBar } from "../Popover/Popover.stories.js";

export default {
  title: "Components/NavBar",
  component: NavBar,
  decorators: [Top],
};

const StyledA = styled.a`
  :hover {
    color: var(--nds-primary-color);
  }
`;

const Template = (args) => <NavBar {...args} />;
const DefaultArgs = {
  leftChildren: [],
  rightChildren: [],
};

const HamburgerMenuSidebar = () => {
  let icon = <Menu />;
  return (
    <Sidebar icon={icon} slideFromRight={true}>
      <PopoverNavBar />
    </Sidebar>
  );
};

const StyledSubMenuItem = styled.a`
  padding-left: 3px;
  padding-right: 3px;
`;

const AccountsList = (
  <List
    horizontal={true}
    divided={true}
    items={{
      Checking: [
        <StyledSubMenuItem>Primary Checking-1111</StyledSubMenuItem>,
        <StyledSubMenuItem>Joint Checking-2314</StyledSubMenuItem>,
      ],
      Savings: [
        <StyledSubMenuItem>Primary Savings-2000</StyledSubMenuItem>,
        <StyledSubMenuItem>Car Savings-4232</StyledSubMenuItem>,
        <StyledSubMenuItem>Helicopter Savings-4232</StyledSubMenuItem>,
      ],
      Loans: [
        <StyledSubMenuItem>Mortgage-3242</StyledSubMenuItem>,
        <StyledSubMenuItem>Auto Loan-8493</StyledSubMenuItem>,
      ],
    }}
  />
);

const UserList = (
  <List
    items={[
      <span>Link a new profile</span>,
      <span>Settings</span>,
      <span>Log out</span>,
      <span>Forget this device</span>,
    ]}
  />
);

const ToolsList = (
  <List
    items={[
      <span>Free Credit Score Check</span>,
      <span>Open a new account</span>,
      <span>Pay a Mortgage</span>,
      <span>Book a Travel</span>,
    ]}
  />
);

export const NavBarMenu = Template.bind({});
NavBarMenu.args = {
  ...DefaultArgs,
  mobileMenuIcon: <HamburgerMenuSidebar />,
  logo: <Icon image={Narmi} />,
  leftChildren: [
    <Typography>
      <StyledA>Dashboard</StyledA>
    </Typography>,
    <Popover hoverable={true} label={"Accounts"} shiftX={"-10%"}>
      {AccountsList}
    </Popover>,
    <Typography>
      <StyledA>Documents</StyledA>
    </Typography>,
    <Typography>
      <StyledA>Support</StyledA>
    </Typography>,
    <Popover hoverable={true} label={"Tools"} shiftX={"-30%"}>
      {ToolsList}
    </Popover>,
  ],
  rightChildren: [
    <Popover hoverable={true} label={"User Name"} shiftX={"-30%"}>
      {UserList}
    </Popover>,
  ],
};

export const NavBarMenuNoLogo = Template.bind({});
NavBarMenuNoLogo.args = {
  ...DefaultArgs,
  mobileMenuIcon: <HamburgerMenuSidebar />,
  leftChildren: [
    <Typography>
      <StyledA>Dashboard</StyledA>
    </Typography>,
    <Popover hoverable={true} label={"Accounts"} shiftX={"-10%"}>
      {AccountsList}
    </Popover>,
    <Typography>
      <StyledA>Documents</StyledA>
    </Typography>,
    <Typography>
      <StyledA>Support</StyledA>
    </Typography>,
    <Popover hoverable={true} label={"Tools"} shiftX={"-30%"}>
      {ToolsList}
    </Popover>,
  ],
  rightChildren: [
    <Popover hoverable={true} label={"User Name"} shiftX={"-30%"}>
      {UserList}
    </Popover>,
  ],
};
