import React, {useEffect, useRef} from "react";
import PropTypes from "prop-types";
import Input from "Input";
import { english } from "flatpickr/dist/l10n/default";
import flatpickr from "flatpickr";
import moment from "moment";
import "flatpickr/dist/themes/airbnb.css";

const DateInput = (props) => {
  const input = useRef();

  // Shorten "Sun" to "Su", "Mon" to "Mo", etc.
  english.weekdays.shorthand = english.weekdays.shorthand.map((abbrev) => abbrev.substr(0, 2))
  const flatpickrOptions = {
    monthSelectorType: "static",
    locale: english,
    allowInput: true,
    dateFormat: "Y-m-d",
    onChange: (flatpickrVal) => props.onChange(moment(flatpickrVal[0]).format("YYYY-MM-DD"))
  }

  useEffect(() => {
    flatpickr(input.current, flatpickrOptions)
  });

  return (
    <Input {...props}>
      <input key={"nds-text"} ref={input} type="date" required placeholder={props.label} {...props}/>
    </Input>
  );
};
DateInput.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
};
DateInput.defaultProps = {
  onChange: () => {}
};

export default DateInput;
