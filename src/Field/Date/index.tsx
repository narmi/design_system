import React from "react";
import { DayPicker } from "react-day-picker";
import { useFieldDate } from "./useFieldDate";
import { FieldErrors } from "../Errors/index";
import Row from "../../Row";

import type { ChevronProps } from "react-day-picker";
import type { FieldBaseProps } from "../types";
import type { DateConstraints } from "./dateUtils";

export interface FieldDateProps
  extends
    Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      | "onChange"
      | "value"
      | "id"
      | "type"
      | "min"
      | "max"
      | "disabled"
      | "aria-invalid"
      | "aria-describedby"
    >,
    FieldBaseProps,
    DateConstraints {
  /** Selected date as `YYYY-MM-DD`, or `""` when no valid date is set (controlled) */
  value: string;
  /**
   * Called with the date as `YYYY-MM-DD` whenever a valid, selectable date
   * is typed or picked, and with `""` when the field is cleared or holds an
   * incomplete, invalid or unavailable date.
   */
  onChange: (iso: string) => void;
  /**
   * How the calendar's month and year are shown.
   * `"dropdown"` renders native `<select>`s for jumping across years
   * (e.g. a date of birth).
   * @default "label"
   */
  calendarCaption?: "label" | "dropdown";
  /**
   * On devices whose primary pointer is coarse (phones, tablets), render a
   * native `<input type="date">` instead of the custom calendar.
   * `calendarCaption` has no effect there, and since native pickers can't
   * grey out individual days, an `isDateUnavailable` date is rejected
   * after the fact (`onChange("")`), so pair it with an `errors` message.
   * @default true
   */
  shouldUseNativeOnTouch?: boolean;
  /**
   * Set when rendered inside a Dialog or Drawer, so the calendar layers
   * above it.
   * @default false
   */
  isPortalled?: boolean;
}

/** Swaps react-day-picker's inline SVG arrows for NDS icons */
const Chevron = ({ orientation = "right" }: ChevronProps) => (
  <i className={`narmi-icon-chevron-${orientation}`} aria-hidden="true" />
);

/**
 * Field.Date renders a masked `MM/DD/YYYY` text input with a calendar
 * popover for picking a single day. Values are always `YYYY-MM-DD` strings.
 *
 * The calendar opens when the input is focused and closes when focus
 * leaves the field, on Escape, or once a day is picked. ArrowDown moves
 * from the input into the calendar grid.
 *
 * On touch devices it renders the browser's native date picker instead
 * (see `shouldUseNativeOnTouch`). The calendar is
 * [react-day-picker](https://daypicker.dev), left unstyled apart from
 * NDS theme tokens; all behaviour lives in `useFieldDate`.
 */
export const FieldDate = ({
  label,
  id,
  value,
  onChange,
  minDate,
  maxDate,
  isDateUnavailable,
  calendarCaption = "label",
  shouldUseNativeOnTouch = true,
  isPortalled = false,
  errors = [],
  isDisabled = false,
  renderHelperText,
  className,
  ...rest
}: FieldDateProps) => {
  const { errorId, rootProps, anchorProps, inputProps, calendar } =
    useFieldDate({
      id,
      label,
      value,
      onChange,
      minDate,
      maxDate,
      isDateUnavailable,
      errors,
      isDisabled,
      isPortalled,
      shouldUseNativeOnTouch,
      className,
    });

  return (
    <div {...rootProps}>
      <Row alignItems="center">
        <Row.Item>
          <label className="nds-field-label" htmlFor={inputProps.id}>
            {label}
          </label>
        </Row.Item>
        <Row.Item shrink>
          <div className="fontColor--secondary fontSize--s">
            {renderHelperText?.()}
          </div>
        </Row.Item>
      </Row>

      <div className="nds-field-input-box" {...anchorProps}>
        <input {...rest} {...inputProps} />
        {calendar && (
          <i role="img" className="narmi-icon-calendar" aria-hidden="true" />
        )}
      </div>

      {calendar && (
        <div className="nds-field-date-popover" {...calendar.popoverProps}>
          {calendar.isOpen && (
            <DayPicker
              key={calendar.dayPickerKey}
              className="nds-calendar"
              navLayout="around"
              captionLayout={calendarCaption}
              fixedWeeks
              showOutsideDays={false}
              components={{ Chevron }}
              {...calendar.dayPickerProps}
            />
          )}
        </div>
      )}

      <FieldErrors id={errorId} errors={errors} />
    </div>
  );
};

FieldDate.displayName = "Field.Date";
