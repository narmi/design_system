export default formatDate;
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
declare function formatDate(date: Date, style?: string): string;
