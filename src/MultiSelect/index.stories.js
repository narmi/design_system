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
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  name: "overviewStory",
  label: "Favorite icons",
  selectedItems: ["blob", "coffee"],
  children,
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
        "By default, the `MultiSelect` component behaves like an uncontrolled component. To make this component fully controlled, pass in `selectedItems` and update the list of values by using `onSelectedItemsChange`",
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
        "The `tokenValue` prop may be used on MultiSelect items to declare the string that should render in the token when the item is selected.",
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
