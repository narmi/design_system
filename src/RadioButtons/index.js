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
  ...containerProps
}) => {
  const isControlled = value !== undefined;
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
      {...containerProps}
    >
      {Object.entries(options).map(([label, inputValue]) => (
        <label
          className={cc([
            "nds-radiobuttons-option",
            {
              "nds-radiobuttons-option--checked": checkedValue == inputValue,
              "nds-radiobuttons-option--focused": focusedValue == inputValue,
              "padding--all rounded--all border--all": kind === "card",
            },
          ])}
          key={inputValue}
        >
          {label}
          <input
            type="radio"
            checked={checkedValue === inputValue}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={inputValue}
            name={name}
          />
          <div
            role="img"
            className={cc([
              "nds-radio",
              { "narmi-icon-check": kind === "card" },
            ])}
          />
        </label>
      ))}
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
};

export default RadioButtons;
