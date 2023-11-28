/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useLayer } from "react-laag";
import FocusLock from "react-focus-lock";

interface PopoverProps {
  /** The root node of JSX passed into Tooltip as children will act as the tooltip trigger */
  children: React.ReactNode;
  /** Content of popover */
  content: React.ReactNode;
  /** Sets prefferred side of the trigger the tooltip should appear */
  side?: "top" | "right" | "bottom" | "left";
  /** Sets preferred alignment of the tooltip relative to the trigger */
  alignment?: "start" | "center" | "end";
  /** CSS `display` value for the element that wraps the Tooltip children */
  wrapperDisplay?: "inline-flex" | "inline-block" | "inline" | "block" | "flex";
  /** Distance of Popover from trigger element in number of pixels */
  offset?: number;
  /** When `true`, the Popover container will match the width of its triggering element */
  matchTriggerWidth?: boolean;
  /**
   * By default, the Popover will automatically reposition itself to avoid viewport edges.
   * Setting this prop to `true` will disable this behavior so that the Popover will
   * always be placed on the given `side` prop.
   */
  disableAutoPlacement?: boolean;
  /** Optional value for `data-testid` attribute */
  testId?: string;
  /** Close the popover if the User clicks on the content */
  closeOnContentClick?: boolean;
}

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
  alignment = "center",
  content,
  children,
  wrapperDisplay = "inline-flex",
  offset = 2,
  disableAutoPlacement = false,
  matchTriggerWidth = false,
  testId,
  closeOnContentClick = false,
}: PopoverProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverContent = closeOnContentClick
    ? // @ts-expect-error content should be assignable to ReactNode here
      React.cloneElement(content, {
        onClick: () => {
          // @ts-expect-error this onClick accesses ReactNode's props
          if (content.onClick) {
            // @ts-expect-error this onClick accesses ReactNode's props
            content.onClick();
          }
          setIsOpen(false);
        },
      })
    : content;

  const closePopover = () => {
    setIsOpen(false);
  };

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = ({ key }) => {
    if (key === "Enter") {
      setIsOpen(true);
    }
  };

  const handleKeyUp = ({ key }) => {
    if (key === "Escape" && isOpen) {
      setIsOpen(false);
    }
  };

  const { renderLayer, triggerProps, triggerBounds, layerProps } = useLayer({
    isOpen,
    onOutsideClick: closePopover,
    onDisappear: closePopover,
    auto: !disableAutoPlacement,
    placement: `${side}-${alignment}`,
    preferX: "left",
    preferY: "bottom",
    container: typeof document !== "undefined" ? document.body : undefined,
    triggerOffset: offset,
  });

  useEffect(() => {
    window.addEventListener("keydown", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyUp);
    };
  }, [handleKeyUp]);

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
        role="button"
        tabIndex={0}
        data-testid="nds-popover-trigger"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {children}
      </div>
      {renderLayer(
        <>
          {isOpen && (
            <div
              {...layerProps}
              className="nds-typography nds-popover rounded--all bgColor--white"
              style={layerStyle}
              data-testid={testId}
            >
              <div tabIndex={-1}>
                <FocusLock autoFocus={false}>{popoverContent}</FocusLock>
              </div>
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
  /** Sets preferred alignment of the tooltip relative to the trigger */
  alignment: PropTypes.oneOf(["start", "center", "end"]),
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
  /** Optional value for `data-testid` attribute */
  testId: PropTypes.string,
  /** Close the popover if the User clicks on the content */
  closeOnContentClick: PropTypes.bool,
};

export default Popover;
