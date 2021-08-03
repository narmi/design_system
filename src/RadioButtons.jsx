import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import Typography from "Typography";
import { deviceBreakpoints } from "global";


/*
The Narmi RadioButtons component expects a Prop 'options', which is an object where the keys are the labels
to be displayed and the values are of any desired type to be comparet
{"label1":"value1", "label2":"value2", ...} 
*/

const RadioButtons = (props) => {
  const [radioOptions, setRadioOptions] = useState([]);

  useEffect(() => {
    setRadioOptions(props.options);
  }, []);

  return (
    <div className="nds-radiobutton-group" {...props}>
     {Object.entries(radioOptions).map(([label, value]) => (
      <div className="nds-radiobutton-container" key={value}>
        <label className="nds-label" key={label}>
          <Typography>{label}</Typography>
          <input type="radio" defaultChecked={props.initialvalue === value} value={value} name={props.name}/>
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

RadioButtons.styles = `
.nds-radiobutton-group {
  display: inline-block;
}

.nds-label {
  display: block;
  position: relative;
  padding-left: 28px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 16px;
  line-height: 22px;
}

.nds-label input {
  position: absolute;
  opacity: 0;
  display: none;
  cursor: pointer;
}

.nds-checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: transparent;
  border: 1px solid rgb(var(--nds-grey));
  border-radius: 50%;
}

.nds-label:hover input ~ .nds-checkmark{
  border: 2px solid rgb(var(--nds-primary-color));
}

.nds-label input:checked ~ .nds-checkmark {
  background-color: transparent;
  border: 2px solid rgb(var(--nds-primary-color));
}

.nds-checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.nds-label input:checked ~ .nds-checkmark:after {
  display: block;
}

.nds-label .nds-checkmark:after {
  top: 50%;
  left: 50%;
  width: 13px;
  height: 13px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: rgb(var(--nds-primary-color));
}
`;

export default RadioButtons;
