import React, { useState } from "react";
import PropTypes from "prop-types";
import cc from "classcat";

/*
The Narmi RadioButtons component expects an "options" Prop, which is an object where the keys are the radiobutton
labels and the values are the radiobutton values. An "initialvalue" Prop can be passed to set a default checked
radiobutton.

```
  <RadioButtons
    initialValue={"secondValue"}
    options={{ "First Label": "firstValue", "Second Label": "secondValue" }}
  />
```
*/

const RadioButtons = ({
  options,
  name,
  initialValue,
  kind = "normal",
  onChange = () => {},
  ...containerProps
}) => {
  const [checkedValue, setCheckedValue] = useState(initialValue);
  const [focusedValue, setFocusedValue] = useState(null);

  const handleChange = (e) => {
    setCheckedValue(e.target.value);
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
      className="nds-radiobuttons nds-typography"
      onChange={handleChange}
      {...containerProps}
    >
      {Object.entries(options).map(([label, value]) => (
        <label
          className={cc([
            "nds-radiobuttons-option",
            `nds-radiobuttons-option--${kind}`,
            {
              "nds-radiobuttons-option--checked": checkedValue == value,
              "nds-radiobuttons-option--focused": focusedValue == value,
            },
          ])}
          key={value}
        >
          {label}
          <input
            type="radio"
            checked={checkedValue === value}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={value}
            name={name}
          />
          <div className="nds-checkmark"></div>
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
  /** initially selected option by input value */
  initialValue: PropTypes.any,
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
