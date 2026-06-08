import React, { useState } from "react";
import Snackbar from "./";
import Button from "../Button";
import AutocompleteModal from "../AutocompleteModal";

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

const WithAutocompleteModalContent = () => {
  const [selectedValue, setSelectedValue] = useState("Unassigned");
  return (
    <div style={{ height: "200vh" }}>
      <p style={{ padding: "2rem" }}>
        Scroll down — the Snackbar is fixed at the bottom of the viewport.
      </p>
      <div
        style={{ position: "fixed", bottom: "var(--space-xl)", width: "100%" }}
      >
        <Snackbar isActive="true">
          <Snackbar.Text>1 selected</Snackbar.Text>
          <Snackbar.Divider />
          <Snackbar.Text>Assign to:</Snackbar.Text>
          <AutocompleteModal
            inputLabel="Assignee"
            trigger={<Button label={selectedValue} />}
            onChange={(val) => setSelectedValue(val)}
          >
            <AutocompleteModal.Item value="Unassigned" />
            <AutocompleteModal.Item value="Chris" />
            <AutocompleteModal.Item value="Nikhil" />
            <AutocompleteModal.Item value="James" />
            <AutocompleteModal.Item value="Phil" />
          </AutocompleteModal>
        </Snackbar>
      </div>
    </div>
  );
};

export const WithAutocompleteModal = () => <WithAutocompleteModalContent />;
WithAutocompleteModal.parameters = {
  docs: {
    description: {
      story:
        "Tests positioning of AutocompleteModal popover when a Snackbar is present at the bottom of the viewport.",
    },
  },
};

export default {
  title: "Components/Snackbar",
  component: Snackbar,
};
