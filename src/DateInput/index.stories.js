import React from "react";
import DateInput from "./";
import Popover from "../Popover";

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

export const AltInput = Template.bind({});
AltInput.args = {
  altInput: true,
  altFormat: "m/d/Y",
  label: "Date in input will follow m/d/Y format",
};
AltInput.parameters = {
  docs: {
    description: {
      story:
        "The `altInput` prop will make the input show a date in an alternate format defined by `altFormat`. See [flatpickr docs](https://flatpickr.js.org/formatting/) for formatting options.",
    },
  },
};

export const DisablePortal = () => {
  const content = (
    <div className="padding--all">
      <div className="padding--bottom">
        <DateInput
          label="Start Date"
          placeholder="YYYY-MM-DD"
          disablePortal={true}
        />
      </div>
      <div className="padding--bottom">
        <DateInput
          label="End Date"
          placeholder="YYYY-MM-DD"
          disablePortal={true}
        />
      </div>
    </div>
  );

  return (
    <div
      style={{
        height: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Popover content={content}>
        <button>Click to show popover</button>
      </Popover>
    </div>
  );
};
DisablePortal.parameters = {
  docs: {
    description: {
      story:
        "By default, `DateInput` appends to the document body. Most of the time, this is fine, but when using inside of another modal that uses 'click outside' behavior, it can be helpful to render the `DateInput` calendar in-place by passing `disablePortal={true}`",
    },
  },
};

export default {
  title: "Components/DateInput",
  component: DateInput,
};
