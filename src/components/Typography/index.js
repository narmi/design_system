import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledContainer = styled.span`
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.SemiBold ? "600" : props.fontWeight)};
  font-family: var(--nds-font-family);
  line-height: ${(props) => props.lineHeight};
  font-size: ${(props) => props.fontSize};
  text-transform: ${(props) => (props.Subheader ? "uppercase" : null)};

  :hover {
    text-decoration: ${(props) =>
      props.Link || props.SmallLink ? "underline" : null};
    text-decoration-color: ${(props) =>
      props.Link || props.SmallLink ? props.color : null};
  }
`;

const Typography = (props) => {
  let fontWeight = "400";
  let fontSize = "16px";
  let lineHeight = "20px";
  let color = "#4c4c4c";
  if (props.H1) {
    fontWeight = "600";
    lineHeight = "50px";
    fontSize = "36px";
  } else if (props.H2) {
    fontWeight = "600";
    lineHeight = "35px";
    fontSize = "28px";
  } else if (props.H3) {
    fontWeight = "600";
    lineHeight = "28px";
    fontSize = "20px";
  } else if (props.Subheader) {
    fontWeight = "600";
    lineHeight = "15px";
    fontSize = "12px";
  } else if (props.P3) {
    lineHeight = "15px";
    fontSize = "12px";
  } else if (props.P2) {
    lineHeight = "18px";
    fontSize = "14px";
  } else if (props.P1) {
    lineHeight = "20px";
    fontSize = "16px";
  }
  if (props.Link) {
    fontSize = "20px";
    fontWeight = "600";
    color = "var(--nds-secondary-color)";
  } else if (props.SmallLink) {
    fontSize = "16px";
    fontWeight = "600";
    color = "var(--nds-secondary-color)";
  }
  return (
    <StyledContainer
      color={color}
      fontWeight={fontWeight}
      fontSize={fontSize}
      lineHeight={lineHeight}
      {...props}
    >
      {" "}
      {props.children}{" "}
    </StyledContainer>
  );
};

Typography.propTypes = {
  H1: PropTypes.bool,
  H2: PropTypes.bool,
  H3: PropTypes.bool,
  Subheader: PropTypes.bool,

  P1: PropTypes.bool,
  P2: PropTypes.bool,
  P3: PropTypes.bool,

  SemiBold: PropTypes.bool,

  Link: PropTypes.bool,
  SmallLink: PropTypes.bool,
  children: PropTypes.node,
};

Typography.defaultProps = {
  P1: true,
  children: [],
};

export default Typography;
