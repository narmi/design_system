import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledContainer = styled.span`
  color: #4c4c4c;
  font-weight: 400;
  font-family: var(--nds-font-family);
  line-height: 20px;
`;

const Typography = (props) => {
  return <StyledContainer {...props}> {props.children} </StyledContainer>;
};

Typography.propTypes = {
  P1: PropTypes.bool,
  children: PropTypes.node,
};

Typography.defaultProps = {
  P1: true,
  children: [],
};

export default Typography;
