import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Toggle from "./";

describe("Toggle", () => {
  it("renders without errors", () => {
    render(<Toggle />);
    expect(screen.getByRole("switch")).toBeInTheDocument();
  });

  it("renders as active when `defaultActive` prop is true", () => {
    render(<Toggle defaultActive={true} />);
    expect(screen.getByRole("switch")).toHaveAttribute("aria-checked", "true");
  });

  it("fires change callback with expected state", () => {
    const handleChange = jest.fn();
    render(<Toggle onChange={handleChange} />);
    fireEvent.click(screen.getByRole("switch"));
    expect(handleChange).toHaveBeenLastCalledWith(true);
    fireEvent.click(screen.getByRole("switch"));
    expect(handleChange).toHaveBeenLastCalledWith(false);
  });
});
