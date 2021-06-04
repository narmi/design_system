import React from "react";
import Sidebar from "components/Sidebar";
import { Centered } from "../../decorators";
import Typography from "components/Typography";
import { Menu } from "react-feather";
import styled, { css } from "styled-components";


export default {
  title: "Components/Sidebar",
  component: Sidebar,
  decorators: [Centered],
};

const Template = (args) => <Sidebar {...args} />;
const DefaultArgs = {
};

export const SidebarMenu = Template.bind({});
SidebarMenu.args = {
  ...DefaultArgs,
  icon:<Menu />,
  menuItems: [
              <Typography> 
                Dashboard
              </Typography>,
              <Typography>
                Documents
              </Typography>,
              <Typography>
                Suppor
              </Typography>,
            ]
};

const StyledWrapper = styled.span`
  // position: relative + position: absolute allows absolutely positioning child relative to parent
  position: relative;
  box-shadow: var(--nds-dropshadow-dark);
  box-sizing: border-box;
  width: 300px;
  height: 300px;
  font-family: var(--nds-font-family);
`;

export const SidebarContained = () => {
  return (    
        <StyledWrapper>
          <Sidebar icon={<Menu />} menuItems={[
              <Typography> 
                Dashboard
              </Typography>,
              <Typography>
                Documents
              </Typography>,
              <Typography>
                Suppor
              </Typography>,
            ]}/>
        </StyledWrapper>
  );
};

export const SidebarContainedRight = () => {
  return (    
        <StyledWrapper>
          <Sidebar slideFromRight={true} icon={<Menu />} menuItems={[
              <Typography> 
                Dashboard
              </Typography>,
              <Typography>
                Documents
              </Typography>,
              <Typography>
                Suppor
              </Typography>,
            ]}/>
        </StyledWrapper>
  );
};

