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
import { deviceBreakpoints } from "../../globalStyles";

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

const PopoverButton = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

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

const StyledA = styled.a`
  :hover {
    color: var(--nds-primary-color);
  }
`;

const HamburgerMenuSidebar = () => {
  let icon = <Menu />;
  let menuItems = [
    <Typography>Dashboard</Typography>,
    <Typography>Documents</Typography>,
    <Typography>Suppor</Typography>,
  ];
  menuItems = [MobileNavbar()];
  return (
    <Sidebar icon={icon} slideFromRight={true} menuItems={menuItems}></Sidebar>
  );
};

const AccountPopoverMobile = () => {
  return (
    <div>
      Account
      <Popover
        hoverable={false}
        label={null}
        shiftX={"-40%"}
        children={<NavMenu />}
      />
    </div>
  );
};

const StyledOptionsList = styled.div`
  display: flex;
  position: absolute;
  top: 20%;
  left: 30%;
  flex-direction: column;
`;

const StyledHeader = styled.span`
  color: var(--nds-black);
  font-weight: 600;
  font-family: var(--nds-font-family);
  font-size: 16px;
  line-height: 20px;
  @media ${`(max-width: ${deviceBreakpoints.mobileMax})`} {
    font-size: 12px;
  }
`;

const StyledList = styled.ul`
  list-style-type: none;
  padding-inline-start: 0;
  margin-block-start: 0;
  white-space: nowrap;
  padding: 12px 16px;
  margin: 0;

  @media ${`(max-width: ${deviceBreakpoints.mobileMax})`} {
    font-size: 12px;
  }

  border-right: ${(p) =>
    p.divided && p.horizontal ? "1px solid var(--nds-grey-disabled)" : null};
  border-bottom: ${(p) =>
    p.divided && !p.horizontal ? "1px solid var(--nds-grey-disabled)" : null};

  &:last-child {
    border-right: none;
  }
`;

const NavMenu = ({ divided, horizontal }) => {
  // one way to organize Popover content, it's up to the consumer really! Popover just renders it.
  const items = {
    Checking: [<a>Primary Checking-1111</a>, <a>Joint Checking-2314</a>],
    Savings: [<a>Primary Savings-2000</a>, <a>Car Savings-4232</a>],
    Loans: [<a>Mortgage-3242</a>, <a>Auto Loan-8493</a>],
    CDs: [<a>3 Year-8222</a>],
  };

  const els = Object.keys(items).map((header) => (
    <StyledList divided={divided} horizontal={horizontal}>
      <li>
        <StyledHeader>{header}</StyledHeader>
      </li>
      {items[header].map((c) => (
        <li key={c}>{c}</li>
      ))}
    </StyledList>
  ));

  return (
    <div
      style={{
        display: "flex",
        flexFlow: horizontal ? "row nowrap" : "column nowrap",
      }}
    >
      {els}
    </div>
  );
};

const MobileNavbar = () => {
  let options = [
    <AccountPopoverMobile />,
    <p>Documents</p>,
    <p>Support</p>,
    <p>Tools</p>,
  ];
  return (
    <div>
      <StyledOptionsList>{options}</StyledOptionsList>
    </div>
  );
};

export const NavBarMenu = Template.bind({});
NavBarMenu.args = {
  ...DefaultArgs,
  mobileMenuIcon: <HamburgerMenuSidebar />,
  logo: <Icon image={Narmi} />,
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
