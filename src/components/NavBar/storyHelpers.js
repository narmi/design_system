import React from "react";
import styled from "styled-components";

import Typography from "components/Typography";
import List from "components/List";
import Popover from "components/Popover";
import { NavMenuList } from "components/Popover/storyHelpers";
import { deviceBreakpoints } from "../../globalStyles";
import { StyledListItem, StyledCategory } from "components/List/storyHelpers";

/* Example components for Menu */
const StyledOptionsList = styled.div`
  display: flex;
  position: absolute;
  top: 30px;
  left: 35px;
  flex-direction: column;
`;

const AccountPopover = () => {
  return (
    <div style={{ paddingBottom: "15px" }}>
      <Popover
        hoverable={false}
        label={
          <Typography
            style={{ fontSize: "20px", fontWeight: "500", padding: "0px" }}
          >
            Account
          </Typography>
        }
        shiftX={"0%"}
        children={<NavMenuList />}
      />
    </div>
  );
};

export const PopoverNavBar = () => {
  let options = [
    <Typography
      style={{ fontSize: "20px", fontWeight: "500", paddingBottom: "15px" }}
    >
      Dashboard
    </Typography>,
    <AccountPopover />,
    <Typography
      style={{ fontSize: "20px", fontWeight: "500", paddingBottom: "15px" }}
    >
      Documents
    </Typography>,
    <Typography
      style={{ fontSize: "20px", fontWeight: "500", paddingBottom: "15px" }}
    >
      Support
    </Typography>,
    <Typography
      style={{ fontSize: "20px", fontWeight: "500", paddingBottom: "15px" }}
    >
      Tools
    </Typography>,
  ];

  return (
    <div>
      <StyledOptionsList>{options}</StyledOptionsList>
    </div>
  );
};
