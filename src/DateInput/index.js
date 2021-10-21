import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Input from "Input";
import { english } from "flatpickr/dist/l10n/default";
import flatpickr from "flatpickr";
import moment from "moment";
import "flatpickr/dist/themes/airbnb.css";

const DateInput = ({
  disableDates,
  minDate,
  dateFormat,
  altInput,
  altFormat,
  defaultDate,
  ...props
}) => {
  const input = useRef();

  // Shorten "Sun" to "Su", "Mon" to "Mo", etc.
  english.weekdays.shorthand = english.weekdays.shorthand.map((abbrev) =>
    abbrev.substr(0, 2)
  );
  const flatpickrOptions = {
    monthSelectorType: "static",
    locale: english,
    allowInput: true,
    dateFormat,
    minDate,
    altInput,
    altFormat,
    disable: disableDates,
    defaultDate,
    onChange: (flatpickrVal) =>
      props.onChange(moment(flatpickrVal[0]).format("YYYY-MM-DD")),
  };

  useEffect(() => {
    flatpickr(input.current, flatpickrOptions);
  });

  return (
    <Input {...props}>
      <input
        key={"nds-text"}
        ref={input}
        type="date"
        required
        placeholder={props.label}
        {...props}
      />
    </Input>
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
  /** Alternate date format to show in input when a date is selected (e.g. 'MM-DD-YYYY')*/
  altFormat: PropTypes.string,
  /**
   * When true, a readable date is shown in the input following the 'YYYY-MM-DD' format.
   * The date format can be overridden with the `altFormat` prop.
   */
  altInput: PropTypes.bool,
  /**
   * Sets a default selected date.
   * DateInput uses the format 'YYYY-MM-DD' by default.
   */
  defaultDate: PropTypes.string,
  /** Changes date format used in input. See [flatpickr docs](https://flatpickr.js.org/formatting/) for formatting options */
  dateFormat: PropTypes.string,
};
DateInput.defaultProps = {
  onChange: () => {},
  disableDates: [],
  dateFormat: "Y-m-d",
};

export default DateInput;
