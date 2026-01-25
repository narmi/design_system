import React from "react";
import { action } from "storybook/actions";
import TableSelect from ".";
import Button from "../Button";

export default {
  title: "Components/TableSelect",
  component: TableSelect,
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
    <TableSelect onChange={action("onChange")} {...args}>
      {mockItems.map((item) => (
        <TableSelect.Item key={item} value={item}>
          {item}
        </TableSelect.Item>
      ))}
    </TableSelect>
  );
};
Basic.args = {
  id: "fruit-select",
  label: "Select a fruit",
  isDisabled: false,
  hasError: false,
};

export const WithCustomContent = () => {
  return (
    <TableSelect
      id="account-select"
      label="Select an account"
      onChange={action("onChange")}
    >
      <TableSelect.Item value="checking-001" searchValue="Checking - ***001">
        <div>
          <div>Checking Account</div>
          <div className="fontSize--xs fontColor--secondary">***001</div>
        </div>
      </TableSelect.Item>
      <TableSelect.Item value="savings-001" searchValue="Savings - ***001">
        <div>
          <div>Savings Account</div>
          <div className="fontSize--xs fontColor--secondary">***001</div>
        </div>
      </TableSelect.Item>
      <TableSelect.Item value="credit-003" searchValue="Credit - ***003">
        <div>
          <div>Credit Card</div>
          <div className="fontSize--xs fontColor--secondary">***003</div>
        </div>
      </TableSelect.Item>
    </TableSelect>
  );
};

export const Disabled = () => {
  return (
    <TableSelect
      id="fruit-select-disabled"
      label="Select a fruit"
      isDisabled={true}
      onChange={action("onChange")}
    >
      {mockItems.map((item) => (
        <TableSelect.Item key={item} value={item}>
          {item}
        </TableSelect.Item>
      ))}
    </TableSelect>
  );
};

export const WithError = () => {
  return (
    <TableSelect
      id="fruit-select-error"
      label="Select a fruit"
      hasError={true}
      errorText="Please select a valid fruit"
      onChange={action("onChange")}
    >
      {mockItems.map((item) => (
        <TableSelect.Item key={item} value={item}>
          {item}
        </TableSelect.Item>
      ))}
    </TableSelect>
  );
};

export const PreSelectedValue = () => {
  const [selectedValue, setSelectedValue] = React.useState("Grape");

  return (
    <TableSelect
      id="fruit-select-preselected"
      label="Select a fruit"
      value={selectedValue}
      onChange={(value) => {
        action("onChange")(value);
        setSelectedValue(value);
      }}
    >
      {mockItems.map((item) => (
        <TableSelect.Item key={item} value={item}>
          {item}
        </TableSelect.Item>
      ))}
    </TableSelect>
  );
};
PreSelectedValue.parameters = {
  docs: {
    description: {
      story:
        "TableSelect manages selection internally through the onChange callback.",
    },
  },
};
