import { renderHook } from "@testing-library/react";
import { usePagination } from "./usePagination";

describe("usePagination", () => {
  describe("visible pages", () => {
    it("shows all pages when they fit in window", () => {
      const { result } = renderHook(() => usePagination({ totalPages: 5 }));
      expect(result.current.visiblePages).toEqual([1, 2, 3, 4, 5]);
    });

    it("centers selected page when possible", () => {
      const { result } = renderHook(() =>
        usePagination({ totalPages: 10, selectedPageNumber: 6 }),
      );
      expect(result.current.visiblePages).toEqual([5, 6, 7]);
      expect(result.current.selectedIndex).toBe(1);
    });

    it("respects custom window size", () => {
      const { result } = renderHook(() =>
        usePagination({
          totalPages: 10,
          selectedPageNumber: 5,
          windowSize: 3,
        }),
      );
      expect(result.current.visiblePages).toEqual([5]);
      expect(result.current.selectedIndex).toBe(0);
    });
  });

  describe("navigation controls", () => {
    it("shows/hides prev/next arrows correctly", () => {
      const { result: firstPage } = renderHook(() =>
        usePagination({ totalPages: 10, selectedPageNumber: 1 }),
      );
      expect(firstPage.current.showPrev).toBe(false);
      expect(firstPage.current.showNext).toBe(true);

      const { result: lastPage } = renderHook(() =>
        usePagination({ totalPages: 10, selectedPageNumber: 10 }),
      );
      expect(lastPage.current.showPrev).toBe(true);
      expect(lastPage.current.showNext).toBe(false);
    });

    it("shows first/last page buttons when needed", () => {
      const { result } = renderHook(() =>
        usePagination({ totalPages: 20, selectedPageNumber: 10 }),
      );
      expect(result.current.showFirstPage).toBe(true);
      expect(result.current.showLastPage).toBe(true);
      expect(result.current.visiblePages.includes(1)).toBe(false);
      expect(result.current.visiblePages.includes(20)).toBe(false);
    });

    it("hides first/last buttons when all pages visible", () => {
      const { result } = renderHook(() =>
        usePagination({ totalPages: 5, selectedPageNumber: 3 }),
      );
      expect(result.current.showFirstPage).toBe(false);
      expect(result.current.showLastPage).toBe(false);
    });
  });

  describe("adjusts ellipsis", () => {
    it("reduces window size for ellipsis space", () => {
      const { result } = renderHook(() =>
        usePagination({
          totalPages: 20,
          selectedPageNumber: 10,
          windowSize: 5,
        }),
      );
      expect(result.current.visiblePages).toHaveLength(3);
      expect(result.current.visiblePages).toEqual([9, 10, 11]);
    });

    it("does NOT adjust window size when first page is in visible range", () => {
      const { result } = renderHook(() =>
        usePagination({
          totalPages: 20,
          selectedPageNumber: 1,
          windowSize: 5,
        }),
      );
      expect(result.current.visiblePages).toHaveLength(5);
      expect(result.current.visiblePages).toEqual([1, 2, 3, 4, 5]);
    });

    it("does NOT adjust window size when last page is in visible range", () => {
      const { result } = renderHook(() =>
        usePagination({
          totalPages: 20,
          selectedPageNumber: 20,
          windowSize: 5,
        }),
      );
      expect(result.current.visiblePages).toHaveLength(5);
      expect(result.current.visiblePages).toEqual([16, 17, 18, 19, 20]);
    });
  });
});
