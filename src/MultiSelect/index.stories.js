/* eslint-disable react/jsx-key,react/no-unescaped-entities */
import React, { useState } from "react";
import MultiSelect from ".";
import MultiSelectItem from "./MultiSelectItem";

const Template = (args) => <MultiSelect {...args} />;

const children = [
  <MultiSelect.Item value="coffee">
    <span className="narmi-icon-coffee padding--right--xs" /> Coffee
  </MultiSelect.Item>,
  <MultiSelect.Item value="film">
    <span className="narmi-icon-film padding--right--xs" /> Film
  </MultiSelect.Item>,
  <MultiSelect.Item value="truck">
    <span className="narmi-icon-truck padding--right--xs" /> Truck
  </MultiSelect.Item>,
  <MultiSelect.Item value="blob">
    <span className="narmi-icon-blob padding--right--xs" /> Blob
  </MultiSelect.Item>,
];

export const Overview = Template.bind({});
Overview.args = {
  name: "overviewStory",
  label: "Favorite icons",
  children,
  // tokens mode is default
  kind: "tokens",
  isClearable: true,
};

export const OverviewSummary = Template.bind({});
OverviewSummary.args = {
  name: "overviewSummaryStory",
  label: "Favorite icons",
  children,
  kind: "summary", // renders a summary string instead of tokens
  isClearable: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  name: "overviewStory",
  label: "Favorite icons",
  selectedItems: ["blob", "coffee"],
  children,
  kind: "tokens",
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  name: "errorState",
  label: "Account",
  children: [
    <MultiSelect.Item value="checking1234">Checking (1234)</MultiSelect.Item>,
    <MultiSelect.Item value="checking4321">Checking (4321)</MultiSelect.Item>,
  ],
  errorText: "Required",
  kind: "tokens",
};

export const SettingTheFieldValue = () => {
  const [fieldValue, setFieldValue] = useState("");
  const handleSelectedItemsChange = (selectedItems) => {
    setFieldValue(selectedItems.join(","));
  };
  return (
    <MultiSelect
      name="controlled-product-field"
      fieldValue={fieldValue}
      label="Favorite Icons"
      onSelectedItemsChange={handleSelectedItemsChange}
      kind="tokens"
    >
      <MultiSelect.Item value="coffee">
        <span className="narmi-icon-coffee padding--right--xs" /> Coffee
      </MultiSelect.Item>
      <MultiSelect.Item value="film">
        <span className="narmi-icon-film padding--right--xs" /> Film
      </MultiSelect.Item>
      <MultiSelect.Item value="truck">
        <span className="narmi-icon-truck padding--right--xs" /> Truck
      </MultiSelect.Item>
      <MultiSelect.Item value="blob">
        <span className="narmi-icon-blob padding--right--xs" /> Blob
      </MultiSelect.Item>
    </MultiSelect>
  );
};
SettingTheFieldValue.parameters = {
  docs: {
    description: {
      story:
        "By default, `fieldValue` will populate the value of the underlying hidden input as a string of selected values separated by `,`. You may use the `fieldValue` prop to change the formatting of the string value applied to the hidden input.",
    },
  },
};

export const ControlledSelectedItems = () => {
  const [selectedItems, setSelectedItems] = useState(["truck", "coffee"]);
  const handleSelectedItemsChange = (selectedItems) => {
    setSelectedItems(selectedItems);
  };

  return (
    <MultiSelect
      name="controlled-product-field"
      label="Favorite Icons"
      selectedItems={selectedItems}
      onSelectedItemsChange={handleSelectedItemsChange}
      kind="summary" // try summary view
      isClearable // built-in clear all button
    >
      <MultiSelect.Item value="coffee">
        <span className="narmi-icon-coffee padding--right--xs" /> Coffee
      </MultiSelect.Item>
      <MultiSelect.Item value="film">
        <span className="narmi-icon-film padding--right--xs" /> Film
      </MultiSelect.Item>
      <MultiSelect.Item value="truck">
        <span className="narmi-icon-truck padding--right--xs" /> Truck
      </MultiSelect.Item>
      <MultiSelect.Item value="blob">
        <span className="narmi-icon-blob padding--right--xs" /> Blob
      </MultiSelect.Item>
    </MultiSelect>
  );
};
ControlledSelectedItems.parameters = {
  docs: {
    description: {
      story:
        "This story demonstrates a fully controlled MultiSelect using the new 'summary' kind and the built-in 'Clear all' button via the isClearable prop.",
    },
  },
};

export const CustomTokenValues = () => {
  const [selectedItems, setSelectedItems] = useState(["film"]);
  const handleSelectedItemsChange = (selectedItems) => {
    setSelectedItems(selectedItems);
  };
  return (
    <MultiSelect
      name="custom-token-labels"
      label="Favorite Icons"
      selectedItems={selectedItems}
      onSelectedItemsChange={handleSelectedItemsChange}
      kind="tokens"
    >
      <MultiSelect.Item value="film" tokenLabel="Movies">
        <span className="narmi-icon-film padding--right--xs" /> Film
      </MultiSelect.Item>
      <MultiSelect.Item value="coffee" tokenLabel="Hot Bean Water">
        <span className="narmi-icon-coffee padding--right--xs" /> Coffee
      </MultiSelect.Item>
    </MultiSelect>
  );
};
CustomTokenValues.parameters = {
  docs: {
    description: {
      story:
        "The `tokenLabel` prop may be used on MultiSelect items to declare the string that should render in the token when the item is selected.",
    },
  },
};

export default {
  title: "Components/MultiSelect",
  component: MultiSelect,
  subcomponents: { MultiSelectItem },
  argTypes: {
    children: { control: false },
  },
};

export const CustomSummaryFormatter = () => {
  const [selectedItems, setSelectedItems] = useState(["coffee", "truck"]);
  const handleSelectedItemsChange = (selectedItems) => {
    setSelectedItems(selectedItems);
  };

  const mainItems = [
    { label: "Coffee", icon: "coffee", value: "coffee" },
    { label: "Film", icon: "film", value: "film" },
    { label: "Truck", icon: "truck", value: "truck" },
    { label: "Blob", icon: "blob", value: "blob" },
  ].map(({ label, icon, value }) => (
    <MultiSelect.Item value={value}>
      <span className={`narmi-icon-${icon} padding--right--xs`} />
      {label}
    </MultiSelect.Item>
  ));

  // Custom formatter function: receives the count and an array of labels,
  // and returns a custom summary string.
  const formatter = (count, labels) => {
    if (count === 0) {
      return "Yo. Select something already.";
    }
    return `Selected (${count}): ${labels.join(", ")}`;
  };

  return (
    <MultiSelect
      name="custom-summary-formatter"
      label="Favorite Icons"
      selectedItems={selectedItems}
      onSelectedItemsChange={handleSelectedItemsChange}
      kind="summary"
      isClearable
      summaryFormatter={formatter}
    >
      {mainItems}
    </MultiSelect>
  );
};

CustomSummaryFormatter.parameters = {
  docs: {
    description: {
      story:
        "This story demonstrates a MultiSelect with a custom summaryFormatter. The formatter receives the number of selected items and an array of their labels, and returns a custom summary string to be displayed in the trigger.",
    },
  },
};
