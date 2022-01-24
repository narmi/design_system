// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_custom_checkbox

import React from "react";
import PropTypes from "prop-types";

/**
 * Narmi styled checkbox with built-in label.
 */
const Checkbox = ({
  label,
  onChange,
  id,
  name,
  defaultChecked,
  value,
  ...rest
}) => {
  return (
    <>
      <label className="nds-checkbox nds-typography">
        {label}
        <input
          onChange={onChange}
          defaultChecked={defaultChecked}
          name={name}
          id={id}
          value={value}
          {...rest}
          type="checkbox"
        />
        <span className="narmi-icon-check"></span>
      </label>
    </>
  );
};

Checkbox.propTypes = {
  /** Content of `label` element */
  label: PropTypes.string.isRequired,
  /** Change callback invoked when the value of the `input` changes */
  onChange: PropTypes.func,
  /** `id` attribute of `input` */
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** `name` attribute of `input` */
  name: PropTypes.string,
  /** Sets the checkbox to checked by default, [uncontrolled](https://reactjs.org/docs/uncontrolled-components.html) */
  defaultChecked: PropTypes.bool,
  /** Sets the `value` attribute of the `input` */
  value: PropTypes.string,
};

export default Checkbox;
