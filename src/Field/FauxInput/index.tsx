import React, { forwardRef } from "react";
import cc from "classcat";

export interface FauxInputProps {
  children: React.ReactNode;
  /** When true, renders active (focused) border styling */
  isActive?: boolean;
  isDisabled?: boolean;
  hasError?: boolean;
  className?: string;
}

/**
 * Internal presentational component.
 * Renders a `<button>` styled to look like `.nds-field-input-box`.
 * Used by Field.Select (and future dropdown-based Field variants)
 * as the anchor/trigger element.
 *
 * Accepts arbitrary props (e.g. from downshift's getToggleButtonProps)
 * which are spread onto the underlying `<button>`.
 */
export const FauxInput = forwardRef<
  HTMLButtonElement,
  FauxInputProps & Record<string, any>
>(
  (
    {
      children,
      isActive = false,
      isDisabled = false,
      hasError = false,
      className,
      ...rest
    },
    ref,
  ) => (
    <button
      ref={ref}
      type="button"
      disabled={isDisabled}
      className={cc([
        "nds-field-input-box",
        "nds-field-faux-input",
        {
          "nds-field-faux-input--active": isActive,
          "nds-field-faux-input--hasError": hasError,
        },
        className,
      ])}
      {...rest}
    >
      {children}
    </button>
  ),
);

FauxInput.displayName = "FauxInput";
