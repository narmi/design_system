import { useLayoutEffect } from "react";
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
 * Computes the IntersectionObserver rootMargin string that creates a detection
 * box exactly flush with the element's current bounding rect. When the element
 * moves by even 1px, intersectionRatio drops below 1 and the callback fires.
 *
 * rootMargin format: "top right bottom left" as negative insets from viewport edges.
 * Uses document.documentElement dimensions as the viewport reference to stay in
 * layout-viewport coordinate space (stable during iOS keyboard animation).
 */
const computeTightRootMargin = (rect: DOMRect): string => {
  // Use visual viewport dimensions — getBoundingClientRect() returns coords
  // relative to the visual viewport, so the IO root margin must match.
  const vw = window.visualViewport?.width ?? window.innerWidth;
  const vh = window.visualViewport?.height ?? window.innerHeight;
  const top = Math.floor(rect.top);
  const left = Math.floor(rect.left);
  const right = Math.floor(vw - rect.right);
  const bottom = Math.floor(vh - rect.bottom);
  return `${-top}px ${-right}px ${-bottom}px ${-left}px`;
};

/**
 * Polyfill for CSS anchor positioning: `position-area: bottom` with
 * `position-try-fallbacks: flip-block`.
 *
 * ## Coordinate space
 * All measurements use `window.visualViewport` dimensions as the viewport.
 * `getBoundingClientRect()` returns coords relative to the visual viewport,
 * and `position: fixed` is also relative to the visual viewport, so these
 * are consistent. Unlike `document.documentElement.getBoundingClientRect()`,
 * `visualViewport.height` is always the visible screen height — correct on
 * a scrolled page and after the iOS keyboard opens/closes.
 *
 * ## Measurement accuracy (nanopop technique)
 * Before measuring, the layer's CSS custom properties are reset to `top:0`
 * so the layer's own current position does not pollute its
 * `getBoundingClientRect()`. The layer's offset from that reset baseline is
 * subtracted from the computed top/left values.
 *
 * ## Change detection (Floating UI `observeMove` technique)
 * An `IntersectionObserver` with `threshold:1` and a tight `rootMargin`
 * exactly flush with the anchor's bounding rect detects any movement of the
 * anchor element. When the anchor moves (intersectionRatio < 1), the layer
 * is hidden and the observer re-arms on the next animation frame. Once the
 * anchor settles (ratio === 1 on re-arm), `calculate()` runs and the layer
 * is shown. This replaces a debounce-on-visualViewport-events approach that
 * was racy during Safari's async scroll-input-into-view on focus.
 *
 * ## Keyboard / resize handling
 * - `visualViewport.resize`: keyboard open/close — recalculate + re-arm.
 * - `window.resize`: orientation change or desktop resize — close the dropdown.
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

    // ------------------------------------------------------------------
    // calculate(): measure and apply CSS custom properties for positioning.
    //
    // Mirrors position-area:bottom / flip-block behavior using visual viewport
    // coordinates. Resets layer to a known baseline before measuring so the
    // layer's own current position doesn't skew its getBoundingClientRect().
    // ------------------------------------------------------------------
    const calculate = () => {
      const anchorRect = anchorEl.getBoundingClientRect();
      if (anchorRect.width === 0) return;

      // Visual viewport dimensions — the coordinate space for position:fixed.
      // Unlike document.documentElement.getBoundingClientRect(), these values
      // are always {top:0, bottom:vvHeight} relative to the visible screen,
      // stable on a scrolled page and correct after the keyboard opens/closes.
      const vvHeight = window.visualViewport?.height ?? window.innerHeight;

      // Reset layer to a known baseline before measuring (nanopop technique).
      // Prevents the layer's current position from skewing its own getBCR().
      layerEl.style.setProperty("--js-dropdown-top", "0px");
      layerEl.style.removeProperty("--js-dropdown-bottom");
      layerEl.style.setProperty("--js-dropdown-left", "0px");

      const layerRect = layerEl.getBoundingClientRect();

      // Space available on each side in visual-viewport coords.
      // Subtract MARGIN to reserve room for the CSS margin-top/bottom gap.
      const spaceBelow = vvHeight - anchorRect.bottom - MARGIN;
      const spaceAbove = anchorRect.top - MARGIN;

      const shouldFlip = spaceAbove > spaceBelow;
      const availableSpace = Math.max(shouldFlip ? spaceAbove : spaceBelow, 0);

      if (shouldFlip) {
        // Polyfill for position-area:top (flip-block fallback):
        // Pin layer's bottom edge flush with the anchor's top edge.
        // CSS `bottom` on position:fixed = distance from the viewport's bottom edge.
        const bottom = vvHeight - anchorRect.top;
        layerEl.style.setProperty("--js-dropdown-bottom", `${bottom}px`);
        layerEl.style.removeProperty("--js-dropdown-top");
      } else {
        // Polyfill for position-area:bottom (default):
        // Pin layer's top edge flush with the anchor's bottom edge.
        // Subtract layerRect.top to correct for any offset at the reset baseline.
        const top = anchorRect.bottom - layerRect.top;
        layerEl.style.setProperty("--js-dropdown-top", `${top}px`);
        layerEl.style.removeProperty("--js-dropdown-bottom");
      }

      // Align layer's left edge with anchor's left edge.
      const left = anchorRect.left - layerRect.left;
      layerEl.style.setProperty("--js-dropdown-left", `${left}px`);

      layerEl.style.setProperty(
        "--js-dropdown-maxHeight",
        `${availableSpace}px`,
      );
      // --nds-layer-max-height is the shared interface consumed by child elements
      // via min() in their max-height. Safe-area-inset-bottom is NOT subtracted
      // here (JS cannot read env() values); it is subtracted at each CSS consumption
      // point instead.
      layerEl.style.setProperty(
        "--nds-layer-max-height",
        `${availableSpace}px`,
      );

      if (matchWidth) {
        layerEl.style.setProperty(
          "--js-dropdown-width",
          `${anchorRect.width}px`,
        );
      }
    };

    // ------------------------------------------------------------------
    // observeMove: IntersectionObserver-based anchor movement detection.
    //
    // Sets a tight rootMargin exactly flush with the anchor's current rect
    // (threshold: 1). Any movement drops intersectionRatio below 1, firing
    // the callback. The observer disconnects and re-arms itself on the next
    // animation frame so it tracks the element continuously.
    //
    // On anchor movement: hide layer immediately.
    // On anchor settle (re-arm fires with ratio === 1): recalculate + show.
    // ------------------------------------------------------------------
    let observerCleanup: (() => void) | undefined;

    const armObserver = () => {
      observerCleanup?.();

      const currentRect = anchorEl.getBoundingClientRect();
      // If the element is zero-sized or fully off-screen, skip arming.
      if (currentRect.width === 0 || currentRect.height === 0) return;

      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.intersectionRatio < 1) {
            // Anchor has moved. Hide and schedule a re-arm.
            layerEl.style.visibility = "hidden";
            io.disconnect();
            // Wait one frame for the browser to finish the scroll/layout,
            // then re-arm. The re-arm's first callback (ratio === 1) triggers
            // recalculate + show.
            requestAnimationFrame(() => {
              armObserver();
            });
          } else {
            // Anchor is stable at this position. Calculate and reveal.
            calculate();
            layerEl.style.visibility = "";
          }
        },
        {
          threshold: 1,
          rootMargin: computeTightRootMargin(currentRect),
        },
      );

      io.observe(anchorEl);
      observerCleanup = () => io.disconnect();
    };

    // Initial calculate + arm
    calculate();
    layerEl.style.visibility = "";
    armObserver();

    // ------------------------------------------------------------------
    // visualViewport.resize: virtual keyboard opened or closed.
    // Available vertical space changed, so recalculate and re-arm.
    // ------------------------------------------------------------------
    const handleViewportResize = () => {
      layerEl.style.visibility = "hidden";
      // Allow the keyboard animation to settle before recalculating.
      // We re-arm the IO after recalculating so the new rect is used.
      requestAnimationFrame(() => {
        calculate();
        layerEl.style.visibility = "";
        armObserver();
      });
    };

    window.visualViewport?.addEventListener("resize", handleViewportResize);

    // window.resize: orientation change or desktop resize — close.
    const handleWindowResize = () => setIsOpen(false);
    window.addEventListener("resize", handleWindowResize);

    return () => {
      observerCleanup?.();
      window.visualViewport?.removeEventListener(
        "resize",
        handleViewportResize,
      );
      window.removeEventListener("resize", handleWindowResize);
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
          minWidth: "max-content",
          ...(matchWidth && { width: "var(--js-dropdown-width)" }),
        },
  };
};

export default useAnchorPolyfill;
