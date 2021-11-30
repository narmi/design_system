import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useLayer } from "react-laag";

/**
 * Generic Popover component. Renders a floating element that can contain any content,
 * positioned relatively to its triggering element.
 *
 * This Popover only appears on "click" (focus + activate or mouse click) interactions.
 * The Escape key and clicking outside of the Popover will dismiss it.
 * For a hover-based informative popover, use `Tooltip`.
 *
 * The popover will position itself based on the `side` prop, but will
 * automatically reposition to avoid collisions with viewport edges.
 */
const Popover = ({
  side = "bottom",
  content,
  children,
  wrapperDisplay = "inline-flex",
  offset = 2,
  disableAutoPlacement = false,
  matchTriggerWidth = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const closePopover = () => {
    setIsOpen(false);
  };

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = ({ key }) => {
    switch (key) {
      case "Escape":
        setIsOpen(false);
        break;
      case "Enter":
        setIsOpen(true);
        break;
    }
  };

  const { renderLayer, triggerProps, triggerBounds, layerProps } = useLayer({
    isOpen,
    onOutsideClick: closePopover,
    onDisappear: closePopover,
    auto: !disableAutoPlacement,
    placement: `${side}-center`,
    preferX: "left",
    preferY: "bottom",
    container: document.body,
    triggerOffset: offset,
  });

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  let layerStyle = layerProps.style;
  if (triggerBounds && matchTriggerWidth) {
    layerStyle = {
      width: triggerBounds.width,
      ...layerProps.style,
    };
  }

  return (
    <>
      <div
        {...triggerProps}
        style={{ display: wrapperDisplay }}
        onClick={togglePopover}
        onKeyDown={handleKeyDown}
        tabIndex="0"
        data-testid="nds-popover-trigger"
        aria-haspopup="true"
        aria-expanded={isOpen.toString()}
      >
        {children}
      </div>
      {renderLayer(
        <>
          {isOpen && (
            <div
              {...layerProps}
              className="nds-typography nds-popover round--all bgColor--white"
              style={layerStyle}
            >
              {content}
            </div>
          )}
        </>
      )}
    </>
  );
};

Popover.propTypes = {
  /** The root node of JSX passed into Tooltip as children will act as the tooltip trigger */
  children: PropTypes.node.isRequired,
  /** Content of popover */
  content: PropTypes.node.isRequired,
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
  /** Distance of Popover from trigger element in number of pixels */
  offset: PropTypes.number,
  /** When `true`, the Popover container will match the width of its triggering element */
  matchTriggerWidth: PropTypes.bool,
  /**
   * By default, the Popover will automatically reposition itself to avoid viewport edges.
   * Setting this prop to `true` will disable this behavior so that the Popover will
   * always be placed on the given `side` prop.
   */
  disableAutoPlacement: PropTypes.bool,
};

export default Popover;
