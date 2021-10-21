import React from "react";
import DateInput from "./";

// formats native date object to the format flatpickr expects
const toFPString = (date, dayOffset = 0) => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${
    date.getDate() + dayOffset
  }`;
};

const Template = (args) => <DateInput {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  label: "Date of Birth",
};

export const WithDisabledDates = Template.bind({});
WithDisabledDates.args = {
  label: "Select any date (except for today or tomorrow)",
  disableDates: [toFPString(new Date()), toFPString(new Date(), 1)],
};

export const WithDefaultDate = () => {
  return <DateInput label={"Select a date"} defaultDate="2021-10-22" />;
};

export default {
  title: "Components/DateInput",
  component: DateInput,
};
