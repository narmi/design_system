import React, { useState } from "react";
import Popover from "./";
import Button from "../Button";
import Checkbox from "../Checkbox";

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
  children: (
    <Button type="button" kind="secondary">
      Open Popover
    </Button>
  ),
};
Overview.argTypes = {
  content: { control: false },
};

export const Positioning = Template.bind({});
Positioning.args = {
  content: (
    <div className="padding--all--m">
      Use <code>side</code> and <code>alignment</code> to set your preferred
      positioning
    </div>
  ),
  children: (
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
  children: (
    <Button type="button" kind="secondary">
      Click to show Popover
    </Button>
  ),
  content: (
    <div className="padding--all">
      Focus will be trapped to{" "}
      <a _target="blank" href="http://narmi.com" className="fontWeight--bold">
        focusable
      </a>{" "}
      <a _target="blank" href="http://narmi.com" className="fontWeight--bold">
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
      <Checkbox
        label="Show popover"
        checked={isOpen}
        onChange={() => setIsOpen(!isOpen)}
      />
      <div className="margin--top--m">
        <Popover
          content={<div className="padding--all--m">📦 Any content</div>}
          isOpen={isOpen}
        >
          <div>Arbitrary target</div>
        </Popover>
      </div>
    </>
  );
};

export default {
  title: "Components/Popover",
  component: Popover,
};
