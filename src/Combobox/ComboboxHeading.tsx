import React from "react";

interface ComboboxHeadingProps {
  /**
   * Text of the heading
   */
  text: string;
}

const ComboboxHeading: React.FC<ComboboxHeadingProps> = ({ text }) => (
  <h5 className="nds-combobox-list-heading fontSize--default fontWeight--bold">
    {text}
  </h5>
);

ComboboxHeading.displayName = "Combobox.Heading";

export default ComboboxHeading;
