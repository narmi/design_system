import React from "react";
import NavBar from "components/NavBar";
import { Top } from "../../decorators";
import styled from "styled-components";
import Sidebar from "components/Sidebar";
import Typography from "components/Typography";
import { Menu } from "react-feather";
import Icon from "components/Icon";
import Narmi from "../../assets/narmi-logo.svg";
import List from "components/List";
import Categories from "components/Categories";
import { PopoverNavBar, OnHoverLabel } from "../Popover/Popover.stories.js";

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

const PopoverButton = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Template = (args) => <NavBar {...args} />;
const DefaultArgs = {
  leftChildren: [],
  rightChildren: [],
};

const HamburgerMenuSidebar = () => {
  let icon = <Menu />;
  let menuItems = [PopoverNavBar()];
  return (
    <Sidebar icon={icon} slideFromRight={true} menuItems={menuItems}></Sidebar>
  );
};

const CheckingList = (
  <List
    children={[<a>Primary Checking-1111</a>, <a>Joint Checking-2314</a>]}
  ></List>
);
const SavingsList = (
  <List
    children={[<a>Primary Savings-2000</a>, <a>Car Savings-4232</a>]}
  ></List>
);
const LoansList = (
  <List children={[<a>Mortgage-3242</a>, <a>Auto Loan-8493</a>]}></List>
);
const CDsList = <List children={[<a>3 Year-8222</a>]}></List>;

// UserItems
const AccountsItems = (
  <Categories
    divided={true}
    horizontal={true}
    items={{
      Checking: CheckingList,
      Savings: SavingsList,
      Loans: LoansList,
      CDs: CDsList,
    }}
  />
);

const UserItems = (
  <List
    children={[
      <span>Link a new profile</span>,
      <span>Settings</span>,
      <span>Log out</span>,
      <span>Forget this device</span>,
    ]}
  />
);

const ToolItems = (
  <List
    children={[
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
    <OnHoverLabel
      hoverable={true}
      label={"Accounts"}
      shiftX={"-10%"}
      children={AccountsItems}
    />,
    <Typography>
      <StyledA>Documents</StyledA>
    </Typography>,
    <Typography>
      <StyledA>Support</StyledA>
    </Typography>,
    <OnHoverLabel
      hoverable={true}
      label={"Tools"}
      shiftX={"-10%"}
      children={ToolItems}
    />,
  ],
  rightChildren: [
    // <UserPopover />
    <OnHoverLabel
      hoverable={true}
      label={"User Name"}
      shiftX={"-30%"}
      children={UserItems}
    />,
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
    <OnHoverLabel
      hoverable={true}
      label={"Accounts"}
      shiftX={"-10%"}
      children={AccountsItems}
    />,
    <Typography>
      <StyledA>Documents</StyledA>
    </Typography>,
    <Typography>
      <StyledA>Support</StyledA>
    </Typography>,
    <OnHoverLabel
      hoverable={true}
      label={"Tools"}
      shiftX={"-10%"}
      children={ToolItems}
    />,
  ],
  rightChildren: [
    // <UserPopover />
    <OnHoverLabel
      hoverable={true}
      label={"User Name"}
      shiftX={"-30%"}
      children={UserItems}
    />,
  ],
};
