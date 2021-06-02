import React from "react";
import NavBar from "components/NavBar";
import { Centered } from "../../decorators";
import styled from "styled-components";
import Popover from "components/Popover";
import Typography from "components/Typography";
import { Briefcase } from "react-feather";

export default {
  title: "Components/NavBar",
  component: NavBar,
  decorators: [Centered],
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

export const NavBarMenu = Template.bind({});
NavBarMenu.args = {
  ...DefaultArgs,
  icon: <Briefcase size={30} />,
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
