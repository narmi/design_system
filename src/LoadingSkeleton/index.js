import React from "react";
import PropTypes from "prop-types";

/**
 * Used to mask a limited block of loadable content. When `isLoading` is set to true,
 * the content area will be be replaced by a shadowed, skeletal imitation of the
 * pending content.
 */

const LoadingSkeleton = ({
  children,
  isLoading = false,
  content = "paragraph",
  lines = 3,
  showTitle = false,
  size = "medium",
}) => {
  return isLoading ? (
    <div className="nds-loading-skeleton">
      {content === "paragraph" && (
        <>
          {showTitle && <div className="nds-line-block header" />}
          {[...Array(lines)].map((_, i) => (
            <div className="nds-line-block" key={i} />
          ))}
        </>
      )}
      {content === "headerText" && <div className={`nds-line-block ${size}`} />}
    </div>
  ) : (
    <>{children}</>
  );
};
LoadingSkeleton.propTypes = {
  /** Loadable content area - will render normally unless `isLoading` is true. */
  children: PropTypes.node,
  /** When `true`, the child content is replaced by the skeleton imitation. */
  isLoading: PropTypes.bool,
  /** The mask type that best represents the content. */
  content: PropTypes.oneOf(["paragraph", "headerText"]),
  /**
   * Only applies if `content` prop is set to `paragraph`.
   * The number of lines to be shown by the skeleton.
   */
  lines: PropTypes.number,
  /**
   * Only applies if `content` prop is set to `paragraph`.
   * When `true`, a skeletal title row will be shown above the first line.
   */
  showTitle: PropTypes.bool,
  /**
   * Only applies if `content` prop is set to `headerText`.
   * The size of the skeletal header text.
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default LoadingSkeleton;
