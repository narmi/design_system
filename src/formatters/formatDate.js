/**
 * Wrapper for `Intl.DateTimeFormat` with options configured for Narmi applications.
 *
 * @example
 * import { formatDate } from '@narmi/design_system';
 *
 * formatDate(new Date('July 4, 2022'), 'short'); // '7/4/22'
 * formatDate(new Date('7/4/2022'), 'long');      // 'July 4, 2022'
 *
 * @param {Date} date native date object
 * @param {String} style formatting style (`short` or `long`)
 * @returns {String} date string formatted for display
 */
const formatDate = (date, style = "short") => {
  let formatterOpts = {
    dateStyle: style,
  };

  const validStyles = ["short", "long"];
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
