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
      <Typography hover={true} text={"Account"} /> <Popover />
    </PopoverButton>
  );
};

const ToolsPopover = () => {
  return (
    <PopoverButton>
      <Typography hover={true} text={"Tools"}></Typography> <Popover />
    </PopoverButton>
  );
};

const UserPopover = () => {
  return (
    <PopoverButton>
      <Typography hover={true} text={"User name"}></Typography> <Popover />
    </PopoverButton>
  );
};

export const NavBarMenu = Template.bind({});
NavBarMenu.args = {
  ...DefaultArgs,
  icon: <Briefcase size={30} />,
  leftChildren: [
    <Typography hover={true} text={"Dashboard"} />,
    <AccountPopover />,
    <Typography hover={true} text={"Documents"} />,
    <Typography hover={true} text={"Support"} />,
    <ToolsPopover />,
  ],
  rightChildren: [<UserPopover />],
};
