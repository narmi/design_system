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

const StyledList = styled.ul`
  list-style-type: none;
  padding-inline-start: 0;
  margin-block-start: 0;
  white-space: nowrap;
  padding: 12px 16px;
  margin: 0;
  color: black;
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
  left: 20%;
`;

const StyledListItem = styled.li`
  :hover {
    background-color: ${(props) =>
      props.hover ? "rgba(42,68,148,0.05)" : null};
  }
`;

const List = (props) => {
  let divided = props.divided;
  let horizontal = props.horizontal;

  const els = props.children.map((c) => (
    <StyledList divided={divided} horizontal={horizontal} hover={props.hover}>
      <StyledListItem hover={props.hover} key={c}>
        {c}
      </StyledListItem>
    </StyledList>
  ));

  return <StyledListWrapper {...props}>{els}</StyledListWrapper>;
};

List.propTypes = {
  horizontal: PropTypes.bool,
  divided: PropTypes.bool,
  hover: PropTypes.bool,
  items: PropTypes.object,
};

List.defaultProps = {
  horizontal: false,
  divided: false,
  hover: true,
  items: {},
};

export default List;
