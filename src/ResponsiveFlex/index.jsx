import React from "react";
import PropTypes from "prop-types";
import useViewportSizes from "../hooks/useViewportSizes";

const VALID_GAPS = ["xs", "s", "m", "l", "xl"];
const VALID_SIZES = ["s", "m", "l", "xl"];
const VALID_DIRECTIONS = ["row", "column"];

export const getFlexDirection = ({
  viewportMatches,
  direction,
  toColumnAt,
  toRowAt,
  reverseAt,
}) => {
  let flexDirection = direction; // use initial direction as the default

  if (viewportMatches[toRowAt]) {
    flexDirection = "row";
  }

  if (viewportMatches[toColumnAt]) {
    flexDirection = "column";
  }

  // must be the final override, as we treat reverse as a separate concept from row/column
  if (viewportMatches[reverseAt]) {
    flexDirection = `${flexDirection}-reverse`;
  }

  console.info(flexDirection);
  return flexDirection;
};

/**
 * Responsive layout helper that allows developers to declaratively control
 * how flex items behave at different standard viewport sizes.
 */
const ResponsiveFlex = ({
  children,
  direction = "column",
  gapSize = "m",
  reverseAt,
  toColumnAt,
  toRowAt,
}) => {
  const viewportMatches = useViewportSizes();
  const flexDirection = getFlexDirection({
    viewportMatches,
    direction,
    toColumnAt,
    toRowAt,
    reverseAt,
  });
  const style = {
    display: "flex",
    flexDirection,
    gap: `var(--space-${gapSize})`,
    justifyContent: flexDirection.includes("reverse")
      ? "flex-end"
      : "flex-start",
  };
  return (
    <div className="nds-responsiveFlex" style={style}>
      {children}
    </div>
  );
};

ResponsiveFlex.propTypes = {
  /** Implicit flex children */
  children: PropTypes.arrayOf(PropTypes.node),
  /** Size of flex gap by token size (e.g. "xl") */
  gapSize: PropTypes.oneOf(VALID_GAPS),
  /** Initial flex direction  */
  direction: PropTypes.oneOf(VALID_DIRECTIONS),
  /** Breakpoint at which to reverse order of flex items */
  reverseAt: PropTypes.oneOf(VALID_SIZES),
  /** Breakpoint at which to change flex direction to column */
  toColumnAt: PropTypes.oneOf(VALID_SIZES),
  /** Breakpoint at which to change flex direction to row */
  toRowAt: PropTypes.oneOf(VALID_SIZES),
};

export default ResponsiveFlex;
