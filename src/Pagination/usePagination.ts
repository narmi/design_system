const MAX_VISIBLE_PAGES = 5;

interface UsePaginationOptions {
  /** The total number of pages */
  totalPages: number;
  /** The selected page by page number */
  selectedPageNumber?: number;
  /** The size of the visible window of pages */
  windowSize?: number;
}

type UsePaginationResult = {
  /** List of visible pages by page number */
  visiblePages: number[];
  /** The page number of the currently selected page */
  selectedPage: number;
  /** The index of the currently selected page */
  selectedIndex: number;
  /** Whether to show the first page button */
  showFirstPage: boolean;
  /** Whether to show the last page button */
  showLastPage: boolean;
  /** Whether to show previous arrow */
  showPrev: boolean;
  /** Whether to show next arrow */
  showNext: boolean;
};

/**
 * Create an array of consecutive numbers from start to end (inclusive)
 */
export const range = (start: number, end: number): number[] =>
  [...Array(end - start + 1)].map((_, i) => start + i);

/**
 * Calculate the sliding window of visible pages
 */
export const calculateVisiblePages = (
  totalPages: number,
  selectedPage: number,
  windowSize: number,
): number[] => {
  // If all pages fit in the window, show them all
  if (totalPages <= windowSize) {
    return range(1, totalPages);
  }

  // Reserve space for first/last page buttons when ellipsis are needed
  const showFirst = selectedPage > Math.ceil(windowSize / 2);
  const showLast = selectedPage <= totalPages - Math.floor(windowSize / 2);
  const ellipsisCount = [showFirst, showLast].filter(Boolean).length;
  const effectiveSize = ellipsisCount === 2 ? windowSize - 2 : windowSize;
  const halfWindow = Math.floor(effectiveSize / 2);

  // Calculate the centered window
  let start = selectedPage - halfWindow;
  let end = start + effectiveSize - 1;

  // Adjust bounds to stay within valid page range
  if (start < 1) {
    start = 1;
    end = effectiveSize;
  } else if (end > totalPages) {
    end = totalPages;
    start = totalPages - effectiveSize + 1;
  }

  return range(start, end);
};

/**
 * Headless hook for pagination attributes.
 * Creates a sliding window of visible pages with current selection centered.
 */
export const usePagination = ({
  totalPages,
  selectedPageNumber = 1,
  windowSize = MAX_VISIBLE_PAGES,
}: UsePaginationOptions): UsePaginationResult => {
  const normalizedTotalPages = Math.max(1, totalPages);
  const normalizedSelectedPage = Math.max(
    1,
    Math.min(selectedPageNumber, normalizedTotalPages),
  );

  const visiblePages = calculateVisiblePages(
    normalizedTotalPages,
    normalizedSelectedPage,
    windowSize,
  );

  return {
    visiblePages,
    selectedPage: normalizedSelectedPage,
    selectedIndex: visiblePages.indexOf(normalizedSelectedPage),
    showFirstPage: visiblePages[0] > 1,
    showLastPage: visiblePages[visiblePages.length - 1] < normalizedTotalPages,
    showPrev: normalizedSelectedPage > 1,
    showNext: normalizedSelectedPage < normalizedTotalPages,
  };
};
