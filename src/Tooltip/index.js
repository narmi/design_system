import React from "react";
import PropTypes from "prop-types";
import * as RadixTooltip from "@radix-ui/react-tooltip";

/**
 * Renders a text-only tooltip on hover or focus of a trigger.
 *
 * The tooltip will position itself based on the `side` prop, but will
 * automatically reposition to avoid collisions with viewport edges.
 */
const Tooltip = ({ side = "top", text, children }) => {
  return (
    <RadixTooltip.Root>
      <RadixTooltip.Trigger className="nds-tooltip-trigger" asChild>
        <div>{children}</div>
      </RadixTooltip.Trigger>
      <RadixTooltip.Content side={side} className="nds-typography nds-tooltip">
        {text}
        <RadixTooltip.Arrow
          className="nds-tooltip-arrow"
          width={16}
          height={8}
        />
      </RadixTooltip.Content>
    </RadixTooltip.Root>
  );
};

Tooltip.propTypes = {
  /** The root node of JSX passed into Tooltip as children will act as the tooltip trigger */
  children: PropTypes.node.isRequired,
  /** Message shown inside the tooltip */
  text: PropTypes.string.isRequired,
  /** Sets prefferred side of the trigger the tooltip should appear */
  side: PropTypes.oneOf(["top", "right", "bottom", "left"]),
};

export default Tooltip;
