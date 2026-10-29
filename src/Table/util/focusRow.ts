/** Elements that take part in sequential focus navigation. */
const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

/**
 * Moves focus to the first focusable element in the same table row as `cell`
 * that is not inside a collapsed cell. Returns `true` if focus was moved.
 *
 * Used when a cell collapses while it contains focus, so keyboard users land
 * on a visible control in the same row rather than losing their place.
 */
export const focusFirstVisibleInRow = (cell: HTMLElement): boolean => {
  const row = cell.closest<HTMLElement>('[role="row"]');
  if (!row) return false;

  const candidates = Array.from(
    row.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
  );
  for (const candidate of candidates) {
    if (candidate.closest(".nds-table-cell--collapsed")) continue;
    candidate.focus();
    if (document.activeElement === candidate) return true;
  }
  return false;
};
