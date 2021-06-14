import React from "react";
import { default as ListComponent } from "components/List";
import { Centered } from "../../decorators";

export default {
  title: "Components/List",
  component: List,
  decorators: [Centered],
};

const Template = (args) => <ListComponent {...args} />;
const DefaultArgs = {
  divided: false,
  horizontal: false,
};

export const List = Template.bind({});
List.args = {
  ...DefaultArgs,
  horizontal: true,
  hoverable: true,
  children: [<a>Primary Checking-1111</a>, <a>Joint Checking-2314</a>],
};

export const CategoryList = Template.bind({});
CategoryList.args = {
  ...DefaultArgs,
  hoverable: true,
  children: {
    Checking: [<a>Primary Checking-1111</a>, <a>Joint Checking-2314</a>],
    Savings: [<a>Primary Savings-2000</a>, <a>Car Savings-4232</a>],
    Loans: [<a>Mortgage-3242</a>, <a>Auto Loan-8493</a>],
  },
};

export const ListChildren = () => {
  const children = [<a>Primary Checking-1111</a>, <a>Joint Checking-2314</a>];
  return (
    <List horizontal={false} hoverable={true}>
      {children}
    </List>
  );
};

export const CategoryListChildren = () => {
  const children = {
    Checking: [<a>Primary Checking-1111</a>, <a>Joint Checking-2314</a>],
    Savings: [<a>Primary Savings-2000</a>, <a>Car Savings-4232</a>],
    Loans: [<a>Mortgage-3242</a>, <a>Auto Loan-8493</a>],
  };

  return (
    <List horizontal={false} hoverable={true}>
      {children}
    </List>
  );
};
