import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledContainer = styled.span`
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.semibold ? "600" : props.fontWeight)};
  font-family: var(--nds-font-family);
  line-height: ${(props) => props.lineHeight};
  font-size: ${(props) => props.fontSize};
  text-transform: ${(props) => (props.subheader ? "uppercase" : null)};
`;

const Typography = (props) => {
  let fontWeight = "400";
  let fontSize = "16px";
  let lineHeight = "20px";
  let color = "var(--nds-grey-text)";
  if (props.h1) {
    fontWeight = "600";
    lineHeight = "50px";
    fontSize = "36px";
  } else if (props.h2) {
    fontWeight = "600";
    lineHeight = "35px";
    fontSize = "28px";
  } else if (props.h3) {
    fontWeight = "600";
    lineHeight = "28px";
    fontSize = "20px";
  } else if (props.subheader) {
    fontWeight = "600";
    lineHeight = "15px";
    fontSize = "12px";
  } else if (props.p1) {
    lineHeight = "20px";
    fontSize = "16px";
  } else if (props.p2) {
    lineHeight = "18px";
    fontSize = "14px";
  } else if (props.p3) {
    lineHeight = "15px";
    fontSize = "12px";
  }
  return (
    <StyledContainer
      color={color}
      fontWeight={fontWeight}
      fontSize={fontSize}
      lineHeight={lineHeight}
      {...props}
    >
      {props.children}
    </StyledContainer>
  );
};

Typography.propTypes = {
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  subheader: PropTypes.bool,

  p1: PropTypes.bool,
  p2: PropTypes.bool,
  p3: PropTypes.bool,

  semibold: PropTypes.bool,
  children: PropTypes.node,
};

Typography.defaultProps = {
  p1: true,
  children: [],
};

export default Typography;
