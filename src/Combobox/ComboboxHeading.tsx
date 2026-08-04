import React from "react";
import PropTypes from "prop-types";

export interface ComboboxHeadingProps {
  /**
   * Text of the heading
   */
  text: string;
  /**
   * Display variant of heading
   * `bold` - Dark, large headings
   * `hint` - Light, small headings
   */
  kind?: "bold" | "hint";
  /** Never set on Combobox.Heading; headings are not selectable */
  value?: never;
  searchValue?: never;
  label?: never;
}

const ComboboxHeading = ({ text, kind = "bold" }: ComboboxHeadingProps) => (
  <h5 className={`nds-combobox-list-heading--${kind}`}>{text}</h5>
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
