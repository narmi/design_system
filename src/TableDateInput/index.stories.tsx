import React, { useState } from "react";
import { expect, screen, waitFor } from "storybook/test";
import TableDateInput from "./";
import type { TableDateInputProps } from "./";

const Template = (args: TableDateInputProps) => <TableDateInput {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  label: "Select date",
  placeholder: "MM/DD/YYYY",
};

/**
 * Interaction test that opens the flatpickr calendar so Chromatic can
 * snapshot it. The calendar is appended to the document body, so it is
 * queried via `screen`.
 */
export const OpensCalendar = {
  name: "Interaction: Opens the calendar",
  render: () => (
    <TableDateInput
      label="Select a date"
      placeholder="MM/DD/YYYY"
      defaultDate="2024-01-15"
    />
  ),
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("textbox"));
    // flatpickr fades the calendar in via a CSS opacity animation. Chromatic
    // freezes animations during the play phase, leaving the calendar at
    // opacity:0 — which trips `toBeVisible`. Assert the calendar is open
    // instead, which reflects the interaction without the animation flake.
    await waitFor(() =>
      expect(document.querySelector(".flatpickr-calendar")).toHaveClass("open"),
    );
  },
};

/**
 * Interaction test for selecting a day. The `onChange` callback receives
 * the formatted date, which is surfaced in the story for assertion.
 */
export const SelectsDate = {
  name: "Interaction: Selects a date",
  render: () => {
    const Wrapper = () => {
      const [date, setDate] = useState("");
      return (
        <>
          <TableDateInput
            label="Select a date"
            placeholder="MM/DD/YYYY"
            defaultDate="2024-01-15"
            onChange={setDate}
          />
          <div data-testid="selected-date">Selected: {date}</div>
        </>
      );
    };
    return <Wrapper />;
  },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("textbox", { name: /select a date/i }));
    const day = await screen.findByLabelText("January 10, 2024");
    await userEvent.click(day);
    await waitFor(() =>
      expect(canvas.getByTestId("selected-date")).toHaveTextContent(
        "2024-01-10",
      ),
    );
  },
};

export const WithDefaultDate = () => {
  return (
    <TableDateInput
      label="Select a date"
      placeholder="MM/DD/YYYY"
      defaultDate="2024-01-15"
    />
  );
};

export const WithDisabledDates = Template.bind({});
WithDisabledDates.args = {
  label: "Select any date (except today or tomorrow)",
  placeholder: "MM/DD/YYYY",
  disableDates: [new Date(), new Date(Date.now() + 24 * 60 * 60 * 1000)],
};

export default {
  title: "Components/TableDateInput",
  component: TableDateInput,
  parameters: {
    docs: {
      description: {
        component:
          "A date input component specifically designed for use within Table.Cell. Composes DateInput with TableInput to provide consistent table styling while maintaining all date picker functionality.",
      },
    },
  },
};
