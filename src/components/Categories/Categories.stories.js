import React from "react";
import Categories from "components/Categories";
import List from "components/List";
import { Centered } from "../../decorators";

export default {
  title: "Components/Categories",
  component: Categories,
  decorators: [Centered],
};

const CheckingList = (
  <List
    children={[<a>Primary Checking-1111</a>, <a>Joint Checking-2314</a>]}
  ></List>
);
const SavingsList = (
  <List
    children={[<a>Primary Savings-2000</a>, <a>Car Savings-4232</a>]}
  ></List>
);
const LoansList = (
  <List children={[<a>Mortgage-3242</a>, <a>Auto Loan-8493</a>]}></List>
);
const CDsList = <List children={[<a>3 Year-8222</a>]}></List>;

const Template = (args) => <Categories {...args} />;
const DefaultArgs = {
  divided: false,
  horizontal: false,
  items: {
    Checking: CheckingList,
    Savings: SavingsList,
    Loans: LoansList,
    CDs: CDsList,
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
