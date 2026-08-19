import { useEffect } from "react";

/**
 * Hook for locking body scrolling while a component is mounted
 * @param isActive - applies scroll locking when `true`
 */
const useLockBodyScroll = (isActive: boolean): void => {
  useEffect(() => {
    if (isActive) {
      document.body.classList.add("overflow--hidden");
    }
    return () => {
      document.body.classList.remove("overflow--hidden");
    };
  }, [isActive]);
};

export default useLockBodyScroll;
