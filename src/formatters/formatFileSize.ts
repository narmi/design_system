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

const STEP = 1024;

// Rounded to one decimal, then back through `Number` so a value such as 2.0
// renders as "2MB" rather than "2.0MB".
const round1 = (n: number): number => Number(n.toFixed(1));

const formatFileSize = (bytes: number): string => {
  if (!Number.isFinite(bytes) || bytes <= 0) return "0B";

  // Each rung rounds *before* comparing against the threshold. Rounding after
  // the unit is chosen is what produces "1024KB" for a size that should read
  // as "1MB": the value only reaches 1024 by being rounded up, at which point
  // the decision to display it in kilobytes has already been made.
  //
  // Below a megabyte a fractional part is noise — the difference between
  // "1.5KB" and "2KB" is not something a user acts on — so those rungs round
  // to whole units. At megabytes and above one decimal starts carrying real
  // information, so it is kept.
  const b = Math.round(bytes);
  if (b < STEP) return `${b}B`;

  const kb = Math.round(bytes / STEP);
  if (kb < STEP) return `${kb}KB`;

  const mb = round1(bytes / STEP ** 2);
  if (mb < STEP) return `${mb}MB`;

  // Gigabytes are the last rung, so anything larger keeps formatting here
  // rather than growing a unit list past any size a file input will see. A
  // nonsensical input is left looking nonsensical ("1073741824GB") instead of
  // being capped into something that reads as plausible.
  return `${round1(bytes / STEP ** 3)}GB`;
};

export default formatFileSize;
