import React from "react";
import Sidebar from "components/Sidebar";
import { Centered } from "../../decorators";
import Typography from "components/Typography";
import { Menu } from "react-feather";
import styled, { css } from "styled-components";


export default {
  title: "Components/Sidebar",
  component: Sidebar,
};

const Template = (args) => <Sidebar {...args} />;
const DefaultArgs = {
};

const StyledWrapper = styled.span`
  // position: relative + position: absolute allows absolutely positioning child relative to parent
  position: relative;
  box-shadow: var(--nds-dropshadow-dark);
  box-sizing: border-box;
  width: 300px;
  height: 100%;
  bottom: 0;
  font-family: var(--nds-font-family);
`;

export const SidebarContainedLeft = () => {
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
                Support
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
                Support
              </Typography>,
            ]}/>
        </StyledWrapper>
  );
};

