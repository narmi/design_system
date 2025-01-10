import React from "react";

interface LoadingSkeletonProps {
  /** Loadable content area - will render normally unless `isLoading` is true. */
  children?: React.ReactNode;
  /** When `true`, the child content is replaced by the skeleton imitation. */
  isLoading?: boolean;
  /** The mask type that best represents the content. */
  content?: "paragraph" | "headerText";
  /**
   * Only applies if `content` prop is set to `paragraph`.
   * The number of lines to be shown by the skeleton.
   */
  lines?: number;
  /**
   * Only applies if `content` prop is set to `paragraph`.
   * When `true`, a skeletal title row will be shown above the first line.
   */
  showTitle?: boolean;
  /**
   * Only applies if `content` prop is set to `headerText`.
   * The size of the skeletal header text.
   */
  size?: "small" | "medium" | "large";
  /** Optional value for `data-testid` attribute */
  testId?: string;
}

/**
 * Used to mask a limited block of loadable content. When `isLoading` is set to true,
 * the content area will be replaced by a shadowed, skeletal imitation of the
 * pending content.
 */
const LoadingSkeleton = ({
  children,
  isLoading = false,
  content = "paragraph",
  lines = 3,
  showTitle = false,
  size = "medium",
  testId,
}: LoadingSkeletonProps) => {
  return isLoading ? (
    <div className="nds-loading-skeleton" data-testid={testId}>
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

export default LoadingSkeleton;
