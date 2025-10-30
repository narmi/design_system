import React from "react";
import { action } from "storybook/actions";
import TableAutocomplete from ".";
import Button from "../Button";

export default {
  title: "Components/TableAutocomplete",
  component: TableAutocomplete,
};

const mockItems = [
  "Apple",
  "Apricot",
  "Banana",
  "Blueberry",
  "Cherry",
  "Grape",
  "Grapefruit",
  "Lemon",
  "Lime",
  "Mango",
  "Orange",
  "Peach",
  "Pear",
];

export const Basic = (args) => {
  return (
    <TableAutocomplete
      onChange={action("onChange")}
      onInputChange={action("onInputChange")}
      {...args}
    >
      {mockItems.map((item) => (
        <TableAutocomplete.Item key={item} value={item}>
          {item}
        </TableAutocomplete.Item>
      ))}
    </TableAutocomplete>
  );
};
Basic.args = {
  label: "Select a fruit",
  placeholder: "Type to search...",
  isDisabled: false,
  hasError: false,
};

export const WithCustomContent = () => {
  return (
    <TableAutocomplete
      label="Select an account"
      placeholder="Type to search..."
      onChange={action("onChange")}
      onInputChange={action("onInputChange")}
    >
      <TableAutocomplete.Item
        value="checking-001"
        searchValue="Checking - ***001"
      >
        <div>
          <div>Checking Account</div>
          <div className="fontSize--xs fontColor--secondary">***001</div>
        </div>
      </TableAutocomplete.Item>
      <TableAutocomplete.Item
        value="savings-001"
        searchValue="Savings - ***001"
      >
        <div>
          <div>Savings Account</div>
          <div className="fontSize--xs fontColor--secondary">***001</div>
        </div>
      </TableAutocomplete.Item>
      <TableAutocomplete.Item value="credit-003" searchValue="Credit - ***003">
        <div>
          <div>Credit Card</div>
          <div className="fontSize--xs fontColor--secondary">***003</div>
        </div>
      </TableAutocomplete.Item>
    </TableAutocomplete>
  );
};

export const WithFooter = () => {
  return (
    <TableAutocomplete
      label="Select a fruit"
      placeholder="Type to search..."
      onChange={action("onChange")}
      onInputChange={action("onInputChange")}
      footerContent={
        <Button
          size="s"
          kind="plain"
          label="Add new item"
          onClick={action("Add new item")}
        />
      }
    >
      {mockItems.map((item) => (
        <TableAutocomplete.Item key={item} value={item}>
          {item}
        </TableAutocomplete.Item>
      ))}
    </TableAutocomplete>
  );
};

export const Disabled = () => {
  return (
    <TableAutocomplete
      label="Select a fruit"
      placeholder="Type to search..."
      isDisabled={true}
      inputValue="Can't change this"
      onChange={action("onChange")}
      onInputChange={action("onInputChange")}
    >
      {mockItems.map((item) => (
        <TableAutocomplete.Item key={item} value={item}>
          {item}
        </TableAutocomplete.Item>
      ))}
    </TableAutocomplete>
  );
};

export const WithError = () => {
  return (
    <TableAutocomplete
      label="Select a fruit"
      placeholder="Type to search..."
      hasError={true}
      onChange={action("onChange")}
      onInputChange={action("onInputChange")}
    >
      {mockItems.map((item) => (
        <TableAutocomplete.Item key={item} value={item}>
          {item}
        </TableAutocomplete.Item>
      ))}
    </TableAutocomplete>
  );
};

export const PreSelectedValue = () => {
  const [inputValue, setInputValue] = React.useState("Grape");

  return (
    <TableAutocomplete
      label="Select a fruit"
      placeholder="Type to search..."
      inputValue={inputValue}
      onChange={action("onChange")}
      onInputChange={(value) => {
        action("onInputChange")(value);
        setInputValue(value);
      }}
    >
      {mockItems.map((item) => (
        <TableAutocomplete.Item key={item} value={item}>
          {item}
        </TableAutocomplete.Item>
      ))}
    </TableAutocomplete>
  );
};
PreSelectedValue.parameters = {
  docs: {
    description: {
      story:
        "If the `inputValue` matches an item value, that item will be selected.",
    },
  },
};
