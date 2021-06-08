import React from "react";
import styled from "styled-components";
import Popover from "components/Popover";
import Typography from "components/Typography";
import { Centered } from "../../decorators";
import { deviceBreakpoints } from "../../globalStyles";

export default {
  title: "Components/Popover",
  component: Popover,
  decorators: [Centered],
};

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

const StyledSpan = styled.span`
  font-family: var(--nds-font-family);
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  padding-bottom: 15px;
`;

export const StyledOptionsList = styled.div`
  display: flex;
  position: absolute;
  top: 30px;
  left: 35px;
  flex-direction: column;
`;

export const NavMenu = ({ divided, horizontal }) => {
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

const Template = (args) => <Popover {...args} />;
export const OnClick = Template.bind({});
OnClick.args = {
  label: "Click me!",
  shiftX: "0%",
  children: (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "250px",
      }}
    >
      Insert dropdowns, menus, checklists, text, links, images, icons, or
      whatever else you like in here.
      <br />
      <br />
      Higher-level components (like PopoverInput) can be built on top of
      Popover.
    </div>
  ),
};
export const OnClickWithContent = Template.bind({});
OnClickWithContent.args = {
  label: "Accounts",
  shiftX: "-40%",
  style: { padding: "8px" },
  children: <NavMenu divided horizontal />,
};
export const OnHover = Template.bind({});
OnHover.args = {
  hoverable: true,
  label: null,
  shiftX: "-40%",
  style: { padding: "8px" },
  children: <NavMenu divided horizontal />,
};
OnHover.decorators = [
  (Story) => (
    <div style={{ display: "flex", alignItems: "center", padding: "12px" }}>
      Accounts <Story />
    </div>
  ),
];
export const OnHoverLabel = Template.bind({});
OnHoverLabel.args = {
  hoverable: true,
  label: "Accounts",
  shiftX: "-40%",
  style: { padding: "8px" },
  children: <NavMenu divided horizontal />,
};

const AccountPopover = () => {
  return (
    <div style={{ paddingBottom: "15px" }}>
      <Typography style={{fontSize:"20px", fontWeight: "500"}}>Account</Typography>
      <Popover
        hoverable={false}
        label={null}
        shiftX={"-40%"}
        children={<NavMenu />}
      />
    </div>
  );
};

export const PopoverNavBar = () => {
  let options = [
    <Typography style={{fontSize:"20px", fontWeight: "500", paddingBottom: "15px"}}>Dashboard</Typography>,
    <AccountPopover />,
    <Typography style={{fontSize:"20px", fontWeight: "500", paddingBottom: "15px"}}>Documents</Typography>,
    <Typography style={{fontSize:"20px", fontWeight: "500", paddingBottom: "15px"}}>Support</Typography>,
    <Typography style={{fontSize:"20px", fontWeight: "500", paddingBottom: "15px"}}>Tools</Typography>,
  ];
  return (
    <div>
      <StyledOptionsList>{options}</StyledOptionsList>
    </div>
  );
};
