import React from "react";
import Button from "./";
import iconSelection from "../icons/selection.json";
import Row from "../Row";
import Select from "../Select";
import type { IconName } from "../types/Icon.types";

const VALID_ICON_NAMES = iconSelection.icons.map(
  (icon) => icon.properties.name,
);

const Template = (args) => <Button {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  label: "Submit",
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

export const SpreadLayoutWithIcon = () => (
  <div
    style={{
      width: "240px",
      padding: "22px",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    }}
  >
    <Button
      label="Get started"
      type="submit"
      endIcon="arrow-right"
      size="s"
      isSpread={true}
    />
  </div>
);


export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    startIcon: { options: ["", ...(VALID_ICON_NAMES as IconName)] },
    endIcon: { options: ["", ...(VALID_ICON_NAMES as IconName)] },
    isSpread: { control: "boolean" },
  },
};
