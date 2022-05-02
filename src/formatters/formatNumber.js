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
const formatNumber = (input, style = "currency") => {
  let number = parseFloat(input, 10);
  let formatterOpts = {
    style,
    currencyDisplay: "narrowSymbol",
    maximumFractionDigits: Number.isInteger(number) ? 0 : 2,
  };

  // only allow currency and percentage types for now
  const validStyles = ["currency", "percent"];
  if (!validStyles.includes(style)) {
    throw new Error(
      `formatNumber: invalid style argument. Must be one of: ${JSON.stringify(
        validStyles
      )}`
    );
  }

  if (style === "currency") {
    formatterOpts.currency = "USD";
  }

  try {
    return new Intl.NumberFormat("en-US", formatterOpts).format(number);
  }
  catch {
    // Failover for browsers that do not support Intl.NumberFormat
    return style === "currency" ? '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') : number.toFixed(2) + '%';
  }
};

export default formatNumber;
