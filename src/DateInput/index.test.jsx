import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DateInput from "./";

const LABEL = "Date of Birth";

const renderDateInput = (props = {}) => {
  const onChange = vi.fn();
  render(<DateInput label={LABEL} onChange={onChange} {...props} />);
  return { onChange };
};

describe("DateInput", () => {
  it("fires onChange as soon as a complete, valid date is typed", async () => {
    const user = userEvent.setup();
    const { onChange } = renderDateInput();

    await user.type(screen.getByLabelText(LABEL), "2024-01-15");

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith("2024-01-15");
  });

  it("does not fire onChange while the typed date is incomplete", async () => {
    const user = userEvent.setup();
    const { onChange } = renderDateInput();

    await user.type(screen.getByLabelText(LABEL), "2024-01-1");

    expect(onChange).not.toHaveBeenCalled();
  });

  it("does not fire onChange again on blur after a typed date was committed", async () => {
    const user = userEvent.setup();
    const { onChange } = renderDateInput();

    await user.type(screen.getByLabelText(LABEL), "2024-01-15");
    await user.tab();

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("does not fire onChange for text that is not a date", async () => {
    const user = userEvent.setup();
    const { onChange } = renderDateInput();

    await user.type(screen.getByLabelText(LABEL), "not a date");
    await user.tab();

    expect(onChange).not.toHaveBeenCalled();
  });

  it("does not fire onChange for a typed date that is disabled", async () => {
    const user = userEvent.setup();
    const { onChange } = renderDateInput({ disableDates: ["2024-01-15"] });

    await user.type(screen.getByLabelText(LABEL), "2024-01-15");

    expect(onChange).not.toHaveBeenCalled();
  });

  it("fires onChange with an ISO date when typing into the alt input", async () => {
    const user = userEvent.setup();
    const { onChange } = renderDateInput({
      altInput: true,
      altFormat: "m/d/Y",
    });

    // the label matches both the hidden original input and the visible alt input
    const altInput = screen
      .getAllByLabelText(LABEL)
      .find((el) => el.getAttribute("type") === "text");
    await user.type(altInput, "01/15/2024");

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith("2024-01-15");
  });

  it("calls the latest onChange callback after a rerender", async () => {
    const user = userEvent.setup();
    const first = vi.fn();
    const second = vi.fn();
    const { rerender } = render(<DateInput label={LABEL} onChange={first} />);
    rerender(<DateInput label={LABEL} onChange={second} />);

    await user.type(screen.getByLabelText(LABEL), "2024-01-15");

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledWith("2024-01-15");
  });
});
