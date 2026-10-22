import { format, isValid, parse } from "date-fns";

export interface DateConstraints {
  /** Earliest selectable date (`YYYY-MM-DD`, inclusive) */
  minDate?: string;
  /** Latest selectable date (`YYYY-MM-DD`, inclusive) */
  maxDate?: string;
  /** Returns true for dates that can't be selected */
  isDateUnavailable?: (iso: string) => boolean;
}

/** The wire format used by `Field.Date`: `YYYY-MM-DD` */
export const ISO_DATE_FORMAT = "yyyy-MM-dd";

/** The format typed into (and shown by) the masked input */
export const DISPLAY_DATE_FORMAT = "MM/dd/yyyy";

/**
 * Builds a local-midnight `Date` from a `YYYY-MM-DD` string, trusting it.
 * Not `new Date(iso)`, which parses date-only strings as UTC.
 */
export const toDate = (iso?: string): Date | undefined =>
  iso ? parse(iso, ISO_DATE_FORMAT, new Date()) : undefined;

/** Formats a `Date` as `YYYY-MM-DD` using its local calendar fields */
export const toIso = (date: Date): string => format(date, ISO_DATE_FORMAT);

/** Formats a `YYYY-MM-DD` string for the masked input (`MM/DD/YYYY`) */
export const toDisplay = (iso: string): string =>
  iso ? format(toDate(iso)!, DISPLAY_DATE_FORMAT) : "";

/**
 * Parses masked input text (`MM/DD/YYYY`) to `YYYY-MM-DD`. This is the one
 * place untrusted text is validated: `undefined` while the text is still
 * being typed or names a day that doesn't exist (`02/30/2026`).
 */
export const parseDisplay = (text: string): string | undefined => {
  if (text.length < DISPLAY_DATE_FORMAT.length) return undefined;
  const date = parse(text, DISPLAY_DATE_FORMAT, new Date());
  return isValid(date) ? toIso(date) : undefined;
};

/**
 * Whether a `YYYY-MM-DD` string satisfies the constraints. ISO date strings
 * sort lexically, so the range check is a plain string comparison.
 */
export const isSelectable = (
  iso: string,
  { minDate, maxDate, isDateUnavailable }: DateConstraints,
): boolean => {
  if (minDate && iso < minDate) return false;
  if (maxDate && iso > maxDate) return false;
  return !isDateUnavailable?.(iso);
};
