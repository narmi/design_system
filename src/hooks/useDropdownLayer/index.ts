import { useId, useRef, useMemo } from "react";
import useAnchorPolyfill from "./useAnchorPolyfill";
import useDropdownMaxHeight from "./useDropdownMaxHeight";

export type UseDropdownLayerResult = {
  /** Props to spread onto the anchor/trigger element */
  anchorProps: {
    ref: React.Ref<HTMLElement>;
    style: {
      anchorName?: string;
    };
    "aria-haspopup": string;
    "aria-expanded"?: boolean;
  };
  /** Props to spread onto the dropdown menu element */
  layerProps: {
    ref: React.Ref<HTMLElement>;
    style:
      | {
          positionAnchor?: string;
          positionArea?: string;
          positionTryFallbacks?: string;
        }
      | React.CSSProperties;
  };
  /** Whether the browser supports native CSS anchor positioning */
  isAnchorPositionSupported: boolean;
};

export type Placement = "bottom" | "top" | "left" | "right";
export type Alignment = "start" | "center" | "end";

export interface UseDropdownLayerOptions {
  /** Whether the dropdown is currently open (required) */
  isOpen: boolean;
  /** Function to update the dropdown open state */
  setIsOpen: (isOpen: boolean) => void;
  /** Whether the dropdown should match the width of the anchor element */
  matchWidth?: boolean;
  /** * Whether the dropdown is rendered in a Portal.
   * If true, forces 'fixed' positioning and higher z-index.
   * @default false
   */
  isPortalled?: boolean;
  /** Type of popup for aria-haspopup attribute
   * @default "menu"
   */
  ariaPopupType?: string;
  /** Preferred placement of the layer relative to the anchor.
   * @default "bottom"
   */
  placement?: Placement;
  /**
   * Alignment of the layer along the cross-axis of the placement direction.
   *
   * This option is only applied when the browser supports native CSS anchor
   * positioning. In the non-anchor-positioning polyfill path, the layer falls
   * back to start alignment.
   */
  alignment?: Alignment;
  /**
   * When true, forces the JS polyfill if the browser has the Safari
   * scroll-container bug (anchor-size/position-try-fallbacks fail inside
   * overflow:auto ancestors). Opt-in only for components that render inside
   * scroll containers (e.g. Select, Combobox inside Dialog).
   * @default false
   */
  polyfillScrollBug?: boolean;
}

/** Maps placement to CSS anchor positioning values.
 *
 * `positionTryOrder` and `primaryMaxHeight` are populated for the vertical
 * placements only. Together they let CSS handle both the flip decision and
 * the max-height clip natively in a keyboard-aware way (`dvh` shrinks with
 * the virtual keyboard on Chromium/Android). Horizontal placements
 * (left/right) don't have a keyboard concern, so they keep the original
 * fallback-order-driven behaviour.
 */
const PLACEMENT_CONFIG: Record<
  Placement,
  {
    positionArea: string;
    positionTryFallbacks: string;
    margin: string;
    positionTryOrder?: string;
    primaryMaxHeight?: string;
  }
> = {
  bottom: {
    positionArea: "bottom",
    positionTryFallbacks: "--nds-dropdown-above, flip-inline",
    positionTryOrder: "most-height",
    margin: "marginTop",
    primaryMaxHeight:
      "calc(100dvh - anchor(bottom) - var(--space-l) - var(--nds-layer-gap, var(--space-xxs)))",
  },
  top: {
    positionArea: "top",
    positionTryFallbacks: "--nds-try-below, flip-inline",
    positionTryOrder: "most-height",
    margin: "marginBottom",
    primaryMaxHeight:
      "calc(anchor(top) - var(--space-l) - var(--nds-layer-gap, var(--space-xxs)))",
  },
  left: {
    positionArea: "left",
    positionTryFallbacks: "--nds-try-right, flip-block",
    margin: "marginRight",
  },
  right: {
    positionArea: "right",
    positionTryFallbacks: "--nds-try-left, flip-block",
    margin: "marginLeft",
  },
};

/**
 * Progressive enhancement driven layout helper for dropdowns/menus.
 * Uses CSS anchor positioning if supported, otherwise falls back to
 * a JS-supported fixed positioning strategy.
 */
const useDropdownLayer = ({
  isOpen,
  // `setIsOpen` remains part of the public options for API stability but
  // is no longer read internally. `useAnchorPolyfill` previously used it
  // to close the menu on `window.resize`; that handler was removed as
  // part of NDS-3164 because it fired spuriously on Android soft-keyboard
  // open. Keyboard-aware sizing is now handled in pure CSS via `dvh`
  // + `position-try-order: most-height` on the native anchor-positioning
  // path. Blur handling in the consuming component closes the menu.
  matchWidth = true,
  isPortalled = false,
  ariaPopupType = "menu",
  placement = "bottom",
  alignment,
  polyfillScrollBug = false,
}: UseDropdownLayerOptions): UseDropdownLayerResult => {
  const anchorRef = useRef<HTMLElement>(null);
  const layerRef = useRef<HTMLElement>(null);
  const cssSafeId = useId().replaceAll(/:/g, "-");

  const anchorName = useMemo(
    () => `--nds-dropdown-anchor-${cssSafeId}`,
    [cssSafeId],
  );

  const { isAnchorPositionSupported, polyFillLayerStyles } = useAnchorPolyfill({
    anchorRef,
    layerRef,
    matchWidth,
    isOpen,
    polyfillScrollBug,
  });

  useDropdownMaxHeight({
    anchorRef,
    layerRef,
    isOpen,
    // Only run on the polyfill path. Native path uses pure CSS
    // (`calc(100dvh - anchor(bottom) - ...)`) for max-height.
    enabled: !isAnchorPositionSupported,
  });

  // Memoized props to spread onto the anchor (positioning reference) element
  const anchorProps = useMemo(
    () => ({
      ref: anchorRef,
      style: {
        anchorName: isAnchorPositionSupported ? anchorName : undefined,
      },
      "aria-haspopup": ariaPopupType,
    }),
    [anchorRef, isAnchorPositionSupported, anchorName, isOpen, ariaPopupType],
  );

  // Memoized props to spread onto the positioned layer element
  const layerProps = useMemo(() => {
    const config = PLACEMENT_CONFIG[placement];

    // do not set a cross axis unless `alignment` option is defined
    const positionArea = alignment
      ? `${config.positionArea} ${alignment}`
      : config.positionArea;
    const positionTryFallbacks = alignment
      ? placement === "left" || placement === "right"
        ? "flip-inline"
        : "flip-block"
      : config.positionTryFallbacks;

    const anchorPositionStyles = {
      position: "fixed" as const,
      positionAnchor: anchorName,
      positionArea,
      positionTryFallbacks,
      ...(config.positionTryOrder && {
        positionTryOrder: config.positionTryOrder,
      }),
      ...(config.primaryMaxHeight && { maxHeight: config.primaryMaxHeight }),
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      [config.margin]: "var(--nds-layer-gap, var(--space-xxs))",
      width: matchWidth ? "anchor-size(width)" : "min(80vw, max-content)",
      maxWidth: matchWidth ? "anchor-size(width)" : "80vw",
      minWidth: matchWidth ? "anchor-size(width)" : "auto",
      // Expose anchor name to CSS descendants (e.g. tooltip arrow)
      "--nds-anchor-name": anchorName,
    };

    const layerStyle = {
      ...(isAnchorPositionSupported
        ? anchorPositionStyles
        : polyFillLayerStyles),

      // Always include display
      display: isOpen ? "block" : "none",
    };

    return {
      ref: layerRef,
      style: layerStyle,
    };
  }, [
    isOpen,
    isAnchorPositionSupported,
    isPortalled,
    anchorName,
    matchWidth,
    placement,
    alignment,
    polyFillLayerStyles,
    layerRef,
  ]);

  return {
    anchorProps,
    layerProps,
    isAnchorPositionSupported,
  };
};

export default useDropdownLayer;
