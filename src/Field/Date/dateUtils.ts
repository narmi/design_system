import { format, isValid, parse } from "date-fns";

/** The wire format used by `Field.Date`: `YYYY-MM-DD` */
export const ISO_DATE_FORMAT = "yyyy-MM-dd";

/** The format typed into (and shown by) the masked input */
export const DISPLAY_DATE_FORMAT = "MM/dd/yyyy";

/**
 * Builds a local-midnight `Date` from a `YYYY-MM-DD` string.
 * Returns `undefined` for anything that isn't a real calendar date.
 *
 * Never use `new Date("YYYY-MM-DD")` for this: the spec parses a
 * date-only string as UTC, which shifts it a day in western timezones.
 */
export const toDate = (iso: string | undefined | null): Date | undefined => {
  if (!iso || !/^\d{4}-\d{2}-\d{2}$/.test(iso)) return undefined;
  const date = parse(iso, ISO_DATE_FORMAT, new Date());
  return isValid(date) ? date : undefined;
};

/** Formats a `Date` as `YYYY-MM-DD` using its local calendar fields */
export const toIso = (date: Date): string => format(date, ISO_DATE_FORMAT);

/** Formats a `YYYY-MM-DD` string for display in the masked input (`MM/DD/YYYY`) */
export const toDisplay = (iso: string): string => {
  const date = toDate(iso);
  return date ? format(date, DISPLAY_DATE_FORMAT) : "";
};

/**
 * Parses masked input text (`MM/DD/YYYY`) to a `YYYY-MM-DD` string.
 * Returns `undefined` while the text is incomplete or names a date that
 * doesn't exist (e.g. `02/30/2026`).
 */
export const parseDisplay = (text: string): string | undefined => {
  if (!/^\d{2}\/\d{2}\/\d{4}$/.test(text)) return undefined;
  const date = parse(text, DISPLAY_DATE_FORMAT, new Date());
  return isValid(date) ? toIso(date) : undefined;
};

export interface DateConstraints {
  /** Earliest selectable date (`YYYY-MM-DD`, inclusive) */
  minDate?: string;
  /** Latest selectable date (`YYYY-MM-DD`, inclusive) */
  maxDate?: string;
  /** Returns true for dates that can't be selected */
  isDateUnavailable?: (iso: string) => boolean;
}

/**
 * Whether a `YYYY-MM-DD` string is a real date that satisfies the
 * constraints. ISO date strings sort lexically, so the range check is
 * a plain string comparison.
 */
export const isSelectable = (
  iso: string,
  { minDate, maxDate, isDateUnavailable }: DateConstraints,
): boolean => {
  if (!toDate(iso)) return false;
  if (minDate && iso < minDate) return false;
  if (maxDate && iso > maxDate) return false;
  return !isDateUnavailable?.(iso);
};
