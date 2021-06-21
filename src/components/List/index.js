import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Typography from "components/Typography";
import { deviceBreakpoints } from "../../globalStyles";

const StyledListWrapper = styled.div`
  display: flex;
  flex-flow: ${(props) => (props.horizontal ? "row nowrap" : "column nowrap")};
  @media ${`(max-width: ${deviceBreakpoints.mobileMax})`} {
    flex-flow: column nowrap;
  }
`;

const StyledHeader = styled.div`
  color: var(--nds-black);
  font-weight: 600;
  font-family: var(--nds-font-family);
  font-size: 16px;
  line-height: 20px;
  padding-left: 16px;
  padding-bottom: 4px;
  width: 100%;
`;

const StyledList = styled.ul`
  list-style-type: none;
  padding-inline-start: 0;
  margin-block-start: 0;
  white-space: nowrap;
  margin: 0;
  @media ${`(min-width: ${deviceBreakpoints.tablet})`} {
    border-right: ${(p) =>
      p.divided && p.horizontal ? "1px solid var(--nds-grey-disabled)" : null};
  }

  border-bottom: ${(p) =>
    p.divided && !p.horizontal ? "1px solid var(--nds-grey-disabled)" : null};

  @media ${`(max-width: ${deviceBreakpoints.mobileMax})`} {
    border-bottom: ${(p) =>
      p.divided ? "1px solid var(--nds-grey-disabled)" : null};
  }

  &:last-child {
    border-right: none;
  }
`;

const StyledListItem = styled.li`
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  :hover {
    background-color: ${(props) =>
      props.hoverable ? "var(--nds-primary-color-lightest-2)" : null};
  }
`;

function renderItemList(props, item, idx) {
  return (
    <StyledList
      divided={props.divided}
      horizontal={props.horizontal}
      key={"List" + idx}
    >
      <StyledListItem hoverable={props.hoverable}>
        {props.renderItem(item)}
      </StyledListItem>
    </StyledList>
  );
}

function renderCategoryList(props, index) {
  return (
    <StyledList
      divided={props.divided}
      horizontal={props.horizontal}
      key={"List" + index}
    >
      <li>
        <StyledHeader>{index}</StyledHeader>
      </li>
      {props.items[index].map((c, idx) => (
        <StyledListItem hoverable={props.hoverable} key={"ListItem" + idx}>
          {props.renderItem(c)}
        </StyledListItem>
      ))}
    </StyledList>
  );
}

const List = (props) => {
  let els = Array.isArray(props.items)
    ? props.items.map((item, idx) => renderItemList(props, item, idx))
    : Object.keys(props.items).map((index) => renderCategoryList(props, index));
  return <StyledListWrapper {...props}>{els}</StyledListWrapper>;
};

const renderDefaultItem = (item) => {
  return <Typography>{item}</Typography>;
};

List.propTypes = {
  horizontal: PropTypes.bool,
  divided: PropTypes.bool,
  hoverable: PropTypes.bool,
  renderItem: PropTypes.func,
  items: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.node,
  ]),
};

List.defaultProps = {
  horizontal: false,
  divided: false,
  hoverable: true,
  renderItem: renderDefaultItem,
  items: [],
};

export default List;
