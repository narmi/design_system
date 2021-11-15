import React from "react";
import PropTypes from "prop-types";
import Tippy from "@tippyjs/react";

/**
 * Renders a text-only tooltip on hover or focus of a trigger.
 *
 * The tooltip will position itself based on the `side` prop, but will
 * automatically reposition to avoid collisions with viewport edges.
 *
 * The `children` of this component will be wapped with a focusable `div`.
 * By default, this `div` shrink wraps content via `inline-flex`, but this styling
 * can be controlled via the `wrapperDisplay` prop.
 */
const Tooltip = ({
  side = "top",
  text,
  children,
  wrapperDisplay = "inline-flex",
}) => (
  <Tippy
    content={text}
    placement={side}
    className="nds-tooltip"
    maxWidth={320}
    delay={[300, 100]}
  >
    <div
      tabIndex="0"
      style={{ display: wrapperDisplay }}
      data-testid="nds-tooltip"
    >
      {children}
    </div>
  </Tippy>
);

Tooltip.propTypes = {
  /** The root node of JSX passed into Tooltip as children will act as the tooltip trigger */
  children: PropTypes.node.isRequired,
  /** Message shown inside the tooltip */
  text: PropTypes.string.isRequired,
  /** Sets prefferred side of the trigger the tooltip should appear */
  side: PropTypes.oneOf(["top", "right", "bottom", "left"]),
  /** CSS `display` value for the element that wraps the Tooltip children */
  wrapperDisplay: PropTypes.oneOf([
    "inline-flex",
    "inline-block",
    "inline",
    "block",
    "flex",
  ]),
};

export default Tooltip;
