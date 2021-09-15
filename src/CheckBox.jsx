// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_custom_checkbox

import React from "react";
import PropTypes from "prop-types";

const CheckBox = ({ label, onChange, id, name, defaultChecked, value, ...rest }) => {

  return (
    <>
      <label class="nds-checkbox nds-typography">
        {label}
        <input onChange={onChange} defaultChecked={defaultChecked} name={name} id={id} value={value} {...rest} type="checkbox" />
        <span class="narmi-icon-check"></span>
      </label>
    </>
  );
};

CheckBox.propTypes = {
  title: PropTypes.node,
};

CheckBox.defaultProps = {
  hoverable: false,
};

export default CheckBox;
