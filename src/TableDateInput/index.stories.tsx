import React from "react";
import TableDateInput from "./";
import type { TableDateInputProps } from "./";

const Template = (args: TableDateInputProps) => <TableDateInput {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  label: "Select date",
  placeholder: "MM/DD/YYYY",
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
