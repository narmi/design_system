import React, { useState } from "react";
import Popover from "./";
import Button from "../Button";

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
    <div className="padding--all">
      Focus will be trapped to{" "}
      <a target="blank" href="http://narmi.com" className="fontWeight--bold">
        focusable
      </a>{" "}
      <a target="blank" href="http://narmi.com" className="fontWeight--bold">
        elements
      </a>{" "}
      within the Popover while it is open.
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
