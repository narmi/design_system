import React, { useState } from "react";
import TableInput from "./";
import Table from "../Table";
import type { TableInputProps } from "./";

const Template = (args: TableInputProps) => {
  const [value, setValue] = useState(args.value || "");

  return (
    <TableInput
      {...args}
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
        args.onChange?.(newValue);
      }}
    />
  );
};

export const Overview = Template.bind({});
Overview.args = {
  value: "Sample value",
  onChange: (value: string) => console.log("Value changed:", value),
  label: "Editable field",
  placeholder: "Enter text here...",
  isDisabled: false,
};

export const InATable = () => {
  const [values, setValues] = useState({
    name1: "John Doe",
    email1: "john@example.com",
    name2: "Jane Smith",
    email2: "jane@example.com",
  });

  const updateValue = (key: string, newValue: string) => {
    setValues((prev) => ({ ...prev, [key]: newValue }));
  };

  return (
    <Table
      kind="editable"
      colVisibility={["*", "*", "*"]}
      colLayout={{
        s: "2fr 1fr 1fr",
        m: "2fr 1fr 1fr",
        l: "2fr 1fr 1fr",
      }}
    >
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Role (not editable)</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <TableInput
              value={values.name1}
              onChange={(value) => updateValue("name1", value)}
              label="Edit name"
              placeholder="Enter name"
            />
          </Table.Cell>
          <Table.Cell>Admin</Table.Cell>
          <Table.Cell>
            <TableInput
              value={values.email1}
              onChange={(value) => updateValue("email1", value)}
              label="Edit email"
              placeholder="Enter email"
            />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <TableInput
              value={values.name2}
              onChange={(value) => updateValue("name2", value)}
              label="Edit name"
              placeholder="Enter name"
            />
          </Table.Cell>
          <Table.Cell>User</Table.Cell>
          <Table.Cell>
            <TableInput
              value={values.email2}
              onChange={(value) => updateValue("email2", value)}
              label="Edit email"
              placeholder="Enter email"
            />
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export default {
  title: "Components/TableInput",
  component: TableInput,
};
