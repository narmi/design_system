/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

interface ComboboxActionProps {
  /** Side effect to run on selection */
  onSelect?: () => void;
  /** Label for action */
  label: string;
}

const noop = () => {};

const ComboboxAction = ({ onSelect = noop }: ComboboxActionProps) => <></>;

ComboboxAction.displayName = "Combobox.Action";

ComboboxAction.propTypes = {
  /** Side effect to run on selection */
  onSelect: PropTypes.func.isRequired,
  /** Label for action */
  label: PropTypes.string.isRequired,
};

export default ComboboxAction;
