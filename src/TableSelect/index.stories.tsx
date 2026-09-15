import React from "react";
import { action } from "storybook/actions";
import { expect, screen, waitFor } from "storybook/test";
import TableSelect from ".";

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

/**
 * Interaction test that opens the TableSelect so Chromatic can snapshot
 * the dropdown. The menu is portalled to the body, so options are queried
 * via `screen`.
 */
export const Opens = {
  name: "Interaction: Opens on click",
  render: () => (
    <TableSelect id="fruit-open" label="Select a fruit" onChange={() => {}}>
      {mockItems.map((item) => (
        <TableSelect.Item key={item} value={item}>
          {item}
        </TableSelect.Item>
      ))}
    </TableSelect>
  ),
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(
      canvas.getByRole("combobox", { name: /select a fruit/i }),
    );
    await waitFor(() =>
      expect(screen.getByRole("option", { name: "Apple" })).toBeVisible(),
    );
  },
};

/**
 * Interaction test for the selection flow: open, pick an option, and
 * verify the trigger reflects the choice.
 */
export const SelectsOption = {
  name: "Interaction: Selects an option",
  render: () => (
    <TableSelect
      id="fruit-select-story"
      label="Select a fruit"
      onChange={() => {}}
    >
      {mockItems.map((item) => (
        <TableSelect.Item key={item} value={item}>
          {item}
        </TableSelect.Item>
      ))}
    </TableSelect>
  ),
  play: async ({ canvas, userEvent }) => {
    const trigger = canvas.getByRole("combobox", { name: /select a fruit/i });
    await userEvent.click(trigger);
    await waitFor(() =>
      expect(screen.getByRole("option", { name: "Banana" })).toBeVisible(),
    );

    await userEvent.click(screen.getByRole("option", { name: "Banana" }));
    await waitFor(() => expect(trigger).toHaveTextContent("Banana"));
  },
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

export const ScrollingBehavior = () => {
  return (
    <main style={{ height: "200vh" }}>
      <div className="margin--bottom" style={{ marginTop: "100vh" }} />
      <TableSelect
        id="fruit-select-scrolling"
        label="Select a fruit"
        onChange={action("onChange")}
      >
        {mockItems.map((item) => (
          <TableSelect.Item key={item} value={item}>
            {item}
          </TableSelect.Item>
        ))}
      </TableSelect>
    </main>
  );
};
