import React, { useState } from "react";
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
  selectedPage = 1,
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

  // show the segment that has the selected page
  const visiblePages = pageSegments.filter((segment) =>
    segment.includes(selectedPage)
  )[0];
  const selectedIndex = visiblePages.indexOf(selectedPage);

  // show prev/next arrows unless we are in the first or last segment
  const showPrev = !visiblePages.includes(1);
  const showNext = !visiblePages.includes(totalPages);

  // only populate first/last pages when they are outside the visible segment
  const firstPage = !visiblePages.includes(1) && 1;
  const lastPage = !visiblePages.includes(totalPages) && totalPages;

  return {
    visiblePages,
    selectedIndex,
    firstPage,
    lastPage,
    showPrev,
    showNext,
  };
};

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
}) => {
  // no jokers allowed 🤡
  // - default to first page if default selected page is out of bounds
  // - enforce minimum of 1 pages
  if (defaultSelectedPage > totalPages || defaultSelectedPage < 1) {
    defaultSelectedPage = 1;
  }
  if (totalPages < 1) {
    totalPages = 1;
  }

  const [selectedPage, setSelectedPage] = useState(defaultSelectedPage);
  const {
    visiblePages,
    selectedIndex,
    showPrev,
    showNext,
    firstPage,
    lastPage,
  } = _getAttributes(totalPages, selectedPage);

  const handlePageClick = ({ target }) => {
    const page = parseInt(target.dataset.page, 10);
    setSelectedPage(page);
    onPageChange(page);
  };

  const handlePrevClick = () => {
    const newSelectedPage = selectedPage - 1;
    setSelectedPage(newSelectedPage);
    onPageChange(newSelectedPage);
  };

  const handleNextClick = () => {
    const newSelectedPage = selectedPage + 1;
    setSelectedPage(newSelectedPage);
    onPageChange(newSelectedPage);
  };

  const pagination = (
    <div className="nds-typography nds-pagination">
      <nav aria-label="pagination">
        <Row gapSize="xxs" alignItems="center" as="ul">
          <Row.Item as="li" shrink>
            <span
              role="button"
              aria-disabled={!showPrev}
              aria-label="Previous page"
              onClick={handlePrevClick}
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
                aria-label="First page"
                onClick={handlePageClick}
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
                className={cc([
                  "nds-pagination-page",
                  {
                    "nds-pagination-page--selected": i === selectedIndex,
                  },
                ])}
                data-page={page}
                onClick={handlePageClick}
                aria-label={`Page ${page}`}
                aria-current={i === selectedIndex && "page"}
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
                aria-label="Last page"
                onClick={handlePageClick}
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
              aria-disabled={!showNext}
              aria-label="Next page"
              onClick={handleNextClick}
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
   * Default selected page by page number.
   */
  defaultSelectedPage: PropTypes.number,
  /**
   * Callback invoked when user selects a new page via page numbers or
   * previous/next arrows.
   *
   * Invoked with selected page number as the argument.
   */
  onPageChange: PropTypes.func,
};

export default Pagination;
