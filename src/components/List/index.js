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

const List = (props) => {
  let divided = props.divided;
  let horizontal = props.horizontal;
  let items = props.items;

  const els = Object.keys(items).map((header) => (
    <StyledList divided={divided} horizontal={horizontal}>
      <li>
        <StyledHeader>{header}</StyledHeader>
      </li>
      {items[header].map((c) => (
        <li key={c}>{c}</li>
      ))}
    </StyledList>
  ));

  return <StyledListWrapper {...props}>{els}</StyledListWrapper>;
};

List.propTypes = {
  horizontal: PropTypes.bool,
  divided: PropTypes.bool,
  items: PropTypes.object,
};

List.defaultProps = {
  horizontal: false,
  divided: false,
  items: {},
};

export default List;
