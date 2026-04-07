import React, { useState } from "react";
import { FieldText } from "./Text";
import { FIELD_MASKS } from "./masks";
import iconSelection from "../icons/selection.json";

const VALID_ICON_NAMES = iconSelection.icons
  .map((icon) => icon.properties.name)
  .filter(Boolean);

export default {
  title: "Components/Field/Field.Text",
  component: FieldText,
  argTypes: {
    startIcon: { control: "select", options: [null, ...VALID_ICON_NAMES] },
    endIcon: { control: "select", options: [null, ...VALID_ICON_NAMES] },
  },
};

const Template = (args) => {
  const [value, setValue] = useState(args.value || "");
  return <FieldText {...args} value={value} onChange={setValue} />;
};

export const Overview = Template.bind({});
Overview.args = {
  id: "email",
  label: "Email Address",
  value: "",
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  id: "username",
  label: "Username",
  value: "",
  placeholder: "Enter your username",
};

export const WithValue = Template.bind({});
WithValue.args = {
  id: "fullname",
  label: "Full Name",
  value: "Jane Smith",
};

export const WithMask = Template.bind({});
WithMask.args = {
  id: "credit-card",
  label: "Credit Card Number",
  value: "",
  startIcon: "credit-card",
  placeholder: "#### #### #### ####",
  mask: FIELD_MASKS.CCNumber,
};
WithMask.parameters = {
  docs: {
    description: {
      story:
        "`Field.MASKS.CCNumber` is passed to `mask` in this story. The `Field.MASKS` registry contains a number of built in masks for convenience. You may also pass your own valid MakitoOptions directly to the `mask` prop.",
    },
  },
};

export const WithStartIcon = Template.bind({});
WithStartIcon.args = {
  id: "email-icon",
  label: "Email",
  value: "",
  placeholder: "name@example.com",
  startIcon: "mail",
};

export const WithEndIcon = Template.bind({});
WithEndIcon.args = {
  id: "password",
  label: "Password",
  type: "password",
  value: "",
  endIcon: "lock",
};
WithEndIcon.parameters = {
  docs: {
    description: {
      story: 'Password masking is accomplished by passing `type="password"`',
    },
  },
};

export const WithClearButton = () => {
  const [value, setValue] = useState("Sample text");
  return (
    <FieldText
      id="clearable"
      label="Searchable Text"
      value={value}
      onChange={setValue}
      showClearButton
      placeholder="Type to search..."
    />
  );
};
WithClearButton.parameters = {
  docs: {
    description: {
      story:
        "The clear button is only shown when the field has a value and is not disabled. Click the button to clear the input.",
    },
  },
};

export const WithErrors = Template.bind({});
WithErrors.args = {
  id: "email-error",
  label: "Email Address",
  value: "invalid-email",
  errors: ["Please enter a valid email address"],
};

export const WithMultipleErrors = Template.bind({});
WithMultipleErrors.args = {
  id: "password-validation",
  label: "Password",
  value: "weak",
  errors: [
    "Password must be at least 8 characters",
    "Password must include a number",
    "Password must include a special character",
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: "disabled-field",
  label: "Disabled Field",
  value: "Cannot edit this",
  isDisabled: true,
};

export const DisabledWithError = Template.bind({});
DisabledWithError.args = {
  id: "disabled-error",
  label: "Disabled with Error",
  value: "Cannot edit",
  isDisabled: true,
  errors: ["This field has an error"],
};

export const WithEndContent = () => {
  const [value, setValue] = useState("");
  return (
    <FieldText
      id="percentage"
      label="Discount"
      value={value}
      onChange={setValue}
      endContent={<span style={{ color: "var(--text--secondary)" }}>%</span>}
      placeholder="0"
    />
  );
};
WithEndContent.parameters = {
  docs: {
    description: {
      story:
        "Use `endContent` to display decorative content at the end of the input.",
    },
  },
};

export const FullyDecorated = () => {
  const [value, setValue] = useState("(555) 123-4567");
  return (
    <FieldText
      id="phone"
      label="Phone Number"
      value={value}
      onChange={setValue}
      startIcon="phone"
      showClearButton
      placeholder="(###) ###-####"
      mask={FIELD_MASKS.Phone}
    />
  );
};
FullyDecorated.parameters = {
  docs: {
    description: {
      story:
        "This example combines multiple features: icons, clear button, placeholder text, and input masking.",
    },
  },
};
