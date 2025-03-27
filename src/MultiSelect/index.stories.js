/* eslint-disable react/jsx-key,react/no-unescaped-entities */
import React, { useState } from "react";
import MultiSelect from ".";
import MultiSelectItem from "./MultiSelectItem";

/**
 * Template for MultiSelect stories.
 */
const Template = (args) => <MultiSelect {...args} />;

/**
 * A set of example MultiSelect items.
 * Each item uses a tokenLabel that will be used for both tokens and summary.
 */
const children = [
  <MultiSelect.Item value="coffee" tokenLabel="Coffee">
    <span className="narmi-icon-coffee padding--right--xs" /> Coffee
  </MultiSelect.Item>,
  <MultiSelect.Item value="film" tokenLabel="Film">
    <span className="narmi-icon-film padding--right--xs" /> Film
  </MultiSelect.Item>,
  <MultiSelect.Item value="truck" tokenLabel="Truck">
    <span className="narmi-icon-truck padding--right--xs" /> Truck
  </MultiSelect.Item>,
  <MultiSelect.Item value="blob" tokenLabel="Blob">
    <span className="narmi-icon-blob padding--right--xs" /> Blob
  </MultiSelect.Item>,
];

export const Overview = Template.bind({});
Overview.args = {
  name: "overviewStory",
  label: "Favorite icons",
  children,
  // Default behavior uses the defaultSummaryFormatter which renders tokens using tokenLabel.
  isClearable: true,
};

export const OverviewSummary = Template.bind({});
OverviewSummary.args = {
  name: "overviewSummaryStory",
  label: "Favorite icons",
  children,
  // Custom summary formatter that returns a summary string using tokenLabel.
  // This formatter ignores any fallback to children.
  summaryFormatter: ({ selectedItems, label }) => {
    if (selectedItems.length === 0) {
      return label;
    }
    const selectedLabels = selectedItems.map(
      (item) => item.props.tokenLabel || itemToString(item),
    );
    if (selectedItems.length === children.length) {
      return "All selected";
    }
    return `${selectedItems.length} selected: ${selectedLabels.join(", ")}`;
  },
  isClearable: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  name: "overviewStory",
  label: "Favorite icons",
  // Controlled disabled state with selectedItems provided.
  selectedItems: ["blob", "coffee"],
  children,
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  name: "errorState",
  label: "Account",
  children: [
    <MultiSelect.Item value="checking1234" tokenLabel="Checking (1234)">
      Checking (1234)
    </MultiSelect.Item>,
    <MultiSelect.Item value="checking4321" tokenLabel="Checking (4321)">
      Checking (4321)
    </MultiSelect.Item>,
  ],
  errorText: "Required",
};

export const SettingTheFieldValue = () => {
  // Demonstrates how fieldValue can be used to override the hidden input value.
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
    >
      <MultiSelect.Item value="coffee" tokenLabel="Coffee">
        <span className="narmi-icon-coffee padding--right--xs" /> Coffee
      </MultiSelect.Item>
      <MultiSelect.Item value="film" tokenLabel="Film">
        <span className="narmi-icon-film padding--right--xs" /> Film
      </MultiSelect.Item>
      <MultiSelect.Item value="truck" tokenLabel="Truck">
        <span className="narmi-icon-truck padding--right--xs" /> Truck
      </MultiSelect.Item>
      <MultiSelect.Item value="blob" tokenLabel="Blob">
        <span className="narmi-icon-blob padding--right--xs" /> Blob
      </MultiSelect.Item>
    </MultiSelect>
  );
};
SettingTheFieldValue.parameters = {
  docs: {
    description: {
      story:
        "By default, `fieldValue` populates the hidden input as a comma-separated string of selected values. You may customize this via the `fieldValue` prop.",
    },
  },
};

export const ControlledSelectedItems = () => {
  // Demonstrates a fully controlled MultiSelect using external state.
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
      isClearable
    >
      <MultiSelect.Item value="coffee" tokenLabel="Coffee">
        <span className="narmi-icon-coffee padding--right--xs" /> Coffee
      </MultiSelect.Item>
      <MultiSelect.Item value="film" tokenLabel="Film">
        <span className="narmi-icon-film padding--right--xs" /> Film
      </MultiSelect.Item>
      <MultiSelect.Item value="truck" tokenLabel="Truck">
        <span className="narmi-icon-truck padding--right--xs" /> Truck
      </MultiSelect.Item>
      <MultiSelect.Item value="blob" tokenLabel="Blob">
        <span className="narmi-icon-blob padding--right--xs" /> Blob
      </MultiSelect.Item>
    </MultiSelect>
  );
};

export const CustomTokenValues = () => {
  // Demonstrates usage of tokenLabel to override token display text.
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

export const CustomSummaryFormatter = () => {
  // Demonstrates a custom summary formatter that returns a summary string.
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
    <MultiSelect.Item key={value} value={value} tokenLabel={label}>
      <span className={`narmi-icon-${icon} padding--right--xs`} />
      {label}
    </MultiSelect.Item>
  ));

  // Custom summary formatter that returns a summary string using tokenLabel.
  const formatter = ({ selectedItems, label }) => {
    if (selectedItems.length === 0) {
      return label;
    }
    const selectedLabels = selectedItems.map(
      (item) => item.props.tokenLabel || itemToString(item),
    );
    return `Selected (${selectedItems.length}): ${selectedLabels.join(", ")}`;
  };

  return (
    <MultiSelect
      name="custom-summary-formatter"
      label="Favorite Icons"
      selectedItems={selectedItems}
      onSelectedItemsChange={handleSelectedItemsChange}
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
        "This story demonstrates a MultiSelect with a custom summaryFormatter that returns a summary string using tokenLabel. The formatter receives an object with the current selected items and returns a custom summary string.",
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

/**
 * Helper function to convert an item to a string.
 * Used in custom formatters.
 */
const itemToString = (item) =>
  !item?.props ? "" : item.props.searchValue || item.props.value;
