import React, { useState } from "react";
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
