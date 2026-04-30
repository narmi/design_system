import { useMemo } from "react";

/**
 * Hook to detect if the browser supports CSS anchored container queries.
 * This is a newer feature that allows styling descendants of an
 * anchor-positioned element based on which position-try fallback is active.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries
 */
const useSupportsAnchoredContainerQueries = (): boolean => {
  const isSupported = useMemo<boolean>(() => {
    if (typeof CSS === "undefined" || typeof CSS.supports !== "function") {
      return false;
    }
    return CSS.supports("container-type", "anchored");
  }, []);

  return isSupported;
};

export default useSupportsAnchoredContainerQueries;
