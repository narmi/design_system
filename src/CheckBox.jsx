import React from "react";
import PropTypes from "prop-types";

const CheckBox = ({label, onChange, id, name, value}) => {
  return (
        <label class="container">One
          <input type="checkbox" checked="checked" />
          <span class="checkmark"></span>
        </label>
  );
};

CheckBox.propTypes = {
  title: PropTypes.node,
};

CheckBox.defaultProps = {
  hoverable: false,
};

export default CheckBox;
