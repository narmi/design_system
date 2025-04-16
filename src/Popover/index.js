/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState, useEffect } from "react";
import cc from "classcat";
import PropTypes from "prop-types";
import { useLayer } from "react-laag";
import FocusLock from "react-focus-lock";
import { createUseLayerContainer } from "src/util/dom";

const noop = () => {};

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
  renderTrigger = () => <></>,
  wrapperDisplay = "inline-flex",
  offset = 2,
  disableAutoPlacement = false,
  matchTriggerWidth = false,
  testId,
  closeOnContentClick = false,
  isOpen,
  autoFocus = false,
  hasShadow = true,
  onUserDismiss = noop,
  onUserEnable = noop,
}) => {
  const isControlled = isOpen === true || isOpen === false;
  const hasChildren = React.Children.count(children) > 0;
  const [open, setOpen] = useState(false);
  const shouldRenderPopover = isControlled ? isOpen : open;
  const popoverContent = closeOnContentClick
    ? React.cloneElement(content, {
        onClick: () => {
          if (content.onClick) {
            content.onClick();
          }
          setOpen(false);
          onUserDismiss();
        },
      })
    : content;

  const closePopover = () => {
    setOpen(false);
    onUserDismiss();
  };

  const togglePopover = (event) => {
    event.stopPropagation();
    if (isControlled) {
      isOpen ? onUserDismiss() : onUserEnable();
    } else {
      setOpen((open) => !open);
    }
  };

  const handleKeyDown = ({ key }) => {
    if (key === "Enter") {
      setOpen(true);
      onUserEnable();
    }
  };

  const handleKeyUp = ({ key }) => {
    if (key === "Escape" && shouldRenderPopover) {
      setOpen(false);
      onUserDismiss();
    }
  };

  const { renderLayer, triggerProps, triggerBounds, layerProps } = useLayer({
    isOpen: shouldRenderPopover,
    onOutsideClick: closePopover,
    onDisappear: closePopover,
    auto: !disableAutoPlacement,
    placement: `${side}-${alignment}`,
    preferX: "left",
    preferY: "bottom",
    container: createUseLayerContainer,
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
        tabIndex="0"
        className="nds-popover-trigger"
        data-testid="nds-popover-trigger"
        aria-haspopup="true"
        aria-expanded={shouldRenderPopover.toString()}
      >
        {/* Support both legacy (children) and standard (render prop) triggers */}
        {hasChildren ? children : renderTrigger(isOpen)}
      </div>
      {renderLayer(
        <>
          {shouldRenderPopover && (
            <div
              {...layerProps}
              className={cc([
                "nds-typography nds-popover",
                "rounded--all bgColor--white",
                {
                  "nds-popover--elevated": hasShadow,
                },
              ])}
              style={layerStyle}
              data-testid={testId}
            >
              <div tabIndex={-1}>
                <FocusLock autoFocus={autoFocus}>{popoverContent}</FocusLock>
              </div>
            </div>
          )}
        </>,
      )}
    </>
  );
};

Popover.propTypes = {
  /** Content of popover */
  content: PropTypes.node.isRequired,
  /**
   * ⚠️ DEPRECATED - use `renderTrigger` instead.
   * The root node of JSX passed into Tooltip as children will act as the tooltip trigger
   */
  children: PropTypes.node,
  /**
   * Render function for a custom trigger aware of the open state of the Popover.
   * Called with `(isOpen) => {}`, the state of the Popover.
   */
  renderTrigger: PropTypes.func,
  /** Sets preferred side of the trigger the tooltip should appear */
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
  /** If isOpen is set the component becomes a controlled component. Use the `onUserDismiss` callback to update. */
  isOpen: PropTypes.bool,
  /**
   * Callback to handle user taking an action to __dismiss__ the popover
   * (click outside, Escape key)
   */
  onUserDismiss: PropTypes.func,
  /**
   * Callback to handle user taking an action to __enable__ the popover
   * (click or key interaction on the trigger button rendered in Popover)
   */
  onUserEnable: PropTypes.func,
  /**
   * When set to `true`, the first focusable element will automatically receive focus
   * whenever the popover opens
   */
  autoFocus: PropTypes.bool,
  /**
   * When set to `false` the popover positioned element will not have a box shadow.
   * Useful for adding a custom box shadow.
   */
  hasShadow: PropTypes.bool,
};

export default Popover;
