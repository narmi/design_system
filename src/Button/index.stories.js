import React from "react";
import Button, { VALID_ICON_NAMES } from "./";
import Row from "../Row";

const Template = (args) => <Button {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  label: "Submit",
};

export const PlainButton = Template.bind({});
PlainButton.args = {
  label: "Edit",
  kind: "plain",
};
PlainButton.parameters = {
  docs: {
    description: {
      story:
        'A Button of `kind="plain"` is a button styled to look like a link.',
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
  <Row alignItems="center">
    <Row.Item shrink>
      <Button kind="plain" label="X-Small Button" size="xs" />
    </Row.Item>
    <Row.Item shrink>
      <Button kind="plain" label="Small Button" size="s" />
    </Row.Item>
    <Row.Item shrink>
      <Button kind="plain" label="Medium Button" size="m" />
    </Row.Item>
    <Row.Item shrink>
      <Button kind="plain" label="Large Button" size="l" />
    </Row.Item>
  </Row>
);

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    startIcon: { options: ["", ...VALID_ICON_NAMES] },
    endIcon: { options: ["", ...VALID_ICON_NAMES] },
  },
};
