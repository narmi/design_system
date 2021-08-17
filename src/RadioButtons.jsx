import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

/*
The Narmi RadioButtons component expects an "options" Prop, which is an object where the keys are the radiobutton
labels and the values are the radiobutton values. An "initialvalue" Prop can be passed to set a default checked
radiobutton.

i.e.
    <RadioButtons
      initialvalue={"true"}
      options={{ "True": "true", "False": "false" }}
    />
*/

const RadioButtons = (props) => {
  const [radioOptions, setRadioOptions] = useState([]);

  useEffect(() => {
    setRadioOptions(props.options);
  }, []);

  return (
    <div className="nds-radiobutton-group nds-typography" {...props}>
      {Object.entries(radioOptions).map(([label, value]) => (
        <div className="nds-radiobutton-container" key={value}>
          <label className="nds-label" key={label}>
            {label}
            <input
              type="radio"
              defaultChecked={props.initialvalue === value}
              value={value}
              name={props.name}
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
  disabled: PropTypes.bool,
  name: PropTypes.string,
};

RadioButtons.defaultProps = {
  disabled: false,
  initialvalue: false,
};

export default RadioButtons;
