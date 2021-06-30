import React from "react";
import styled from "styled-components";

import Typography from "components/Typography";
import Popover from "components/Popover";
import {deviceBreakpoints} from "../../globalStyles";


/* Example components for Menu */
const StyledHeader = styled.span`
  color: var(--nds-black);
  font-weight: 600;
  font-family: var(--nds-font-family);
  font-size: 16px;
  line-height: 20px;
  @media ${`(max-width: ${deviceBreakpoints.mobileMax})`} {
    font-size: 12px;
  }
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
        children={<NavMenu />}
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

export const NavMenu = ({ divided, horizontal }) => {
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
        <Typography>
          <li key={c}>{c}</li>
        </Typography>
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

