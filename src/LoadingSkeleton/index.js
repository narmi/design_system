import React from "react";
import PropTypes from "prop-types";

/**
 * Used to mask a limited block of loadable content. When `isLoading` is set to true,
 * the content area will be be replaced by a shadowed, skeletal imitation of the
 * pending content.
 */

const LoadingSkeleton = ({
  children,
  isLoading=false,
  content="paragraph",
  lines=3,
  size="medium",
  title=false
}) => {
  return isLoading ?
    (
      <div className="nds-loading-skeleton">
        {content === "paragraph" &&
          <>
            {title && <div className="nds-line-block header" />}
            {[...Array(lines)].map((_, i) => <div className="nds-line-block" key={i} />)}
          </>
        }
        {content === "displayText" && <div className={`nds-line-block ${size}`} />}
      </div>
    ) :
    (
      <>
        {children}
      </>
    )
  }
LoadingSkeleton.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  content: PropTypes.oneOf(["paragraph", "displayText"]),
  lines: PropTypes.number,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  title: PropTypes.bool,
}

export default LoadingSkeleton;