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
  font-weight: 400;
  :hover {
    font-weight: 600;
    color: var(--nds-primary-color);
  }
  ::before {
    display: block;
    content: attr(data-text);
    font-weight: 600;
    height: 0;
    overflow: hidden;
    visibility: hidden;
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

const AccountsList = (
  <List
    horizontal={true}
    divided={true}
    style={{ padding: "20px 0px 20px 0px" }}
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
      <StyledA data-text={"Dashboard"}>Dashboard</StyledA>
    </Typography>,
    <div style={{ position: "relative" }}>
      <Popover
        style={{ left: 0, position: "absolute" }}
        hoverable={true}
        label={"Accounts"}
        shiftX={"-0.5%"}
      >
        {AccountsList}
      </Popover>
      {/* <span style={{"left":0, hight:"0px", top:"0", "font-weight":"600", visibility: "hidden"}} hoverable={true} label={"Accounts"} shiftX={"-0.5%"}>
      Accountsasdl
    </span> */}
    </div>,
    <Typography>
      <StyledA data-text={"Documents"}>Documents</StyledA>
    </Typography>,
    <Typography>
      <StyledA data-text={"Support"}>Support</StyledA>
    </Typography>,
    <Popover hoverable={true} label={"Tools"} shiftX={"-0.5%"}>
      {ToolsList}
    </Popover>,
  ],
  rightChildren: [
    <Popover hoverable={true} label={"User Name"} shiftX={"-38%"}>
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
      <StyledA data-text={"Documents"}>Documents</StyledA>
    </Typography>,
    <Typography>
      <StyledA data-text={"Support"}>Support</StyledA>
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
