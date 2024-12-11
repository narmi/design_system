/* eslint-disable react/jsx-key,react/no-unescaped-entities */
import React, { useState } from "react";
import Select from "./";
import SelectItem from "./SelectItem";
import SelectAction from "./SelectAction";
import Button from "../Button";
import Dialog from "../Dialog";

const Template = (args) => <Select {...args} />;

const children = [
  <Select.Item value="coffee">
    <span className="narmi-icon-coffee padding--right--xs" /> Coffee
  </Select.Item>,
  <Select.Item value="film">
    <span className="narmi-icon-film padding--right--xs" /> Film
  </Select.Item>,
  <Select.Item value="truck">
    <span className="narmi-icon-truck padding--right--xs" /> Truck
  </Select.Item>,
  <Select.Item value="blob">
    <span className="narmi-icon-blob padding--right--xs" /> Blob
  </Select.Item>,
];

export const Overview = Template.bind({});
Overview.args = {
  id: "overviewStory",
  label: "Favorite icon",
  children,
};

export const DefaultSelection = Template.bind({});
DefaultSelection.args = {
  id: "defaultSelection",
  label: "Favorite icon",
  children,
  defaultValue: "film",
};

export const DisabledSelection = Template.bind({});
DisabledSelection.args = {
  disabled: true,
  id: "disabledSelection",
  label: "Account",
  children: [<Select.Item value="checking0001">Checking - 0001</Select.Item>],
  value: "checking0001",
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  id: "errorState",
  label: "Account",
  children: [
    <Select.Item value="checking1234">Checking (1234)</Select.Item>,
    <Select.Item value="checking4321">Checking (4321)</Select.Item>,
  ],
  defaultValue: "checking1234",
  errorText: "Checking (1234) is not eligible",
};

export const WithAction = Template.bind({});
WithAction.args = {
  label: "Account",
  id: "account-field",
  children: [
    ...children,
    <Select.Action
      onSelect={() => {
        alert("side effect triggered - no option selected");
      }}
    >
      <span className="fontColor--pine fontWeight--bold">
        <span className="narmi-icon-plus padding--right--xs" /> Add new icon
      </span>
    </Select.Action>,
  ],
};
WithAction.parameters = {
  docs: {
    description: {
      story:
        "If you need an option that triggers a side effect, use a `<Select.Action>` child. An action item will not update selection and con not be selected by default.",
    },
  },
};

export const WithCategories = Template.bind({});
WithCategories.args = {
  id: "withCategories",
  label: "Select an Icon",
  children: [
    <Select.Category label="Transportation">
      <Select.Item value="truck">
        <span className="narmi-icon-truck padding--right--xs" /> Truck
      </Select.Item>
      <Select.Item value="anchor">
        <span className="narmi-icon-anchor padding--right--xs" /> Anchor
      </Select.Item>
      <Select.Item value="car-outline">
        <span className="narmi-icon-car-outline padding--right--xs" /> Car
      </Select.Item>
    </Select.Category>,
    <Select.Category label="Art">
      <Select.Item value="film">
        <span className="narmi-icon-film padding--right--xs" /> Film
      </Select.Item>
      <Select.Item value="aperture">
        <span className="narmi-icon-aperture padding--right--xs" /> Aperture
      </Select.Item>
      <Select.Item value="pen">
        <span className="narmi-icon-pen-tool padding--right--xs" /> Pen
      </Select.Item>
      <Select.Item value="blob">
        <span className="narmi-icon-blob padding--right--xs" /> Blob
      </Select.Item>
    </Select.Category>,
    <Select.Action
      onSelect={() => {
        alert("action taken");
      }}
    >
      <span className="fontColor--pine fontWeight--bold">
        <span className="narmi-icon-plus padding--right--xs" /> Add new
      </span>
    </Select.Action>,
  ],
};
WithCategories.parameters = {
  docs: {
    description: {
      story:
        "You may group `Select.Item` elements by category with `Select.Category`. When using categories, you **must** make all direct children of `Select` a `Select.Category`; no orphan items are allowed when using categories.",
    },
  },
};

export const CustomTypeahead = Template.bind({});
CustomTypeahead.args = {
  id: "customTypeaheadString",
  label: "Select an Industry",
  children: [
    { name: "Agriculture", code: "12345" },
    { name: "Manufacturing", code: "55555" },
    { name: "Logistics", code: "32144" },
    { name: "Hospitality", code: "22147" },
  ].map(({ name, code }) => (
    <Select.Item value={code} searchValue={name}>
      {name}
    </Select.Item>
  )),
};
CustomTypeahead.parameters = {
  docs: {
    description: {
      story:
        "By default, typeahead highlights items based on `value`. You may pass a `searchValue` to customize the string users search against when using typeahead. In this example, the value is a numeric code, but we'd like the user to filter on industry name",
    },
  },
};

export const ChangingTypeaheadBehavior = Template.bind({});
ChangingTypeaheadBehavior.args = {
  id: "customTypeaheadBehavior",
  label: "Select an Industry",
  getTypeaheadString: (userInput, selectItem) => {
    console.info(`User typed: "${userInput}"`);
    let searchString =
      selectItem.props.searchValue || selectItem.props.value || "";

    // user is searching by code
    if (/\d/.test(userInput)) {
      searchString = selectItem.props.value;
      console.info("Searching by NAICS code instead of name");
    }

    return searchString;
  },
  children: [
    { name: "Agriculture", code: "12345" },
    { name: "Manufacturing", code: "55555" },
    { name: "Logistics", code: "32144" },
    { name: "Hospitality", code: "22147" },
  ].map(({ name, code }) => (
    <Select.Item value={code} searchValue={name}>
      {name} - {code}
    </Select.Item>
  )),
};
ChangingTypeaheadBehavior.parameters = {
  docs: {
    description: {
      story:
        "You may provide a function to the `getTypeaheadString` prop to customize which item props/data should be used for autocomplete. In this example, we autocomplete on `value` when the user input is numeric, and autocomplete on `searchValue` (name) when the input is alpha",
    },
  },
};

export const InAForm = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <div className="margin--bottom">
        <input type="text" name="account" value={inputValue} readOnly />
        <p className="fontSize--xs">
          (
          <i>
            Typically this would be a <code>hidden</code> input.
          </i>
          )
        </p>
      </div>
      <Select id="product-field" label="Account" onChange={setInputValue}>
        <Select.Item value="checking1234">Checking (1234)</Select.Item>
        <Select.Item value="savings4321">Savings (4321)</Select.Item>
      </Select>
    </>
  );
};
InAForm.parameters = {
  docs: {
    description: {
      story:
        "A hidden input works natively in a `form`, or as a bridge to a form management library of your choice.",
    },
  },
};

export const Controlled = () => {
  const [value, setValue] = useState(null);
  return (
    <>
      <Select
        id="controlled-product-field"
        label="Account"
        value={value}
        onChange={(v) => setValue(v)}
      >
        <Select.Item value="checking1234">Checking (1234)</Select.Item>
        <Select.Item value="savings4321">Savings (4321)</Select.Item>
      </Select>
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

export const InADialog = (args) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Button
        label="Open Dialog"
        onClick={() => {
          setIsDialogOpen(true);
        }}
      />
      <Dialog
        title="Dialog with a Select"
        isOpen={isDialogOpen}
        onUserDismiss={() => {
          setIsDialogOpen(false);
        }}
      >
        <div className="padding--y--s">
          <div>
            The floating menu list will render portaled near the bottom of the{" "}
            {"<body>"} HTML element.
          </div>
          <div className="padding--y--l">
            <Select {...args} />
          </div>
        </div>
      </Dialog>
    </>
  );
};
InADialog.args = {
  label: "Favorite icon",
  children,
};

export const OneItem = () => {
  return (
    <Select label="Account">
      <Select.Item value="checking1234">Checking (1234)</Select.Item>
    </Select>
  );
};

export const OneAction = () => {
  return (
    <Select label="Account">
      <Select.Action onSelect={() => {}}>
        <span className="fontColor--pine fontWeight--bold">
          <span className="narmi-icon-plus padding--right--xs" /> Add new
          account
        </span>
      </Select.Action>
    </Select>
  );
};

export default {
  title: "Components/Select",
  component: Select,
  subcomponents: { SelectItem, SelectAction },
  argTypes: {
    children: { control: false },
  },
};
