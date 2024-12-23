import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Toggle from "./";

describe("Toggle", () => {
  it("renders without errors", () => {
    render(<Toggle />);
    expect(screen.getByRole("switch")).toBeInTheDocument();
  });

  it("fires change callback with expected state", () => {
    const handleChange = jest.fn();
    render(<Toggle onChange={handleChange} />);
    fireEvent.click(screen.getByRole("switch"));
    expect(handleChange).toHaveBeenLastCalledWith(true);
    fireEvent.click(screen.getByRole("switch"));
    expect(handleChange).toHaveBeenLastCalledWith(false);
  });

  it("acts as fully controlled component when `isActive` is passed", () => {
    const ControlledToggleWithHandler = () => {
      const [isActive, setIsActive] = useState(false);
      return (
        <>
          <Toggle
            label="Controlled Toggle"
            isActive={isActive}
            onChange={() => setIsActive((isActive) => !isActive)}
          />
          <button onClick={() => setIsActive(false)}>Reset</button>
        </>
      );
    };
    render(<ControlledToggleWithHandler />);
    expect(screen.getByRole("switch")).toHaveAttribute("aria-checked", "false");
    fireEvent.click(screen.getByRole("switch"));
    expect(screen.getByRole("switch")).toHaveAttribute("aria-checked", "true");
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("switch")).toHaveAttribute("aria-checked", "false");
  });
});
