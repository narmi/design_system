import useSupportsMomentumScroll from "../useSupportsMomentumScroll";
import useLockBodyScroll from "../useLockBodyScroll";

/**
 * Hook to lock body scrolling only when the browser supports momentum touch.
 * @param {Boolean} isLocked - applies scroll lock IF the browser supports momentum scrolling
 * @returns {Boolean} true when all conditions are met to lock body scroll
 * @usage
 * ```jsx
 * useMomentumScrollLock(isLocked); // the return may be discarded
 * ```
 */
const useMomentumScrollLock = (isLocked) => {
  const supportsMomentumScroll = useSupportsMomentumScroll();
  const shouldLock = isLocked && supportsMomentumScroll;
  useLockBodyScroll(shouldLock);
  return shouldLock;
};

export default useMomentumScrollLock;
