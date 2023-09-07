/* eslint-disable jsx-a11y/anchor-is-valid,react/jsx-key */
import React, { useState } from "react";
import Combobox, { VALID_ICON_NAMES } from "./";
import ComboboxItem from "./ComboboxItem";
import ComboboxHeading from "./ComboboxHeading";
import Dialog from "../Dialog";
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

export const InADialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Open dialog
      </button>
      <Dialog
        title="Dialog with a Combobox"
        isOpen={isOpen}
        onUserDismiss={() => setIsOpen(false)}
      >
        <Combobox label="Select Account">
          <Combobox.Heading text="Checking" />
          <Combobox.Item value="Primary Checking - 4567" />
          <Combobox.Item value="Secondary Checking - 9876" />
          <Combobox.Item value="Other Checking - 1112" />
          <Combobox.Item value="Wow, more Checking - 3112" />
          <Combobox.Heading text="Savings" />
          <Combobox.Item value="Primary Savings - 1234" />
          <Combobox.Item value="Cheese Fund - 5432" />
        </Combobox>
      </Dialog>
    </>
  );
};

export const WithCategories = Template.bind({});
WithCategories.args = {
  id: "withCategories",
  label: "Select an Icon",
  children: [
    <Combobox.Category label="Transportation">
      <Combobox.Item value="truck">
        <span className="narmi-icon-truck padding--right--xs" /> Truck
      </Combobox.Item>
      <Combobox.Item value="anchor">
        <span className="narmi-icon-anchor padding--right--xs" /> Anchor
      </Combobox.Item>
      <Combobox.Item value="car-outline">
        <span className="narmi-icon-car-outline padding--right--xs" /> Car
      </Combobox.Item>
    </Combobox.Category>,
    <Combobox.Category label="Art">
      <Combobox.Item value="film">
        <span className="narmi-icon-film padding--right--xs" /> Film
      </Combobox.Item>
      <Combobox.Item value="aperture">
        <span className="narmi-icon-aperture padding--right--xs" /> Aperture
      </Combobox.Item>
      <Combobox.Item value="pen">
        <span className="narmi-icon-pen-tool padding--right--xs" /> Pen
      </Combobox.Item>
      <Combobox.Item value="blob">
        <span className="narmi-icon-blob padding--right--xs" /> Blob
      </Combobox.Item>
    </Combobox.Category>,
  ],
};
WithCategories.parameters = {
  docs: {
    description: {
      story:
        "You may group `Combobox.Item` elements by category with `Combobox.Category`. When using categories, you **must** make all direct children of `Combobox` a `Combobox.Category`; no orphan items are allowed when using categories.",
    },
  },
};

export default {
  title: "Components/Combobox",
  component: Combobox,
  subcomponents: { ComboboxItem, ComboboxHeading },
  argTypes: {
    icon: { options: ["", ...VALID_ICON_NAMES] },
  },
};
