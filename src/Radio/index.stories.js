/* eslint-disable jsx-a11y/anchor-is-valid,react/jsx-key */
import React, { useState } from "react";
import Radio from "./";

const Template = (args) => <Radio {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  name: "overview",
  value: "test",
  children: (
    <>
      A single Radio input that allows <strong>custom</strong>{" "}
      <code className="fontColor--azul">JSX</code> labels
    </>
  ),
};

export const RadioGroups = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-default)",
    }}
  >
    <Radio name="frequency" value="daily">
      Repeats <strong>Daily</strong>
    </Radio>
    <Radio name="frequency" value="weekly">
      Repeats <strong>Weekly</strong>
    </Radio>
    <Radio name="frequency" value="monthly">
      Repeats <strong>Monthly</strong>
    </Radio>
  </div>
);

export const FullyControlled = () => {
  const SET_NAME = "frequency";
  const [selectedRadioVal, setSelectedRadioVal] = useState("");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-default)",
      }}
    >
      {["daily", "weekly"].map((value) => (
        <Radio
          name={SET_NAME}
          value={value}
          onCheck={setSelectedRadioVal}
          checked={selectedRadioVal === value}
        >
          Repeats <strong>{value}</strong>
        </Radio>
      ))}
    </div>
  );
};

export default {
  title: "Components/Radio",
  component: Radio,
};
