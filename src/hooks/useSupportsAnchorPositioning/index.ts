import { useMemo } from "react";

/**
 * Hook to detect if the browser supports CSS anchor positioning.
 * Uses CSS.supports() to check for anchor positioning properties.
 */
const useSupportsAnchorPositioning = (): boolean => {
  const isSupported = useMemo<boolean>(() => {
    // Check if CSS.supports is available (for older browsers)
    if (typeof CSS === "undefined" || typeof CSS.supports !== "function") {
      return false;
    }

    // Check for key anchor positioning properties
    // Using multiple checks to ensure comprehensive support
    const checks: boolean[] = [
      CSS.supports("anchor-name", "--my-anchor"),
      CSS.supports("position-anchor", "--my-anchor"),
      CSS.supports("position-area", "bottom center"),
      CSS.supports("position-try-fallbacks", "flip-block"),
    ];

    return checks.every(Boolean);
  }, []);

  return isSupported;
};

export default useSupportsAnchorPositioning;
