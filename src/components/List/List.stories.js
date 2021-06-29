import React from "react";
import { default as ListComponent } from "components/List";
import Typography from "components/Typography";
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
  items: [<a>Primary Checking-1111</a>, <a>Joint Checking-2314</a>],
};

export const CategoryList = Template.bind({});
CategoryList.args = {
  ...DefaultArgs,
  hoverable: true,
  items: {
    Checking: [<a>Primary Checking-1111</a>, <a>Joint Checking-2314</a>],
    Savings: [<a>Primary Savings-2000</a>, <a>Car Savings-4232</a>],
    Loans: [<a>Mortgage-3242</a>, <a>Auto Loan-8493</a>],
  },
};

const renderItemMenu = (item) => {
  return (
    <a href={item} key={item}>{item}</a>
  );
};

export const ListCustomItemRender = Template.bind({});
ListCustomItemRender.args = {
  ...DefaultArgs,
  hoverable: true,
  renderItem: renderItemMenu,
  items: [<a>Primary Checking-1111</a>, <a>Joint Checking-2314</a>],
};

export const CategoryListCustomItemRender = Template.bind({});
CategoryListCustomItemRender.args = {
  ...DefaultArgs,
  hoverable: true,
  renderItem: renderItemMenu,
  items: {
    Checking: [<a>Primary Checking-1111</a>, <a>Joint Checking-2314</a>],
    Savings: [<a>Primary Savings-2000</a>, <a>Car Savings-4232</a>],
    Loans: [<a>Mortgage-3242</a>, <a>Auto Loan-8493</a>],
  },
};
