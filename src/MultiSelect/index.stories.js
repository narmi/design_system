/* eslint-disable react/jsx-key,react/no-unescaped-entities */
import React, { useState } from "react";
import MultiSelect from ".";
import MultiSelectItem from "./MultiSelectItem";
import Button from "../Button";

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

export const Controlled = () => {
  return (
    <>
      <MultiSelect
        name="controlled-product-field"
        label="Favorite Icons"
        onSelectedItemsChange={() => {}}
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
      <div className="margin--top">
        <Button
          label="Clear selection"
          kind="negative"
          onClick={() => {
            setValue(null);
          }}
        />
      </div>
    </>
  );
};
Controlled.parameters = {
  docs: {
    description: {
      story:
        "You can programmatically select selection by updating the `value` prop. When `value` is passed, the component becomes **fully controlled** and you must use the `onChange` prop to update the `value`. Clear the selection by passing an empty string as the `value`.",
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
