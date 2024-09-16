/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-key */
import React from "react";
import PageHeader from "./";
import Row from "../Row";
import Button from "../Button";
import MenuButton from "../MenuButton";

const Template = (args) => <PageHeader {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  breadcrumbs: ["Page title"],
  actions: [
    <Button kind="secondary" label="Secondary Action" />,
    <Button kind="primary" label="Primary Action" />,
  ],
};

export const Compact = Template.bind({});
Compact.args = {
  kind: "compact",
  breadcrumbs: ["Page title"],
  actions: [<Button kind="primary" label="Primary Action" />],
};

export const Breadcrumbs = Template.bind({});
Breadcrumbs.args = {
  breadcrumbs: [<a href="#">Breadcrumb 1</a>, "Current Page"],
  actions: [<Button kind="primary" label="Primary Action" />],
};

export const BackLink = Template.bind({});
BackLink.args = {
  kind: "hero",
  backLabel: "Tasks",
  onBackClick: () => {},
};

export const CompactBackLink = Template.bind({});
CompactBackLink.args = {
  kind: "compact",
  backLabel: <a href="#">Tasks</a>,
  onBackClick: () => {},
};
CompactBackLink.parameters = {
  docs: {
    description: {
      story:
        "The `backLabel` prop also accepts a link to allow larger click targets for compact headers",
    },
  },
};

export const WithMenu = Template.bind({});
WithMenu.args = {
  kind: "compact",
  breadcrumbs: ["Configurations", "Translations"],
  menu: (
    <MenuButton label="Actions">
      <MenuButton.Item startIcon="edit-2" label="Edit" />
      <MenuButton.Item startIcon="camera" label="Screenshot" />
    </MenuButton>
  ),
};

export default {
  title: "Components/PageHeader",
  component: PageHeader,
};
