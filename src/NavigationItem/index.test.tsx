import React from "react";
import { render, screen } from "@testing-library/react";
import { NavigationItem } from "./";

describe("NavigationItem", () => {
  it("renders label as a phrasing span inside the button (no block children)", () => {
    render(<NavigationItem label="Dashboard" onClick={() => {}} />);
    const button = screen.getByRole("button", { name: "Dashboard" });
    const label = button.querySelector(".nds-navigationItem-label");
    expect(label?.tagName).toBe("SPAN");
    expect(label).toHaveTextContent("Dashboard");
    // The button must only contain phrasing content — never a block element.
    expect(button.querySelector("div")).toBeNull();
  });

  it("renders detail as a secondary span when provided", () => {
    render(
      <NavigationItem label="Admin" detail="2 users" onClick={() => {}} />,
    );
    const button = screen.getByRole("button");
    const detail = button.querySelector(".nds-navigationItem-detail");
    expect(detail?.tagName).toBe("SPAN");
    expect(detail).toHaveTextContent("2 users");
  });

  it("omits the detail span when no detail is provided", () => {
    render(<NavigationItem label="Admin" onClick={() => {}} />);
    const button = screen.getByRole("button");
    expect(button.querySelector(".nds-navigationItem-detail")).toBeNull();
  });

  it("maps isSelected to aria-current=page on the control", () => {
    render(<NavigationItem isSelected label="Admin" onClick={() => {}} />);
    expect(screen.getByRole("button")).toHaveAttribute("aria-current", "page");
  });

  it("renders endContent as a sibling of the control, not a child of it", () => {
    render(
      <NavigationItem
        label="Admin"
        onClick={() => {}}
        endContent={<span data-testid="end" />}
      />,
    );
    const button = screen.getByRole("button");
    const end = screen.getByTestId("end");
    expect(button.contains(end)).toBe(false);
  });
});
