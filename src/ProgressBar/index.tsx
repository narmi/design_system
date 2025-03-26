import React, { useLayoutEffect, useRef, useState } from "react";
import cc from "classcat";

interface ProgressBarProps {
  /**
   * Int from 0 to 100
   */
  percentComplete: number;
  /**
   * CSS Value; Total width of progress bar.
   * (e.g. "50%" or "200px")
   */
  totalWidth?: string;
  /**
   * Size (height) of the ProgressBar
   */
  size?: "s" | "m";
  /**
   * Flattens left and right sides of ProgressBar
   * when you want to create a full-bleed effect
   */
  fullBleed?: boolean;
}

const ProgressBar = ({
  totalWidth = "100%",
  percentComplete = 0,
  size = "m",
  fullBleed = false,
}: ProgressBarProps) => {
  const [currentPct, setCurrentPct] = useState(0);
  const lineRef = useRef<SVGLineElement>(null);
  const animateRef = useRef<SVGAnimateElement>(null);

  useLayoutEffect(() => {
    const animFrom = percentComplete === 0 ? percentComplete : currentPct;
    if (lineRef.current) {
      if (animateRef.current) {
        animateRef.current.setAttribute("from", `${animFrom}%`);
        animateRef.current.setAttribute("to", `${percentComplete}%`);
        animateRef.current.beginElement();
        setCurrentPct(percentComplete);
      }
    }
  }, [percentComplete]);

  return (
    <div
      className={cc([
        "nds-progressbar",
        `nds-progressbar--${size}`,
        {
          "nds-progressbar--fullBleed": fullBleed,
        },
      ])}
      style={{ width: `${totalWidth}` }}
    >
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
              dur="0.5s"
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

export default ProgressBar;
