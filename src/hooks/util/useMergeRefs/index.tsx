import { useMemo } from "react";

/**
 * Merges multiple refs into a single ref callback.
 * Useful for components that support both forwarded refs _and_ internal refs to the same element.
 */
export function useMergeRefs<T>(
  ...refs: Array<React.Ref<T> | undefined | null>
) {
  return useMemo(() => {
    if (refs.every((ref) => ref == null)) return null;

    return (value: T) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(value);
        } else if (ref) {
          (ref as React.MutableRefObject<T | null>).current = value;
        }
      });
    };
  }, [refs]);
}
