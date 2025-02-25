import React, { useState } from "react";
import Checkbox from "./";

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

export const LongLabel = Template.bind({});
LongLabel.args = {
  markdownLabel:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  name: "long_label",
};
LongLabel.parameters = {
  docs: {
    description: {
      story: "The checkbox element itself is vertically centered when the label overflows to multiple lines",
    },
  },
};

export default {
  title: "Components/Checkbox",
  component: Checkbox,
};
