import { render } from "@testing-library/react";
import "@tanstack/react-query";
import Home from "../pages/index";
import { TEST_POST } from "../lib/testData";
import usePagination from "../hooks/Pagination";

jest.mock("@tanstack/react-query", () => ({
  useQuery: jest.fn(() => ({ isLoading: false, data: TEST_POST })),
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
      currentData: jest.fn(() => [TEST_POST]),
      currentPage: 1,
      totalPages: 1,
    });
  });

  test("renders Home component", () => {
    render(<Home />);
  });
});