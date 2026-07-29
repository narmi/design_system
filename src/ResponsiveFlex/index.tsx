import React from "react";
import PropTypes from "prop-types";
import useBreakpoints from "../hooks/useBreakpoints";

const VALID_GAPS = ["xs", "s", "m", "l", "xl"];
const VALID_SIZES = ["s", "m", "l", "xl"];
const VALID_DIRECTIONS = ["row", "column"];

/** Standard Narmi breakpoint names */
export type ResponsiveFlexSize = "s" | "m" | "l" | "xl";
export type ResponsiveFlexGap = "xs" | "s" | "m" | "l" | "xl";
export type ResponsiveFlexDirection = "row" | "column";
export type FlexDirection =
  | ResponsiveFlexDirection
  | "row-reverse"
  | "column-reverse";

export interface GetFlexDirectionArgs {
  viewportMatches: Record<ResponsiveFlexSize, boolean>;
  direction: ResponsiveFlexDirection;
  toColumnAt?: ResponsiveFlexSize;
  toRowAt?: ResponsiveFlexSize;
  reverseAt?: ResponsiveFlexSize;
}

export const getFlexDirection = ({
  viewportMatches,
  direction,
  toColumnAt,
  toRowAt,
  reverseAt,
}: GetFlexDirectionArgs): FlexDirection => {
  let flexDirection: FlexDirection = direction; // use initial direction as the default

  if (toRowAt && viewportMatches[toRowAt]) {
    flexDirection = "row";
  }

  if (toColumnAt && viewportMatches[toColumnAt]) {
    flexDirection = "column";
  }

  // must be the final override, as we treat reverse as a separate concept from row/column
  if (reverseAt && viewportMatches[reverseAt]) {
    flexDirection = `${flexDirection}-reverse` as FlexDirection;
  }

  return flexDirection;
};

export interface ResponsiveFlexProps {
  /** Implicit flex children */
  children?: React.ReactNode;
  /** Size of flex gap by token size (e.g. "xl") */
  gapSize?: ResponsiveFlexGap;
  /** Initial flex direction  */
  direction?: ResponsiveFlexDirection;
  /** Breakpoint at which to reverse order of flex items */
  reverseAt?: ResponsiveFlexSize;
  /** Breakpoint at which to change flex direction to column */
  toColumnAt?: ResponsiveFlexSize;
  /** Breakpoint at which to change flex direction to row */
  toRowAt?: ResponsiveFlexSize;
}

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
}: ResponsiveFlexProps) => {
  const viewportMatches = useBreakpoints();
  const flexDirection = getFlexDirection({
    viewportMatches,
    direction,
    toColumnAt,
    toRowAt,
    reverseAt,
  });
  const style: React.CSSProperties = {
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
