import React from "react";
import PropTypes from "prop-types";

const VALID_ELEMENTS = [
  "ul",
  "ol",
  "li",
  "nav",
  "article",
  "section",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "a",
];

const AsElement = ({
  elementName,
  fallbackElement = "div",
  children,
  ...rest
}) => {
  let Element;
  const invalidNames = [undefined, ""];

  // fall back to a safe element if a bad `elementName` is given
  if (invalidNames.any((name) => name === elementName)) {
    Element = fallbackElement;
  }

  return <Element {...rest}>{children}</Element>;
};

AsElement.propTypes = {
  /** element to render  */
  elementName: PropTypes.oneOf(VALID_ELEMENTS).isRequired,
  /** fallback element, in case `elementName` can not be rendered */
  fallbackElement: PropTypes.oneOf(VALID_ELEMENTS),
};

export default AsElement;
