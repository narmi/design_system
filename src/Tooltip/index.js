import React, { useState } from "react";
import PropTypes from "prop-types";
import { useLayer, Arrow } from "react-laag";

/**
 * Renders a text-only tooltip on hover or focus of a trigger.
 *
 * The tooltip will position itself based on the `side` prop, but will
 * automatically reposition to avoid collisions with viewport edges.
 */
const Tooltip = ({
  side = "top",
  text,
  children,
  wrapperDisplay = "inline-flex",
  maxWidth = "400px",
  testId,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const delays = {
    open: 500,
    close: 100,
  };
  let activeTimer;

  const openPopover = () => {
    clearTimeout(activeTimer);
    activeTimer = setTimeout(setIsOpen, delays.open, true);
  };

  const closePopover = () => {
    clearTimeout(activeTimer);
    activeTimer = setTimeout(setIsOpen, delays.close, false);
  };

  const { renderLayer, triggerProps, layerProps, arrowProps } = useLayer({
    isOpen,
    onOutsideClick: closePopover,
    onDisappear: closePopover,
    auto: true,
    placement: `${side}-center`,
    preferX: "left",
    preferY: "top",
    triggerOffset: 12,
    arrowOffset: 12,
  });

  return (
    <>
      <div
        {...triggerProps}
        aria-describedby="nds-tooltip"
        style={{ display: wrapperDisplay }}
        onFocus={openPopover}
        onBlur={closePopover}
        onMouseEnter={openPopover}
        onMouseLeave={closePopover}
        role="button"
        tabIndex="0"
        data-testid="nds-tooltip-trigger"
      >
        {children}
      </div>
      {renderLayer(
        <>
          {isOpen && (
            <div
              id="nds-tooltip"
              role="tooltip"
              className="nds-typography nds-tooltip elevation--middle"
              {...layerProps}
              style={{ maxWidth: maxWidth, ...layerProps.style }}
              data-testid={testId}
            >
              {text}
              <Arrow {...arrowProps} />
            </div>
          )}
        </>
      )}
    </>
  );
};

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
  /** Sets maximum width of tooltip */
  maxWidth: PropTypes.number,
  /** Optional value for `data-testid` attribute */
  testId: PropTypes.string,
};

export default Tooltip;
