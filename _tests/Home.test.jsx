import { render } from "@testing-library/react";
import "@tanstack/react-query";
import Home from "../pages/index";
import {DUMMY_DATA} from './DUMMY_DATA'
import usePagination from "../hooks/Pagination";

jest.mock("@tanstack/react-query", () => ({
  useQuery: jest.fn(() => ({ isLoading: false, data: DUMMY_DATA })),
}));

jest.mock("axios", () => ({
  get: jest.fn(() => Promise.resolve({ data: [] })),
}));

jest.mock("../hooks/Pagination");

describe("<Home />", () => {
  beforeEach(() => {
    usePagination.mockReturnValue({
      nextPage: jest.fn(),
      prevPage: jest.fn(),
      pageClick: jest.fn(),
      currentData: jest.fn(()=>[DUMMY_DATA]),
      currentPage: 1,
      totalPages: 1,
    });
  });

  test("renders Home component", () => {
    render(<Home />);
  });
});