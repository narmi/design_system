import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DateInput from "./";

describe("DateInput", () => {
  it("renders without errors", () => {
    const label = "Select date";
    render(<DateInput label={label} />);
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it.skip("opens calendar UI on input focus", () => {});

  it.skip("Fires date change callback from calendar UI", () => {});

  it.skip("Fires date change callback on manual date entry", () => {});

  describe("disableDates/minDate", () => {
    it.skip("disables dates in the calendar UI when `disableDates` prop is set", () => {});
    it.skip("disables dates before `minDate` when prop is set", () => {});
  });

  describe("defaultDate prop", () => {
    it.skip("correctly sets defaultDate in the input and calendar UI", () => {});
    it.skip("allows date to change when defaultDate is set", () => {});
  });

  describe("dateFormat prop", () => {
    it.skip("uses correct format in input element when `dateFormat` prop is set", () => {});
    it.skip("does not change the callback format when `dateFormat` prop is set", () => {});
  });

  describe("altInput/altFormat props", () => {
    it.skip("TODO: altInput", () => {});
    it.skip("TODO: altFormat", () => {});
  });
});
