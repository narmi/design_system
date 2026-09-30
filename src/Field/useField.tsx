import { useId } from "react";

/**
 * Hook to handle common field logic and
 * orchestration of accessibility attributes.
 */
export const useField = ({
  id: customId,
  errors = [],
  isDisabled,
  label,
  showLabel = true,
}: {
  id?: string;
  errors?: string[];
  isDisabled?: boolean;
  /** Required to derive `labelProps` when the label is visually removed. */
  label?: string;
  /**
   * When false, the caller should not render a visible `<label>`; the
   * accessible name is supplied by `aria-label` instead.
   */
  showLabel?: boolean;
}) => {
  const generatedId = useId();
  const id = customId || generatedId;
  const errorId = `${id}-error`;
  const labelId = `${id}-label`;
  const hasError = errors.length > 0;

  return {
    id,
    errorId,
    labelId,
    hasError,
    showLabel,
    // Spread `...controlProps` onto the input or button element.
    controlProps: {
      id,
      disabled: isDisabled,
      "aria-invalid": hasError ? true : undefined,
      "aria-describedby": hasError ? errorId : undefined,
    },
    /**
     * Spread `...labelProps` onto the control *in addition to*
     * `controlProps` when the control has more than one associated
     * `<label>` (e.g. Field.Upload's drop zone), or when `showLabel` is
     * false. Pointing at a single `labelId` stops the accessible name from
     * concatenating every associated label; `aria-label` replaces it
     * outright when there is no visible label to point at.
     */
    labelProps: showLabel
      ? { "aria-labelledby": labelId }
      : { "aria-label": label },
  };
};
