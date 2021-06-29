import React from "react";
import styled from "styled-components";

import { default as ListComponent } from "components/List";
import Typography from "components/Typography";
import { Centered } from "../../decorators";

export default {
  title: "Components/List",
  component: List,
  decorators: [Centered],
};

const StyledListContainer = styled.div`
  box-shadow: var(--nds-dropshadow-dark);
  border-radius: 4px;
`;

const StyledListItem = styled.span`
  padding: 12px 16px;
  display: flex;
`;

const StyledCategory = styled.span`
  padding: 12px 16px 4px;
  display: flex;
`;

const Template = (args) => <ListComponent {...args} />;
const DefaultArgs = {
  divided: false,
  horizontal: false,
  renderListWrapper: (list) => <StyledListContainer>{list}</StyledListContainer>,
  renderItem: (item) => <StyledListItem>{item}</StyledListItem>,
  renderCategory: (cat) => <StyledCategory>{cat}</StyledCategory>,
};

export const List = Template.bind({});
List.args = {
  ...DefaultArgs,
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
  renderListWrapper: (list) => <StyledListContainer category>{list}</StyledListContainer>,
};
