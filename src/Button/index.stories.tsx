import React from "react";
import Button from "./";
import iconSelection from "../icons/selection.json";
import Row from "../Row";
import type { IconName } from "../types/Icon.types";

const VALID_ICON_NAMES = iconSelection.icons.map(
  (icon) => icon.properties.name,
);

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
  </>
);

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    startIcon: { options: ["", ...(VALID_ICON_NAMES as IconName)] },
    endIcon: { options: ["", ...(VALID_ICON_NAMES as IconName)] },
  },
};
