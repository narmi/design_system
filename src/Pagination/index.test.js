import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Pagination, { _getAttributes } from "./";

const CLASS_SELECTED = "nds-pagination-page--selected";

describe("Pagination", () => {
  describe("getAttributes", () => {
    it("shows pages 1-5 for 5 total pages", () => {
      const { visiblePages } = _getAttributes(5);
      expect(visiblePages).toEqual([1, 2, 3, 4, 5]);
    });

    it("shows pages 6-10 when 8 of 10 is selected", () => {
      const { visiblePages } = _getAttributes(10, 8);
      expect(visiblePages).toEqual([6, 7, 8, 9, 10]);
    });

    it("does NOT show previous arrow when rendering first 5 pages", () => {
      const { showPrev } = _getAttributes(10);
      expect(showPrev).toBeFalsy();
    });

    it("shows previous arrow when page 6 or above is selected", () => {
      const { showPrev } = _getAttributes(10, 6);
      expect(showPrev).toBeTruthy();
    });

    it("shows next arrow when total is higher than highest visible page", () => {
      const { showNext } = _getAttributes(10, 1);
      expect(showNext).toBeTruthy();
    });

    it("does NOT show next arrow when last page is visible", () => {
      const { showNext } = _getAttributes(10, 9);
      expect(showNext).toBeFalsy();
    });

    it("shows last page when 2 is selected of 20", () => {
      const total = 20;
      const { lastPage } = _getAttributes(total, 2);
      expect(lastPage).toBe(total);
    });

    it("does NOT show last page when 18 is selected of 20", () => {
      const total = 20;
      const { lastPage } = _getAttributes(total, 18);
      expect(lastPage).toBeFalsy();
    });

    it("shows first page when 8 is selected of 20", () => {
      const { firstPage } = _getAttributes(20, 8);
      expect(firstPage).toBe(1);
    });

    it("does NOT show first page when 4 is selected of 20", () => {
      const { firstPage } = _getAttributes(20, 4);
      expect(firstPage).toBeFalsy();
    });
  });

  describe("Component render and interaction", () => {
    it("Clicking on page 3 changes selected page", () => {
      const handlePageChange = jest.fn();
      render(<Pagination totalPages={20} onPageChange={handlePageChange} />);
      const page3 = screen.getByLabelText("Page 3");

      expect(handlePageChange).not.toHaveBeenCalled();
      expect(page3).not.toHaveClass(CLASS_SELECTED);

      fireEvent.click(page3);

      expect(handlePageChange).toHaveBeenCalledWith(3);
      expect(page3).toHaveClass(CLASS_SELECTED);
    });

    it("Clicking on next arrow changes selected page", () => {
      const handlePageChange = jest.fn();
      render(<Pagination totalPages={20} onPageChange={handlePageChange} />);
      const next = screen.getByLabelText("Next page");
      const page2 = screen.getByLabelText("Page 2");

      expect(handlePageChange).not.toHaveBeenCalled();
      expect(page2).not.toHaveClass(CLASS_SELECTED);

      fireEvent.click(next);

      expect(handlePageChange).toHaveBeenCalledWith(2);
      expect(page2).toHaveClass(CLASS_SELECTED);
    });

    it("Clicking on previous arrow changes selected page", () => {
      const handlePageChange = jest.fn();
      render(
        <Pagination
          totalPages={20}
          onPageChange={handlePageChange}
          defaultSelectedPage={10}
        />
      );
      const prev = screen.getByLabelText("Previous page");
      const page9 = screen.getByLabelText("Page 9");

      expect(handlePageChange).not.toHaveBeenCalled();
      expect(page9).not.toHaveClass(CLASS_SELECTED);

      fireEvent.click(prev);

      expect(handlePageChange).toHaveBeenCalledWith(9);
      expect(page9).toHaveClass(CLASS_SELECTED);
    });

    it("Clicking on first page changes selected page", () => {
      const handlePageChange = jest.fn();
      render(
        <Pagination
          totalPages={20}
          onPageChange={handlePageChange}
          defaultSelectedPage={10}
        />
      );
      const first = screen.getByLabelText("First page");

      expect(handlePageChange).not.toHaveBeenCalled();
      expect(screen.queryByLabelText("Page 1")).not.toBeInTheDocument();

      fireEvent.click(first);

      expect(handlePageChange).toHaveBeenCalledWith(1);
      const page1 = screen.queryByLabelText("Page 1");
      expect(page1).toBeInTheDocument();
      expect(page1).toHaveClass(CLASS_SELECTED);
    });

    it("Clicking on last page changes selected page", () => {
      const handlePageChange = jest.fn();
      const total = 20;
      render(
        <Pagination
          totalPages={total}
          onPageChange={handlePageChange}
          defaultSelectedPage={4}
        />
      );
      const last = screen.getByLabelText("Last page");

      expect(handlePageChange).not.toHaveBeenCalled();
      expect(screen.queryByLabelText(`Page ${total}`)).not.toBeInTheDocument();

      fireEvent.click(last);

      expect(handlePageChange).toHaveBeenCalledWith(total);
      const page20 = screen.queryByLabelText(`Page ${total}`);
      expect(page20).toBeInTheDocument();
      expect(page20).toHaveClass(CLASS_SELECTED);
    });
  });
});
