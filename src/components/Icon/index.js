import React from "react";
import PropTypes, { bool } from "prop-types";

const Icon = (props) => {
  return <img src={props.image} alt="flow" />;
};

Icon.propTypes = {
  image: PropTypes.image,
  children: PropTypes.node, // numbers, string, DOM elements, arrays, fragments, ...
};

Icon.defaultProps = {
  children: [],
};

export default Icon;
