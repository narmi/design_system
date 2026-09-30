import React from "react";
import { render, screen } from "@testing-library/react";
import { FieldErrors } from "./index";

/**
 * FieldErrors is shared by every Field variant, so its contract is asserted
 * here rather than repeated through each consumer. The two behaviours below
 * are the ones the component documents as easy to undo by accident.
 */
describe("FieldErrors", () => {
  const region = (container: HTMLElement) =>
    container.querySelector(".nds-field-errors") as HTMLElement;

  it("renders the live region even with no errors", () => {
    // `useField` points the control's `aria-describedby` at this id, and a
    // live region has to be in the DOM before its first content to be
    // announced. An early `return null` would silently break both.
    const { container } = render(<FieldErrors id="amount-error" />);

    expect(region(container)).not.toBeNull();
    expect(region(container)).toHaveAttribute("id", "amount-error");
    expect(region(container)).toHaveAttribute("aria-live", "polite");
    expect(region(container)).toBeEmptyDOMElement();
  });

  it("renders one message per error", () => {
    render(
      <FieldErrors id="amount-error" errors={["Required", "Too large"]} />,
    );

    expect(screen.getByText("Required")).toBeInTheDocument();
    expect(screen.getByText("Too large")).toBeInTheDocument();
  });

  it("does not nest a second live region", () => {
    // `Error` also accepts a `string[]`, but that branch wraps the messages
    // in its own `aria-live`. Passing the array straight through would put
    // one live region inside another.
    const { container } = render(
      <FieldErrors id="amount-error" errors={["Required", "Too large"]} />,
    );

    expect(region(container).querySelectorAll("[aria-live]")).toHaveLength(0);
  });
});
