import React from "react";
import PropTypes from "prop-types";

const ComboboxHeading = ({ text }) => (
  <h5 className="nds-combobox-list-heading fontSize--default fontWeight--semibold">
    {text}
  </h5>
);

ComboboxHeading.propTypes = {
  /**
   * Text of the heading
   */
  text: PropTypes.string.isRequired,
};

export default ComboboxHeading;
