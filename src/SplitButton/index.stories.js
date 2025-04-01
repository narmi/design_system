/* eslint-disable jsx-a11y/anchor-is-valid,react/jsx-key */
import React from "react";
import SplitButton from "./";
import Row from "../Row";

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
    ["secondary", "m"],
    ["tonal", "m"],
    ["primary", "xs"],
    ["secondary", "s"],
  ];

  return exmaples.map(([kind, size]) => (
    <div key={`${kind}-${size}`} className="margin--bottom">
      {renderSplitButton(kind, size)}
    </div>
  ));
};

export default {
  title: "Components/SplitButton",
  component: SplitButton,
};
