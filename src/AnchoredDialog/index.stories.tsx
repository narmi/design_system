import React, { useState } from "react";
import { expect, waitFor } from "storybook/test";
import AnchoredDialog from "./";
import Button from "../Button";
import Checkbox from "../Checkbox";

const BaseTemplate = (args) => <AnchoredDialog {...args} />;

const InteractiveTemplate = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnchoredDialog
      {...args}
      isOpen={isOpen}
      onUserDismiss={() => setIsOpen(false)}
      trigger={<Button onClick={() => setIsOpen(true)}>Open Dialog</Button>}
      renderFooter={() => (
        <div style={{ textAlign: "right" }}>
          <Button size="s" kind="plain" onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </div>
      )}
    />
  );
};

export const Overview = BaseTemplate.bind({});
Overview.args = {
  isOpen: true,
  renderHeader: () => <div>Custom JSX Header</div>,
  children: <div>Dialog content goes here</div>,
  renderFooter: () => <div>Custom JSX Footer</div>,
};

export const Interactive = InteractiveTemplate.bind({});
Interactive.args = {
  renderHeader: () => <div>Custom JSX Header</div>,
  children: <div>Dialog content goes here</div>,
};

/**
 * Interaction test that opens the AnchoredDialog on trigger click so
 * Chromatic can snapshot the anchored placement.
 */
export const Opens = {
  name: "Interaction: Opens on trigger click",
  render: () => <InteractiveTemplate {...Interactive.args} />,
  play: async ({ canvas, userEvent }) => {
    // content is not rendered until the dialog opens
    expect(
      canvas.queryByText("Dialog content goes here"),
    ).not.toBeInTheDocument();

    await userEvent.click(canvas.getByRole("button", { name: /open dialog/i }));
    await waitFor(() =>
      expect(canvas.getByText("Dialog content goes here")).toBeVisible(),
    );
  },
};

/**
 * Interaction test verifying the dialog closes via its footer button.
 */
export const Closes = {
  name: "Interaction: Closes via footer button",
  render: () => <InteractiveTemplate {...Interactive.args} />,
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button", { name: /open dialog/i }));
    await waitFor(() =>
      expect(canvas.getByText("Dialog content goes here")).toBeVisible(),
    );

    await userEvent.click(canvas.getByRole("button", { name: /^close$/i }));
    await waitFor(() =>
      expect(
        canvas.queryByText("Dialog content goes here"),
      ).not.toBeInTheDocument(),
    );
  },
};

const ChecklistTemplate = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const items = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    label: `Checklist item ${i + 1}`,
  }));

  return (
    <AnchoredDialog
      {...args}
      isOpen={isOpen}
      onUserDismiss={() => setIsOpen(false)}
      trigger={<Button onClick={() => setIsOpen(true)}>Open Dialog</Button>}
      renderFooter={() => (
        <div style={{ textAlign: "right" }}>
          <Button
            size="xs"
            kind="secondary"
            onClick={() => setIsOpen(false)}
            label="Apply"
          />
        </div>
      )}
    >
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {items.map((item) => (
          <li key={item.id} style={{ marginBottom: "12px" }}>
            <Checkbox label={item.label} />
          </li>
        ))}
      </ul>
    </AnchoredDialog>
  );
};

export const Checklist = ChecklistTemplate.bind({});
Checklist.args = {
  renderHeader: () => <div>Select Items</div>,
  renderFooter: () => <div>Sticky footer</div>,
};

export default {
  title: "Components/AnchoredDialog",
  component: AnchoredDialog,
};
