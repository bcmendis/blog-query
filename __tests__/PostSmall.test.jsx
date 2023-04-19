import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import PostSmall from "../components/UI/PostSmall"
import { TEST_POST } from "../lib/testData";

describe("<Post />", () => {

  it("renders title", () => {
  render(<PostSmall post={TEST_POST} />);
    const title = screen.getByText('title 1')
    expect(title).toBeInTheDocument();
  });

  test("renders author images", () => {
    render(<PostSmall post={TEST_POST} />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBe(2);
  });
});