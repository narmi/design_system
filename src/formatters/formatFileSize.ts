/**
 * Formats a byte count as a compact, human-readable file size.
 *
 * Uses binary units (1024 bytes to the kilobyte) because that is what
 * operating systems report for `File.size`, so the value here matches what a
 * user sees next to the same file in their file browser.
 *
 * Output is deliberately compact — no space before the unit, and no decimals
 * below a megabyte — so it can sit as secondary text under a filename without
 * competing with it.
 *
 * @example
 * import { formatFileSize } from '@narmi/design-system';
 *
 * formatFileSize(0);       // '0B'
 * formatFileSize(5120);    // '5KB'
 * formatFileSize(1536);    // '2KB'
 * formatFileSize(1500000); // '1.4MB'
 *
 * @param bytes size in bytes, as reported by `File.size`
 * @returns size string formatted for display
 */

const UNITS = ["B", "KB", "MB", "GB", "TB"] as const;
const STEP = 1024;

// Below a megabyte a fractional part is noise: the difference between "1.5KB"
// and "2KB" is not something a user acts on. At megabytes and above one
// decimal starts carrying real information, so it is kept.
const DECIMALS_FROM = UNITS.indexOf("MB");

const formatFileSize = (bytes: number): string => {
  if (!Number.isFinite(bytes) || bytes <= 0) return "0B";

  // Clamped so sizes beyond the largest known unit keep formatting in that
  // unit rather than running off the end of `UNITS` and returning undefined.
  const exponent = Math.min(
    Math.floor(Math.log(bytes) / Math.log(STEP)),
    UNITS.length - 1,
  );
  const value = bytes / Math.pow(STEP, exponent);
  const decimals = exponent >= DECIMALS_FROM ? 1 : 0;

  // `toFixed` then `Number` so a rounded value such as 2.0 renders as "2MB"
  // instead of "2.0MB".
  return `${Number(value.toFixed(decimals))}${UNITS[exponent]}`;
};

export default formatFileSize;
