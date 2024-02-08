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

export const MultipleCheckboxes = () => (
  <>
    <h3 className="margin--bottom">Permissions</h3>
    <Checkbox label="See statements and documents" name="view" />
    <Checkbox label="Make deposits" name="deposit" />
    <Checkbox label="Make withdraws" name="widthdraw" />
  </>
);

export const Indeterminate = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <Checkbox
        label="Indeterminate state"
        indeterminate
        checked={isChecked}
        onChange={() => setIsChecked((isChecked) => !isChecked)}
      />
      <Checkbox
        label="Checked state"
        checked={isChecked}
        onChange={() => setIsChecked((isChecked) => !isChecked)}
      />
    </>
  );
};
Indeterminate.parameters = {
  docs: {
    description: {
      story:
        "When passing `indeterminate`, the input renders as indeterminate regardless of the checked value but checked is still toggled on click.",
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

export default {
  title: "Components/Checkbox",
  component: Checkbox,
};
