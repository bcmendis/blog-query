import { renderHook, act } from "@testing-library/react-hooks";
import usePagination from "../hooks/Pagination";
import {
  TEST_PAGINATION_DATA,
  TEST_PAGINATION_A,
  TEST_PAGINATION_B,
  TEST_PAGINATION_C, 
  TEST_PAGINATION_D } from "./testData"; 

describe("usePagination", () => {
  const data = TEST_PAGINATION_DATA;

  it("should return the correct number of pages", () => {
    const postsPerPage = 4;
    const { result } = renderHook(() => usePagination(data, postsPerPage));
    expect(result.current.totalPages).toEqual(3);
  });

  it("should return the correct data for the current page", () => {
    const postsPerPage = 3;
    const { result } = renderHook(() => usePagination(data, postsPerPage));
    expect(result.current.currentData()).toEqual(TEST_PAGINATION_A);

    act(() => {
      result.current.nextPage();
    });
    expect(result.current.currentData()).toEqual(TEST_PAGINATION_B);

    act(() => {
      result.current.prevPage();
    });
    expect(result.current.currentData()).toEqual(TEST_PAGINATION_C);

    act(() => {
      result.current.pageClick(3);
    });
    expect(result.current.currentData()).toEqual(TEST_PAGINATION_D);
  });

  it("should handle invalid data", () => {
    const postsPerPage = 3;
    const { result } = renderHook(() => usePagination(undefined, postsPerPage));
    expect(result.current).toBeNull();
  });
});
