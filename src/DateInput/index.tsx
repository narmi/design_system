import React, { ReactNode, useEffect, useRef } from "react";
import TextInput, { type TextInputProps } from "../TextInput";
import { english } from "flatpickr/dist/l10n/default";
import flatpickr from "flatpickr";
import type { Options } from "flatpickr/dist/types/options";

const noop = () => {};

export interface DateInputProps
  extends Omit<TextInputProps, "onChange" | "type" | "defaultValue"> {
  /** Fired with 'YYYY-MM-DD' selected date string when selected date changes */
  onChange?: (date: string) => void;
  /** Disables dates. See [flatpickr docs](https://flatpickr.js.org/examples/#disabling-dates) for usage instructions */
  disableDates?: Options["disable"];
  /** Sets the minimum selectable date (inclusive) */
  minDate?: string | Date;
  /** Alternate date format to show in input when a date is selected (e.g. 'm/d/Y')*/
  altFormat?: string;
  /**
   * When true, the input value will follow an alternate format defined by the `altFormat` prop
   */
  altInput?: boolean;
  /**
   * Sets a default selected date.
   * DateInput uses the format 'YYYY-MM-DD' by default.
   */
  defaultDate?: string;
  /** Changes date format used in input. See [flatpickr docs](https://flatpickr.js.org/formatting/) for formatting options */
  dateFormat?: string;
  /** If the `onChange` callback should pass the date string in ISO8601 format */
  useIsoOnChange?: boolean;
  /** Disable mobile text inputs on mobile web */
  disableMobile?: boolean;
  /** When true, appends the calendar popup to the parent of the input instead of to document body */
  disablePortal?: boolean;
  /** Custom render function for the input element (props, input, testId) => <TextInput {...props} /> */
  renderInput?: (
    props: Omit<TextInputProps, "onChange" | "type" | "defaultValue">,
    input: React.MutableRefObject<HTMLInputElement | undefined>,
    testId?: string,
  ) => ReactNode;
}

const defaultRenderInput: DateInputProps["renderInput"] = (
  props,
  input,
  testId,
) => <TextInput ref={input} type="date" data-testid={testId} {...props} />;

/**
 * Single day picker.
 * Composes NDS input with a [flatpickr](http://flatpickrjs.org) calendar UI.
 */
const DateInput = ({
  disableDates = [],
  minDate,
  dateFormat = "Y-m-d",
  altInput,
  altFormat,
  defaultDate,
  onChange: onChangeProp = noop,
  useIsoOnChange = true,
  disableMobile = false,
  testId,
  disablePortal,
  renderInput = defaultRenderInput,
  ...props
}: DateInputProps) => {
  const input = useRef<HTMLInputElement>();

  // Shorten "Sun" to "Su", "Mon" to "Mo", etc.
  english.weekdays.shorthand = english.weekdays.shorthand.map((abbrev) =>
    abbrev.substr(0, 2),
  ) as typeof english.weekdays.shorthand;
  const flatpickrOptions: Options = {
    monthSelectorType: "static",
    locale: english,
    allowInput: true,
    dateFormat,
    minDate,
    altInput,
    altFormat,
    disableMobile,
    disable: disableDates,
    defaultDate,
    onChange: (flatpickrVal) => {
      // 🇨🇦 Our neighbors to the north have adopted ISO 8601.
      // localizing to en-CA produces the expected result of YYYY-MM-DD
      const locale = useIsoOnChange ? "en-CA" : "en-US";
      const selectedDate = new Date(flatpickrVal as unknown as string);
      if (isNaN(selectedDate.getTime())) {
        return;
      }
      const formattedDate = new Intl.DateTimeFormat(locale).format(
        selectedDate,
      );
      onChangeProp(formattedDate);
    },
    // When `altInput` is passed, flatpickr makes the `input` element `type="hidden"`
    // and creates a separate input to display the alternate date format (altFormat).
    // When this is the case, we need to hook into the flatpickr ready event to add the attribute.
    onReady: (dates, dateStr, instance) => {
      if (altInput && instance.altInput) {
        instance.altInput.setAttribute(
          "aria-label",
          props.label || "Select date",
        );
      }
    },
  };

  useEffect(() => {
    if (disablePortal) {
      flatpickrOptions.static = true;
    }
    flatpickr(input.current, flatpickrOptions);
  }, [flatpickrOptions, input, disablePortal]);

  return <>{renderInput(props, input, testId)}</>;
};

export default DateInput;
