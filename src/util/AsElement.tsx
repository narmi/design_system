import React from "react";
import PropTypes, { element } from "prop-types";

/**
 * This is not a complete list of HTML elements;
 * only the elements we want to support in `as` props.
 */
export type NdsHtmlElement =
  | "span"
  | "div"
  | "ul"
  | "ol"
  | "li"
  | "p"
  | "nav"
  | "article"
  | "section"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "button"
  | "a";

interface AsElementProps {
  /** element to render  */
  elementType: NdsHtmlElement;
  children?: React.ReactNode | React.ReactNode[];
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
  const Element = elementType;
  return <Element {...rest}>{children}</Element>;
};

AsElement.propTypes = {
  /** element to render  */
  elementType: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default AsElement;
