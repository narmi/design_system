/* eslint-disable jsx-a11y/anchor-is-valid,react/jsx-key */
import React, { useState } from "react";
import Radio from "./";
import Row from "../Row";

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
  const SET_NAME = "freq";
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
          key={value}
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

export const AsCard = () => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-s)",
        maxWidth: "400px",
      }}
    >
      {["option-a", "option-b", "option-c"].map((value) => (
        <Radio
          key={value}
          name="card-demo"
          value={value}
          kind="card"
          onCheck={setSelectedValue}
          checked={selectedValue === value}
        >
          Option {value.split("-")[1].toUpperCase()}
        </Radio>
      ))}
    </div>
  );
};
AsCard.parameters = {
  docs: {
    description: {
      story:
        "Card variant displays the radio as a toggleable card with a checkmark icon when selected. Cards include padding, borders, and background color changes on selection.",
    },
  },
};

export const AsInputCard = () => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-s)",
        maxWidth: "400px",
      }}
    >
      {["complete-myself", "owner-completes"].map((value, index) => (
        <Radio
          key={value}
          name="input-card-demo"
          value={value}
          kind="input-card"
          onCheck={setSelectedValue}
          checked={selectedValue === value}
        >
          {index === 0
            ? "You will complete the form"
            : "Owner will complete the form"}
        </Radio>
      ))}
    </div>
  );
};
AsInputCard.parameters = {
  docs: {
    description: {
      story:
        "Input-card variant displays as a card but includes a traditional radio input dot positioned inside the card. This provides extra visual affordance for busy interfaces.",
    },
  },
};

export const AsCheckmark = () => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-s)",
        maxWidth: "300px",
      }}
    >
      {["Red", "Blue", "Green"].map((value) => (
        <Radio
          key={value}
          name="checkmark-demo"
          value={value}
          kind="checkmark"
          onCheck={setSelectedValue}
          checked={selectedValue === value}
        >
          {value}
        </Radio>
      ))}
    </div>
  );
};
AsCheckmark.parameters = {
  docs: {
    description: {
      story:
        "Checkmark variant displays with a simple checkmark icon that appears on hover and selection. The layout is reversed with the checkmark on the right side.",
    },
  },
};

export const AsRating = () => {
  return (
    <Row gapSize="xs">
      {[...Array(10)].map((_, index) => (
        <Row.Item key={index} shrink>
          <Radio
            name="rating-demo"
            value={(index + 1).toString()}
            kind="rating"
          >
            {index + 1}
          </Radio>
        </Row.Item>
      ))}
    </Row>
  );
};

export const ErrorStates = () => {
  const kinds = ["default", "card", "input-card"];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "var(--space-l)",
        maxWidth: "800px",
      }}
    >
      {kinds.map((kind) => (
        <div
          key={kind}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-s)",
          }}
        >
          <h4 style={{ margin: 0, textTransform: "capitalize" }}>
            {kind === "default" ? "Default" : kind} Kind
          </h4>
          <Radio
            name={`error-${kind}`}
            value="no-error"
            kind={kind === "default" ? undefined : kind}
          >
            Normal state
          </Radio>
          <Radio
            name={`error-${kind}`}
            value="has-error"
            kind={kind === "default" ? undefined : kind}
            hasError
          >
            With hasError
          </Radio>
          <Radio
            name={`error-${kind}`}
            value="with-message"
            kind={kind === "default" ? undefined : kind}
            hasError
            error="This field is required"
          >
            With error message
          </Radio>
        </div>
      ))}
    </div>
  );
};
ErrorStates.parameters = {
  docs: {
    description: {
      story:
        "Demonstrates error states across all Radio kinds. Shows normal state, hasError prop, and error prop with custom message.",
    },
  },
};

export default {
  title: "Components/Radio",
  component: Radio,
};
