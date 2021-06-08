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
};

export const NormalList = Template.bind({});
NormalList.args = {
  ...DefaultArgs,
  horizontal: true,
  items: [<a>Primary Checking-1111</a>, <a>Joint Checking-2314</a>],
};

export const CategoryList = Template.bind({});
CategoryList.args = {
  ...DefaultArgs,
  items: {
    Checking: [<a>Primary Checking-1111</a>, <a>Joint Checking-2314</a>],
    Savings: [<a>Primary Savings-2000</a>, <a>Car Savings-4232</a>],
    Loans: [<a>Mortgage-3242</a>, <a>Auto Loan-8493</a>],
  },
};
