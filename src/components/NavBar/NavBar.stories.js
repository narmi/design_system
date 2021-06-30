import React from "react";
import styled from "styled-components";
import { Menu } from "react-feather";

import NavBar from "components/NavBar";
import Icon from "components/Icon";
import Popover from "components/Popover";
import List from "components/List";
import Sidebar from "components/Sidebar";
import Typography from "components/Typography";
import { PopoverNavBar } from "components/Popover/storyHelpers";
import { Top } from "../../decorators";
import Narmi from "../../assets/narmi-logo.svg";

export default {
  title: "Components/NavBar",
  component: NavBar,
  decorators: [Top],
};

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

const PaddedListItem = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
`;

const PaddedCategory = styled.span`
  padding: 0px 16px 4px;
  display: flex;
`;

const renderPaddedItem = (item) => <PaddedListItem>{item}</PaddedListItem>;
const renderPaddedCategory = (cat) => <PaddedCategory>{cat}</PaddedCategory>;

const AccountsList = (
  <List
    horizontal={true}
    divideItems={false}
    divideCategories={true}
    style={{ padding: "20px 0px 20px 0px" }}
    renderItem={renderPaddedItem}
    renderCategory={renderPaddedCategory}
    items={{
      Checking: [<a>Primary Checking-1111</a>, <a>Joint Checking-2314</a>],
      Savings: [
        <a>Primary Savings-2000</a>,
        <a>Car Savings-4232</a>,
        <a>Helicopter Savings-4232</a>,
      ],
      Loans: [<a>Mortgage-3242</a>, <a>Auto Loan-8493</a>],
    }}
  />
);

const UserList = (
  <List
    renderItem={renderPaddedItem}
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
    renderItem={renderPaddedItem}
    items={[
      <span>Free Credit Score Check</span>,
      <span>Open a new account</span>,
      <span>Pay a Mortgage</span>,
      <span>Book a Travel</span>,
    ]}
  />
);

export const WithCategoryMenu = Template.bind({});
WithCategoryMenu.args = {
  ...DefaultArgs,
  mobileMenuIcon: <HamburgerMenuSidebar />,
  logo: <Icon image={Narmi} />,
  leftChildren: [
    "Dashboard",
    <Popover hoverable={true} label={"Accounts"}>
      {AccountsList}
    </Popover>,
    "Documents",
    "Support",
    <Popover hoverable={true} label={"Tools"}>
      {ToolsList}
    </Popover>,
  ],
  rightChildren: [
    <Popover hoverable={true} label={"User Name"} alignRight={true}>
      {UserList}
    </Popover>,
  ],
};

export const WithoutLogo = Template.bind({});
WithoutLogo.args = {
  ...DefaultArgs,
  mobileMenuIcon: <HamburgerMenuSidebar />,
  leftChildren: [
    <span>Dashboard</span>,
    <Popover hoverable={true} label={"Accounts"}>
      {AccountsList}
    </Popover>,
    <span>Documents</span>,
    <span>Support</span>,
    <Popover hoverable={true} label={"Tools"}>
      {ToolsList}
    </Popover>,
  ],
  rightChildren: [
    <Popover hoverable={true} label={"User Name"} alignRight={true}>
      {UserList}
    </Popover>,
  ],
};
