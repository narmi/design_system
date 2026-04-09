import { useId, useRef, useMemo } from "react";
import useAnchorPolyfill from "./useAnchorPolyfill";

export type UseDropdownLayerResult = {
  /** Props to spread onto the anchor/trigger element */
  anchorProps: {
    ref: React.Ref<HTMLElement>;
    style: {
      anchorName?: string;
    };
    "aria-haspopup": string;
    "aria-expanded": string;
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
};

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
}

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

  // Memoized props to spread onto the anchor (positioning reference) element
  const anchorProps = useMemo(
    () => ({
      ref: anchorRef,
      style: {
        anchorName: isAnchorPositionSupported ? anchorName : undefined,
      },
      "aria-haspopup": ariaPopupType,
      "aria-expanded": isOpen.toString(),
    }),
    [anchorRef, isAnchorPositionSupported, anchorName, isOpen, ariaPopupType],
  );

  // Memoized props to spread onto the positioned layer element
  const layerProps = useMemo(() => {
    // We used fixed position 100% of the time anchor positioning is supported.
    // Width and positioning strategy differs based on the `matchWidth` and `isPortalled` options
    const anchorPositionStyles = {
      position: "fixed" as const,
      positionAnchor: anchorName,
      // --nds-dropdown-above is a named @position-try rule defined in scss-utils.scss.
      // It overrides position-area and --nds-layer-max-height for the above-anchor fallback.
      // flip-inline remains as a final fallback for horizontal overflow.
      positionTryFallbacks: "--nds-dropdown-above, flip-inline",
      width: matchWidth ? "anchor-size(width)" : "max-content",
      maxWidth: matchWidth ? "anchor-size(width)" : "80svh",
      minWidth: matchWidth ? "anchor-size(width)" : "auto",
      positionArea: "bottom",
      // Safe-area-aware max-height for the default below-anchor position.
      // anchor(top) = distance from viewport top to anchor's top edge (space consumed above).
      // 100svh = small viewport height, which shrinks when the virtual keyboard opens on iOS.
      // --nds-layer-max-height is inherited by child elements so they can consume it via min().
      "--nds-layer-max-height":
        "calc(100svh - anchor(bottom) - env(safe-area-inset-bottom, 0px) - 8px)",
      maxHeight: "var(--nds-layer-max-height)",
    };

    const layerStyle = {
      ...(isAnchorPositionSupported
        ? anchorPositionStyles
        : polyFillLayerStyles),

      // Always include display and z-index.
      // In the polyfill path the layer is always position:fixed with a higher
      // z-index. In the native path, fixed positioning is also used (required
      // for position-try-fallbacks to work against the viewport), so a lower
      // z-index is sufficient.
      display: isOpen ? "block" : "none",
      zIndex: isAnchorPositionSupported ? 4 : 9,
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
    polyFillLayerStyles,
    layerRef,
  ]);

  return {
    anchorProps,
    layerProps,
  };
};

export default useDropdownLayer;
