import { useLayoutEffect } from "react";
import useSupportsAnchorPositioning from "../useSupportsAnchorPositioning";
import { HAS_SCROLL_CONTAINER_BUG } from "../useSupportsAnchorPositioning";
import { resolveSpaceToken } from "./useDropdownMaxHeight";
import { getAvailableSpace, getVisibleBounds } from "./viewport";

interface UseAnchorPolyfillParams {
  /** Reference to the element that the dropdown should be anchored to */
  anchorRef: React.RefObject<HTMLElement>;
  /** Reference to the dropdown/popover element that will be positioned */
  layerRef: React.RefObject<HTMLElement>;
  /** Whether the dropdown should match the width of the anchor element */
  matchWidth?: boolean;
  /** Whether the dropdown is currently open */
  isOpen: boolean;
  /**
   * When true, forces the polyfill path if the browser has the Safari
   * scroll-container bug (anchor-size/position-try-fallbacks fail inside
   * overflow:auto ancestors). Defaults to false.
   */
  polyfillScrollBug?: boolean;
}

/**
 * Calculates and applies CSS custom properties for dropdown positioning.
 * Exported for unit testing.
 *
 * Available space is measured against the *visual* viewport (which the
 * soft keyboard and pinch-zoom shrink), while the emitted `top`/`bottom`
 * insets are layout-viewport values, since that is what `position: fixed`
 * resolves against. See `./viewport.ts` for the distinction. This keeps
 * the layer inside the user-visible area when the keyboard is already open
 * at the time the dropdown opens — e.g. focus moving directly from one
 * combobox to another.
 */
export const calculatePosition = (
  anchorEl: HTMLElement,
  layerEl: HTMLElement,
  matchWidth: boolean,
): void => {
  if (typeof window === "undefined") return;
  const anchorRect = anchorEl.getBoundingClientRect();
  if (anchorRect.width === 0) return;

  // read from CSS custom properties
  const anchorGap = resolveSpaceToken("--space-xxs", 4);
  const edgeClearance = resolveSpaceToken("--space-l", 20);

  const { layoutHeight } = getVisibleBounds();

  // Reset to a known baseline before measuring layer position.
  layerEl.style.setProperty("--js-dropdown-top", "0px");
  layerEl.style.removeProperty("--js-dropdown-bottom");
  layerEl.style.setProperty("--js-dropdown-left", "0px");

  const layerRect = layerEl.getBoundingClientRect();
  const { spaceAbove, spaceBelow } = getAvailableSpace(
    anchorRect,
    anchorGap,
    edgeClearance,
  );
  const shouldFlip = spaceAbove > spaceBelow;

  if (shouldFlip) {
    // `bottom` on a fixed-position element is measured from the bottom of
    // the layout viewport — NOT the visual viewport. Using the (possibly
    // keyboard-shrunken) visual viewport height here pushed the layer
    // below the screen by the keyboard-height delta.
    layerEl.style.setProperty(
      "--js-dropdown-bottom",
      `${layoutHeight - anchorRect.top + anchorGap}px`,
    );
    layerEl.style.removeProperty("--js-dropdown-top");
  } else {
    layerEl.style.setProperty(
      "--js-dropdown-top",
      `${anchorRect.bottom - layerRect.top + anchorGap}px`,
    );
    layerEl.style.removeProperty("--js-dropdown-bottom");
  }

  layerEl.style.setProperty(
    "--js-dropdown-left",
    `${anchorRect.left - layerRect.left}px`,
  );

  if (matchWidth) {
    layerEl.style.setProperty("--js-dropdown-width", `${anchorRect.width}px`);
  }
};

/**
 * Computes an IntersectionObserver rootMargin flush with the element's bounding
 * rect.
 *
 * Must use *layout*-viewport dimensions: with a null root, the IO root is the
 * layout viewport, and `getBoundingClientRect()` is layout-viewport based too.
 * Using the visual viewport here meant that with the soft keyboard open, an
 * anchor sitting below `visualViewport.height` in layout coordinates could
 * never reach full intersection, leaving the layer stuck `visibility: hidden`
 * or flickering through hide/re-arm cycles.
 */
export const computeRootMargin = (rect: DOMRect): string => {
  const vw =
    (typeof window !== "undefined" &&
      ((typeof document !== "undefined" &&
        document.documentElement?.clientWidth) ||
        window.innerWidth)) ||
    0;
  const vh =
    (typeof window !== "undefined" &&
      ((typeof document !== "undefined" &&
        document.documentElement?.clientHeight) ||
        window.innerHeight)) ||
    0;
  const top = Math.floor(rect.top);
  const left = Math.floor(rect.left);
  const right = Math.floor(vw - rect.right);
  const bottom = Math.floor(vh - rect.bottom);
  return `${-top}px ${-right}px ${-bottom}px ${-left}px`;
};

/**
 * Polyfill for CSS anchor positioning: `position-area: bottom` with
 * `positionTryFallbacks: "--nds-dropdown-above, flip-inline"`.
 */
const useAnchorPolyfill = ({
  anchorRef,
  layerRef,
  matchWidth = false,
  isOpen,
  polyfillScrollBug = false,
}: UseAnchorPolyfillParams) => {
  const isAnchorPositionSupported = useSupportsAnchorPositioning();

  // When polyfillScrollBug is opted-in AND the browser has the bug,
  // force the polyfill path even though CSS.supports reports support.
  const effectiveSupport =
    polyfillScrollBug && HAS_SCROLL_CONTAINER_BUG
      ? false
      : isAnchorPositionSupported;

  useLayoutEffect(() => {
    if (effectiveSupport || !isOpen) return;

    let disposed = false;
    let currentObserver: IntersectionObserver | undefined;
    const anchorEl = anchorRef.current;
    const layerEl = layerRef.current;
    if (!anchorEl || !layerEl) return;

    const calculateArgs = [anchorEl, layerEl, matchWidth] as const;

    const armObserver = () => {
      if (disposed) return;
      currentObserver?.disconnect();

      const currentRect = anchorEl.getBoundingClientRect();
      if (currentRect.width === 0 || currentRect.height === 0) return;

      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.intersectionRatio < 1) {
            // Anchor has moved. Hide and schedule a re-arm.
            layerEl.style.visibility = "hidden";
            io.disconnect();
            requestAnimationFrame(() => {
              if (disposed) return;
              armObserver();
            });
          } else {
            // Anchor is stable at this position. Calculate and reveal.
            calculatePosition(...calculateArgs);
            layerEl.style.visibility = "";
          }
        },
        {
          threshold: 1,
          rootMargin: computeRootMargin(currentRect),
        },
      );

      io.observe(anchorEl);
      currentObserver = io;
    };

    // Initial calculate + arm
    calculatePosition(...calculateArgs);
    layerEl.style.visibility = "";
    armObserver();

    // Reposition when the visual viewport resizes — on mobile this fires
    // when the soft keyboard opens/closes (or on pinch-zoom). The keyboard
    // often finishes opening *after* the initial calculate (the tap that
    // opens the dropdown is the same tap that summons the keyboard), so
    // without this the layer keeps a placement chosen for the pre-keyboard
    // viewport. Unlike the `window.resize` close handler removed in
    // NDS-3164, this only recalculates — a spurious fire is harmless.
    // rAF-throttled: some devices emit a burst of resize events while the
    // keyboard animates.
    let rafId = 0;
    const handleViewportResize = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (disposed) return;
        calculatePosition(...calculateArgs);
        layerEl.style.visibility = "";
        armObserver();
      });
    };
    const vv = window.visualViewport;
    vv?.addEventListener?.("resize", handleViewportResize);

    return () => {
      disposed = true;
      cancelAnimationFrame(rafId);
      vv?.removeEventListener?.("resize", handleViewportResize);
      currentObserver?.disconnect();
    };
  }, [effectiveSupport, anchorRef, layerRef, matchWidth, isOpen]);

  return {
    isAnchorPositionSupported: effectiveSupport,
    polyFillLayerStyles: effectiveSupport
      ? {}
      : {
          position: "fixed" as const,
          top: "var(--js-dropdown-top, auto)",
          bottom: "var(--js-dropdown-bottom, auto)",
          left: "var(--js-dropdown-left)",
          ...(matchWidth
            ? {
                width: "var(--js-dropdown-width)",
                minWidth: "var(--js-dropdown-width)",
                maxWidth: "var(--js-dropdown-width)",
              }
            : {
                minWidth: "max-content",
              }),
        },
  };
};

export default useAnchorPolyfill;
