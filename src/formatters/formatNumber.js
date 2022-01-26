/**
 * Thin wrapper for `Intl.NumberFormat` with options configured for Narmi applications.
 *
 * @example
 * formatNumber(1234.56, 'currency'); // '$1,234.56'
 * formatNumber(34.4, 'currency');    // '$34.40'
 * formatNumber(-12, 'currency');     // '-$12'
 * formatNumber('3.40', 'percent');   // '3.4%'
 * formatNumber(2, 'percent');        // '2%'
 *
 * @param {String|Number} input string or number to format into a number string
 * @param {String} style format style (`currency` or `percent`)
 * @returns {String} formatted string
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

  switch (style) {
    case "currency":
      formatterOpts.currency = "USD";
      break;
    case "percent":
      number = number / 100;
      break;
  }

  return new Intl.NumberFormat("en-US", formatterOpts).format(number);
};

export default formatNumber;
