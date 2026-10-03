import React, { useState } from "react";
import { expect, screen, waitFor } from "storybook/test";
import { FieldCombobox } from "./index";
import { FieldSelect } from "../Select/index";
import { FieldText } from "../Text/index";
import { options_states } from "../../Combobox/util";
import iconSelection from "../../icons/selection.json";

const VALID_ICON_NAMES = iconSelection.icons
  .map((icon) => icon.properties.name)
  .filter(Boolean);

export default {
  title: "Components/Field/Field.Combobox",
  component: FieldCombobox,
  // Storybook's object control starts at `{}`, which `errors` can't render
  args: { errors: [] },
  argTypes: {
    startIcon: { control: "select", options: [null, ...VALID_ICON_NAMES] },
  },
};

const STATES = options_states.map((name) => ({ value: name, label: name }));

const Template = (args) => {
  const [value, setValue] = useState(args.value || "");
  return (
    <FieldCombobox {...args} value={value} onChange={setValue}>
      {STATES.map(({ value, label }) => (
        <FieldCombobox.Item key={value} value={value}>
          {label}
        </FieldCombobox.Item>
      ))}
    </FieldCombobox>
  );
};

export const Overview = Template.bind({});
Overview.args = {
  label: "State",
  placeholder: "Select a state",
};

/**
 * Interaction test that types into the Field.Combobox so Chromatic can
 * snapshot the filtered dropdown. Options render in a dropdown layer,
 * queried via `screen`.
 */
export const Filters = {
  name: "Interaction: Filters as you type",
  render: () => <Template label="State" placeholder="Select a state" />,
  play: async ({ canvas, userEvent }) => {
    await userEvent.type(
      canvas.getByRole("combobox", { name: /state/i }),
      "new",
    );
    await waitFor(() => expect(screen.getAllByRole("option")).toHaveLength(4));
  },
};

/**
 * Interaction test for the keyboard selection flow: typing highlights the
 * first match, and Tab selects it.
 */
export const SelectsOnTab = {
  name: "Interaction: Selects the first match on Tab",
  render: () => <Template label="State" placeholder="Select a state" />,
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByRole("combobox", { name: /state/i });
    await userEvent.type(input, "mo");
    await userEvent.tab();
    await waitFor(() => expect(input).toHaveValue("Montana"));
  },
};

export const WithValue = Template.bind({});
WithValue.args = {
  label: "State",
  value: "Colorado",
};

export const WithStartIcon = Template.bind({});
WithStartIcon.args = {
  label: "State",
  placeholder: "Select a state",
  startIcon: "map-pin",
};

export const WithErrors = Template.bind({});
WithErrors.args = {
  label: "State",
  placeholder: "Select a state",
  errors: ["Please select a state"],
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "State",
  value: "Colorado",
  isDisabled: true,
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  label: "State",
  placeholder: "Select a state",
  renderHelperText: () => <span>Where you currently live</span>,
};

/**
 * `value` is what `onChange` receives; the input shows the item's text.
 * Use `searchValue` when an item's children aren't a plain string.
 */
export const ValuesAndSearchValue = () => {
  const [value, setValue] = useState("");
  return (
    <FieldCombobox
      label="Country"
      value={value}
      onChange={setValue}
      placeholder="Select a country"
      renderHelperText={() => <span>Value: {value || "(none)"}</span>}
    >
      <FieldCombobox.Item value="us">United States</FieldCombobox.Item>
      <FieldCombobox.Item value="ca">Canada</FieldCombobox.Item>
      <FieldCombobox.Item value="mx" searchValue="Mexico">
        <strong>Mexico</strong>
      </FieldCombobox.Item>
    </FieldCombobox>
  );
};

export const SideBySide = () => {
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  return (
    <div style={{ display: "flex", gap: "var(--space-m)", maxWidth: 900 }}>
      <div style={{ flex: 1 }}>
        <FieldText
          label="City"
          value={city}
          onChange={setCity}
          placeholder="Enter a city"
        />
      </div>
      <div style={{ flex: 1 }}>
        <FieldCombobox
          label="State"
          value={state}
          onChange={setState}
          placeholder="Select a state"
        >
          {STATES.map(({ value, label }) => (
            <FieldCombobox.Item key={value} value={value}>
              {label}
            </FieldCombobox.Item>
          ))}
        </FieldCombobox>
      </div>
      <div style={{ flex: 1 }}>
        <FieldSelect
          label="Country"
          value={country}
          onChange={setCountry}
          placeholder="Select a country"
        >
          <FieldSelect.Item value="us">United States</FieldSelect.Item>
          <FieldSelect.Item value="ca">Canada</FieldSelect.Item>
        </FieldSelect>
      </div>
    </div>
  );
};
SideBySide.parameters = {
  docs: {
    description: {
      story:
        "Field.Combobox shares its shell, label and input box with Field.Text, and its dropdown with Field.Select.",
    },
  },
};
