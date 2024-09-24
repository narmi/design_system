/* eslint-disable jsx-a11y/no-noninteractive-element-interactions,react/require-default-props */
import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import cc from "classcat";
import useBreakpoints from "../hooks/useBreakpoints";
import useMountTransition from "./useMountTransition";
import useLockBodyScroll from "../hooks/useLockBodyScroll";

const noop = () => {};

/**
 * Renders an animated drawer dialog with an overlay that
 * allows navigation between multiple contents
 *
 * This component uses a `ReactDOM` portal to render it as a direct
 * child of `document.body`.
 */
const Drawer = ({
  isOpen = false,
  onUserDismiss = noop,
  onNext = null,
  onPrev = null,
  showClose = true,
  showControls = true,
  footer,
  children,
  position = "right",
  depth = "70%",
  paddingSize = "xxl",
  testId,
}) => {
  const shimRef = useRef(null);
  const navRef = useRef(null);

  const isTransitioning = useMountTransition(isOpen, 300);
  const { m } = useBreakpoints();
  const isHorizontal = position === "bottom" || position === "top";
  const isVerticalMobileDrawer = !m && !isHorizontal;

  // The depth is how far the drawer opens out, but the CSS prop depends
  // on whether the Drawer is vertical or not
  const depthStyle = isHorizontal ? { height: depth } : { width: depth };
  if (isVerticalMobileDrawer) {
    depthStyle.width = "100%";
  }

  useLockBodyScroll(isOpen);

  const handleKeyDown = ({ key }) => {
    if (key === "Escape") {
      onUserDismiss();
    }
    if (!showControls) return;
    if (isHorizontal) {
      if (key === "ArrowRight") {
        onNext && onNext();
      }
      if (key === "ArrowLeft") {
        onPrev && onPrev();
      }
    } else {
      if (key === "ArrowDown") {
        onNext && onNext();
      }
      if (key === "ArrowUp") {
        onPrev && onPrev();
      }
    }
  };

  useEffect(() => {
    if (!isOpen) return;
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown, isOpen]);

  const handleShimClick = ({ target }) => {
    if (
      (navRef.current && target === navRef.current) ||
      (shimRef.current && target === shimRef.current)
    ) {
      onUserDismiss();
    }
  };

  /* eslint-disable jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */
  const navigationContainerJSX = isVerticalMobileDrawer ? null : (
    <div
      ref={navRef}
      onClick={handleShimClick}
      style={depthStyle}
      className={`drawer padding--all--xxl drawer--${position} navigation  ${
        isOpen && isTransitioning ? `navigation--open--${position}` : ""
      }`}
      data-testid={testId}
    >
      <div className={`navigation-container--${position}`}>
        {showClose && (
          <div
            className={`navigation-button navigation-button--${position} alignChild--center--center`}
            onClick={onUserDismiss}
          >
            <span className="narmi-icon-x clickable fontSize--heading3" />
          </div>
        )}
        {showClose && showControls && (
          <div
            className={
              isHorizontal ? "margin--right--xl" : "margin--bottom--xl"
            }
          />
        )}
        {showControls && (
          <>
            <div
              className={cc([
                `navigation-button navigation-button--${position} alignChild--center--center`,
                {
                  // Navigation buttons on vertical drawers are the opposite compared to
                  // horizontal ones due to the order of navigation buttons being the opposite
                  // (rows are reversed in parent divs for horizontal drawers)
                  "navigation-button--disabled": isHorizontal
                    ? onNext == null
                    : onPrev == null,
                },
              ])}
              onClick={isHorizontal ? onNext : onPrev}
            >
              <span
                className={`narmi-icon-chevron-${
                  isHorizontal ? "right" : "up"
                } fontSize--heading3`}
              />
            </div>
            <div
              className={cc([
                `navigation-button navigation-button--${position} alignChild--center--center`,
                {
                  "navigation-button--disabled": isHorizontal
                    ? onPrev == null
                    : onNext == null,
                },
              ])}
              onClick={isHorizontal ? onPrev : onNext}
            >
              <span
                className={`narmi-icon-chevron-${
                  isHorizontal ? "left" : "down"
                } fontSize--heading3`}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );

  const childrenJSX = (
    <div
      style={depthStyle}
      className={cc([
        "drawer",
        `padding--all--${paddingSize}`,
        `drawer--${position}`,
        {
          [`drawer--open--${position}`]: isOpen && isTransitioning,
          "drawer--vertical--mobile": isVerticalMobileDrawer,
        },
      ])}
      role="dialog"
      data-testid={testId}
    >
      {isVerticalMobileDrawer && (
        <>
          {showControls && (
            <>
              <div className="mobile-navigation-button" onClick={onPrev}>
                <span className="narmi-icon-chevron-left fontSize--heading3" />
              </div>
              <div className="mobile-navigation-button" onClick={onNext}>
                <span className="narmi-icon-chevron-right fontSize--heading3" />
              </div>
            </>
          )}
          <div className="mobile-navigation-button" onClick={onUserDismiss}>
            <span className="narmi-icon-x clickable fontSize--heading3" />
          </div>
        </>
      )}
      {typeof children === "function"
        ? children({ isVisible: isTransitioning })
        : children}
    </div>
  );

  // the shim has events for mouse users only; does not require a role
  /* eslint-disable jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */
  const drawerJSX = (
    <div className="drawerContainer">
      <div
        ref={shimRef}
        className={cc([
          "backdrop",
          { "backdrop--open": isOpen && isTransitioning },
        ])}
        onClick={handleShimClick}
      />
      {navigationContainerJSX}
      {childrenJSX}
      {footer && <div className="drawer--footer">{footer}</div>}
    </div>
  );

  if (!isTransitioning && !isOpen) {
    return null;
  }
  return <>{document && ReactDOM.createPortal(drawerJSX, document.body)}</>;
};

Drawer.propTypes = {
  /** Scrollable contents of the Drawer */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  /** Controls open/close state of the modal. Use the `onUserDismiss` callback to update. */
  isOpen: PropTypes.bool,
  /**
   * Callback to handle user taking an action to dismiss the modal
   * (click outside, Escape key, click close button)
   */
  onUserDismiss: PropTypes.func,
  /**
   * Callback to handle user taking an action to go to the next element
   * (click on the next arrow, right/down arrow key)
   */
  onNext: PropTypes.func,
  /**
   * Callback to handle user taking an action to go to the previous element
   * (click on the previous arrow, left/up arrow key)
   */
  onPrev: PropTypes.func,
  /**
   * Sets how far the drawer opens out (width or height).
   * Use the full CSS value with the percentage (e.g. `"400px"` or `"70%"`)
   */
  depth: PropTypes.string,
  /**
   * Determines whether the close button shows.
   */
  showClose: PropTypes.bool,
  /**
   * Determines whether the next and prev buttons show.
   */
  showControls: PropTypes.bool,
  /**
   * Shows a sticky footer (when provided).
   */
  footer: PropTypes.node,
  /**
   * Sets the position from which the drawers open.
   * Valid values are `right`, `left`, `bottom`, `top`.
   */
  position: PropTypes.oneOf(["right", "left", "top", "bottom"]),
  /**
   * Sets the padding amount, or disable padding by passing "none"
   */
  paddingSize: PropTypes.oneOf(["none", "xs", "s", "m", "l", "xl", "xxl"]),
  /** Optional value for `data-testid` attribute */
  testId: PropTypes.string,
};

export default Drawer;
