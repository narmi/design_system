import React from "react";
import NavBar from "components/NavBar";
import { Top } from "../../decorators";
import styled from "styled-components";
import Popover from "components/Popover";
import Sidebar from "components/Sidebar";
import Typography from "components/Typography";
import { Menu } from "react-feather";
import Icon from "components/Icon";
import Narmi from "../../assets/narmi-logo.svg";
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

const AccountPopover = () => {
  return (
    <PopoverButton>
      <Typography>
        <StyledA>Account</StyledA>
      </Typography>{" "}
      <Popover />
    </PopoverButton>
  );
};

const ToolsPopover = () => {
  return (
    <PopoverButton>
      <Typography>
        <StyledA>Tools</StyledA>
      </Typography>{" "}
      <Popover />
    </PopoverButton>
  );
};

const UserPopover = () => {
  return (
    <PopoverButton>
      <Typography>
        <StyledA>User name</StyledA>
      </Typography>{" "}
      <Popover />
    </PopoverButton>
  );
};

const HamburgerMenuSidebar = () => {
  let icon = <Menu />;
  let menuItems = [
    <Typography>Dashboard</Typography>,
    <Typography>Documents</Typography>,
    <Typography>Suppor</Typography>,
  ];
  menuItems = [PopoverNavBar()];
  return (
    <Sidebar icon={icon} slideFromRight={true} menuItems={menuItems}></Sidebar>
  );
};

const AccountsItems = (
  <ul style={{ backgroundColor: "white", listStyle: "none" }}>
    <li>test1</li>
    <li>test2</li>
    <li>test3</li>
  </ul>
);

const ToolItems = (
  <ul style={{ backgroundColor: "white", listStyle: "none" }}>
    <li>test1</li>
    <li>test2</li>
    <li>test3</li>
  </ul>
);

const UserItems = (
  <ul
    style={{ backgroundColor: "white", listStyle: "none", padding: "initial" }}
  >
    <li>test1</li>
    <li>test2</li>
    <li>test3</li>
  </ul>
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
      shiftX={"10%"}
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
      shiftX={"10%"}
      children={ToolItems}
    />,
  ],
  rightChildren: [
    <OnHoverLabel
      hoverable={true}
      label={"User Name"}
      shiftX={"20%"}
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
    <AccountPopover />,
    <Typography>
      <StyledA>Documents</StyledA>
    </Typography>,
    <Typography>
      <StyledA>Support</StyledA>
    </Typography>,
    <ToolsPopover />,
  ],
  rightChildren: [<UserPopover />],
};
