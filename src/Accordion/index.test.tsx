import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Accordion from "./";

const renderAccordion = (
  props: Partial<React.ComponentProps<typeof Accordion>> = {},
) =>
  render(
    <Accordion renderSummary={() => "Summary"} {...props}>
      <button type="button">Hidden action</button>
    </Accordion>,
  );

describe("Accordion", () => {
  it("makes collapsed content inert", () => {
    renderAccordion();

    const region = screen.getByRole("region", { hidden: true });
    expect(region).toHaveAttribute("inert");
    expect(region).toHaveAttribute("aria-hidden", "true");
  });

  it("removes inert when expanded", () => {
    renderAccordion();

    fireEvent.click(screen.getByRole("button", { name: "Summary" }));

    const region = screen.getByRole("region", { name: "Summary" });
    expect(region).not.toHaveAttribute("inert");
    expect(region).toHaveAttribute("aria-hidden", "false");
  });

  it("moves focus to the summary when collapsed while focus is inside", () => {
    const Controlled = () => {
      const [isOpen, setIsOpen] = useState(true);
      return (
        <Accordion
          isOpen={isOpen}
          onUserToggle={setIsOpen}
          renderSummary={() => "Summary"}
        >
          <button type="button" onClick={() => setIsOpen(false)}>
            Done
          </button>
        </Accordion>
      );
    };
    render(<Controlled />);

    const done = screen.getByRole("button", { name: "Done" });
    done.focus();
    expect(done).toHaveFocus();

    fireEvent.click(done);

    expect(screen.getByRole("button", { name: "Summary" })).toHaveFocus();
    expect(screen.getByRole("region", { hidden: true })).toHaveAttribute(
      "inert",
    );
  });
});
