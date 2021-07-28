import React from "react";
import PropTypes from "prop-types";

const Typography = (props) => {
  let fontSize, fontWeight, lineHeight;
  let color = "var(--nds-grey-text)";

  // <h*> tags
  if (props.h1) {
    fontSize = "36px";
    fontWeight = "600";
    lineHeight = "50px";
    color = "var(--nds-black)";
  } else if (props.h2) {
    fontSize = "28px";
    fontWeight = "600";
    lineHeight = "35px";
    color = "var(--nds-black)";
  } else if (props.h3) {
    // mobile native only - DO NOT USE
    fontSize = "24px";
    fontWeight = "500";
    lineHeight = "30px";
    color = "var(--nds-black)";
  } else if (props.h4) {
    fontSize = "20px";
    fontWeight = "600";
    lineHeight = "25px";
    color = "var(--nds-black)";
  } else if (props.subheader) {
    fontSize = "12px";
    fontWeight = "600";
    lineHeight = "15px";
    color = "var(--nds-black)";

    // <p> tags
  } else if (props.p1) {
    fontSize = "16px";
    fontWeight = "400";
    lineHeight = "20px";
  } else if (props.p2) {
    fontSize = "14px";
    fontWeight = "400";
    lineHeight = "18px";
  } else if (props.p3) {
    fontSize = "12px";
    fontWeight = "400";
    lineHeight = "15px";

    // base case
  } else {
    fontSize = "16px";
    fontWeight = "400";
    lineHeight = "20px";
  }
  const textTransform = props.subheader ? "uppercase" : null

  return (
    <span
      className="nds-typography"
      style={{
        color,
        fontWeight,
        fontFamily: "var(--nds-font-family)",
        fontSize,
        lineHeight,
        textTransform,
        ...props.style,
      }}
      {...props}
    >
      {props.children}
    </span>
  );
};

Typography.propTypes = {
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  h4: PropTypes.bool,
  subheader: PropTypes.bool,

  p1: PropTypes.bool,
  p2: PropTypes.bool,
  p3: PropTypes.bool,

  semibold: PropTypes.bool,
  children: PropTypes.node,
};

Typography.defaultProps = {
  children: [],
};

export default Typography;
