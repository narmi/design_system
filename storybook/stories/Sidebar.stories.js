import React from 'react';
import '../../dist/style.css';
import { NdsStyles } from './decorators/decorators';
import { Sidebar } from "design_system";

export default {
  title: 'Components/Sidebar',
  decorators: [NdsStyles],
};

export const SidebarStory = () => {
  const icon = <span className={"narmi-icon-menu"}></span>;
  return <div className="nds-typography">
    <Sidebar icon={icon} slideFromRight={true}>
      <div style={{ display: "flex", flexDirection: "column", marginTop: "25px" }}>
        <a href="#">Dashboard</a>
        <a href="#">Transactions</a>
        <a href="#">Transfer &amp; Pay</a>
        <a href="#">Statements</a>
        <a href="#">Support</a>
        <a href="#">Trends</a>
        <a href="#">Cards</a>
        <a href="#">Automatic Savings</a>
        <a href="#">Free credit score check</a>
      </div>
    </Sidebar>
  </div>
}