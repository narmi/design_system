import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

/*
The Narmi RadioButtons component expects an "options" Prop, which is an object where the keys are the radiobutton
labels and the values are the radiobutton values. An "initialvalue" Prop can be passed to set a default checked
radiobutton.

i.e.
    <RadioButtons
      initialValue={"true"}
      options={{ "True": "true", "False": "false" }}
    />
*/

const RadioButtons = ({ options, name, initialValue, ...containerProps }) => {
  return (
    <div className="nds-radiobutton-group nds-typography" {...containerProps}>
      {Object.entries(options).map(([label, value]) => (
        <div className="nds-radiobutton-container" key={value}>
          <label className="nds-label">
            {label}
            <input
              type="radio"
              defaultChecked={initialValue === value}
              value={value}
              name={name}
            />
            <div className="nds-checkmark"></div>
          </label>
        </div>
      ))}
    </div>
  );
};

RadioButtons.propTypes = {
  options: PropTypes.object,
  name: PropTypes.string,
  initialValue: PropTypes.any,
};

RadioButtons.defaultProps = {
  initialValue: false,
};

export default RadioButtons;
