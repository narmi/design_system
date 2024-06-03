import React from "react";
import PropTypes from "prop-types";

const ProgressBar = ({ totalWidth = "100%", percentComplete = 0 }) => {
  return (
    <div
      className="nds-progressbar"
      style={{ width: `${totalWidth}`, height: "var(--font-size-default)" }}
    >
      <svg xmlns="http://www.w3.org/2000/svg">
        <line
          x1="0%"
          y1="50%"
          x2={`${percentComplete}%`}
          y2="50%"
          strokeWidth="100%"
        />
      </svg>
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
