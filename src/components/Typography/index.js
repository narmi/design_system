import React from "react";
import PropTypes, { bool } from "prop-types";
import styled, { css } from "styled-components";

const StyledContainer = styled.span`
  line-height: 22px;
  position: relative;
  color: #4c4c4c;
  font-weight: 400;
  font-family: var(--nds-font-family);
  :hover {
    color: ${(props) => (props.hover ? "var(--nds-primary-color)" : null)};
  }
`;

const Typography = (props) => {
  return <StyledContainer {...props}> {props.children} </StyledContainer>;
};

Typography.propTypes = {
  hover: PropTypes.bool,
  children: PropTypes.node
};

Typography.defaultProps = {
  hover: false,
  children: []
};

export default Typography;
