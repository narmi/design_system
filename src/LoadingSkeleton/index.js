import React from "react";
import PropTypes from "prop-types";

/**
 * Used to mask a limited block of loadable content. When `isLoading` is set to true,
 * the content area will be be replaced by a shadowed, skeletal imitation of the
 * pending content.
 */

 const ParagraphSkeleton = ({ lines=3, showTitle=true}) => (
  <div className="nds-paragraph-skeleton">
    {showTitle && <div className="nds-line-block header" />}
    {[...Array(lines)].map((_, i) => <div className="nds-line-block" key={i} />)}
  </div>
);
ParagraphSkeleton.propTypes = {
  lines: PropTypes.number,
  showTitle: PropTypes.bool,
}

 const LoadingSkeleton = ({ children, isLoading=false, displayText="paragraph" }) => {
  return isLoading ?
    (
      <div className="nds-loading-skeleton">
        {displayText === "paragraph" && <ParagraphSkeleton />}
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
  displayText: PropTypes.oneOf(["paragraph"]),
}

export default LoadingSkeleton;