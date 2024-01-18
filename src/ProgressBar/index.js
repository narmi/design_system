import React from "react";
import PropTypes from "prop-types";

const ProgressBar = ({ totalWidth = 120, percentComplete = 0 }) => {
  return (
    <div
      className="nds-progressbar"
      style={{ width: `${totalWidth}px`, height: "18px" }}
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
   * Total width of progress bar
   */
  totalWidth: PropTypes.number,
  /**
   * Percent complete
   */
  percentComplete: PropTypes.number.isRequired,
};

export default ProgressBar;
