import React from "react";

export interface ShimmerTextProps {
  /** Text to display with the shimmer treatment */
  text: string;
  /** Optional value for `data-testid` attribute */
  testId?: string;
}

/**
 * Secondary text with a light highlight that sweeps across it.
 * Used to indicate a transient, in-progress state such as
 * "Generating response…".
 *
 * Renders as a polite live region (`role="status"`), so changes to `text`
 * are announced by assistive technology without interrupting the user.
 * The animation is disabled for users who prefer reduced motion.
 */
const ShimmerText = ({ text, testId }: ShimmerTextProps) => (
  <span role="status" className="nds-shimmer-text" data-testid={testId}>
    {text}
  </span>
);

export default ShimmerText;
