import React from "react";
import PropTypes from "prop-types";
import cc from "classcat";

/**
 * Used to wrap a block of loadable content. When `isLoading` is set to true,
 * the content area will have an overlay and loading animation.
 */
const LoadingShim = ({ isLoading = false, children, testId, size = "l" }) => (
  <div
    data-testid={testId || "nds-loadingshim"}
    aria-live="polite"
    aria-busy={isLoading.toString()}
    style={{ position: "relative" }}
  >
    {isLoading && (
      <div
        className={cc([
          "nds-loadingShim",
          {
            "nds-loadingShim--small": size === "s",
          },
        ])}
      >
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
  /** Size of the loading indicator */
  size: PropTypes.oneOf(["s", "l"]),
};

export default LoadingShim;
