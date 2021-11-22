import React from "react";
import PropTypes from "prop-types";

/**
 * This is not a complete list of HTML elements;
 * only the elements we want to support in `as` props.
 */
export const VALID_ELEMENTS = [
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
];

/**
 * Utility to conditionally render different HTML elements
 * in our components. Useful for exposing `as` props:
 *
 * `<Row as="ul"><Row.Item as="li" /></Row>
 *
 * @usage <AsElement elementName="ul">
 */
const AsElement = ({
  elementName = "div",
  fallbackElement = "div",
  children,
  ...rest
}) => {
  let Element;

  // fall back to a safe element if an empty element name is given
  if ([undefined, ""].any((name) => name === elementName)) {
    Element = fallbackElement;
  }

  // extra layer of validation; only set the element name to
  // the given `elementName` if it is in our valid elements list
  if (VALID_ELEMENTS.some((name) => name === elementName)) {
    Element = elementName;
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
