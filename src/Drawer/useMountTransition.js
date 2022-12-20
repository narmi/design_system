import { useEffect, useState } from "react";

/**
 * Hook to allow transitioning a component when it enters or leaves the DOM. Based on Ryan Finni's
 * article on https://letsbuildui.dev/articles/building-a-drawer-component-with-react-portals
 * @param {Boolean} isMounted - whether the component is mounted
 * @param {number} unmountDelay - delay of animation in ms
 */
const useMountTransition = (isMounted, unmountDelay) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (isMounted && !isTransitioning) {
      setIsTransitioning(true);
    } else if (!isMounted && isTransitioning) {
      timeoutId = setTimeout(() => setIsTransitioning(false), unmountDelay);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [unmountDelay, isMounted, isTransitioning]);

  return isTransitioning;
};

export default useMountTransition;
