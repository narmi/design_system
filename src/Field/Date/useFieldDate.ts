import { useCallback, useEffect, useRef, useState } from "react";
import { format } from "date-fns";
import { useField } from "../useField";
import useDropdownLayer from "../../hooks/useDropdownLayer";
import useMediaQuery from "../../hooks/useMediaQuery";
import {
  clampIso,
  isSelectable,
  parseDisplay,
  toDate,
  toDisplay,
  toIso,
} from "./dateUtils";

import type { DateConstraints } from "./dateUtils";
import type { Matcher, PropsSingleRequired } from "react-day-picker";

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
}

/**
 * All of Field.Date's behaviour, separate from its markup:
 * the typed draft and its parsing, the native/custom mode switch,
 * opening and closing the calendar, and where focus goes afterwards.
 *
 * `react-day-picker` only draws the grid; everything it needs is in
 * `calendarProps`, so it could be swapped out without touching the
 * component's public API.
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
}: UseFieldDateOptions) => {
  const field = useField({ id, errors, isDisabled });
  const isTouchDevice = useMediaQuery(TOUCH_DEVICE_QUERY);
  const isNative = shouldUseNativeOnTouch && isTouchDevice;
  const constraints = { minDate, maxDate, isDateUnavailable };

  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // What the user sees in the input. In custom mode this is `MM/DD/YYYY`
  // text; in native mode the browser speaks `YYYY-MM-DD` directly.
  // The draft can differ from `value` while the text is incomplete,
  // invalid or unavailable, so the user can see and fix what they typed.
  const toDraft = useCallback(
    (iso: string) => (isNative ? iso : toDisplay(iso)),
    [isNative],
  );
  const [draft, setDraft] = useState(() => toDraft(value));

  // The last value this hook reported, so a `value` change from the
  // parent (a reset, or a rejected change) can be told apart from an echo
  // of the user's own typing. Only the former replaces the draft.
  const reported = useRef(value);
  useEffect(() => {
    if (value !== reported.current) {
      reported.current = value;
      setDraft(toDraft(value));
    }
  }, [value]);

  // Switching modes changes the draft's format
  useEffect(() => {
    setDraft(toDraft(value));
  }, [isNative]);

  const commit = (iso: string | undefined) => {
    const next = iso && isSelectable(iso, constraints) ? iso : "";
    reported.current = next;
    if (next !== value) onChange(next);
  };

  // Focus moves to the trigger only once the calendar has unmounted:
  // while it's open the focus lock would pull focus straight back in.
  const shouldReturnFocus = useRef(false);
  const close = useCallback(({ returnFocus = true } = {}) => {
    shouldReturnFocus.current = returnFocus;
    setIsOpen(false);
  }, []);
  useEffect(() => {
    if (!isOpen && shouldReturnFocus.current) {
      shouldReturnFocus.current = false;
      triggerRef.current?.focus();
    }
  }, [isOpen]);
  const open = useCallback(() => {
    if (!isDisabled) setIsOpen(true);
  }, [isDisabled]);

  // Disabling an open field closes it so its calendar can't be used
  useEffect(() => {
    if (isDisabled && isOpen) close({ returnFocus: false });
  }, [isDisabled]);

  const { anchorProps, layerProps } = useDropdownLayer({
    isOpen,
    isPortalled,
    matchWidth: false,
    ariaPopupType: "dialog",
  });

  const selectedDate = toDate(value);
  const today = toIso(new Date());

  const inputProps = isNative
    ? {
        ...field.controlProps,
        ref: inputRef,
        type: "date" as const,
        value: draft,
        min: minDate,
        max: maxDate,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
          setDraft(e.currentTarget.value);
          commit(e.currentTarget.value);
        },
      }
    : {
        ...field.controlProps,
        ref: inputRef,
        type: "text" as const,
        inputMode: "numeric" as const,
        placeholder: "MM/DD/YYYY",
        autoComplete: "off",
        value: draft,
        onInput: (e: React.FormEvent<HTMLInputElement>) => {
          setDraft(e.currentTarget.value);
          commit(parseDisplay(e.currentTarget.value));
        },
        onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.altKey && e.key === "ArrowDown") {
            e.preventDefault();
            open();
          }
        },
      };

  const triggerProps = {
    ref: triggerRef,
    type: "button" as const,
    disabled: isDisabled,
    "aria-haspopup": "dialog" as const,
    "aria-expanded": isOpen,
    "aria-label": selectedDate
      ? `Change date, ${format(selectedDate, "MMMM d, yyyy")}`
      : "Choose date",
    onClick: () => (isOpen ? close() : open()),
  };

  const popoverProps = {
    ref: layerProps.ref as React.Ref<HTMLDivElement>,
    style: layerProps.style as React.CSSProperties,
    role: "dialog" as const,
    "aria-label": `${label} calendar`,
    onKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        close();
      }
    },
  };

  const disabledMatchers: Matcher[] = [
    ...(minDate ? [{ before: toDate(minDate)! }] : []),
    ...(maxDate ? [{ after: toDate(maxDate)! }] : []),
    ...(isDateUnavailable
      ? [(date: Date) => isDateUnavailable(toIso(date))]
      : []),
  ];

  const calendarProps: PropsSingleRequired & {
    disabled: Matcher[];
    defaultMonth: Date;
    startMonth?: Date;
    endMonth?: Date;
    autoFocus: boolean;
  } = {
    mode: "single",
    required: true,
    selected: selectedDate,
    onSelect: (date: Date) => {
      const iso = toIso(date);
      setDraft(toDraft(iso));
      commit(iso);
      close();
    },
    // Open on the selection, or on today clamped into the allowed range
    defaultMonth:
      selectedDate ?? toDate(clampIso(today, { minDate, maxDate }))!,
    startMonth: toDate(minDate),
    endMonth: toDate(maxDate),
    disabled: disabledMatchers,
    autoFocus: true,
  };

  return {
    ...field,
    isNative,
    isOpen,
    open,
    close,
    /** Spread onto `.nds-field-input-box` so the calendar anchors to it */
    anchorProps: {
      ref: anchorProps.ref as React.Ref<HTMLDivElement>,
      style: anchorProps.style as React.CSSProperties,
    },
    inputProps,
    triggerProps,
    popoverProps,
    calendarProps,
  };
};
