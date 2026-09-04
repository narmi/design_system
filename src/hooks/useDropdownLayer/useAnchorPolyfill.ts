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
}

/**
 * Resolves a CSS custom property (e.g. `--space-xs`) to a pixel number.
 * Falls back to `fallback` if the property is not set or cannot be parsed.
 */
const resolveSpaceToken = (property: string, fallback: number): number => {
  if (typeof document === "undefined") return fallback;
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue(property)
    .trim();
  const parsed = parseFloat(raw);
  return isNaN(parsed) ? fallback : parsed;
};

/**
 * Calculates and applies CSS custom properties for dropdown positioning.
 * Exported for unit testing.
 *
 * All measurements are in layout-viewport coordinates (`window.innerHeight`
 * compared against `getBoundingClientRect()`). This avoids the visual-vs-
 * layout viewport mixup that caused off-screen placement on Android when
 * the soft keyboard was open at the time `calculatePosition` ran.
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

  // Reset to a known baseline before measuring layer position.
  layerEl.style.setProperty("--js-dropdown-top", "0px");
  layerEl.style.removeProperty("--js-dropdown-bottom");
  layerEl.style.setProperty("--js-dropdown-left", "0px");

  const layerRect = layerEl.getBoundingClientRect();
  const spaceBelow =
    window.innerHeight - anchorRect.bottom - anchorGap - edgeClearance;
  const spaceAbove = anchorRect.top - anchorGap - edgeClearance;
  const shouldFlip = spaceAbove > spaceBelow;

  if (shouldFlip) {
    layerEl.style.setProperty(
      "--js-dropdown-bottom",
      `${window.innerHeight - anchorRect.top + anchorGap}px`,
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
 * rect. Uses visualViewport dimensions to account for virtual keyboard adjustments.
 */
export const computeRootMargin = (rect: DOMRect): string => {
  // Use visual viewport dimensions — getBoundingClientRect() returns coords
  // relative to the visual viewport, so the IO root margin must match.
  const vw =
    (typeof window !== "undefined" &&
      (window.visualViewport?.width ?? window.innerWidth)) ||
    0;
  const vh =
    (typeof window !== "undefined" &&
      (window.visualViewport?.height ?? window.innerHeight)) ||
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
}: UseAnchorPolyfillParams) => {
  const isAnchorPositionSupported = useSupportsAnchorPositioning();

  useLayoutEffect(() => {
    if (isAnchorPositionSupported || !isOpen) return;

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

    return () => {
      disposed = true;
      currentObserver?.disconnect();
    };
  }, [isAnchorPositionSupported, anchorRef, layerRef, matchWidth, isOpen]);

  return {
    isAnchorPositionSupported,
    polyFillLayerStyles: isAnchorPositionSupported
      ? {}
      : {
          zIndex: "1",
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
