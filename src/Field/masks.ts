import {
  maskitoDateOptionsGenerator,
  maskitoNumberOptionsGenerator,
} from "@maskito/kit";

import type { MaskitoOptions } from "@maskito/core";

/**
 * Maskito mask registry
 * ---------------------
 * The `Generator` functions from `@maskito/kit` provide access to built-ins:
 * - `date`
 * - `date-range`
 * - `date-time`
 * - `number`
 * - `time`
 */
export const FIELD_MASKS = {
  /** Date mask in mm/dd/yyyy format */
  Date: maskitoDateOptionsGenerator({
    mode: "mm/dd/yyyy",
    separator: "/",
  }),

  /** Currency mask with dollar sign and two decimal places */
  Currency: maskitoNumberOptionsGenerator({
    prefix: "$",
    thousandSeparator: ",",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }),

  /** Percentage mask; whole numbers only */
  Percentage: maskitoNumberOptionsGenerator({
    postfix: "%",
    thousandSeparator: ",",
    maximumFractionDigits: 0,
  }),

  /** Credit card number mask with spaces every 4 digits */
  CCNumber: {
    mask: [
      ...Array(4).fill(/\d/),
      " ",
      ...Array(4).fill(/\d/),
      " ",
      ...Array(4).fill(/\d/),
      " ",
      ...Array(4).fill(/\d/),
    ],
  } as MaskitoOptions,

  /** CVC code mask with up to 4 digits */
  Cvc: {
    mask: Array(4).fill(/\d/),
  } as MaskitoOptions,

  /** US phone number mask in (###) ###-#### format */
  Phone: {
    mask: [
      "(",
      /\d/,
      /\d/,
      /\d/,
      ")",
      " ",
      /\d/,
      /\d/,
      /\d/,
      "-",
      /\d/,
      /\d/,
      /\d/,
      /\d/,
    ],
  } as MaskitoOptions,

  /** Only digits mask - unlimited length */
  OnlyDigits: {
    mask: /^\d+$/,
  } as MaskitoOptions,

  /** Default mask allowing any input - used as the fallback mask in `Field`.*/
  None: {
    mask: /.*/,
  } as MaskitoOptions,
} as const;

export type FieldMaskName = keyof typeof FIELD_MASKS;
