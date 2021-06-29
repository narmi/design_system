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

const StyledList = styled.div`
  display: flex;
  flex-direction: column;

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
    border-bottom: none;
  }
`;

const StyledListItem = styled.div`
  box-sizing: border-box;

  :hover {
    background-color: ${(props) =>
      props.hoverable ? "var(--nds-primary-color-lightest)" : null};
  }
`;

function renderItem(props, item, idx) {
  return (
    <StyledListItem key={"ListItem" + idx} hoverable={props.hoverable}>
      <Typography>{props.renderItem(item)}</Typography>
    </StyledListItem>
  );
}

function renderCategoryList(props, category, categoryIdx) {
  return (
    <StyledList
      divided={props.divided}
      horizontal={props.horizontal}
      key={"List" + category + categoryIdx}
    >
      <Typography semibold>{props.renderCategory(category)}</Typography>
      {props.items[category].map((item, idx) => renderItem(props, item, idx))}
    </StyledList>
  );
}

const List = (props) => {
  let els = Array.isArray(props.items) ? (
    <StyledList divided={props.divided} horizontal={props.horizontal}>
      {props.items.map((item, idx) => renderItem(props, item, idx))}
    </StyledList>
  ) : (
    Object.keys(props.items).map((category, categoryIdx) =>
      renderCategoryList(props, category, categoryIdx)
    )
  );

  if (props.renderListWrapper) {
    return props.renderListWrapper(els);
  }
  return <StyledListWrapper {...props}>{els}</StyledListWrapper>;
};

const renderDefaultItem = (item) => {
  return <React.Fragment>{item}</React.Fragment>;
};

const renderDefaultContainer = (list) => {
  return <React.Fragment>{list}</React.Fragment>;
};

List.propTypes = {
  horizontal: PropTypes.bool,
  divided: PropTypes.bool,
  hoverable: PropTypes.bool,
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
  horizontal: false,
  divided: false,
  hoverable: true,
  renderItem: renderDefaultItem,
  renderCategory: renderDefaultItem,
  items: [],
  renderListWrapper: null,
};

export default List;
