import React from "react";
import { render, screen } from "@testing-library/react";
import SeparatorList from "./";

const items = [<span>One</span>, <span>Two</span>, <span>Three</span>];

describe("SeparatorList", () => {
  it("renders all items", () => {
    render(<SeparatorList items={items} />);
    ["One", "Two", "Three"].forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  it("passes correct separator value through to data attribute", () => {
    render(<SeparatorList items={items} separator="*" />);
    expect(document.querySelector("[data-separator]")).toHaveAttribute(
      "data-separator",
      "*"
    );
  });

  it("applies data separator class to all but last item", () => {
    render(<SeparatorList items={items} />);
    expect(document.querySelector("li:last-child")).not.toHaveAttribute(
      "data-separator"
    );
  });
});
