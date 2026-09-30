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
 */
export const FieldErrors = ({ id, errors = [] }: FieldErrorsProps) => (
  <div className="nds-field-errors" id={id} aria-live="polite">
    {errors.map((error, i) => (
      <Error key={`${i}-${error}`} error={error} marginTop="none" />
    ))}
  </div>
);

FieldErrors.displayName = "FieldErrors";
