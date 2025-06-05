import React from "react";
import cc from "classcat";

export const VALID_KINDS = [
  "info",
  "success",
  "warn",
  "error",
  "theme",
  "neutral",
] as const;

interface CountProps {
  /** Value to display in Count */
  value: number | string;
  /** Variant of Count */
  kind?: (typeof VALID_KINDS)[number];
}

/**
 * Used for display counts in navigation, tags, filters, and elsewhere.
 */
const Count = ({ value, kind = "theme" }: CountProps) => (
  <div role="status" className={cc(["nds-count", `nds-count--${kind}`])}>
    {value}
  </div>
);

export default Count;
