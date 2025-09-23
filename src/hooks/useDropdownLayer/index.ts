import { useId, useRef, useMemo } from "react";
import useAnchorPolyfill from "./useAnchorPolyfill";

export type UseDropdownLayerResult = {
  /** Props to spread onto the anchor/trigger element */
  anchorProps: {
    ref: React.Ref<HTMLElement>;
    style: {
      anchorName?: string;
    };
  };
  /** Props to spread onto the dropdown menu element */
  layerProps: {
    ref: React.Ref<HTMLElement>;
    style: // union of new CSS properties and React CSSProperties
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
  /** Whether the dropdown should match the width of the anchor element */
  matchWidth?: boolean;
}

/**
 * Progressive enhancement driven layout helper for dropdowns/menus.
 * Uses CSS anchor positioning if supported, otherwise falls back to
 * a JS-supported fixed positioning strategy.
 *
 * @usage
 * ```tsx
 * const { anchorProps, layerProps } = useDropdownLayer({ isOpen, matchWidth });
 *
 * return (
 *   <>
 *     <input {...anchorProps}>Open Menu</input>
 *     <div {...layerProps}>...</div>
 *   <>
 * ```
 */
const useDropdownLayer = ({
  isOpen,
  matchWidth = true,
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
  });

  // Memoized props to spread onto the anchor (positioning reference) element
  const anchorProps = useMemo(
    () => ({
      ref: anchorRef,
      style: {
        anchorName: isAnchorPositionSupported ? anchorName : undefined,
      },
    }),
    [anchorRef, isAnchorPositionSupported, anchorName],
  );

  // Memoized props to spread onto the positioned layer element
  const layerProps = useMemo(() => {
    const layerStyle = {
      ...(isAnchorPositionSupported
        ? {
            position: "absolute" as const,
            positionAnchor: anchorName,
            positionArea: "bottom center",
            positionTryFallbacks: "flip-block",
            width: matchWidth ? "anchor-size(width)" : "max-content",
          }
        : polyFillLayerStyles),

      // Always include visibility rule.
      display: isOpen ? "block" : "none",
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
  ]);

  return {
    anchorProps,
    layerProps,
  };
};

export default useDropdownLayer;
