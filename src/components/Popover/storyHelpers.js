import React from "react";
import styled from "styled-components";

import Typography from "components/Typography";
import List from "components/List";
import Popover from "components/Popover";
import { deviceBreakpoints } from "../../globalStyles";
import { StyledListItem, StyledCategory } from "components/List/storyHelpers";


export const NavMenuList = ({
  divideItems,
  divideCategories,
  categoriesHorizontal,
}) => {
  const items = {
    Checking: [<a>Primary Checking-1111</a>, <a>Joint Checking-2314</a>],
    Savings: [<a>Primary Savings-2000</a>, <a>Car Savings-4232</a>],
    Loans: [<a>Mortgage-3242</a>, <a>Auto Loan-8493</a>],
    CDs: [<a>3 Year-8222</a>],
  };

  const renderItem = (item) => <StyledListItem>{item}</StyledListItem>;
  const renderCategory = (cat) => <StyledCategory>{cat}</StyledCategory>;

  return (
    <List
      divideItems={divideItems}
      divideCategories={divideCategories}
      categoriesHorizontal={categoriesHorizontal}
      items={items}
      renderItem={renderItem}
      renderCategory={renderCategory}
      style={{ padding: "16px 0" }}
    />
  );
};
