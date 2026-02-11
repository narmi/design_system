import React, { useState } from "react";
import PropTypes from "prop-types";
import cc from "classcat";
import { usePagination } from "./usePagination";

const noop = () => {};

/**
 * Component that allows users to navigate between pages of information.
 * Your application is responsible for setting the total number of pages and
 * responding to the `onPageChange` callback.
 *
 * The component will handle which page numbers to render, next and previous arrows,
 * and conditionally rendering first and last pages.
 *
 * If your pagination setup expects a fully controlled component, you may set `defaultSelectedPage` on every `onPageChange` call.
 */
const Pagination = ({
  onPageChange = noop,
  totalPages = 1,
  defaultSelectedPage = 1,
  selectedPage: selectedPageControlled,
  testId,
}) => {
  const isControlled = selectedPageControlled !== undefined;
  const [selectedPageInternal, setSelectedPageInternal] =
    useState(defaultSelectedPage);

  const selectedPage = isControlled
    ? selectedPageControlled
    : selectedPageInternal;

  const {
    visiblePages,
    selectedIndex,
    showPrev,
    showNext,
    showFirstPage,
    showLastPage,
  } = usePagination({
    totalPages,
    selectedPageNumber: selectedPage,
  });

  const handlePageClick = ({ target }) => {
    const targetPage = parseInt(target.dataset.page, 10);
    if (!isControlled) {
      setSelectedPageInternal(targetPage);
    }
    onPageChange(targetPage);
  };

  const handlePrevClick = () => {
    const previousPage = selectedPage - 1;
    if (!isControlled) {
      setSelectedPageInternal(previousPage);
    }
    onPageChange(previousPage);
  };

  const handleNextClick = () => {
    const nextPage = selectedPage + 1;
    if (!isControlled) {
      setSelectedPageInternal(nextPage);
    }
    onPageChange(nextPage);
  };

  const pagination = (
    <div className="nds-typography nds-pagination" data-testid={testId}>
      <nav aria-label="pagination">
        <ul>
          <li>
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
              <i
                role="img"
                className="narmi-icon-chevron-left fontSize--xl"
              ></i>
            </span>
          </li>

          {showFirstPage && (
            <li>
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
                data-page={1}
                className="nds-pagination-page"
              >
                1
              </span>
            </li>
          )}
          {showFirstPage && (
            <li>
              <div className="nds-pagination-ellipsis">&hellip;</div>
            </li>
          )}

          {visiblePages.map((page, i) => (
            <li key={`page-${page}`}>
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
                aria-current={i === selectedIndex && "page"}
              >
                {page.toString()}
              </span>
            </li>
          ))}

          {showLastPage && (
            <li>
              <div className="nds-pagination-ellipsis">&hellip;</div>
            </li>
          )}
          {showLastPage && (
            <li>
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
                data-page={totalPages}
                className="nds-pagination-page"
              >
                {totalPages.toString()}
              </span>
            </li>
          )}

          <li>
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
                className="narmi-icon-chevron-right fontSize--xl"
              ></i>
            </span>
          </li>
        </ul>
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
