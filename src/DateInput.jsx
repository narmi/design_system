import React, {useEffect, useRef} from "react";
import PropTypes from "prop-types";
import Input from "Input";
import { english } from "flatpickr/dist/l10n/default";
import flatpickr from "flatpickr";
import "flatpickr/dist/themes/airbnb.css";

const DateInput = (props) => {
  const input = useRef();

  // Shorten "Sun" to "Su", "Mon" to "Mo", etc.
  english.weekdays.shorthand = english.weekdays.shorthand.map((abbrev) => abbrev.substr(0, 2))
  const flatpickrOptions = {
    monthSelectorType: "static",
    locale: english,
    allowInput: true,
    dateFormat: "m/d/Y"
  }

  useEffect(() => {
    flatpickr(input.current, flatpickrOptions)
  });

  return (
    <Input {...props}>
      <input key={"nds-text"} ref={input} type="date" required placeholder={props.label} {...props} />
    </Input>
  );
};
DateInput.propTypes = {
  multiline: PropTypes.bool,
};

DateInput.defaultProps = {
  multiline: false,
};

export default DateInput;
