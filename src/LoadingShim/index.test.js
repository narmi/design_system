import React from "react";
import { render, screen } from "@testing-library/react";
import LoadingShim from "./";

describe("LoadingShim", () => {
  it("renders children without errors; does NOT show shim by default", () => {
    render(
      <LoadingShim>
        <p>child</p>
      </LoadingShim>
    );
    const child = screen.getByText("child");
    const wrapper = screen.getByTestId("nds-loadingshim");
    expect(child).toBeInTheDocument();
    expect(screen.queryByTitle("Loading...")).not.toBeInTheDocument();
    expect(wrapper).toHaveAttribute("aria-busy", "false");
  });

  it("renders loading shim when `isLoading` is true", () => {
    render(
      <LoadingShim isLoading={true}>
        <p>child</p>
      </LoadingShim>
    );
    const child = screen.getByText("child");
    const wrapper = screen.getByTestId("nds-loadingshim");
    expect(child).toBeInTheDocument();
    expect(screen.queryByTitle("Loading...")).toBeInTheDocument();
    expect(wrapper).toHaveAttribute("aria-busy", "true");
  });
});
