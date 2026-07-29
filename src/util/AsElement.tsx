import React from "react";
import PropTypes from "prop-types";

const SAFE_HREF_PROTOCOLS = ["http:", "https:", "mailto:", "tel:"];

/**
 * Returns the href if it uses a safe protocol, or undefined if it
 * uses a potentially dangerous scheme (javascript:, data:, etc).
 *
 * Accepts `unknown` rather than `string` on purpose: this is a security
 * guard, and it must keep rejecting non-string input that reaches it from
 * untyped call sites at runtime.
 */
export const getSafeHref = (href?: unknown): string | null | undefined => {
  if (href === null) return null;
  if (href === undefined) return undefined;
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

export interface AsElementProps {
  /** element to render  */
  elementType?: React.ElementType;
  children?: React.ReactNode;
  /**
   * Any additional props are spread onto the rendered element.
   * `AsElement` is a passthrough, so this is intentionally open-ended.
   */
  [key: string]: unknown;
}

/**
 * Utility to conditionally render different HTML elements
 * in our components. Useful for exposing `as` props:
 *
 * `<Row as="ul"><Row.Item as="li" /></Row>
 *
 * @usage <AsElement elementName="ul" otherProp="this gets passed through">
 */
const AsElement = ({
  elementType = "div",
  children,
  ...rest
}: AsElementProps) => {
  const safeRest = Object.prototype.hasOwnProperty.call(rest, "href")
    ? { ...rest, href: getSafeHref(rest.href) }
    : rest;

  if (
    typeof elementType === "function" ||
    typeof (elementType as { type?: unknown }).type === "function"
  ) {
    // this is a react component so render it directly
    return React.createElement(
      elementType,
      safeRest as React.Attributes,
      children,
    );
  }

  let Element: React.ElementType = "div"; // always fall back to div if something is wrong

  // extra layer of validation; only set the element name to
  // the given `elementName` if it is in our valid elements list
  if (typeof elementType === "string" && VALID_ELEMENTS.includes(elementType)) {
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
