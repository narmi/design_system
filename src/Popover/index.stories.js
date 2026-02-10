import React, { useState } from "react";
import Popover from "./";
import Button from "../Button";
import Checkbox from "../Checkbox";

const items = [
  { label: "Option 1", value: "option-1" },
  { label: "Option 2", value: "option-2" },
  { label: "Option 3", value: "option-3" },
  { label: "Option 4", value: "option-4" },
  { label: "Option 5", value: "option-5" },
  { label: "Option 6", value: "option-6" },
  { label: "Option 7", value: "option-7" },
  { label: "Option 8", value: "option-8" },
  { label: "Option 9", value: "option-9" },
  { label: "Option 10", value: "option-10" },
  { label: "Option 11", value: "option-11" },
  { label: "Option 12", value: "option-12" },
  { label: "Option 13", value: "option-13" },
  { label: "Option 14", value: "option-14" },
  { label: "Option 15", value: "option-15" },
  { label: "Option 16", value: "option-16" },
  { label: "Option 17", value: "option-17" },
  { label: "Option 18", value: "option-18" },
  { label: "Option 19", value: "option-19" },
  { label: "Option 20", value: "option-20" },
  { label: "Option 21", value: "option-21" },
  { label: "Option 22", value: "option-22" },
  { label: "Option 23", value: "option-23" },
];

const Template = (args) => (
  <div
    style={{
      height: "200px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Popover {...args} />
  </div>
);

export const Overview = Template.bind({});
Overview.args = {
  content: <div className="padding--all--m">📦 Any content</div>,
  renderTrigger: () => (
    <Button type="button" kind="secondary">
      Open Popover
    </Button>
  ),
};
Overview.argTypes = {
  content: { control: false },
};

export const LegacyTrigger = () => {
  return (
    <>
      <div className="margin--top--m">
        <Popover
          content={<div className="padding--all--m">📦 Any content</div>}
        >
          <div>Trigger as children</div>
        </Popover>
      </div>
    </>
  );
};
LegacyTrigger.parameters = {
  docs: {
    description: {
      story:
        "Popover supports accepting children to use as the trigger element. **This feature will be removed in a feature release;** use `renderTrigger` instead.",
    },
  },
};

export const Positioning = Template.bind({});
Positioning.args = {
  content: (
    <div className="padding--all--m">
      Use <code>side</code> and <code>alignment</code> to set your preferred
      positioning
    </div>
  ),
  renderTrigger: () => (
    <Button type="button" kind="secondary">
      Top / Start positioned Popover
    </Button>
  ),
  side: "top",
  alignment: "start",
};
Positioning.argTypes = {
  content: { control: false },
};

export const FocusManagement = Template.bind({});
FocusManagement.args = {
  renderTrigger: () => (
    <Button type="button" kind="secondary">
      Click to show Popover
    </Button>
  ),
  content: (
    <div
      className="padding--all"
      style={{ maxHeight: "50vh", display: "flex", flexDirection: "column" }}
    >
      <div>header stuff</div>
      <div style={{ overflowY: "scroll" }}>
        {items.map((item) => (
          <Checkbox
            key={item.value}
            label={item.label}
            value={item.value}
            onChange={(lol) => {
              console.info(lol);
            }}
          />
        ))}
      </div>
      <div>footer stuff</div>
    </div>
  ),
};

export const Controlled = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        kind="secondary"
        size="s"
        label="show popover"
        onClick={() => setIsOpen(!isOpen)}
      />
      <div className="margin--top--m">
        <Popover
          content={<div className="padding--all--m">📦 Any content</div>}
          isOpen={isOpen}
          onUserDismiss={() => setIsOpen(false)}
          onUserEnable={() => setIsOpen(true)}
          renderTrigger={() => (
            <div>Popover trigger and positioning reference</div>
          )}
        />
      </div>
    </>
  );
};
Controlled.parameters = {
  docs: {
    description: {
      story:
        "In this example, the user may click on either the button, or the text below to open the Popover. The `children` (trigger element) of Popover will always be the positioning reference. The `onUserEnable` prop can be used to subscribe to user interactions on the trigger, and `onUserDismiss` is used to subscribe to user events that dismiss the popover.",
    },
  },
};

export default {
  title: "Components/Popover",
  component: Popover,
};
