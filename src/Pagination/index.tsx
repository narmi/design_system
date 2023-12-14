import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import cc from "classcat";
import Row from "../Row";

const noop = () => {};
const MAX_VISIBLE_PAGES = 5;

/**
 * Business logic for pagination; given a total number of pages
 * and the selected page, returns attributes used to render pagination
 *
 * @param {Number} totalPages
 * @param {Number} selectedPage
 * @returns {Object} attributes used to render pagination
 */
export const _getAttributes = (
  totalPages,
  selectedPage,
  segmentSize = MAX_VISIBLE_PAGES
) => {
  // create a list of page segments
  // each segment is an array of page numbers.
  const pageSegments = [...new Array(totalPages)]
    .map((p, i) => i + 1) // [1,2,3,4,5,6,7, ...]
    .reduce((segments, page, i) => {
      const segmentIndex = Math.floor(i / segmentSize);
      if (!segments[segmentIndex]) {
        segments[segmentIndex] = [];
      }
      segments[segmentIndex].push(page);
      return segments;
    }, []); // [[1,2,3,4,5], [6,7,8,9,10], ...]

  // Show the segment that has the selected page.
  // If out of bounds, default to first segment
  const visiblePages =
    pageSegments.filter((segment) => segment.includes(selectedPage))[0] ||
    pageSegments[0];
  const selectedIndex = visiblePages.indexOf(selectedPage);

  // show prev/next arrows unless we are in the first or last segment
  const showPrev = !visiblePages.includes(1);
  const showNext = !visiblePages.includes(totalPages);

  // only populate first/last pages when they are outside the visible segment
  const firstPage = !visiblePages.includes(1) && 1;
  const lastPage = !visiblePages.includes(totalPages) && totalPages;

  return {
    visiblePages,
    selectedIndex: selectedIndex >= 0 ? selectedIndex : 0,
    firstPage,
    lastPage,
    showPrev,
    showNext,
  };
};

interface PaginationProps {
  /**
   * Total number of pages
   * If the number of pages is 1, pagination will not render
   */
  totalPages: number;
  /**
   * Default selected page by page number (uncontrolled)
   */
  defaultSelectedPage?: number;
  /**
   * Selected page by page number (controlled).
   * In fully controlled mode, you **must** define an `onPageChange`
   * handler to update the value of the `selectedPage` prop.
   */
  selectedPage?: number;
  /**
   * Callback invoked when user selects a new page via page numbers or
   * previous/next arrows.
   *
   * Invoked with selected page number as the argument.
   */
  onPageChange?: (page: number) => void;
  /** Optional value for `data-testid` attribute */
  testId?: string;
}

/**
 * Component that allows users to navigate between pages of information.
 * Your application is responsible for setting the total number of pages and
 * responding to the `onPageChange` callback.
 *
 * The component will handle which page numbers to render, next and previous arrows,
 * and conditionally rendering first and last pages.
 *
 * If your pagination setup expectes a fully controlled component, you may set `defaultSelectedPage` on every `onPageChange` call.
 */
const Pagination = ({
  onPageChange = noop,
  totalPages = 1,
  defaultSelectedPage = 1,
  selectedPage: selectedPageControlled,
  testId,
}: PaginationProps) => {
  const isControlled = selectedPageControlled !== undefined;
  const [selectedPage, setSelectedPage] = useState(defaultSelectedPage);
  const [paginationAttributes, setPaginationAttributes] = useState(
    _getAttributes(totalPages, selectedPage)
  );

  useEffect(() => {
    const isOutOfBounds = totalPages < selectedPageControlled;
    if (isControlled) {
      setSelectedPage(isOutOfBounds ? 1 : selectedPageControlled);
      setPaginationAttributes(
        _getAttributes(totalPages, selectedPageControlled)
      );
    } else {
      setPaginationAttributes(_getAttributes(totalPages, selectedPage));
    }
  }, [totalPages, selectedPageControlled, selectedPage]);

  const {
    visiblePages,
    selectedIndex,
    showPrev,
    showNext,
    firstPage,
    lastPage,
  } = paginationAttributes;

  const handlePageClick = ({ target }) => {
    const page = parseInt(target.dataset.page, 10);
    if (!isControlled) {
      setSelectedPage(page);
    }
    onPageChange(page);
  };

  const handlePrevClick = () => {
    const newSelectedPage = selectedPage - 1;
    if (!isControlled) {
      setSelectedPage(newSelectedPage);
    }
    onPageChange(newSelectedPage);
  };

  const handleNextClick = () => {
    const newSelectedPage = selectedPage + 1;
    if (!isControlled) {
      setSelectedPage(newSelectedPage);
    }
    onPageChange(newSelectedPage);
  };

  const pagination = (
    <div className="nds-typography nds-pagination" data-testid={testId}>
      <nav aria-label="pagination">
        <Row gapSize="xxs" alignItems="center" as="ul">
          <Row.Item as="li" shrink>
            <span
              role="button"
              tabIndex={0}
              aria-disabled={!showPrev}
              aria-label="Previous page"
              onClick={handlePrevClick}
              onKeyUp={({ key }) => {
                if (key === "Enter") {
                  handlePrevClick();
                }
              }}
              className={cc([
                "nds-pagination-page",
                "padding--none",
                {
                  "nds-pagination-page--disabled": !showPrev,
                },
              ])}
            >
              <i role="img" className="narmi-icon-chevron-left fontSize--l"></i>
            </span>
          </Row.Item>

          {firstPage && (
            <Row.Item as="li" shrink>
              <span
                role="button"
                tabIndex={0}
                aria-label="First page"
                onClick={handlePageClick}
                onKeyUp={(e) => {
                  if (e.key === "Enter") {
                    handlePageClick(e);
                  }
                }}
                data-page={firstPage}
                className="nds-pagination-page"
              >
                {firstPage.toString()}
              </span>
            </Row.Item>
          )}
          {firstPage && (
            <Row.Item as="li" shrink>
              <div className="nds-pagination-ellipsis">&hellip;</div>
            </Row.Item>
          )}

          {visiblePages.map((page, i) => (
            <Row.Item as="li" key={page} shrink>
              <span
                role="button"
                tabIndex={0}
                className={cc([
                  "nds-pagination-page",
                  {
                    "nds-pagination-page--selected": i === selectedIndex,
                  },
                ])}
                data-page={page}
                onClick={handlePageClick}
                onKeyUp={(e) => {
                  if (e.key === "Enter") {
                    handlePageClick(e);
                  }
                }}
                aria-label={`Page ${page}`}
              >
                {page.toString()}
              </span>
            </Row.Item>
          ))}

          {lastPage && (
            <Row.Item as="li" shrink>
              <div className="nds-pagination-ellipsis">&hellip;</div>
            </Row.Item>
          )}
          {lastPage && (
            <Row.Item as="li" shrink>
              <span
                role="button"
                tabIndex={0}
                aria-label="Last page"
                onClick={handlePageClick}
                onKeyUp={(e) => {
                  if (e.key === "Enter") {
                    handlePageClick(e);
                  }
                }}
                data-page={lastPage}
                className="nds-pagination-page"
              >
                {lastPage.toString()}
              </span>
            </Row.Item>
          )}

          <Row.Item as="li" shrink>
            <span
              role="button"
              tabIndex={0}
              aria-disabled={!showNext}
              aria-label="Next page"
              onClick={handleNextClick}
              onKeyUp={({ key }) => {
                if (key === "Enter") {
                  handleNextClick();
                }
              }}
              className={cc([
                "nds-pagination-page",
                "padding--none",
                {
                  "nds-pagination-page--disabled": !showNext,
                },
              ])}
            >
              <i
                role="img"
                className="narmi-icon-chevron-right fontSize--l"
              ></i>
            </span>
          </Row.Item>
        </Row>
      </nav>
    </div>
  );

  return totalPages > 1 ? pagination : <></>;
};

Pagination.propTypes = {
  /**
   * Total number of pages
   * If the number of pages is 1, pagination will not render
   */
  totalPages: PropTypes.number.isRequired,
  /**
   * Default selected page by page number (uncontrolled)
   */
  defaultSelectedPage: PropTypes.number,
  /**
   * Selected page by page number (controlled).
   * In fully controlled mode, you **must** define an `onPageChange`
   * handler to update the value of the `selectedPage` prop.
   */
  selectedPage: PropTypes.number,
  /**
   * Callback invoked when user selects a new page via page numbers or
   * previous/next arrows.
   *
   * Invoked with selected page number as the argument.
   */
  onPageChange: PropTypes.func,
  /** Optional value for `data-testid` attribute */
  testId: PropTypes.string,
};

export default Pagination;
