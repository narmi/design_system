/* eslint-disable jsx-a11y/anchor-is-valid,react/jsx-key */
import React, { useState } from "react";
import Combobox, { VALID_ICON_NAMES } from "./";
import ComboboxItem from "./ComboboxItem";
import ComboboxHeading from "./ComboboxHeading";
import { options_states } from "./util";

const Template = (args) => <Combobox {...args} />;

const children = options_states.map((state) => (
  <Combobox.Item value={state}>{state}</Combobox.Item>
));

export const Overview = Template.bind({});
Overview.args = {
  label: "Select your state",
  children,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: "Select your state",
  icon: "search",
  children,
};

export const WithHeadings = (args) => (
  <Combobox label="Select Account" {...args}>
    <Combobox.Heading text="Checking" />
    <Combobox.Item value="Primary Checking - 4567" />
    <Combobox.Item value="Secondary Checking - 9876" />
    <Combobox.Heading text="Savings" />
    <Combobox.Item value="Primary Savings - 1234" />
    <Combobox.Item value="Cheese Fund - 5432" />
  </Combobox>
);

export const WithError = Template.bind({});
WithError.args = {
  label: "Select your state",
  errorText: "Can not be blank",
  children,
};

export const NoChildren = Template.bind({});
NoChildren.args = {
  label: "State",
  children: null,
};
NoChildren.parameters = {
  docs: {
    description: {
      story:
        "If no children are passed, the `Combobox` will render a plain input",
    },
  },
};

export const FullyControlled = () => {
  const [inputValue, setInputValue] = useState("Initial Value");
  return (
    <div>
      <Combobox
        label="Select Account"
        inputValue={inputValue}
        onInputChange={(val) => setInputValue(val)}
      >
        <Combobox.Heading text="Checking" />
        <Combobox.Item value="Primary Checking - 4567" />
        <Combobox.Item value="Secondary Checking - 9876" />
        <Combobox.Heading text="Savings" />
        <Combobox.Item value="Primary Savings - 1234" />
        <Combobox.Item value="Cheese Fund - 5432" />
      </Combobox>
      <button
        className="margin--top"
        onClick={() => {
          setInputValue("");
        }}
      >
        Clear input value
      </button>
    </div>
  );
};
FullyControlled.parameters = {
  docs: {
    description: {
      story:
        "To fully control the value input, use `inputValue` and `onInputChange`.",
    },
  },
};

export default {
  title: "Components/Combobox",
  component: Combobox,
  subcomponents: { ComboboxItem, ComboboxHeading },
  argTypes: {
    children: { control: false },
    onChange: { action: "Combobox change" },
    onInputChange: { action: "Combobox input change" },
  },
  icon: { options: ["", ...VALID_ICON_NAMES] },
};
