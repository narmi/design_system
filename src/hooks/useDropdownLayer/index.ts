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
  isPortalled = false, // Default to false
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
    isPortalled,
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
    const layerStyle = {
      ...(isAnchorPositionSupported
        ? {
            position: isPortalled ? ("fixed" as const) : ("absolute" as const),
            positionAnchor: anchorName,
            top: "anchor(bottom)",
            left: "anchor(start)",
            positionTryFallbacks: "flip-block",
            width: "max-content",
            minWidth: matchWidth ? "anchor-size(width)" : undefined,
          }
        : polyFillLayerStyles),

      // Always include visibility and z-index rules.
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
    anchorName,
    matchWidth,
    polyFillLayerStyles,
    layerRef,
    isPortalled,
  ]);

  return {
    anchorProps,
    layerProps,
  };
};

export default useDropdownLayer;
