import React, { useState } from "react";
import Checkbox from "./";
import Alert from "../Alert";

const Template = (args) => <Checkbox {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  label: "I agree to receive spam",
  name: "spam",
};

export const FullyControlled = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Checkbox
      label="Make deposits"
      name="deposit"
      checked={isChecked}
      onChange={() => setIsChecked((isChecked) => !isChecked)}
    />
  );
};
FullyControlled.parameters = {
  docs: {
    description: {
      story:
        "When passing `checked`, the input becomes fully controlled and you must use the `onChange` callback to update the value of `checked`.",
    },
  },
};

export const MultipleCheckboxes = (args) => (
  <>
    <h3 className="margin--bottom">Permissions</h3>
    <Checkbox label="See statements and documents" name="view" {...args} />
    <Checkbox label="Make deposits" name="deposit" {...args} />
    <Checkbox label="Make withdrawals" name="withdrawal" {...args} />
  </>
);

export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = {
  label: "Checked and disabled",
  name: "checked_disabled",
  checked: true,
  isDisabled: true,
};
CheckedDisabled.parameters = {
  docs: {
    description: {
      story: "A checkbox that is both checked and disabled.",
    },
  },
};

export const AsCard = Template.bind({});
AsCard.args = {
  label: "Checkbox of 'card' kind",
  name: "card_kind",
  kind: "card",
};
AsCard.parameters = {
  docs: {
    description: {
      story: "Renders a checkbox input and label styled as a card",
    },
  },
};

export const TableCheckbox = Template.bind({});
TableCheckbox.args = {
  kind: "table",
  name: "table_kind",
  label: "Select row",
};
TableCheckbox.parameters = {
  docs: {
    description: {
      story: "Checkbox used in table row selection",
    },
  },
};

export const Markdown = Template.bind({});
Markdown.args = {
  markdownLabel:
    "I agree to receive spam from [google](https://www.google.com/)",
  name: "spam",
};
Markdown.parameters = {
  docs: {
    description: {
      story: "Renders markdown when markdownLabel prop is set",
    },
  },
};

export const CustomLabelElements = Template.bind({});
CustomLabelElements.args = {
  name: "Custom display with stuff",
  defaultChecked: false,
  renderLabel: (isChecked) => {
    const alertKind = isChecked ? "primary" : "warn";
    return (
      <Alert kind={alertKind} isActive isDismissable={false}>
        I will turn green if you check the box!
      </Alert>
    );
  },
};
CustomLabelElements.parameters = {
  docs: {
    description: {
      story:
        "Renders a custom label element when `renderLabel` prop is set. Will provide the `isChecked` state to the custom element.",
    },
  },
};

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  // Declare controls explicitly so every prop is editable regardless of whether
  // react-docgen output is available. Relying on docgen alone is fragile (see
  // `.storybook/main.ts` and `scripts/checkDocgen.mjs`); when it is missing,
  // Storybook infers controls only from each story's `args`, which previously
  // left most props (e.g. `checked`, `isDisabled`, `kind`) without controls.
  argTypes: {
    label: { control: "text" },
    markdownLabel: { control: "text" },
    name: { control: "text" },
    id: { control: "text" },
    value: { control: "text" },
    error: { control: "text" },
    testId: { control: "text" },
    checked: { control: "boolean" },
    defaultChecked: { control: "boolean" },
    isDisabled: { control: "boolean" },
    disabled: { control: "boolean" },
    indeterminate: { control: "boolean" },
    hasError: { control: "boolean" },
    kind: {
      control: "select",
      options: ["normal", "condensed", "card", "table"],
    },
    onChange: { action: "changed" },
    renderLabel: { control: false },
  },
};
