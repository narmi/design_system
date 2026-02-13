import { useId } from "react";

/**
 * Hook to handle common field logic and
 * orchestration of accessibility attributes.
 */
export const useField = ({
  id: customId,
  errors = [],
  isDisabled,
}: {
  id?: string;
  errors?: string[];
  isDisabled?: boolean;
}) => {
  const generatedId = useId();
  const id = customId || generatedId;
  const errorId = `${id}-error`;
  const hasError = errors.length > 0;

  return {
    id,
    errorId,
    hasError,
    // Spread `...controlProps` onto the input or button element.
    controlProps: {
      id,
      disabled: isDisabled,
      "aria-invalid": hasError ? true : undefined,
      "aria-describedby": hasError ? errorId : undefined,
    },
  };
};
