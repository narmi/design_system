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

/**
 * Polyfill for CSS anchor positioning dropdown behavior.
 * Calculates position on mount, then hides dropdown on scroll/resize.
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

    const anchorRect = anchorEl.getBoundingClientRect();
    const layerRect = layerEl.getBoundingClientRect();
    if (anchorRect.width === 0 || layerRect.width === 0) return;

    // Use visualViewport API to account for virtual keyboards and safe areas
    const viewportHeight = window.visualViewport?.height || window.innerHeight;
    const viewportOffsetTop = window.visualViewport?.offsetTop || 0;

    // Calculate available space above and below anchor
    const spaceBelow = viewportHeight - (anchorRect.bottom - viewportOffsetTop);
    const spaceAbove = anchorRect.top - viewportOffsetTop;

    // Flip if there's not enough space below and more space above
    const shouldFlip = layerRect.height > spaceBelow && spaceAbove > spaceBelow;

    // Calculate positions accounting for offsetParent
    let leftPosition = anchorRect.left;
    let topPosition = shouldFlip
      ? anchorRect.top - layerRect.height
      : anchorRect.bottom;

    // Firefox has made a decision to be wrong about how fixed position is
    // calculated on elements in an offsetParent other than the viewport,
    // so we need to set the initial position of the nearest offsetParent.
    const layerOffsetParent = layerEl.offsetParent;
    if (layerOffsetParent && layerOffsetParent !== document.body) {
      const parentRect = layerOffsetParent.getBoundingClientRect();
      leftPosition = anchorRect.left - parentRect.left;
      topPosition = topPosition - parentRect.top;
    }

    // Set CSS vars
    layerEl.style.setProperty("--js-dropdown-top", `${topPosition}px`);
    layerEl.style.setProperty("--js-dropdown-left", `${leftPosition}px`);
    if (matchWidth) {
      layerEl.style.setProperty("--js-dropdown-width", `${anchorRect.width}px`);
    }

    // Close on scroll (with threshold) or resize
    const initialAnchorTop = anchorRect.top;
    const handleClose = rafSchd(() => {
      const scrollDistance = Math.abs(
        anchorEl.getBoundingClientRect().top - initialAnchorTop,
      );
      if (scrollDistance > 20) {
        setIsOpen(false);
      }
    });

    const handleResize = () => setIsOpen(false);

    window.addEventListener("scroll", handleClose, true);
    window.addEventListener("resize", handleResize);
    window.visualViewport?.addEventListener("resize", handleResize);

    return () => {
      handleClose.cancel();
      window.removeEventListener("scroll", handleClose, true);
      window.removeEventListener("resize", handleResize);
      window.visualViewport?.removeEventListener("resize", handleResize);
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
          position: "fixed",
          top: "var(--js-dropdown-top)",
          left: "var(--js-dropdown-left)",
          ...(matchWidth && { width: "var(--js-dropdown-width)" }),
        },
  };
};

export default useAnchorPolyfill;
