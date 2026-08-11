import React, { useState } from "react";
import { FieldSelect } from "./index";

export default {
  title: "Components/Field/Field.Select",
  component: FieldSelect,
};

const COUNTRIES = [
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "mx", label: "Mexico" },
  { value: "gb", label: "United Kingdom" },
  { value: "de", label: "Germany" },
];

const Template = (args) => {
  const [value, setValue] = useState(args.value || "");
  return (
    <FieldSelect {...args} value={value} onChange={setValue}>
      {COUNTRIES.map(({ value, label }) => (
        <FieldSelect.Item key={value} value={value}>
          {label}
        </FieldSelect.Item>
      ))}
    </FieldSelect>
  );
};

export const Overview = Template.bind({});
Overview.args = {
  label: "Country",
  placeholder: "Select a country",
};

export const WithValue = Template.bind({});
WithValue.args = {
  label: "Country",
  value: "ca",
};

export const WithErrors = Template.bind({});
WithErrors.args = {
  label: "Country",
  placeholder: "Select a country",
  errors: ["Please select a country"],
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Country",
  value: "us",
  isDisabled: true,
};

export const WithHelperText = () => {
  const [value, setValue] = useState("");
  return (
    <FieldSelect
      label="Country"
      value={value}
      onChange={setValue}
      placeholder="Select a country"
      renderHelperText={() => (
        <span>Choose the country where you currently reside</span>
      )}
    >
      {COUNTRIES.map(({ value, label }) => (
        <FieldSelect.Item key={value} value={value}>
          {label}
        </FieldSelect.Item>
      ))}
    </FieldSelect>
  );
};
WithHelperText.parameters = {
  docs: {
    description: {
      story:
        "`renderHelperText` accepts a function returning a ReactNode. The node is rendered at the end of the label row.",
    },
  },
};

export const SideBySideWithText = () => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  return (
    <div style={{ display: "flex", gap: "var(--space-m)", maxWidth: 600 }}>
      <div style={{ flex: 1 }}>
        <FieldSelect
          label="Country"
          value={country}
          onChange={setCountry}
          placeholder="Select a country"
        >
          {COUNTRIES.map(({ value, label }) => (
            <FieldSelect.Item key={value} value={value}>
              {label}
            </FieldSelect.Item>
          ))}
        </FieldSelect>
      </div>
      <div style={{ flex: 1 }}>
        {/* Using a plain input here to show visual alignment */}
        <div className="nds-field">
          <label className="nds-field-label" htmlFor="city-input">
            City
          </label>
          <div className="nds-field-input-box">
            <input
              id="city-input"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city name"
              style={{
                width: "100%",
                border: "none",
                outline: 0,
                padding: "0 var(--space-xs)",
                fontSize: "var(--font-size-s)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
SideBySideWithText.parameters = {
  docs: {
    description: {
      story:
        "Field.Select is designed to visually align with Field.Text. Both share the same shell, label, and input box styles.",
    },
  },
};
