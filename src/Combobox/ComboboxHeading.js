import React from "react";
import PropTypes from "prop-types";

const ComboboxHeading = ({ text }) => (
  <h5 className="nds-combobox-list-heading fontSize--default fontWeight--bold">
    {text}
  </h5>
);

ComboboxHeading.displayName = "Combobox.Heading";

ComboboxHeading.propTypes = {
  /**
   * Text of the heading
   */
  text: PropTypes.string.isRequired,
};

export default ComboboxHeading;
