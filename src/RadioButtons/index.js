import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import cc from "classcat";

/**
The Narmi RadioButtons component expects an "options" Prop, which is an object where the keys are the radiobutton
labels and the values are the radiobutton values. An "initialvalue" Prop can be passed to set a default checked
radiobutton.

```
  options={{ "First Label": "firstValue", "Second Label": "secondValue" }}
```
*/
const RadioButtons = ({
  options,
  name,
  initialValue,
  value,
  kind = "normal",
  onChange = () => {},
  testId,
  error,
  ...containerProps
}) => {
  const isControlled = value !== undefined;
  const hasError = error !== undefined && error.length > 0;
  const [checkedValue, setCheckedValue] = useState(
    isControlled ? value : initialValue
  );
  const [focusedValue, setFocusedValue] = useState(null);

  useEffect(() => {
    if (isControlled) {
      setCheckedValue(value);
    }
  }, [value]);

  const handleChange = (e) => {
    if (!isControlled) {
      setCheckedValue(e.target.value);
    }
    onChange(e);
  };

  const handleFocus = ({ target }) => {
    setFocusedValue(target.value);
  };

  const handleBlur = () => {
    setFocusedValue(null);
  };

  return (
    <div
      className={`nds-radiobuttons nds-radiobuttons--${kind}`}
      onChange={handleChange}
      data-testid={testId}
      {...containerProps}
    >
      {Object.entries(options).map(([label, inputValue]) => (
        <label
          className={cc([
            "nds-radiobuttons-option",
            "fontWeight--default",
            {
              "nds-radiobuttons-option--checked": checkedValue == inputValue,
              "nds-radiobuttons-option--focused": focusedValue == inputValue,
              "nds-radiobuttons-option--error": hasError,
              "padding--all rounded--all border--all": kind === "card",
            },
          ])}
          key={inputValue}
        >
          {label}
          <input
            type="radio"
            aria-label={`Radio ${name} option ${label}`}
            checked={checkedValue === inputValue}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={inputValue}
            name={name}
          />
          <div
            role="presentation"
            className={cc([
              "nds-radio",
              { "narmi-icon-check": kind === "card" },
            ])}
          />
        </label>
      ))}
      {hasError && (
        <div className="fontColor--error">
          <span className="fontSize--s margin--right--xxs narmi-icon-x-circle" />
          {error}
        </div>
      )}
    </div>
  );
};

RadioButtons.propTypes = {
  /** Map of label strings to input values */
  options: PropTypes.object,
  /** name of radiogroup */
  name: PropTypes.string,
  /** initially selected option by input value (uncontrolled) */
  initialValue: PropTypes.any,
  /**
   * selected option by input value (fully controlled)
   * When passing a `value` prop, you must use the `onChange`
   * hanlder to update the `value`
   */
  value: PropTypes.string,
  /** change callback invoked with input value */
  onChange: PropTypes.func,
  /**
   * `normal` - display input and label normally
   *
   * `card` - display input and label as a toggleable card
   */
  kind: PropTypes.oneOf(["normal", "card"]),
  /**
   * Error message. When passed, the `error` prop will
   * render the radio group in an error state.
   */
  error: PropTypes.string,
  /** Optional value for `data-testid` attribute */
  testId: PropTypes.string,
};

export default RadioButtons;
