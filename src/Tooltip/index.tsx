import React, { useState } from "react";
import { useLayer, Arrow } from "react-laag";

export interface TooltipProps {
  /** The root node of JSX passed into Tooltip as children will act as the tooltip trigger */
  children: React.ReactNode;
  /** Message shown inside the tooltip */
  text: string;
  /** Sets preferred side of the trigger the tooltip should appear */
  side?: "top" | "right" | "bottom" | "left";
  /** CSS `display` value for the element that wraps the Tooltip children */
  wrapperDisplay?: "inline-flex" | "inline-block" | "inline" | "block" | "flex";
  /** Sets maximum width of tooltip. Use a full CSS value string (e.g. "300px")*/
  maxWidth?: string;
  /** If isOpen is set the component becomes a controlled component */
  isOpen?: boolean;
  /** Optional value for `data-testid` attribute */
  testId?: string;
}

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
  isOpen,
}: TooltipProps) => {
  const isControlled = isOpen === true || isOpen === false;
  const [open, setOpen] = useState(false);
  const delays = {
    open: 500,
    close: 100,
  };
  let activeTimer;

  const shouldRenderTooltip = isControlled ? isOpen : open;

  const openPopover = () => {
    clearTimeout(activeTimer);
    activeTimer = setTimeout(setOpen, delays.open, true);
  };

  const closePopover = () => {
    clearTimeout(activeTimer);
    activeTimer = setTimeout(setOpen, delays.close, false);
  };

  const { renderLayer, triggerProps, layerProps, arrowProps } = useLayer({
    isOpen: shouldRenderTooltip,
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
        aria-label={text}
        style={{ display: wrapperDisplay }}
        onFocus={openPopover}
        onBlur={closePopover}
        onMouseEnter={openPopover}
        onMouseLeave={closePopover}
        // Giving this element a "button" role is misleading in practice.
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
        data-testid="nds-tooltip-trigger"
        aria-expanded={open}
      >
        {children}
      </div>
      {renderLayer(
        <>
          {shouldRenderTooltip && (
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
        </>,
      )}
    </>
  );
};

export default Tooltip;
