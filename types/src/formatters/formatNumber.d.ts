export default formatNumber;
/**
 * Wrapper for `Intl.NumberFormat` with options configured for Narmi applications.
 *
 * @example
 * import { formatNumber } from '@narmi/design_system';
 *
 * formatNumber(1234.56, 'currency'); // '$1,234.56'
 * formatNumber(34.4, 'currency');    // '$34.40'
 * formatNumber(-12, 'currency');     // '-$12'
 * formatNumber('0.0342', 'percent'); // '3.42%'
 * formatNumber(0.0023, 'percent');   // '0.23%'
 * formatNumber(0.215555, 'percent'); // '21.56%'
 *
 * @param {String|Number} input string or number to format into a number string
 * @param {String} style format style (`currency` or `percent`)
 * @returns {String} number string formatted for display
 */
declare function formatNumber(input: string | number, style?: string): string;
