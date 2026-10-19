import React, { forwardRef } from "react";
import { DayPicker } from "react-day-picker";
import { useFieldDate } from "./useFieldDate";
import { FieldErrors } from "../Errors/index";
import Button from "../../Button";
import Row from "../../Row";

import type { ChevronProps } from "react-day-picker";
import type { FieldBaseProps } from "../types";
import type { DateConstraints } from "./dateUtils";
import type { FieldDateFooterSetters } from "./useFieldDate";

export type { FieldDateFooterSetters };

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
      | "placeholder" // always the display format, `MM/DD/YYYY`
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
   * Renders the calendar footer from `{ clear, selectToday, close, isTodaySelectable }`.
   * Defaults to a **Clear** and a **Today** button; pass `() => null` for no footer.
   */
  renderFooter?: (setters: FieldDateFooterSetters) => React.ReactNode;
  /**
   * Render a native `<input type="date">` on phones and tablets. Native
   * pickers can't grey out days, so an `isDateUnavailable` date is rejected
   * after the fact (`onChange("")`); pair it with an `errors` message.
   * @default true
   */
  shouldUseNativeOnTouch?: boolean;
  /**
   * Set when rendered inside a Dialog or Drawer, so the calendar layers above it.
   * @default false
   */
  isPortalled?: boolean;
}

/** Swaps react-day-picker's inline SVG arrows for NDS icons */
const Chevron = ({ orientation = "right" }: ChevronProps) => (
  <i className={`narmi-icon-chevron-${orientation}`} aria-hidden="true" />
);

const renderDefaultFooter = ({
  clear,
  selectToday,
  isTodaySelectable,
}: FieldDateFooterSetters) => (
  <>
    <Button kind="secondary" size="s" label="Clear" onClick={clear} />
    <Button
      kind="primary"
      size="s"
      label="Today"
      onClick={selectToday}
      disabled={!isTodaySelectable}
    />
  </>
);

/**
 * Field.Date renders a masked `MM/DD/YYYY` text input with a calendar
 * popover for picking a single day. Values are always `YYYY-MM-DD` strings.
 *
 * The calendar is [react-day-picker](https://daypicker.dev) styled with NDS
 * tokens; all behaviour lives in `useFieldDate`.
 */
export const FieldDate = forwardRef<HTMLInputElement, FieldDateProps>(
  (
    {
      label,
      id,
      value,
      onChange,
      minDate,
      maxDate,
      isDateUnavailable,
      renderFooter = renderDefaultFooter,
      shouldUseNativeOnTouch = true,
      isPortalled = false,
      errors = [],
      isDisabled = false,
      renderHelperText,
      className,
      ...rest
    },
    forwardedRef,
  ) => {
    const { errorId, rootProps, anchorProps, inputProps, calendar } =
      useFieldDate({
        id,
        label,
        value,
        onChange,
        ref: forwardedRef,
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
                components={{ Chevron }}
                footer={renderFooter(calendar.footerSetters)}
                {...calendar.dayPickerProps}
              />
            )}
          </div>
        )}

        <FieldErrors id={errorId} errors={errors} />
      </div>
    );
  },
);

FieldDate.displayName = "Field.Date";
