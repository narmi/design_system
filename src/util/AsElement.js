import React from "react";
import PropTypes from "prop-types";

const SAFE_HREF_PROTOCOLS = ["http:", "https:", "mailto:", "tel:"];

/**
 * Returns the href if it uses a safe protocol, or undefined if it
 * uses a potentially dangerous scheme (javascript:, data:, etc).
 */
export const getSafeHref = (href) => {
  if (href == null) return href;
  if (typeof href !== "string") return undefined;
  // eslint-disable-next-line no-control-regex
  const normalized = href.trim().replace(/[\u0000-\u001F\u007F\s]+/g, "");
  const m = normalized.match(/^([a-zA-Z][a-zA-Z\d+.-]*):/);
  if (!m) return href;
  const protocol = `${m[1].toLowerCase()}:`;
  return SAFE_HREF_PROTOCOLS.includes(protocol) ? href : undefined;
};

/**
 * This is not a complete list of HTML elements;
 * only the elements we want to support in `as` props.
 */
export const VALID_ELEMENTS = [
  "span",
  "div",
  "ul",
  "ol",
  "li",
  "p",
  "nav",
  "article",
  "section",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "button",
  "a",
];

/**
 * Utility to conditionally render different HTML elements
 * in our components. Useful for exposing `as` props:
 *
 * `<Row as="ul"><Row.Item as="li" /></Row>
 *
 * @usage <AsElement elementName="ul" otherProp="this gets passed through">
 */
const AsElement = ({ elementType = "div", children, ...rest }) => {
  const safeRest = Object.prototype.hasOwnProperty.call(rest, "href")
    ? { ...rest, href: getSafeHref(rest.href) }
    : rest;

  if (
    typeof elementType === "function" ||
    typeof elementType.type === "function"
  ) {
    // this is a react component so render it directly
    return React.createElement(elementType, safeRest, children);
  }

  let Element = "div"; // always fall back to div if something is wrong

  // extra layer of validation; only set the element name to
  // the given `elementName` if it is in our valid elements list
  if (VALID_ELEMENTS.includes(elementType)) {
    Element = elementType;
  }

  return <Element {...safeRest}>{children}</Element>;
};

AsElement.propTypes = {
  /** element to render  */
  elementType: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.oneOf(VALID_ELEMENTS),
  ]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default AsElement;
