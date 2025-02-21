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
  children,
  position = "right",
  depth = "70%",
  paddingSize = "xxl",
  footer,
  testId,
}) => {
  const panelId = `content-panel-${Date.now()}`;
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
          <button
            className={`button--reset navigation-button navigation-button--${position} alignChild--center--center`}
            onClick={onUserDismiss}
            aria-label="Close"
          >
            <span className="narmi-icon-x clickable fontSize--heading3" />
          </button>
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
            <button
              className={cc([
                `button--reset navigation-button navigation-button--${position} alignChild--center--center`,
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
              aria-controls={panelId}
              aria-label={isHorizontal ? "Next" : "Previous"}
            >
              <span
                className={`narmi-icon-chevron-${
                  isHorizontal ? "right" : "up"
                } fontSize--heading3`}
              />
            </button>
            <button
              className={cc([
                `button--reset navigation-button navigation-button--${position} alignChild--center--center`,
                {
                  "navigation-button--disabled": isHorizontal
                    ? onPrev == null
                    : onNext == null,
                },
              ])}
              onClick={isHorizontal ? onPrev : onNext}
              aria-controls={panelId}
              aria-label={isHorizontal ? "Previous" : "Next"}
            >
              <span
                className={`narmi-icon-chevron-${
                  isHorizontal ? "left" : "down"
                } fontSize--heading3`}
              />
            </button>
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
        `drawer--${position}`,
        {
          [`drawer--open--${position}`]: isOpen && isTransitioning,
          "drawer--vertical--mobile": isVerticalMobileDrawer,
        },
      ])}
      role="dialog"
      data-testid={testId}
    >
      <div className={cc(["drawer-content", `padding--all--${paddingSize}`])}>
        {isVerticalMobileDrawer && (
          <>
            {showControls && (
              <>
                <button
                  className="button--reset mobile-navigation-button"
                  onClick={onPrev}
                  aria-controls={panelId}
                  aria-label="Previous"
                >
                  <span className="narmi-icon-chevron-left fontSize--heading3" />
                </button>
                <button
                  className="button--reset mobile-navigation-button"
                  onClick={onNext}
                  aria-controls={panelId}
                  aria-label="Next"
                >
                  <span className="narmi-icon-chevron-right fontSize--heading3" />
                </button>
              </>
            )}
            <button
              className="button--reset mobile-navigation-button"
              onClick={onUserDismiss}
            >
              <span className="narmi-icon-x clickable fontSize--heading3" />
            </button>
          </>
        )}
        {typeof children === "function"
          ? children({ isVisible: isTransitioning })
          : children}
      </div>
      {footer && (
        <div
          className={cc([
            "drawer-footer",
            "border--top",
            `padding--x--${paddingSize}`,
            "padding--y--s",
          ])}
        >
          {footer}
        </div>
      )}
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
      {!showControls ? (
        childrenJSX
      ) : (
        <div aria-live="polite" role="region" id={panelId}>
          {childrenJSX}
        </div>
      )}
    </div>
  );

  function renderDrawerInOutlet() {
    // create a single outlet
    if (!document.getElementById("outlet")) {
      const outlet = document.createElement("div");
      outlet.setAttribute("id", "outlet");
      outlet.setAttribute("class", "outlet");
      document.body.appendChild(outlet);
    }
    return ReactDOM.createPortal(drawerJSX, document.getElementById("outlet"));
  }

  if (!isTransitioning && !isOpen) {
    return null;
  }

  return <>{document && renderDrawerInOutlet()}</>;
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
   * Sets the position from which the drawers open.
   * Valid values are `right`, `left`, `bottom`, `top`.
   */
  position: PropTypes.oneOf(["right", "left", "top", "bottom"]),
  /**
   * Sets the padding amount, or disable padding by passing "none"
   */
  paddingSize: PropTypes.oneOf(["none", "xs", "s", "m", "l", "xl", "xxl"]),
  /** Contents of Drawer footer, typically reserved for action buttons */
  footer: PropTypes.node,
  /** Optional value for `data-testid` attribute */
  testId: PropTypes.string,
};

export default Drawer;
