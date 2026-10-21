import { useEffect, useRef } from "react";

/**
 * Calls `handler` on mousedown outside of the element held by `ref`.
 */
const useOnClickOutside = (
  ref: React.RefObject<HTMLElement | null>,
  handler: (event: MouseEvent) => void,
) => {
  // keep the latest handler without resubscribing the listener every render
  const handlerRef = useRef(handler);
  handlerRef.current = handler;

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      const el = ref.current;
      if (!el || el.contains(event.target as Node)) return;
      handlerRef.current(event);
    };
    document.addEventListener("mousedown", listener);
    return () => document.removeEventListener("mousedown", listener);
  }, [ref]);
};

export default useOnClickOutside;
