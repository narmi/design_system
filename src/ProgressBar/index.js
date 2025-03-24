import React, { useLayoutEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

// sizes:
// 4px
// 8px

// variants:
// - flat, full bleed w/o rounding

const ProgressBar = ({
  totalWidth = "100%",
  percentComplete = 0,
  dur = 0.25,
}) => {
  const [currentPct, setCurrentPct] = useState(0);
  const lineRef = useRef(null);
  const animateRef = useRef(null);

  useLayoutEffect(() => {
    if (lineRef.current) {
      if (animateRef.current) {
        // TODO: when `to` is 0, `from` must also be set to 0
        animateRef.current.setAttribute("from", `${currentPct}%`);
        animateRef.current.setAttribute("to", `${percentComplete}%`);
        animateRef.current.beginElement();
        setCurrentPct(percentComplete);
      }
    }
  }, [percentComplete]);

  return (
    <div className="nds-progressbar" style={{ width: `${totalWidth}` }}>
      {percentComplete > 0 && (
        <svg xmlns="http://www.w3.org/2000/svg">
          <line
            ref={lineRef}
            x1="0%"
            y1="50%"
            x2={`${currentPct}%`}
            y2="50%"
            strokeLinecap="round"
          >
            <animate
              ref={animateRef}
              attributeName="x2"
              from="0%"
              to="0%"
              dur={`${dur}s`}
              fill="freeze"
              restart="always"
              calcMode="spline"
              keyTimes="0;1"
              keySplines="0 0 0.5 1" // <https://cubic-bezier.com/#0,0,.5,1>
            />
          </line>
        </svg>
      )}
    </div>
  );
};

ProgressBar.propTypes = {
  /**
   * CSS Value; Total width of progress bar.
   * (e.g. "50%" or "200px")
   */
  totalWidth: PropTypes.string,
  /**
   * Percent complete
   */
  percentComplete: PropTypes.number.isRequired,
};

export default ProgressBar;
