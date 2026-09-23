import React from "react";
import { render, screen } from "@testing-library/react";
import ShimmerText from "./";

describe("ShimmerText", () => {
  it("renders the text as a status live region", () => {
    render(<ShimmerText text="Generating a response…" />);
    expect(screen.getByRole("status")).toHaveTextContent(
      "Generating a response…",
    );
  });

  it("applies testId", () => {
    render(<ShimmerText text="Working" testId="shimmer" />);
    expect(screen.getByTestId("shimmer")).toBeInTheDocument();
  });
});
