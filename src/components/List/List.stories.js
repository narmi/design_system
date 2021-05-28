import React from "react";
import List from "components/List";
import { Centered } from "../../decorators";

export default {
  title: "Components/List",
  component: List,
  decorators: [Centered],
};

const Template = (args) => <List {...args} />;
const DefaultArgs = {
  divided: false,
  horizontal: false,
  items: {
    Checking: [<a>Primary Checking-1111</a>, <a>Joint Checking-2314</a>],
    Savings: [<a>Primary Savings-2000</a>, <a>Car Savings-4232</a>],
    Loans: [<a>Mortgage-3242</a>, <a>Auto Loan-8493</a>],
    CDs: [<a>3 Year-8222</a>],
  },
};

export const Vertical = Template.bind({});
Vertical.args = {
  ...DefaultArgs,
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  ...DefaultArgs,
  horizontal: true,
};
