import { useEffect, useRef, useState } from "react";
import cc from "classcat";
import { useMaskito } from "@maskito/react";
import { useField } from "../useField";
import { useMergeRefs } from "../../hooks/useMergeRefs";
import useDropdownLayer from "../../hooks/useDropdownLayer";
import useMediaQuery from "../../hooks/useMediaQuery";
import { FIELD_MASKS } from "../masks";
import {
  isSelectable,
  parseDisplay,
  toDate,
  toDisplay,
  toIso,
} from "./dateUtils";

import type { DayPickerProps } from "react-day-picker";
import type { DateConstraints } from "./dateUtils";

/**
 * `pointer` describes the device's *primary* pointer, so a touchscreen
 * laptop driven by a trackpad keeps the custom calendar while a phone or
 * tablet gets the native picker. (`any-pointer` would match the laptop too.)
 */
export const TOUCH_DEVICE_QUERY = "(pointer: coarse)";

export interface UseFieldDateOptions extends DateConstraints {
  id?: string;
  label: string;
  /** `YYYY-MM-DD`, or `""` when no valid date is set */
  value: string;
  onChange: (iso: string) => void;
  errors?: string[];
  isDisabled?: boolean;
  isPortalled?: boolean;
  /** Render a native `<input type="date">` on coarse-pointer devices */
  shouldUseNativeOnTouch?: boolean;
  className?: string;
}

/** Whether a focus event moved focus between two elements inside the target */
const isFocusWithin = (e: React.FocusEvent) =>
  e.currentTarget.contains(e.relatedTarget);

/**
 * All of Field.Date's behaviour, separate from its markup: the typed draft
 * and its parsing, the native/custom mode switch, and the calendar popover.
 * The component spreads what comes back onto its elements and nothing more.
 *
 * The input follows the APG "date picker combobox" pattern: an editable
 * combobox whose popup is a dialog holding the calendar grid. The calendar
 * is open while focus is in the field. It closes when focus leaves, on
 * Escape, or on a selection; a click or ArrowDown on the input reopens it,
 * and ArrowDown again moves focus into the grid.
 *
 * `react-day-picker` only draws the grid; everything it needs is in
 * `calendar.dayPickerProps`, so it could be swapped out without touching
 * the component's public API.
 */
export const useFieldDate = ({
  id,
  label,
  value,
  onChange,
  minDate,
  maxDate,
  isDateUnavailable,
  errors = [],
  isDisabled = false,
  isPortalled = false,
  shouldUseNativeOnTouch = true,
  className,
}: UseFieldDateOptions) => {
  const { errorId, hasError, controlProps } = useField({
    id,
    errors,
    isDisabled,
  });
  const isTouchDevice = useMediaQuery(TOUCH_DEVICE_QUERY);
  const isNative = shouldUseNativeOnTouch && isTouchDevice;
  const constraints = { minDate, maxDate, isDateUnavailable };

  // What the user sees in the input. In custom mode this is `MM/DD/YYYY`
  // text; in native mode the browser speaks `YYYY-MM-DD` directly.
  // The draft can differ from `value` while the text is incomplete,
  // invalid or unavailable, so the user can see and fix what they typed.
  const toDraft = (iso: string) => (isNative ? iso : toDisplay(iso));
  const toValue = (text: string) => {
    const iso = isNative ? text : parseDisplay(text);
    return iso && isSelectable(iso, constraints) ? iso : "";
  };
  const [draft, setDraft] = useState(() => toDraft(value));

  // A `value` the draft doesn't already stand for came from the parent
  // (a reset, or a rejected change), so the draft follows it
  useEffect(() => {
    if (toValue(draft) !== value) setDraft(toDraft(value));
  }, [value, isNative]);

  const handleInput = (text: string) => {
    setDraft(text);
    const next = toValue(text);
    if (next !== value) onChange(next);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  // No mask on the native input: the browser owns its format
  const maskitoRef = useMaskito({
    options: isNative ? null : FIELD_MASKS.Date,
  });
  const mergedInputRef = useMergeRefs(
    inputRef,
    maskitoRef,
  ) as React.Ref<HTMLInputElement>;

  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    if (!isNative) setIsOpen(true);
  };
  const close = () => setIsOpen(false);
  const closeAndFocusInput = () => {
    inputRef.current?.focus();
    close();
  };

  // Disabling an open field closes it so its calendar can't be used
  useEffect(() => {
    if (isDisabled) close();
  }, [isDisabled]);

  const { anchorProps, layerProps } = useDropdownLayer({
    isOpen,
    isPortalled,
    matchWidth: false,
    ariaPopupType: "dialog",
  });

  const selectedDate = toDate(value);
  const calendarId = `${controlProps.id}-calendar`;

  const rootProps = {
    className: cc([
      "nds-field",
      "nds-field-date",
      {
        "nds-field--isDisabled": isDisabled,
        "nds-field--hasError": hasError,
      },
      className,
    ]),
    onFocus: (e: React.FocusEvent<HTMLDivElement>) => {
      if (!isFocusWithin(e)) open();
    },
    onBlur: (e: React.FocusEvent<HTMLDivElement>) => {
      if (!isFocusWithin(e)) close();
    },
    onKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Escape" && isOpen) {
        // Only the calendar closes, not a surrounding Dialog
        e.stopPropagation();
        closeAndFocusInput();
      } else if (e.key === "ArrowDown" && e.target === inputRef.current) {
        e.preventDefault();
        if (!isOpen) return open();
        // The grid keeps one day tabbable: the selection, or today
        e.currentTarget
          .querySelector<HTMLElement>('.nds-calendar [tabindex="0"]')
          ?.focus();
      }
    },
  };

  const inputProps = isNative
    ? {
        ...controlProps,
        ref: mergedInputRef,
        type: "date" as const,
        value: draft,
        min: minDate,
        max: maxDate,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
          handleInput(e.currentTarget.value),
      }
    : {
        ...controlProps,
        ref: mergedInputRef,
        type: "text" as const,
        inputMode: "numeric" as const,
        placeholder: "MM/DD/YYYY",
        autoComplete: "off",
        role: "combobox" as const,
        "aria-haspopup": "dialog" as const,
        "aria-expanded": isOpen,
        "aria-controls": calendarId,
        "aria-autocomplete": "none" as const,
        value: draft,
        onInput: (e: React.FormEvent<HTMLInputElement>) =>
          handleInput(e.currentTarget.value),
        onClick: open,
      };

  const calendar = isNative
    ? null
    : {
        isOpen,
        popoverProps: {
          id: calendarId,
          ref: layerProps.ref as React.Ref<HTMLDivElement>,
          style: layerProps.style as React.CSSProperties,
          role: "dialog" as const,
          "aria-label": `${label} calendar`,
          // Clicking around the calendar keeps focus (and so the calendar)
          // in place; the caption's <select>s are exempt since they need
          // focus to open
          onMouseDown: (e: React.MouseEvent<HTMLDivElement>) => {
            if (!(e.target instanceof HTMLSelectElement)) e.preventDefault();
          },
        },
        // Remounting on a typed date shows that date's month
        dayPickerKey: value,
        dayPickerProps: {
          mode: "single",
          required: true,
          selected: selectedDate,
          onSelect: (date: Date) => {
            handleInput(toDraft(toIso(date)));
            closeAndFocusInput();
          },
          // Opens on the selection; the picker falls back to today, clamped
          // into the navigable months
          defaultMonth: selectedDate,
          startMonth: toDate(minDate),
          endMonth: toDate(maxDate),
          disabled: (date: Date) => !isSelectable(toIso(date), constraints),
        } satisfies DayPickerProps,
      };

  return {
    errorId,
    rootProps,
    /** Spread onto `.nds-field-input-box` so the calendar anchors to it */
    anchorProps: {
      ref: anchorProps.ref as React.Ref<HTMLDivElement>,
      style: anchorProps.style as React.CSSProperties,
    },
    inputProps,
    /** `null` in native mode, where the browser supplies the picker */
    calendar,
  };
};
