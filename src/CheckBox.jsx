// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_custom_checkbox

import React from "react";
import PropTypes from "prop-types";

const CheckBox = ({ label, onChange, id, name, value }) => {
  return (
    <>
      <label class="container nds-typography">
        {label}
        <input onChange={onChange} name={name} id={id} value={value} type="checkbox" />
        <span class="checkmark"></span>
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
