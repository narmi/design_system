import React, { useState, useCallback, useId, useRef } from "react";
import ReactDOM from "react-dom";
import useDropdownLayer from "../hooks/useDropdownLayer";

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
  const tooltipId = useId();
  const delays = {
    open: 500,
    close: 100,
  };
  const activeTimer = useRef<ReturnType<typeof setTimeout>>();

  const shouldRenderTooltip = isControlled ? isOpen : open;

  const openPopover = () => {
    clearTimeout(activeTimer.current);
    activeTimer.current = setTimeout(setOpen, delays.open, true);
  };

  const closePopover = useCallback(() => {
    clearTimeout(activeTimer.current);
    activeTimer.current = setTimeout(setOpen, delays.close, false);
  }, []);

  const { anchorProps, layerProps } = useDropdownLayer({
    isOpen: !!shouldRenderTooltip,
    setIsOpen: (v) => {
      if (!v) closePopover();
    },
    matchWidth: false,
    ariaPopupType: "false",
    placement: side,
    isPortalled: true,
  });

  const {
    ref: anchorRef,
    style: anchorStyle,
    "aria-expanded": anchorExpanded,
  } = anchorProps;
  const { ref: layerRef, ...layerRest } = layerProps;
  const layerContent = (
    <div
      ref={layerRef as React.Ref<HTMLDivElement>}
      id={tooltipId}
      role="tooltip"
      className="nds-typography nds-tooltip elevation--middle"
      data-placement={side}
      {...layerRest}
      style={{
        ...layerRest.style,
        maxWidth: maxWidth,
      }}
      data-testid={testId}
      onMouseEnter={openPopover}
      onMouseLeave={closePopover}
    >
      {shouldRenderTooltip ? text : null}
    </div>
  );

  return (
    <>
      <div
        ref={anchorRef as React.Ref<HTMLDivElement>}
        aria-describedby={shouldRenderTooltip ? tooltipId : undefined}
        aria-expanded={anchorExpanded}
        style={{ ...anchorStyle, display: wrapperDisplay }}
        onFocus={openPopover}
        onBlur={closePopover}
        onMouseEnter={openPopover}
        onMouseLeave={closePopover}
        // Giving this element a "button" role is misleading in practice.
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
        data-testid="nds-tooltip-trigger"
      >
        {children}
      </div>
      {ReactDOM.createPortal(layerContent, document.body)}
    </>
  );
};

export default Tooltip;
