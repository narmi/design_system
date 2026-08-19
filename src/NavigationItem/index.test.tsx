import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavigationItem from "./";

describe("NavigationItem", () => {
  it("maps `isSelected` to `aria-current=page`", () => {
    const { rerender } = render(
      <NavigationItem isSelected={true}>Accounts</NavigationItem>,
    );
    expect(screen.getByRole("button", { name: "Accounts" })).toHaveAttribute(
      "aria-current",
      "page",
    );

    rerender(<NavigationItem isSelected={false}>Accounts</NavigationItem>);
    expect(screen.getByRole("button", { name: "Accounts" })).not.toHaveAttribute(
      "aria-current",
    );
  });

  it("calls `onClick` when clicked", async () => {
    const onClick = vi.fn();
    render(<NavigationItem onClick={onClick}>Accounts</NavigationItem>);
    await userEvent.click(screen.getByRole("button", { name: "Accounts" }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("renders `endContent` as a sibling of the control", () => {
    render(
      <NavigationItem endContent={<span data-testid="end-content">More</span>}>
        Accounts
      </NavigationItem>,
    );

    const button = screen.getByRole("button", { name: "Accounts" });
    const endContent = screen.getByTestId("end-content");
    expect(button).not.toContainElement(endContent);
    expect(button.parentElement).toContainElement(endContent);
  });
});
