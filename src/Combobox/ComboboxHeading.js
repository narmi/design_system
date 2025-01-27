import React from "react";
import PropTypes from "prop-types";

const ComboboxHeading = ({ text, kind = "bold" }) => (
  <h5
    className={`nds-combobox-list-heading--${kind} fontSize--default fontWeight--bold`}
  >
    {text}
  </h5>
);

ComboboxHeading.displayName = "Combobox.Heading";

ComboboxHeading.propTypes = {
  /**
   * Text of the heading
   */
  text: PropTypes.string.isRequired,
  /**
   * Display variant of heading
   * `bold` - Dark, large headings
   * `hint` - Light, small headings
   */
  kind: PropTypes.oneOf(["bold", "hint"]),
};

export default ComboboxHeading;
