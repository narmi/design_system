import React from "react";
import DateInput from "../DateInput";
import TableInput, { TableInputProps } from "../TableInput";

export interface TableDateInputProps {
  /** Label of the input */
  label: string;
  /** Placeholder of the input */
  placeholder: string;
  /** Fired with 'YYYY-MM-DD' selected date string when selected date changes */
  onChange?: (date: string) => void;
  /** Disables dates. See [flatpickr docs](https://flatpickr.js.org/examples/#disabling-dates) for usage instructions */
  disableDates?: Array<string | Date | ((date: Date) => boolean)>;
  /** Sets the minimum selectable date (inclusive) */
  minDate?: string | Date;
  /** Alternate date format to show in input when a date is selected (e.g. 'm/d/Y')*/
  altFormat?: string;
  /** When true, the input value will follow an alternate format defined by the `altFormat` prop */
  altInput?: boolean;
  /** Sets a default selected date. DateInput uses the format 'YYYY-MM-DD' by default. */
  defaultDate?: string;
  /** Changes date format used in input. See [flatpickr docs](https://flatpickr.js.org/formatting/) for formatting options */
  dateFormat?: string;
  /** If the `onChange` callback should pass the date string in ISO8601 format */
  useIsoOnChange?: boolean;
  /** Disable mobile text inputs on mobile web */
  disableMobile?: boolean;
  /** Optional value for `data-testid` attribute */
  testId?: string;
  /** When true, appends the calendar popup to the parent of the input instead to document body */
  disablePortal?: boolean;
  /** Whether the input has an errorj */
  hasError?: boolean;
}

/**
 * A date input component specifically designed for use within Table.Cell.
 * Composes DateInput with TableInput to provide consistent table styling
 * while maintaining all date picker functionality.
 *
 * See `DateInput` for more detailed stories.
 */
const TableDateInput = ({
  placeholder,
  label,
  hasError = false,
  ...otherProps
}: TableDateInputProps) => {
  return (
    <DateInput
      {...otherProps}
      altInput={true}
      altFormat="m/d/Y"
      renderInput={(
        inputProps: Record<string, unknown>,
        inputRef: React.RefObject<HTMLInputElement>,
        testId: string,
      ) => {
        const { value = "", ...restInputProps } =
          inputProps as Partial<TableInputProps>;
        return (
          <TableInput
            {...restInputProps}
            value={value}
            label={label}
            placeholder={placeholder}
            ref={inputRef}
            data-testid={testId}
            hasError={hasError}
          />
        );
      }}
    />
  );
};

TableDateInput.displayName = "TableDateInput";

export default TableDateInput;
