import React from "react";

export interface TableInputProps {
  /** Current value of the input */
  value: string;
  /** Callback when input value changes */
  onChange: (value: string) => void;
  /** Hidden label for accessibility - read by screen readers */
  label: string;
  /** Optional placeholder text */
  placeholder?: string;
  /** Whether the input is disabled */
  isDisabled?: boolean;
}

/**
 * A text input component specifically designed for use within Table.Cell.
 * Provides consistent styling and behavior for editable table cells.
 */
const TableInput = ({
  value,
  onChange,
  label,
  isDisabled = false,
  placeholder,
}: TableInputProps) => {
  return (
    <div className="nds-tableField-input">
      <input
        type="text"
        aria-label={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={isDisabled}
      />
    </div>
  );
};

export default TableInput;
