import { useLayoutEffect } from "react";
import rafSchd from "raf-schd";
import useSupportsAnchorPositioning from "../useSupportsAnchorPositioning";

interface UseAnchorPolyfillParams {
  /** Reference to the element that the dropdown should be anchored to */
  anchorRef: React.RefObject<HTMLElement>;
  /** Reference to the dropdown/popover element that will be positioned */
  layerRef: React.RefObject<HTMLElement>;
  /** Whether the dropdown should match the width of the anchor element */
  matchWidth?: boolean;
  /** Whether the dropdown is currently open */
  isOpen: boolean;
  /** Function to close the dropdown */
  setIsOpen: (isOpen: boolean) => void;
}

const MARGIN = 8;

/**
 * Polyfill for CSS anchor positioning dropdown behavior.
 *
 * Calculates and continuously updates position on scroll and viewport resize.
 * This correctly handles iOS Safari's auto-scroll-to-input behavior when the
 * keyboard opens — position is recalculated on every scroll frame and on every
 * visualViewport resize, so it converges to the correct position as Safari
 * animates the keyboard in and scrolls the page to center the input.
 *
 * Scroll does not close the dropdown. Only a window resize (orientation change)
 * closes it — blur/focus handling in the consuming component handles the rest.
 */
const useAnchorPolyfill = ({
  anchorRef,
  layerRef,
  matchWidth = false,
  isOpen,
  setIsOpen,
}: UseAnchorPolyfillParams) => {
  const isAnchorPositionSupported = useSupportsAnchorPositioning();

  useLayoutEffect(() => {
    if (isAnchorPositionSupported || !isOpen) return;

    const anchorEl = anchorRef.current;
    const layerEl = layerRef.current;
    if (!anchorEl || !layerEl) return;

    const calculate = () => {
      const anchorRect = anchorEl.getBoundingClientRect();
      if (anchorRect.width === 0) return;

      const vv = window.visualViewport;
      const viewportHeight = vv?.height ?? window.innerHeight;
      // On iOS Safari with the virtual keyboard open, visualViewport.offsetTop/Left
      // is the distance between the layout viewport and the visual viewport.
      // getBoundingClientRect() returns layout viewport coords, but position:fixed
      // is relative to the visual viewport — subtract offsets to convert.
      // For position:absolute (non-portalled), offsetParent subtraction below
      // uses two getBoundingClientRect() calls that are both layout-viewport-relative,
      // so the offsets cancel out and are not applied there.
      const offsetTop = vv?.offsetTop ?? 0;
      const offsetLeft = vv?.offsetLeft ?? 0;

      // All space calculations in visual viewport coords
      const spaceBelow = viewportHeight - (anchorRect.bottom - offsetTop);
      const spaceAbove = anchorRect.top - offsetTop;

      const shouldFlip = spaceAbove > spaceBelow;
      // Clamp to 0 in case anchor is scrolled outside the visual viewport
      const availableSpace =
        Math.max(shouldFlip ? spaceAbove : spaceBelow, 0) - MARGIN;

      // Always use visual-viewport-relative coords (position:fixed).
      // This avoids offsetParent coordinate math which is unreliable on iOS
      // Safari while the page is mid-scroll during keyboard open/auto-center.
      const left = anchorRect.left - offsetLeft;

      if (shouldFlip) {
        // Flip: pin the dropdown's bottom edge to the anchor's top edge.
        // Use `bottom` instead of `top` so the dropdown grows upward from the
        // anchor regardless of content height, without measuring layerRect.
        const bottom = viewportHeight - (anchorRect.top - offsetTop);
        layerEl.style.setProperty("--js-dropdown-bottom", `${bottom}px`);
        layerEl.style.removeProperty("--js-dropdown-top");
      } else {
        // Normal: pin the dropdown's top edge to the anchor's bottom edge.
        const top = anchorRect.bottom - offsetTop;
        layerEl.style.setProperty("--js-dropdown-top", `${top}px`);
        layerEl.style.removeProperty("--js-dropdown-bottom");
      }

      layerEl.style.setProperty("--js-dropdown-left", `${left}px`);
      layerEl.style.setProperty(
        "--js-dropdown-maxHeight",
        `${availableSpace}px`,
      );
      layerEl.style.setProperty("--js-dropdown-minWidth", `max-content`);
      if (matchWidth) {
        layerEl.style.setProperty(
          "--js-dropdown-width",
          `${anchorRect.width}px`,
        );
      }
    };

    calculate();

    // Recalculate on every scroll frame. On iOS Safari this covers both the
    // keyboard-open auto-scroll and any subsequent page scroll. rafSchd throttles
    // to one recalculation per animation frame so we don't thrash layout.
    const handleScroll = rafSchd(calculate);
    window.addEventListener("scroll", handleScroll, true);

    // Recalculate when the keyboard fully opens or closes (safe area height changes).
    window.visualViewport?.addEventListener("resize", calculate);

    // Close on window resize only (orientation change, desktop resize).
    const handleResize = () => setIsOpen(false);
    window.addEventListener("resize", handleResize);

    return () => {
      handleScroll.cancel();
      window.removeEventListener("scroll", handleScroll, true);
      window.visualViewport?.removeEventListener("resize", calculate);
      window.removeEventListener("resize", handleResize);
    };
  }, [
    isAnchorPositionSupported,
    anchorRef,
    layerRef,
    matchWidth,
    isOpen,
    setIsOpen,
  ]);

  return {
    isAnchorPositionSupported,
    polyFillLayerStyles: isAnchorPositionSupported
      ? {}
      : {
          position: "fixed" as const,
          top: "var(--js-dropdown-top, auto)",
          bottom: "var(--js-dropdown-bottom, auto)",
          left: "var(--js-dropdown-left)",
          minWidth: "var(--js-dropdown-minWidth)",
          ...(matchWidth && { width: "var(--js-dropdown-width)" }),
        },
  };
};

export default useAnchorPolyfill;
