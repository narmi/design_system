import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
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
  padding: 12px 16px;
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
  :hover {
    background-color: ${(props) =>
      props.hoverable ? "var(--nds-grey-hover)" : null};
  }
`;

const List = (props) => {
  let divided = props.divided;
  let horizontal = props.horizontal;
  let items = props.children;
  let isArray = Array.isArray(props.children);
  let els = isArray
    ? items.map((item, idx) => (
        <StyledList
          divided={divided}
          horizontal={horizontal}
          key={"List" + idx}
        >
          <StyledListItem hoverable={props.hoverable}>{item}</StyledListItem>
        </StyledList>
      ))
    : Object.keys(items).map((index) => (
        <StyledList
          divided={divided}
          horizontal={horizontal}
          key={"List" + index}
        >
          <li>
            <StyledHeader>{index}</StyledHeader>
          </li>
          {items[index].map((c, idx) => (
            <StyledListItem hoverable={props.hoverable} key={"ListItem" + idx}>
              <span> {c} </span>
            </StyledListItem>
          ))}
        </StyledList>
      ));
  return <StyledListWrapper {...props}>{els}</StyledListWrapper>;
};

List.propTypes = {
  horizontal: PropTypes.bool,
  divided: PropTypes.bool,
  hoverable: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.node,
  ]),
};

List.defaultProps = {
  horizontal: false,
  divided: false,
  hoverable: true,
  children: {},
};

export default List;
