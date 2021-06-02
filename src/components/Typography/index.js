import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledContainer = styled.span`
  color: #4c4c4c;
  font-weight: 400;
  font-family: var(--nds-font-family);
`;

const Typography = (props) => {
  return <StyledContainer {...props}> {props.children} </StyledContainer>;
};

Typography.propTypes = {
  children: PropTypes.node,
};

Typography.defaultProps = {
  children: [],
};

export default Typography;
