import React, { ReactNode, useEffect, useRef } from "react";
import TextInput, { type SingleLineTextInputProps } from "../TextInput";
import { english } from "flatpickr/dist/l10n/default";
import flatpickr from "flatpickr";
import type { Options } from "flatpickr/dist/types/options";
import type { Instance } from "flatpickr/dist/types/instance";

const noop = () => {};
const NO_DISABLED_DATES: Options["disable"] = [];

export interface DateInputProps extends Omit<
  SingleLineTextInputProps,
  "onChange" | "defaultValue"
> {
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
    props: Omit<SingleLineTextInputProps, "onChange" | "defaultValue">,
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
  disableDates = NO_DISABLED_DATES,
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
  // Read through a ref so a new callback identity doesn't re-init flatpickr
  const onChangeRef = useRef(onChangeProp);
  onChangeRef.current = onChangeProp;

  // Shorten "Sun" to "Su", "Mon" to "Mo", etc.
  english.weekdays.shorthand = english.weekdays.shorthand.map((abbrev) =>
    abbrev.substr(0, 2),
  ) as typeof english.weekdays.shorthand;

  const label = props.label;

  useEffect(() => {
    if (!input.current) return;

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
      static: disablePortal,
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
        onChangeRef.current(formattedDate);
      },
      // With `altInput`, flatpickr hides `input` and renders its own visible
      // input, which needs the label applied once it exists.
      onReady: (dates, dateStr, instance) => {
        if (altInput && instance.altInput) {
          instance.altInput.setAttribute("aria-label", label || "Select date");
        }
      },
    };

    const instance: Instance = flatpickr(input.current, flatpickrOptions);

    // flatpickr only commits typed text on blur or Enter. Commit as soon as
    // the text is a complete, valid date so `onChange` fires while typing.
    const handleInput = (event: Event) => {
      const target = event.target as HTMLInputElement;
      const value = target.value;
      const format =
        target === instance.altInput
          ? instance.config.altFormat
          : instance.config.dateFormat;
      const parsed = instance.parseDate(value, format);
      // Round-trip check rejects partial input flatpickr would parse leniently
      if (!parsed || instance.formatDate(parsed, format) !== value) {
        return;
      }
      const selected = instance.selectedDates[0];
      if (selected && instance.formatDate(selected, format) === value) {
        return;
      }
      instance.setDate(value, true, format);
    };
    // `_input` is whichever element the user types into
    const typedInput = instance._input;
    typedInput.addEventListener("input", handleInput);

    return () => {
      typedInput.removeEventListener("input", handleInput);
      instance.destroy();
    };
  }, [
    dateFormat,
    minDate,
    altInput,
    altFormat,
    disableMobile,
    disableDates,
    defaultDate,
    disablePortal,
    useIsoOnChange,
    label,
  ]);

  return <>{renderInput(props, input, testId)}</>;
};

export default DateInput;
