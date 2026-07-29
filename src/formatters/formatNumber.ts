/**
 * Wrapper for `Intl.NumberFormat` with options configured for Narmi applications.
 *
 * @example
 * import { formatNumber } from '@narmi/design_system';
 *
 * formatNumber(1234.56, 'currency'); // '$1,234.56'
 * formatNumber(34.4, 'currency');    // '$34.40'
 * formatNumber(-12, 'currency');     // '-$12.00'
 * formatNumber('0.0342', 'percent'); // '3.42%'
 * formatNumber(0.0023, 'percent');   // '0.23%'
 * formatNumber(0.215555, 'percent'); // '21.56%'
 *
 * @param input string or number to format into a number string
 * @param style format style (`currency` or `percent`)
 * @returns number string formatted for display
 */
export type FormatNumberStyle = "currency" | "percent";
export type FormatNumberSignDisplay =
  | "auto"
  | "never"
  | "always"
  | "exceptZero";

const formatNumber = (
  input: string | number,
  style: FormatNumberStyle = "currency",
  signDisplay: FormatNumberSignDisplay = "auto",
  showCents: boolean = true,
): string => {
  const number: number = parseFloat(input as string);
  const formatterOpts: Intl.NumberFormatOptions = {
    style,
    currencyDisplay: "narrowSymbol",
  };

  // only allow currency and percentage types for now
  const validStyles: FormatNumberStyle[] = ["currency", "percent"];
  if (!validStyles.includes(style)) {
    throw new Error(
      `formatNumber: invalid style argument. Must be one of: ${JSON.stringify(
        validStyles,
      )}`,
    );
  }

  const validSignDisplays: FormatNumberSignDisplay[] = [
    "auto",
    "never",
    "always",
    "exceptZero",
  ];
  if (!validSignDisplays.includes(signDisplay)) {
    throw new Error(
      `formatNumber: invalid signDisplay argument. Must be one of: ${JSON.stringify(
        validSignDisplays,
      )}`,
    );
  }

  if (style === "currency") {
    formatterOpts.currency = "USD";
    formatterOpts.minimumFractionDigits = showCents ? 2 : 0;
    formatterOpts.maximumFractionDigits = showCents ? 2 : 0;
  } else if (style === "percent") {
    formatterOpts.maximumFractionDigits = Number.isInteger(number) ? 0 : 2;
  }
  formatterOpts.signDisplay = signDisplay;
  try {
    return new Intl.NumberFormat("en-US", formatterOpts).format(number);
  } catch {
    // Failover for browsers that do not support Intl.NumberFormat
    return style === "currency"
      ? "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
      : (number * 100).toFixed(2) + "%";
  }
};

export default formatNumber;
