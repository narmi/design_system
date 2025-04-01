/* eslint-disable jsx-a11y/anchor-is-valid,react/jsx-key */
import React from "react";
import SplitButton from "./";
import SplitButtonPopover from "./SplitButtonPopover";
import { SplitButtonMenu, SplitButtonMenuItem } from "./SplitButtonMenu";

const Template = (args) => <SplitButton {...args} />;
export const Overview = Template.bind({});
Overview.args = {
  children: (
    <SplitButton.Popover>Arbitrary JSX in a popover!</SplitButton.Popover>
  ),
  label: "Send",
};

export const WithPopover = () => (
  <SplitButton label="Send" onClick={() => alert("Send button clicked")}>
    <SplitButton.Popover>
      <div className="padding--all--s bgColor--white rounded--all">
        This is some arbitrary popover content!
      </div>
    </SplitButton.Popover>
  </SplitButton>
);

export const WithMenu = () => (
  <SplitButton label="Send" onClick={() => alert("Send button clicked")}>
    <SplitButton.Menu>
      <SplitButton.MenuItem
        label="Schedule"
        onSelect={() => {
          alert("Scheduling");
        }}
      />
      <SplitButton.MenuItem
        label="Save as draft"
        onSelect={() => {
          alert("Saving draft");
        }}
      />
    </SplitButton.Menu>
  </SplitButton>
);

export const KindsAndSizes = () => {
  const renderSplitButton = (kind, size) => (
    <SplitButton
      kind={kind}
      size={size}
      label="Send"
      onClick={() => alert("Send button clicked")}
    >
      <SplitButton.Menu>
        <SplitButton.MenuItem
          label="Schedule"
          onSelect={() => {
            alert("Scheduling");
          }}
        />
        <SplitButton.MenuItem
          label="Save as draft"
          onSelect={() => {
            alert("Saving draft");
          }}
        />
      </SplitButton.Menu>
    </SplitButton>
  );

  const exmaples = [
    ["primary", "m"],
    ["primary", "s"],
    ["primary", "xs"],
    ["secondary", "m"],
    ["secondary", "s"],
    ["secondary", "xs"],
    ["tonal", "m"],
    ["tonal", "s"],
    ["tonal", "xs"],
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "var(--space-default)",
      }}
    >
      {exmaples.map(([kind, size]) => (
        <div key={`${kind}-${size}`}>{renderSplitButton(kind, size)}</div>
      ))}
    </div>
  );
};

export default {
  title: "Components/SplitButton",
  component: SplitButton,
  subcomponents: { SplitButtonPopover, SplitButtonMenu, SplitButtonMenuItem },
};
