import React from "react";
import Button from "./";
import iconSelection from "../icons/selection.json";
import Row from "../Row";
import Select from "../Select";
import type { IconName } from "../types/Icon.types";
import type { ButtonKind } from "./";

const VALID_ICON_NAMES = iconSelection.icons.map(
  (icon) => icon.properties.name,
);

const BUTTON_KINDS: ButtonKind[] = [
  "primary",
  "secondary",
  "tertiary",
  "tonal",
  "negative",
  "plain",
  "ai",
  "inverted",
];

const Template = (args) => <Button {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  label: "Submit",
};

export const ButtonKinds = () => (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "var(--space-l)",
    }}
  >
    {BUTTON_KINDS.map((kind) => (
      // The `inverted` kind is designed for dark/colored surfaces,
      // so it is shown on a themed background swatch.
      <div
        key={kind}
        className={
          kind === "inverted"
            ? "bgColor--theme--primary padding--all--s rounded--all"
            : undefined
        }
      >
        <Button kind={kind} label={kind} />
      </div>
    ))}
  </div>
);
ButtonKinds.parameters = {
  docs: {
    description: {
      story:
        "The `kind` prop controls the visual style of the button. The `inverted` kind is intended for use on dark or colored surfaces and is shown here on a themed background swatch.",
    },
  },
};

export const PlainButton = () => (
  <div style={{ maxWidth: "640px" }}>
    <Select id="overdraft" label="Use overdraft protection?">
      <Select.Item value="Yes">Yes</Select.Item>
      <Select.Item value="No">No</Select.Item>
    </Select>
    <Button
      label="Learn more about overdraft protection"
      kind="plain"
      onClick={() => {
        alert("button click");
      }}
    />
  </div>
);
PlainButton.parameters = {
  docs: {
    description: {
      story:
        'A Button of `kind="plain"` is a button styled to look like a link.',
    },
  },
};

export const AiButton = () => (
  <Button kind="ai" label="Ask Anything" startIcon="sparkle" />
);
AiButton.parameters = {
  docs: {
    description: {
      story:
        'A Button of `kind="ai"` is used for AI-related actions. It renders with a white background, amethyst text, and an animated rotating gradient border.',
    },
  },
};

export const InvertedButton = () => {
  const backgrounds = [
    { className: "bgColor--theme--primary", label: "theme--primary" },
    { className: "bgColor--theme--secondary", label: "theme--secondary" },
    { className: "bgColor--pine", label: "pine" },
    { className: "bgColor--moss", label: "moss" },
    { className: "bgColor--azul", label: "azul" },
    { className: "bgColor--cove", label: "cove" },
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-m)" }}>
      {backgrounds.map(({ className, label }) => (
        <div
          key={label}
          className={`${className} padding--all--l rounded--all`}
        >
          <Button kind="inverted" label={label} />
        </div>
      ))}
      <div
        className="padding--all--l rounded--all"
        style={{ backgroundColor: "var(--color-amethyst)" }}
      >
        <Button kind="inverted" label="amethyst" />
      </div>
    </div>
  );
};
InvertedButton.parameters = {
  docs: {
    description: {
      story:
        'A Button of `kind="inverted"` is designed to sit on top of dark or colored surfaces. It renders with a translucent white background and theme-colored text, so it is shown here across multiple backgrounds to demonstrate its versatility.',
    },
  },
};

export const ConfirmAndCancel = () => (
  <Row alignItems="center" justifyContent="end">
    <Row.Item shrink>
      <Button kind="negative" label="Cancel" />
    </Row.Item>
    <Row.Item shrink>
      <Button kind="primary" label="Confirm" />
    </Row.Item>
  </Row>
);
ConfirmAndCancel.parameters = {
  docs: {
    description: {
      story:
        "When presenting the user with positive/negative options, use the `negative` button for the negating action and `primary` for confirm. The confirming action should always be on the right.",
    },
  },
};

export const ButtonSizes = () => (
  <>
    <div className="margin--bottom--l">
      <Row alignItems="center">
        {["m", "s", "xs"].map((size) => (
          <Row.Item key={size}>
            <Button label={`${size} Button`} size={size} />
          </Row.Item>
        ))}
      </Row>
    </div>
    <div className="margin--bottom--l">
      <Row alignItems="center">
        {["m", "s", "xs"].map((size) => (
          <Row.Item key={size}>
            <Button kind="secondary" label={`${size} Button`} size={size} />
          </Row.Item>
        ))}
      </Row>
    </div>
    <div className="margin--bottom--l">
      <Row alignItems="center">
        {["m", "s", "xs"].map((size) => (
          <Row.Item key={size}>
            <Button kind="tonal" label={`${size} Button`} size={size} />
          </Row.Item>
        ))}
      </Row>
    </div>
    <div className="margin--bottom--l">
      <Row alignItems="center">
        {["m", "s", "xs"].map((size) => (
          <Row.Item key={size}>
            <Button kind="plain" label={`${size} Button`} size={size} />
          </Row.Item>
        ))}
      </Row>
    </div>
    <div className="margin--bottom--l">
      <Row alignItems="center">
        {["m", "s", "xs"].map((size) => (
          <Row.Item key={size}>
            <Button kind="ai" label={`${size} Button`} size={size} />
          </Row.Item>
        ))}
      </Row>
    </div>
  </>
);

export const FullWidthButton = () => (
  <div style={{ maxWidth: "400px" }}>
    <div className="margin--bottom--m">
      <Button endIcon="arrow-right" label="Continue" isFullWidth />
    </div>
    <div className="margin--bottom--m">
      <Button
        kind="tonal"
        startIcon="camera"
        label="Take a picture"
        isFullWidth
      />
    </div>
  </div>
);
FullWidthButton.parameters = {
  docs: {
    description: {
      story:
        "When `isFullWidth` is `true`, the button expands to fill the width of its container. Useful for stacked actions in narrow layouts such as mobile views or sidebars.",
    },
  },
};

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    startIcon: { options: ["", ...(VALID_ICON_NAMES as IconName)] },
    endIcon: { options: ["", ...(VALID_ICON_NAMES as IconName)] },
  },
};
