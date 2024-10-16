/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

const noop = () => {};

const ComboboxAction = ({ onSelect = noop }) => <></>;

ComboboxAction.displayName = "Combobox.Action";

ComboboxAction.propTypes = {
  /** Side effect to run on selection */
  onSelect: PropTypes.func.isRequired,
  /** Label for action */
  label: PropTypes.string.isRequired,
};

export default ComboboxAction;
