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

export const ErrorState = Template.bind({});
ErrorState.args = {
  name: "errorState",
  label: "Account",
  children: [
    <MultiSelect.Item value="checking1234">Checking (1234)</MultiSelect.Item>,
    <MultiSelect.Item value="checkint4321">Checking (4321)</MultiSelect.Item>,
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
        "Adding and removing selected items is uncontrolled and internal to `MultiSelect`. To set the actual form field value, use `fieldValue`. To update `fieldValue`, you may use `onSelectedItemsChange`.",
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
