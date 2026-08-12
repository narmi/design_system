/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

export interface ComboboxActionProps {
  /** Side effect to run on selection */
  onSelect: () => void;
  /** Label for action */
  label: string;
  /** Never set on Combobox.Action; `value` belongs to selectable Combobox.Items */
  value?: never;
  searchValue?: never;
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
