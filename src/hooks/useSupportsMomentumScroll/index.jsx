import { useEffect, useState } from "react";

/**
 * Checks if the browser supports momentum scrolling (i.e., smooth scrolling on touch devices).
 * @returns {Boolean} true when the browser supports momentum scrolling
 */
const useSupportsMomentumScroll = () => {
  const [hasMomentumScroll, setHasMomentumScroll] = useState(false);

  useEffect(() => {
    try {
      const testDiv = document.createElement("div");
      document.body.appendChild(testDiv);

      // Browsers that don't have touch scrolling will ignore the
      // vendor-prefixed rule here.
      testDiv.style.cssText = `
        -webkit-overflow-scrolling: touch;
        overflow: scroll;
        height: 10px;
        width: 10px;
        position: absolute;
        visibility: hidden;
      `;

      // Browsers that DO support the vendor-prefixed rule will store
      // it in computed styles.
      const computedStyle = window.getComputedStyle(testDiv);
      const isScrollable =
        computedStyle.getPropertyValue("-webkit-overflow-scrolling") ===
        "touch";

      document.body.removeChild(testDiv);

      // More evidence this is a touch device
      const hasTouchEvents = "ontouchstart" in window;

      setHasMomentumScroll(isScrollable && hasTouchEvents);
    } catch (e) {
      setHasMomentumScroll(false);
    }
  }, []); // Empty dependency array ensures it runs once on mount.

  return hasMomentumScroll;
};

export default useSupportsMomentumScroll;
