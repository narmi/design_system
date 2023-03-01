import React from "react";
import PropTypes from "prop-types";

const Spinner = ({
  size = 28,
  strokeWidth = 3,
  color = "var(--color-white)",
}) => (
  <div className="nds-spinner" style={{ height: size, width: size }}>
    <svg
      height={size}
      width={size}
      viewBox={`0 0 ${size} ${size}`}
    >
      <circle
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        className="nds-spinner-circle"
        cx="50%"
        cy="50%"
        r="25%"
      ></circle>
    </svg>
  </div>
);

Spinner.propTypes = {
  /**
   * Square size of spinner as unitless number
   */
  size: PropTypes.number,
  /**
   * Width of animated stroke
   */
  strokeWidth: PropTypes.number,
  /**
   * CSS color value
   */
  color: PropTypes.string,
}

export default Spinner;