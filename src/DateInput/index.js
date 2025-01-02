import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import TextInput from "../TextInput";
import { english } from "flatpickr/dist/l10n/default";
import flatpickr from "flatpickr";

const noop = () => {};

/**
 * Single day picker.
 * Composes NDS input with a [flatpickr](http://flatpickrjs.org) calendar UI.
 */
const DateInput = ({
  disableDates,
  minDate,
  dateFormat,
  altInput,
  altFormat,
  defaultDate,
  onChange: onChangeProp = noop,
  useIsoOnChange = true,
  disableMobile = false,
  testId,
  disablePortal,
  ...props
}) => {
  const input = useRef();

  // Shorten "Sun" to "Su", "Mon" to "Mo", etc.
  english.weekdays.shorthand = english.weekdays.shorthand.map((abbrev) =>
    abbrev.substr(0, 2),
  );
  const flatpickrOptions = {
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
      let locale = useIsoOnChange ? "en-CA" : "en-US";
      const selectedDate = new Date(flatpickrVal);
      if (isNaN(selectedDate)) {
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

  return (
    <>
      <TextInput
        {...props}
        label={props.label}
        ref={input}
        type="date"
        required
        data-testid={testId}
        {...props}
      />
    </>
  );
};
DateInput.propTypes = {
  /** Placeholder of the input */
  label: PropTypes.string.isRequired,
  /** Fired with 'YYYY-MM-DD' selected date string when selected date changes */
  onChange: PropTypes.func,
  /** Disables dates. See [flatpickr docs](https://flatpickr.js.org/examples/#disabling-dates) for usage instructions */
  disableDates: PropTypes.array,
  /** Sets the minimum selectable date (inclusive) */
  minDate: PropTypes.bool,
  /** Alternate date format to show in input when a date is selected (e.g. 'm/d/Y')*/
  altFormat: PropTypes.string,
  /**
   * When true, the input value will follow an alternate format defined by the `altFormat` prop
   */
  altInput: PropTypes.bool,
  /**
   * Sets a default selected date.
   * DateInput uses the format 'YYYY-MM-DD' by default.
   */
  defaultDate: PropTypes.string,
  /** Changes date format used in input. See [flatpickr docs](https://flatpickr.js.org/formatting/) for formatting options */
  dateFormat: PropTypes.string,
  /** If the `onChange` callback should pass the date string in ISO8601 format */
  useIsoOnChange: PropTypes.bool,
  /** Disable mobile text inputs on mobile web */
  disableMobile: PropTypes.bool,
  /** Optional value for `data-testid` attribute */
  testId: PropTypes.string,
  /** When true, appends the calendar popup to the parent of the input instead of to document body */
  disablePortal: PropTypes.bool,
};
DateInput.defaultProps = {
  onChange: () => {},
  disableDates: [],
  dateFormat: "Y-m-d",
};

export default DateInput;
