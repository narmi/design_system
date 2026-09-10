import React, { useState } from "react";
import { expect, waitFor } from "storybook/test";
import TableInput from "./";
import Table from "../Table";
import type { TableInputProps } from "./";
import { action } from "storybook/actions";

const Template = (args: TableInputProps) => {
  const [value, setValue] = useState(args.value || "");

  return (
    <TableInput
      {...args}
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
        args.onChange?.(event);
      }}
    />
  );
};

export const Overview = Template.bind({});
Overview.args = {
  value: "Sample value",
  onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
    action("Value changed")(event.target.value),
  label: "Editable field",
  placeholder: "Enter text here...",
  isDisabled: false,
};

export const WithMaxLength = Template.bind({});
WithMaxLength.args = {
  value: "",
  onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
    action("Value changed")(event.target.value),
  label: "Editable field",
  placeholder: "Enter text here...",
  isDisabled: false,
  maxLength: 12,
};

/**
 * Interaction test verifying that typing updates the cell value.
 */
export const TypesValue = {
  name: "Interaction: Accepts typed input",
  render: () => {
    const ControlledInput = () => {
      const [value, setValue] = useState("");
      return (
        <TableInput
          label="Edit name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter name"
        />
      );
    };
    return <ControlledInput />;
  },
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByRole("textbox", { name: /edit name/i });
    await userEvent.type(input, "Jane Smith");
    await waitFor(() => expect(input).toHaveValue("Jane Smith"));
  },
};

/**
 * Interaction test verifying the character counter updates as the user types.
 */
export const CharacterCounter = {
  name: "Interaction: Updates character counter",
  render: () => {
    const ControlledInput = () => {
      const [value, setValue] = useState("");
      return (
        <TableInput
          label="Edit code"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          maxLength={12}
        />
      );
    };
    return <ControlledInput />;
  },
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByRole("textbox", { name: /edit code/i });
    expect(canvas.getByText("0/12")).toBeInTheDocument();

    await userEvent.type(input, "abc");
    await waitFor(() => expect(canvas.getByText("3/12")).toBeInTheDocument());
  },
};

export const InATable = () => {
  const [values, setValues] = useState({
    name1: "John Doe",
    email1: "john@example.com",
    name2: "Jane Smith",
    email2: "jane@example.com",
  });

  const updateValue = (
    key: string,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setValues((prev) => ({ ...prev, [key]: event.target.value }));
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
              onChange={(event) => updateValue("name1", event)}
              label="Edit name"
              placeholder="Enter name"
            />
          </Table.Cell>
          <Table.Cell>Admin</Table.Cell>
          <Table.Cell>
            <TableInput
              value={values.email1}
              onChange={(event) => updateValue("email1", event)}
              label="Edit email"
              placeholder="Enter email"
            />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <TableInput
              value={values.name2}
              onChange={(event) => updateValue("name2", event)}
              label="Edit name"
              placeholder="Enter name"
            />
          </Table.Cell>
          <Table.Cell>User</Table.Cell>
          <Table.Cell>
            <TableInput
              value={values.email2}
              onChange={(event) => updateValue("email2", event)}
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
