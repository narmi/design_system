import React from "react";
import NavBar from "components/NavBar";
import { Centered } from "../../decorators";
import styled from "styled-components";
import Popover from "components/Popover";
import { Briefcase } from "react-feather";

export default {
  title: "Components/NavBar",
  component: NavBar,
  decorators: [Centered],
};

const Template = (args) => <NavBar {...args} />;
const DefaultArgs = {
  leftChildren : [],
  rightChildren : []
};

const Typography = styled.p`
  /* P1/Regular: 16px */

  font-family: Hind Madurai;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  align-items: center;
  position: relative;
  left: 2.79%;
  color: #4C4C4C;
  font-weight: 600;
  :hover {
    color: var(--nds-primary-color);
  }
`;

const PopoverButton = styled.div`
  display: flex; 
  align-items: center; 
  position: relative;  
  :hover {
    color: var(--nds-primary-color);
  }
`;

const AccountPopover = () => {
  return (
          <PopoverButton >
              <Typography>Account</Typography> <Popover />
          </PopoverButton>
        );
}

const ToolsPopover = () => {
  return (
          <PopoverButton>
              <Typography>Tools</Typography> <Popover />
          </PopoverButton>
        );
}

const UserPopover = () => {
  return (
          <PopoverButton>
              <Typography>User name</Typography> <Popover />
          </PopoverButton>
        );
}


export const NavBarMenu = Template.bind({});
NavBarMenu.args = {
  ...DefaultArgs,
  icon : <Briefcase size={30} />,
  leftChildren : [<Typography >Dashboard</Typography>, <AccountPopover />, 
                  <Typography onClick={()=>{console.log("doc")}}>Documents </Typography>, <Typography>Support</Typography>,
                   <ToolsPopover />],
  rightChildren : [<UserPopover />]
};
