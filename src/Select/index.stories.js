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
  label: "Favorite icon",
  children,
};

export const DefaultSelection = Template.bind({});
DefaultSelection.args = {
  label: "Favorite icon",
  children,
  defaultValue: "film",
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  label: "Account",
  children: [
    <Select.Item value="checking1234">Checking (1234)</Select.Item>,
    <Select.Item value="checkint4321">Checking (4321)</Select.Item>,
  ],
  defaultValue: "checking1234",
  errorText: "Checking (1234) is not eligible",
};

export const WithAction = Template.bind({});
WithAction.args = {
  label: "Account",
  id: "3",
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
      <Select id={"2"} label="Account" onChange={setInputValue}>
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
      <Select id="1" label="Account" value={value} onChange={(v) => setValue(v)}>
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
            The floating menu list will take up space in document flow, allowing
            <code>Select</code> to expand the height of its content container if
            there isn't enough room for the dropdown.
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
}

export const OneAction = () => {
  return (
    <Select label="Account">
      <Select.Action onSelect={()=>{}}>
        <span className="fontColor--pine fontWeight--bold">
          <span className="narmi-icon-plus padding--right--xs" /> Add new account
        </span>
      </Select.Action>
    </Select>
  );
}

export default {
  title: "Components/Select",
  component: Select,
  subcomponents: { SelectItem, SelectAction },
  argTypes: {
    children: { control: false },
  },
};
