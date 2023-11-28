import React from "react";
import PropTypes from "prop-types";

interface LoadingShimProps {
  /** Loadable content area - will render normally unless `isLoading` is true */
  children: React.ReactNode;
  /** When `true`, the loading shim appears over child content */
  isLoading?: boolean;
  /** Optional value for `data-testid` attribute */
  testId?: string;
}

/**
 * Used to wrap a block of loadable content. When `isLoading` is set to true,
 * the content area will have an overlay and loading animation.
 */
const LoadingShim = ({
  isLoading = false,
  children,
  testId,
}: LoadingShimProps) => (
  <div
    data-testid={testId || "nds-loadingshim"}
    aria-live="polite"
    aria-busy={isLoading}
    style={{ position: "relative" }}
  >
    {isLoading && (
      <div className="nds-loadingShim">
        <div
          title="Loading..."
          role="img"
          className="nds-loadingShim-indicator"
        >
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
        </div>
      </div>
    )}
    {children}
  </div>
);

LoadingShim.propTypes = {
  /** Loadable content area - will render normally unless `isLoading` is true */
  children: PropTypes.node.isRequired,
  /** When `true`, the loading shim appears over child content */
  isLoading: PropTypes.bool,
  /** Optional value for `data-testid` attribute */
  testId: PropTypes.string,
};

export default LoadingShim;
