/**
 * Wrapper for `Intl.DateTimeFormat` with options configured for Narmi applications.
 *
 * @example
 * import { formatDate } from '@narmi/design_system';
 *
 * formatDate(new Date('July 4, 2022'), 'short'); // '7/4/22'
 * formatDate(new Date('7/4/2022'), 'long');      // 'July 4, 2022'
 *
 * @param date native date object
 * @param style formatting style (`short` or `long`)
 * @returns date string formatted for display
 */
export type FormatDateStyle = "short" | "long";

const formatDate = (date: Date, style: FormatDateStyle = "short"): string => {
  const formatterOpts: Intl.DateTimeFormatOptions = {
    dateStyle: style,
  };

  const validStyles: FormatDateStyle[] = ["short", "long"];
  if (!validStyles.includes(style)) {
    throw new Error(
      `formatDate: invalid style argument. Must be one of: ${JSON.stringify(
        validStyles
      )}`
    );
  }

  return new Intl.DateTimeFormat("en-US", formatterOpts).format(date);
};

export default formatDate;
