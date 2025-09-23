import { useCallback, useLayoutEffect, useRef } from "react";
import useSupportsAnchorPositioning from "../useSupportsAnchorPositioning";
import { is } from "core-js/core/object";

interface UseAnchorPolyfillParams {
  /** Reference to the element that the dropdown should be anchored to */
  anchorRef: React.RefObject<HTMLElement>;
  /** Reference to the dropdown/popover element that will be positioned */
  layerRef: React.RefObject<HTMLElement>;
  /** Whether the dropdown should match the width of the anchor element */
  matchWidth?: boolean;
  /** Whether the dropdown is currently open */
  isOpen: boolean;
}

/**
 * Polyfill for CSS anchor positioning dropdown behavior, using JS to assign CSS variable values.
 * If anchor positioning is supported, empty style objects are returned, as we don't need the fallbacks.
 */
const useAnchorPolyfill = ({
  anchorRef,
  layerRef,
  matchWidth = false,
  isOpen,
}: UseAnchorPolyfillParams) => {
  const isAnchorPositionSupported = useSupportsAnchorPositioning();

  const rafRef = useRef<number>(); // track scheduled RequestAnimationFrame across renders

  const calculateFixedPosition = useCallback(() => {
    if (!isOpen) return;
    const anchorEl = anchorRef.current;
    const layerEl = layerRef.current;

    if (!anchorEl || !layerEl) return;

    const anchorRect = anchorEl.getBoundingClientRect();
    const layerRect = layerEl.getBoundingClientRect();

    // Skip positioning if elements haven't been measured yet
    if (anchorRect.width === 0 || layerRect.width === 0) return;

    // Using the visualViewport API is the native solution to handle the
    // scroll-to-focus behavior on iOS Safari, as it tracks only the portion
    // of the viewport that is not covered by the keyboard.
    const viewportHeight = window.visualViewport?.height || window.innerHeight;
    const spaceBelow = viewportHeight - anchorRect.bottom;
    const spaceAbove = anchorRect.top;
    const shouldFlip = layerRect.height > spaceBelow && spaceAbove > spaceBelow;
    const visualViewportOffset = window.visualViewport?.offsetTop || 0;

    // Get position in `px` for CSS `top` value based on shouldFlip result
    const topPosition = shouldFlip
      ? anchorRect.top - layerRect.height + visualViewportOffset
      : anchorRect.bottom + visualViewportOffset;

    // Store results as CSS variables scoped to layerEl for positioning on the dropdown element
    layerEl.style.setProperty("--js-dropdown-top", `${topPosition}px`);
    layerEl.style.setProperty("--js-dropdown-left", `${anchorRect.left}px`);
    if (matchWidth) {
      layerEl.style.setProperty("--js-dropdown-width", `${anchorRect.width}px`);
    }
  }, [anchorRef, layerRef, matchWidth, isOpen]);

  const scheduleUpdate = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    rafRef.current = requestAnimationFrame(calculateFixedPosition);
  }, [calculateFixedPosition]);

  // Use fixed positioning with Visual Viewport API, which covers iOS/Safari scrolling
  // The `visualViewport` api is available in all supported browsers as of 2025
  useLayoutEffect(() => {
    if (isAnchorPositionSupported) return;
    calculateFixedPosition();
    window.visualViewport?.addEventListener("scroll", scheduleUpdate);
    window.visualViewport?.addEventListener("resize", scheduleUpdate);

    return () => {
      window.visualViewport?.removeEventListener("scroll", scheduleUpdate);
      window.visualViewport?.removeEventListener("resize", scheduleUpdate);

      if (rafRef.current) {
        // cancel next scheduled update
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isAnchorPositionSupported, calculateFixedPosition, scheduleUpdate]);

  // Recalculate position when dropdown opens
  useLayoutEffect(() => {
    if (isAnchorPositionSupported || !isOpen) return;
    scheduleUpdate();
  }, [isOpen, isAnchorPositionSupported, scheduleUpdate]);

  return {
    isAnchorPositionSupported,
    polyFillLayerStyles: isAnchorPositionSupported
      ? {}
      : {
          position: "fixed",
          top: "var(--js-dropdown-top)",
          left: "var(--js-dropdown-left)",
          ...(matchWidth && { width: "var(--js-dropdown-width)" }),
        },
  };
};

export default useAnchorPolyfill;
