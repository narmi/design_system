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

const StyledHeader = styled.span`
  color: var(--nds-black);
  font-weight: 600;
  font-family: var(--nds-font-family);
  font-size: 16px;
  line-height: 20px;
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

  :first-child {
    padding-right: ${(p) => (p.isArray ? "" : "15px")};
  }

  :nth-child(n + 2) {
    padding-right: ${(p) => (p.isArray ? "" : "25px")};
    padding-left: ${(p) => (p.isArray ? "" : "15px")};
  }

  &:last-child {
    border-right: none;
  }
`;

const StyledListItem = styled.li`
  padding: ${(props) => (props.isArray ? "12px 16px" : "")};
  :hover {
    background-color: ${(props) =>
      props.hoverable ? "var(--nds-grey-hover)" : null};
  }
`;

const List = (props) => {
  let divided = props.divided;
  let horizontal = props.horizontal;
  let isArray = Array.isArray(props.items);
  let els = isArray
    ? props.items.map((item, idx) => (
        <StyledList
          divided={divided}
          horizontal={horizontal}
          isArray={isArray}
          key={"List" + idx}
        >
          <StyledListItem isArray={isArray} hoverable={props.hoverable}>
            {props.renderItem(item)}
          </StyledListItem>
        </StyledList>
      ))
    : Object.keys(props.items).map((index) => (
        <StyledList
          divided={divided}
          horizontal={horizontal}
          isArray={isArray}
          key={"List" + index}
        >
          <li>
            <StyledHeader>{index}</StyledHeader>
          </li>
          {props.items[index].map((c, idx) => (
            <StyledListItem
              isArray={isArray}
              hoverable={props.hoverable}
              key={"ListItem" + idx}
            >
              {props.renderItem(c)}
            </StyledListItem>
          ))}
        </StyledList>
      ));
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
