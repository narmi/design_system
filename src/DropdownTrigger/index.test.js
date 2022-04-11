import React from "react";
import { render, screen } from "@testing-library/react";
import DropdownTrigger from "./";

describe("DropdownTrigger", () => {
  it("Renders with default props as expected", () => {
    render(<DropdownTrigger labelText="Account" />);
    expect(screen.getByText("Account")).toBeInTheDocument();
    expect(screen.queryByRole("img")).toBeInTheDocument();
  });

  it("Does NOT show label when `labelText` is not passed", () => {
    render(<DropdownTrigger labelText="Account" />);
    expect(screen.getByText("Account")).toBeInTheDocument();
  });

  it("Moves label into floating position when a displayValue is passed", () => {
    render(<DropdownTrigger labelText="Account" displayValue="Value" />);
    expect(screen.getByTestId("dropdownTriggerButton")).toHaveClass(
      "nds-dropdownTrigger-button--hasValue"
    );
  });

  it("Does NOT show open indicator when showOpenIndicator is set to false", () => {
    render(<DropdownTrigger labelText="Account" showOpenIndicator={false} />);
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("Shows correct label and icon in closed state", () => {
    render(<DropdownTrigger labelText="Account" />);
    expect(screen.queryByRole("img")).toHaveClass("narmi-icon-chevron-down");
  });

  it("Shows correct label and icon in open state", () => {
    render(<DropdownTrigger labelText="Account" isOpen />);
    expect(screen.queryByRole("img")).toHaveClass("narmi-icon-chevron-up");
  });

  it("Renders error state correctly when `errorText` is passed", () => {
    render(<DropdownTrigger labelText="Account" errorText="You did an oops" />);
    expect(screen.getByText("You did an oops")).toBeInTheDocument();
  });

  it("spreads labelProps on label element correctly", () => {
    render(
      <DropdownTrigger
        labelText="Account"
        labelProps={{
          htmlFor: "somefield",
        }}
      />
    );
    expect(screen.getByText("Account")).toHaveAttribute("for", "somefield");
  });

  it("spreads extra props onto the button element", () => {
    render(<DropdownTrigger labelText="Account" aria-haspopup="true" />);
    expect(screen.getByTestId("dropdownTriggerButton")).toHaveAttribute(
      "aria-haspopup",
      "true"
    );
  });
});
