import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContentCard from "./";

const testId = "ndsContentCard";

describe("Toggle", () => {
  it("renders without errors", () => {
    render(
      <ContentCard>
        <p>Hello world</p>
      </ContentCard>
    );
    expect(screen.getByText("Hello world")).toBeInTheDocument();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
    expect(screen.getByTestId(testId)).not.toHaveAttribute("aria-pressed");
  });

  it("sets correct classes for elevated card", () => {
    render(<ContentCard type="elevated">lol</ContentCard>);
    expect(screen.getByTestId(testId)).toHaveClass("nds-contentCard--elevated");
  });

  it("sets correct attributes and classes for interactive type", () => {
    render(<ContentCard type="interactive">lol</ContentCard>);
    const card = screen.getByTestId(testId);
    expect(screen.queryByRole("button")).toBeInTheDocument();
    expect(card).toHaveAttribute("aria-pressed", "false");
    expect(card).toHaveAttribute("tabIndex", "0");
    expect(card).toHaveClass("nds-contentCard--interactive");
  });

  it("fires onClick handler for `interactive` type", () => {
    const handleClick = jest.fn();
    render(
      <ContentCard type="interactive" onClick={handleClick}>
        lol
      </ContentCard>
    );
    expect(handleClick).not.toHaveBeenCalled();
    fireEvent.click(screen.getByTestId(testId));
    expect(handleClick).toHaveBeenCalled();
  });

  it("does NOT fire onClick handler for non-interactive types", () => {
    const handleClick = jest.fn();
    render(<ContentCard onClick={handleClick}>lol</ContentCard>);
    expect(handleClick).not.toHaveBeenCalled();
    fireEvent.click(screen.getByTestId(testId));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("sets correct attributes for `isSelected`", () => {
    render(
      <ContentCard type="interactive" isSelected={true} onCLick={() => {}}>
        lol
      </ContentCard>
    );
    const card = screen.getByTestId(testId);
    expect(card).toHaveAttribute("aria-pressed", "true");
  });

  it("does NOT set classes or attributes for `isSelected` for non-interactive types", () => {
    render(<ContentCard isSelected={true}>lol</ContentCard>);
    const card = screen.getByTestId(testId);
    expect(card).not.toHaveAttribute("aria-pressed");
  });
});
