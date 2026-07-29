import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./";

/**
 * `Input` is an internal base component with no stories, so these tests are
 * its only regression net. They intentionally lock in *current* behavior
 * ahead of the TypeScript conversion, including the quirks noted below.
 */

const getRoot = (container) => container.querySelector(".nds-input");
const getColumn = (container) => container.querySelector(".nds-input-column");

describe("Input", () => {
  it("renders children inside the input column", () => {
    const { container } = render(
      <Input>
        <input type="text" />
      </Input>,
    );
    expect(getColumn(container).querySelector("input")).toBeInTheDocument();
  });

  it("renders a label bound to the given id", () => {
    const { container } = render(<Input id="my-input" label="My Label" />);
    const label = container.querySelector("label");
    expect(label).toHaveTextContent("My Label");
    expect(label).toHaveAttribute("for", "my-input");
  });

  it("does not render a label when multiline is true", () => {
    const { container } = render(<Input id="x" label="My Label" multiline />);
    expect(container.querySelector("label")).not.toBeInTheDocument();
  });

  it("adds `no-label` to the column when no label is given", () => {
    const { container } = render(<Input />);
    expect(getColumn(container)).toHaveClass("no-label");
  });

  it("does not add `no-label` when a label is given", () => {
    const { container } = render(<Input label="My Label" />);
    expect(getColumn(container)).not.toHaveClass("no-label");
  });

  it.each([
    ["disabled", { disabled: true }],
    ["error", { error: "Something broke" }],
    ["search", { search: true }],
  ])("applies the `%s` class to the root", (className, props) => {
    const { container } = render(<Input {...props} />);
    expect(getRoot(container)).toHaveClass(className);
  });

  /**
   * NOTE: documents a pre-existing bug rather than desired behavior.
   *
   * `Input` destructures `multiline` out of props, then checks
   * `props.multiline` when building the root className. That is always
   * `undefined`, so the "multiline" class has never actually been emitted.
   * There is no bare `.multiline` CSS selector, so nothing depends on it.
   */
  it("does NOT apply a `multiline` class to the root (known dead code)", () => {
    const { container } = render(<Input multiline />);
    expect(getRoot(container)).not.toHaveClass("multiline");
  });

  it("renders the error message by default", () => {
    render(<Input error="Something broke" />);
    expect(screen.getByText("Something broke")).toBeInTheDocument();
  });

  it("suppresses the error message when renderError is false", () => {
    render(<Input error="Something broke" renderError={false} />);
    expect(screen.queryByText("Something broke")).not.toBeInTheDocument();
  });

  it("renders start, end and tail content", () => {
    render(
      <Input
        startContent={<span>start</span>}
        endContent={<span>end</span>}
        tailContent={<span>tail</span>}
      />,
    );
    expect(screen.getByText("start")).toBeInTheDocument();
    expect(screen.getByText("end")).toBeInTheDocument();
    expect(screen.getByText("tail")).toBeInTheDocument();
  });

  it("renders start and end icon classes", () => {
    const { container } = render(
      <Input startIconClass="narmi-icon-search" endIconClass="narmi-icon-x" />,
    );
    expect(container.querySelector(".narmi-icon-search")).toHaveClass(
      "nds-input-icon",
    );
    expect(container.querySelector(".narmi-icon-x")).toHaveClass(
      "nds-input-icon",
    );
  });

  it("renders decoration content", () => {
    render(<Input decoration={<span>decoration</span>} />);
    expect(screen.getByText("decoration")).toBeInTheDocument();
  });

  it("does not render a clear button unless showClearButton is set", () => {
    render(<Input />);
    expect(screen.queryByLabelText("Clear")).not.toBeInTheDocument();
  });

  it("renders a clear button and fires clearInput when clicked", async () => {
    const clearInput = vi.fn();
    render(<Input showClearButton clearInput={clearInput} />);
    const clearButton = screen.getByTestId("nds-icon-button");
    expect(clearButton).toBeInTheDocument();
    await userEvent.click(clearButton);
    expect(clearInput).toHaveBeenCalled();
  });

  it("fires onClick when the input area is clicked", async () => {
    const onClick = vi.fn();
    const { container } = render(<Input onClick={onClick} />);
    await userEvent.click(getRoot(container));
    expect(onClick).toHaveBeenCalled();
  });

  it("applies inline styles to the root", () => {
    const { container } = render(<Input style={{ width: "300px" }} />);
    expect(getRoot(container)).toHaveStyle({ width: "300px" });
  });
});
