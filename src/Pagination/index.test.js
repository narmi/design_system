import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "./";

const CLASS_SELECTED = "nds-pagination-page--selected";

describe("Pagination", () => {
  describe("Component render and interaction", () => {
    it("does not render pagination when totalPages is 1", () => {
      render(<Pagination totalPages={1} />);
      expect(screen.queryByLabelText("pagination")).not.toBeInTheDocument();
    });

    it("Clicking on page 3 changes selected page", () => {
      const handlePageChange = vi.fn();
      render(<Pagination totalPages={20} onPageChange={handlePageChange} />);
      const page3 = screen.getByLabelText("Page 3");

      expect(handlePageChange).not.toHaveBeenCalled();
      expect(page3).not.toHaveClass(CLASS_SELECTED);

      fireEvent.click(page3);

      expect(handlePageChange).toHaveBeenCalledWith(3);
      expect(page3).toHaveClass(CLASS_SELECTED);
    });

    it("Clicking on next arrow changes selected page", () => {
      const handlePageChange = vi.fn();
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
      const handlePageChange = vi.fn();
      render(
        <Pagination
          totalPages={20}
          onPageChange={handlePageChange}
          defaultSelectedPage={10}
        />,
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
      const handlePageChange = vi.fn();
      render(
        <Pagination
          totalPages={20}
          onPageChange={handlePageChange}
          defaultSelectedPage={10}
        />,
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

    it("Clicking previous arrow on the first page does not change selected page", () => {
      const handlePageChange = vi.fn();
      render(<Pagination totalPages={20} onPageChange={handlePageChange} />);
      const prev = screen.getByLabelText("Previous page");

      fireEvent.click(prev);

      expect(handlePageChange).not.toHaveBeenCalled();
      expect(screen.getByLabelText("Page 1")).toHaveClass(CLASS_SELECTED);
    });

    it("Clicking next arrow on the last page does not change selected page", () => {
      const handlePageChange = vi.fn();
      const total = 20;
      render(
        <Pagination
          totalPages={total}
          onPageChange={handlePageChange}
          defaultSelectedPage={total}
        />,
      );
      const next = screen.getByLabelText("Next page");

      fireEvent.click(next);

      expect(handlePageChange).not.toHaveBeenCalled();
      expect(screen.getByLabelText(`Page ${total}`)).toHaveClass(
        CLASS_SELECTED,
      );
    });

    it("Pressing Enter on the disabled previous arrow does not change selected page", () => {
      const handlePageChange = vi.fn();
      render(<Pagination totalPages={20} onPageChange={handlePageChange} />);
      const prev = screen.getByLabelText("Previous page");

      fireEvent.keyUp(prev, { key: "Enter" });

      expect(handlePageChange).not.toHaveBeenCalled();
      expect(screen.getByLabelText("Page 1")).toHaveClass(CLASS_SELECTED);
    });

    it("Pressing Enter on the disabled next arrow does not change selected page", () => {
      const handlePageChange = vi.fn();
      const total = 20;
      render(
        <Pagination
          totalPages={total}
          onPageChange={handlePageChange}
          defaultSelectedPage={total}
        />,
      );
      const next = screen.getByLabelText("Next page");

      fireEvent.keyUp(next, { key: "Enter" });

      expect(handlePageChange).not.toHaveBeenCalled();
      expect(screen.getByLabelText(`Page ${total}`)).toHaveClass(
        CLASS_SELECTED,
      );
    });

    it("Clicking previous arrow on the first page in controlled mode does not call onPageChange", () => {
      const handlePageChange = vi.fn();
      render(
        <Pagination
          totalPages={20}
          selectedPage={1}
          onPageChange={handlePageChange}
        />,
      );
      const prev = screen.getByLabelText("Previous page");

      fireEvent.click(prev);

      expect(handlePageChange).not.toHaveBeenCalled();
    });

    it("Clicking next arrow on the last page in controlled mode does not call onPageChange", () => {
      const handlePageChange = vi.fn();
      const total = 20;
      render(
        <Pagination
          totalPages={total}
          selectedPage={total}
          onPageChange={handlePageChange}
        />,
      );
      const next = screen.getByLabelText("Next page");

      fireEvent.click(next);

      expect(handlePageChange).not.toHaveBeenCalled();
    });

    it("Clicking previous arrow with an out-of-range controlled selectedPage emits the clamped page", () => {
      const handlePageChange = vi.fn();
      const total = 20;
      render(
        <Pagination
          totalPages={total}
          selectedPage={999}
          onPageChange={handlePageChange}
        />,
      );
      const prev = screen.getByLabelText("Previous page");

      fireEvent.click(prev);

      expect(handlePageChange).toHaveBeenCalledWith(total - 1);
    });

    it("Clicking on last page changes selected page", () => {
      const handlePageChange = vi.fn();
      const total = 20;
      render(
        <Pagination
          totalPages={total}
          onPageChange={handlePageChange}
          defaultSelectedPage={4}
        />,
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
