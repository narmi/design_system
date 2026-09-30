import React from "react";
import Error from "../../Error";

export interface FieldErrorsProps {
  /**
   * Must match the `errorId` the control's `aria-describedby` points at.
   * `useField` derives both from the same field id.
   */
  id: string;
  /** Messages to announce. Renders an empty region when omitted. */
  errors?: string[];
}

/**
 * Internal presentational component: a Field's error live region.
 *
 * Shared by every Field variant so accessibility fixes land in one place
 * rather than being applied three times.
 *
 * Two things here are load-bearing and easy to undo by accident:
 *
 * 1. The container renders unconditionally, even with no errors. `useField`
 *    points the control's `aria-describedby` at this id, and a live region
 *    has to already be in the DOM for its first content to be announced —
 *    an early `return null` would silently break both.
 *
 * 2. Each message gets its own `<Error>`. `Error` also accepts a `string[]`,
 *    but that branch wraps them in its own `aria-live` region, which would
 *    nest one live region inside another.
 */
export const FieldErrors = ({ id, errors = [] }: FieldErrorsProps) => (
  <div className="nds-field-errors" id={id} aria-live="polite">
    {errors.map((error, i) => (
      <Error key={`${i}-${error}`} error={error} marginTop="none" />
    ))}
  </div>
);

FieldErrors.displayName = "FieldErrors";
