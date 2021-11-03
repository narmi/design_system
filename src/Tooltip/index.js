import React from "react";
import PropTypes from "prop-types";
import Tippy from "@tippyjs/react";

/**
 * Renders a text-only tooltip on hover or focus of a trigger.
 *
 * The tooltip will position itself based on the `side` prop, but will
 * automatically reposition to avoid collisions with viewport edges.
 */
const Tooltip = ({ side = "top", text, children }) => (
  <Tippy
    content={text}
    placement={side}
    className="nds-tooltip"
    maxWidth={320}
    delay={[300, 100]}
  >
    <div tabIndex="0" style={{ display: "inline-flex" }}>
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
};

export default Tooltip;
