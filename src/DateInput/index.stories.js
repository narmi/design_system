import React from "react";
import { DateInput } from "dist";

export default {
  title: "Components/DateInput",
};

export const BasicDateInput = () => {
  return <DateInput label={"Date of Birth"} />;
};

export const WithDisabledDates = () => {
  return (
    <DateInput
      label={"Select a date that is not 2021-10-22"}
      disableDates={["2021-10-22"]}
    />
  );
};

export const WithDefaultDate = () => {
  return <DateInput label={"Select a date"} defaultDate="2021-10-22" />;
};
