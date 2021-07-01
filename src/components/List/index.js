import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Typography from "components/Typography";
import { deviceBreakpoints } from "../../globalStyles";

const StyledListWrapper = styled.div`
  display: flex;
  flex-flow: ${(props) =>
    props.categoriesHorizontal ? "row nowrap" : "column nowrap"};
  @media ${`(max-width: ${deviceBreakpoints.mobileMax})`} {
    flex-flow: column nowrap;
  }
`;

const StyledList = styled.div`
  display: flex;
  flex-direction: column;

  white-space: nowrap;
  margin: 0;

  // divide categorized lists
  // - vertical: border-bottom
  // - horizontal: border-right
  border-bottom: ${(p) =>
    p.divideCategories && !p.categoriesHorizontal
      ? "1px solid var(--nds-grey-disabled)"
      : null};

  @media ${`(min-width: ${deviceBreakpoints.tablet})`} {
    border-right: ${(p) =>
      p.divideCategories && p.categoriesHorizontal
        ? "1px solid var(--nds-grey-disabled)"
        : null};
  }

  &:last-child {
    border-right: none;
    border-bottom: none;
  }
`;

export const StyledListItem = styled.div`
  box-sizing: border-box;

  border-bottom: ${(p) =>
    p.divideItems ? "1px solid var(--nds-grey-disabled)" : null};

  :hover {
    background-color: ${(props) =>
      props.hoverable ? "var(--nds-primary-color-lightest)" : null};
  }

  &:last-child {
    border-bottom: none;
  }
`;

function renderItem(props, item, idx) {
  return (
    <StyledListItem
      key={"ListItem" + idx}
      hoverable={props.hoverable}
      divideItems={props.divideItems}
    >
      <Typography>{props.renderItem(item)}</Typography>
    </StyledListItem>
  );
}

function renderCategoryList(props, category, categoryIdx) {
  return (
    <StyledList
      divideCategories={props.divideCategories}
      categoriesHorizontal={props.categoriesHorizontal}
      key={"List" + category + categoryIdx}
    >
      {/* always black */}
      <Typography semibold style={{ color: "var(--nds-black)" }}>
        {props.renderCategory(category)}
      </Typography>
      {props.items[category].map((item, idx) => renderItem(props, item, idx))}
    </StyledList>
  );
}

const List = (props) => {
  let els = Array.isArray(props.items) ? (
    <StyledList
      divideCategories={props.divideCategories}
      categoriesHorizontal={props.categoriesHorizontal}
    >
      {props.items.map((item, idx) => renderItem(props, item, idx))}
    </StyledList>
  ) : (
    Object.keys(props.items).map((category, categoryIdx) =>
      renderCategoryList(props, category, categoryIdx)
    )
  );

  const flexList = <StyledListWrapper {...props}>{els}</StyledListWrapper>;
  if (props.renderListWrapper) {
    return props.renderListWrapper(flexList);
  }
  return flexList;
};

const renderDefaultItem = (item) => {
  return <React.Fragment>{item}</React.Fragment>;
};

const renderDefaultContainer = (list) => {
  return <React.Fragment>{list}</React.Fragment>;
};

List.propTypes = {
  hoverable: PropTypes.bool,
  divideItems: PropTypes.bool,
  divideCategories: PropTypes.bool,
  categoriesHorizontal: PropTypes.bool,
  renderItem: PropTypes.func,
  renderCategory: PropTypes.func,
  items: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.node,
  ]),
  renderListWrapper: PropTypes.func,
};

List.defaultProps = {
  hoverable: true,
  divideItems: false,
  divideCategories: false,
  categoriesHorizontal: false,
  renderItem: renderDefaultItem,
  renderCategory: renderDefaultItem,
  items: [],
  renderListWrapper: null,
};

export default List;
