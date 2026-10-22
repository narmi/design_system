import { useRef, useState } from "react";
import cc from "classcat";
import { useMaskito } from "@maskito/react";
import { useField } from "../useField";
import { useMergeRefs } from "../../hooks/util/useMergeRefs";
import useDropdownLayer from "../../hooks/layout/useDropdownLayer";
import useMediaQuery from "../../hooks/env/useMediaQuery";
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

/** Primary pointer only, so a touchscreen laptop keeps the custom calendar */
export const TOUCH_DEVICE_QUERY = "(pointer: coarse)";

export interface UseFieldDateOptions extends DateConstraints {
  id?: string;
  label: string;
  /** `YYYY-MM-DD`, or `""` when no valid date is set */
  value: string;
  onChange: (iso: string) => void;
  /** A ref to attach to the input, alongside the hook's own */
  ref?: React.Ref<HTMLInputElement>;
  errors?: string[];
  isDisabled?: boolean;
  isPortalled?: boolean;
  /** Render a native `<input type="date">` on coarse-pointer devices */
  shouldUseNativeOnTouch?: boolean;
}

/** What a `renderFooter` function receives to act on the field */
export interface FieldDateFooterSetters {
  /** Clears the field (`onChange("")`); the calendar stays open */
  clear: () => void;
  /** Selects today, if today is selectable; otherwise does nothing */
  selectToday: () => void;
  /** Closes the calendar and returns focus to the input */
  close: () => void;
  /** Whether today is within `minDate`/`maxDate` and not unavailable */
  isTodaySelectable: boolean;
}

const isFocusWithin = (e: React.FocusEvent) =>
  e.currentTarget.contains(e.relatedTarget);

/**
 * All of Field.Date's behaviour: the typed text and its parsing, the
 * native/custom mode switch, and the calendar popover. The component
 * spreads what comes back onto its elements.
 *
 * The input is an APG "date picker combobox": the calendar is open while
 * focus is in the field, closes on Escape or a selection, and ArrowDown
 * moves focus from the input into the grid.
 */
export const useFieldDate = ({
  id,
  label,
  value,
  onChange,
  ref,
  minDate,
  maxDate,
  isDateUnavailable,
  errors = [],
  isDisabled = false,
  isPortalled = false,
  shouldUseNativeOnTouch = true,
}: UseFieldDateOptions) => {
  const { errorId, hasError, controlProps } = useField({
    id,
    errors,
    isDisabled,
  });
  const isTouchDevice = useMediaQuery(TOUCH_DEVICE_QUERY);
  const isNative = shouldUseNativeOnTouch && isTouchDevice;
  const constraints = { minDate, maxDate, isDateUnavailable };

  // The text is what the user sees (`MM/DD/YYYY`, or ISO in native mode).
  // It can differ from `value` while the text is incomplete or unselectable.
  const toText = (iso: string) => (isNative ? iso : toDisplay(iso));
  const toValue = (input: string) => {
    const iso = isNative ? input : parseDisplay(input);
    return iso && isSelectable(iso, constraints) ? iso : "";
  };
  // What was last typed is shown while it still agrees with `value`; the
  // moment the parent sets something else (a reset, a rejected change), `value` wins
  const [typed, setTyped] = useState("");
  const isTypedCurrent = toValue(typed) === value;
  if (!isTypedCurrent && typed !== "") {
    setTyped("");
  }
  const text = isTypedCurrent ? typed : toText(value);

  const handleInput = (nextText: string) => {
    setTyped(nextText);
    const next = toValue(nextText);
    if (next !== value) onChange(next);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const maskitoRef = useMaskito({
    options: isNative ? null : FIELD_MASKS.Date,
  });
  const mergedInputRef = useMergeRefs(
    ref,
    inputRef,
    maskitoRef,
  ) as React.Ref<HTMLInputElement>;

  const [wantsOpen, setWantsOpen] = useState(false);
  if (wantsOpen && (isDisabled || isNative)) {
    setWantsOpen(false);
  }
  const isOpen = wantsOpen && !isDisabled && !isNative;
  const open = () => setWantsOpen(true);
  const close = () => setWantsOpen(false);
  const closeAndFocusInput = () => {
    inputRef.current?.focus();
    close();
  };

  const { anchorProps, layerProps } = useDropdownLayer({
    isOpen,
    isPortalled,
    matchWidth: false,
    ariaPopupType: "dialog",
  });

  const selectedDate = toDate(value);
  const calendarId = `${controlProps.id}-calendar`;

  const todayIso = toIso(new Date());
  const isTodaySelectable = isSelectable(todayIso, constraints);
  const footerSetters: FieldDateFooterSetters = {
    clear: () => handleInput(""),
    selectToday: () => {
      if (isTodaySelectable) handleInput(toText(todayIso));
    },
    close: closeAndFocusInput,
    isTodaySelectable,
  };

  const rootProps = {
    className: cc([
      "nds-field",
      "nds-field-date",
      {
        "nds-field--isDisabled": isDisabled,
        "nds-field--hasError": hasError,
      },
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
      } else if (
        !isNative &&
        e.key === "ArrowDown" &&
        e.target === inputRef.current
      ) {
        e.preventDefault();
        if (!isOpen) return open();
        e.currentTarget
          .querySelector<HTMLElement>('.nds-calendar [tabindex="0"]')
          ?.focus();
      }
    },
  };

  const inputProps = {
    ...controlProps,
    ref: mergedInputRef,
    value: text,
    // `onInput`, not `onChange`: the mask rewrites the value behind React's back
    onInput: (e: React.FormEvent<HTMLInputElement>) =>
      handleInput(e.currentTarget.value),
    ...(isNative
      ? { type: "date", min: minDate, max: maxDate }
      : {
          type: "text",
          inputMode: "numeric",
          placeholder: "MM/DD/YYYY",
          autoComplete: "off",
          role: "combobox",
          "aria-haspopup": "dialog",
          "aria-expanded": isOpen,
          "aria-controls": calendarId,
          "aria-autocomplete": "none",
          onClick: open,
        }),
  } satisfies React.ComponentProps<"input">;

  const calendar = isNative
    ? null
    : {
        isOpen,
        footerSetters,
        popoverProps: {
          id: calendarId,
          ref: layerProps.ref as React.Ref<HTMLDivElement>,
          style: layerProps.style as React.CSSProperties,
          role: "dialog" as const,
          "aria-label": `${label} calendar`,
          // Clicks inside the calendar keep focus (and so the calendar) in place
          onMouseDown: (e: React.MouseEvent) => e.preventDefault(),
        },
        dayPickerKey: value,
        dayPickerProps: {
          className: "nds-calendar",
          mode: "single",
          required: true,
          navLayout: "around",
          captionLayout: "label",
          fixedWeeks: true,
          showOutsideDays: false,
          selected: selectedDate,
          onSelect: (date: Date) => {
            handleInput(toText(toIso(date)));
            closeAndFocusInput();
          },
          defaultMonth: selectedDate,
          startMonth: toDate(minDate),
          endMonth: toDate(maxDate),
          disabled: (date: Date) => !isSelectable(toIso(date), constraints),
        } satisfies DayPickerProps,
      };

  return {
    errorId,
    rootProps,
    anchorProps: {
      ref: anchorProps.ref as React.Ref<HTMLDivElement>,
      style: anchorProps.style as React.CSSProperties,
    },
    inputProps,
    /** `null` in native mode, where the browser supplies the picker */
    calendar,
  };
};
