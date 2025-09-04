import React from "react";
import cc from "classcat";

export interface TableInputProps {
  /** Current value of the input */
  value: string;
  /** Callback when input value changes */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Hidden label for accessibility - read by screen readers */
  label: string;
  /** Optional placeholder text */
  placeholder?: string;
  /** Whether the input is disabled */
  isDisabled?: boolean;
  /** Whether the input has an error */
  hasError?: boolean;
  /** Max length for input. When passed, a character counter will display */
  maxLength?: number;
}

/**
 * A text input component specifically designed for use within Table.Cell.
 * Provides consistent styling and behavior for editable table cells.
 */
const TableInput = React.forwardRef<HTMLInputElement, TableInputProps>(
  (
    {
      value,
      onChange = () => {},
      label,
      isDisabled = false,
      placeholder,
      hasError = false,
      maxLength,
      ...other
    },
    ref,
  ) => {
    const characterCount = (value || "").length;
    const showCharacterCounter =
      maxLength !== undefined && maxLength > 0 && characterCount >= 1;
    const hasCountError = showCharacterCounter && characterCount > maxLength;
    return (
      <div
        className={cc([
          "nds-tableField-input",
          {
            "nds-tableField-input--disabled": isDisabled,
            "nds-tableField-input--hasError": hasError || hasCountError,
          },
        ])}
      >
        <input
          ref={ref}
          type="text"
          aria-label={label}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={isDisabled}
          aria-invalid={hasError}
          {...other}
        />
        <div
          className={cc([
            "nds-tableInput-counter",
            "fontSize--s",
            { "fontColor--error": hasError || hasCountError },
          ])}
        >
          {showCharacterCounter && (
            <span>
              {characterCount}/{maxLength}
            </span>
          )}
        </div>
      </div>
    );
  },
);

TableInput.displayName = "TableInput";

export default TableInput;
