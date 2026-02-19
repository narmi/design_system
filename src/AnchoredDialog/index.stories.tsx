import React, { useState } from "react";
import AnchoredDialog from "./";
import Button from "../Button";

const BaseTemplate = (args) => <AnchoredDialog {...args} />;

const InteractiveTemplate = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
      <AnchoredDialog
        {...args}
        isOpen={isOpen}
        onUserDismiss={() => setIsOpen(false)}
      />
    </>
  );
};

export const Overview = BaseTemplate.bind({});
Overview.args = {
  isOpen: true,
  renderHeader: () => <div>Dialog Header</div>,
  children: <div>Dialog content goes here</div>,
  renderFooter: () => <div>Dialog Footer</div>,
};

export const Interactive = InteractiveTemplate.bind({});
Interactive.args = {
  renderHeader: () => <div>Dialog Header</div>,
  children: <div>Dialog content goes here</div>,
  renderFooter: () => (
    <div style={{ textAlign: "right" }}>
      <Button onClick={() => {}}>Close</Button>
    </div>
  ),
};

export default {
  title: "Components/AnchoredDialog",
  component: AnchoredDialog,
};
