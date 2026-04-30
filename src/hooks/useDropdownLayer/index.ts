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
}

/** Maps placement to CSS anchor positioning values */
const PLACEMENT_CONFIG: Record<
  Placement,
  { positionArea: string; positionTryFallbacks: string; margin: string }
> = {
  bottom: {
    positionArea: "bottom",
    positionTryFallbacks: "--nds-dropdown-above, flip-inline",
    margin: "marginTop",
  },
  top: {
    positionArea: "top",
    positionTryFallbacks: "--nds-try-below, flip-inline",
    margin: "marginBottom",
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
  setIsOpen,
  matchWidth = true,
  isPortalled = false,
  ariaPopupType = "menu",
  placement = "bottom",
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
    setIsOpen,
  });

  useDropdownMaxHeight({ anchorRef, layerRef, isOpen });

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
    // The anchor uses position fixed regardless of code path.
    const anchorPositionStyles = {
      position: "fixed" as const,
      positionAnchor: anchorName,
      positionArea: config.positionArea,
      positionTryFallbacks: config.positionTryFallbacks,
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

      // Always include display and z-index.
      display: isOpen ? "block" : "none",
      zIndex: isPortalled ? 9 : 4,
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
