import React from "react";
import PropTypes from "prop-types";

/**
 * Used to wrap a block of loadable content. When `isLoading` is set to true,
 * the content area will have an overlay and loading animation.
 */
const LoadingShim = ({ isLoading = false, children }) => (
  <div
    data-testid="nds-loadingshim"
    aria-live="polite"
    aria-busy={isLoading.toString()}
    style={{ position: "relative" }}
  >
    {isLoading && (
      <div className="nds-loadingShim">
        <div
          title="Loading..."
          role="image"
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
};

export default LoadingShim;
