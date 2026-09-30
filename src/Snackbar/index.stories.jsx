import React from "react";
import Snackbar from "./";
import Button from "../Button";

const Template = (args) => <Snackbar {...args} />;
export const Overview = Template.bind({});
Overview.args = {
  isActive: true,
  children: (
    <Snackbar.Text>Use Snackbar subcomponents to compose content</Snackbar.Text>
  ),
};

export const Example = () => (
  <Snackbar isActive="true">
    <Snackbar.Text>
      <span className="fontWeight--semibold fontColor--primary">
        3 payments
      </span>
    </Snackbar.Text>
    <Snackbar.Text>$10,150.00 total</Snackbar.Text>
    <span className="narmi-icon-users" />
    <Snackbar.Divider />
    <Snackbar.ButtonGroup>
      <Button kind="secondary" label="Reject" />
      <Button kind="primary" label="Approve" />
    </Snackbar.ButtonGroup>
  </Snackbar>
);
Example.parameters = {
  docs: {
    description: {
      story:
        "You may also include custom components in Snackbar children if the provided subcomponents don't cover your use case. In this example, an arbitrary icon is rendered before the divider.",
    },
  },
};

export default {
  title: "Components/Snackbar",
  component: Snackbar,
};
