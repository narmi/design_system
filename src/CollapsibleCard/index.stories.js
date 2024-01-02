import React, { useState } from "react";
import CollapsibleCard from "./";
import Dialog from "../Dialog";

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bgColor--snowGrey alignChild--center--center padding--all--xl">
      <CollapsibleCard
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
      >
        {args.children}
      </CollapsibleCard>
    </div>
  );
};

const ChangingHelperText = (args) => {
  const [isOpen, setIsOpen] = useState(true);
  const completedJSX = (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--theme-secondary)",
          color: "white",
          height: "16px",
          width: "16px",
          borderRadius: "50%",
        }}
      >
        <span className="narmi-icon-check fontSize--xs" />
      </div>
      <div
        className="margin--left--xs fontWeight--semibold"
        style={{ color: "var(--theme-secondary)" }}
      >
        Open
      </div>
    </div>
  );

  return (
    <div className="bgColor--snowGrey alignChild--center--center padding--all--xl">
      <CollapsibleCard
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
        helperText={isOpen ? completedJSX : "Closed"}
      >
        {args.children}
      </CollapsibleCard>
    </div>
  );
};

const DisabledCardTemplate = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="bgColor--snowGrey alignChild--center--center padding--all--xl">
      <CollapsibleCard
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
        isDisabled
        onDisabledClick={() => setIsDialogOpen(true)}
      >
        {args.children}
      </CollapsibleCard>
      <Dialog
        title="Not to panic"
        isOpen={isDialogOpen}
        onUserDismiss={() => setIsDialogOpen(false)}
      >
        This is just an example of what <code>onDisabledClick</code> can do
      </Dialog>
    </div>
  );
};
const PermanentlyOpen = (args) => (
  <div className="bgColor--snowGrey alignChild--center--center padding--all--xl">
    <CollapsibleCard {...args} isOpen>
      {args.children}
    </CollapsibleCard>
  </div>
);

export const Overview = Template.bind({});
Overview.args = {
  title: "Your title here",
  subtitle: "Hover over and click anywhere",
  onOpen: () => {},
  onClose: () => {},
  children: (
    <>
      <div>Any content can go in here!</div>
    </>
  ),
};

export const WithHelperText = ChangingHelperText.bind({});
WithHelperText.args = {
  title: "Your title here",
  subtitle: "Hover over and click anywhere",
  onOpen: () => {},
  onClose: () => {},
  children: (
    <>
      <div>Any content can go in here!</div>
    </>
  ),
};
WithHelperText.parameters = {
  docs: {
    description: {
      story:
        "The `CollapsibleCard` with a helper text on the right. This could be a link, button, etc.",
    },
  },
};

export const DisabledCard = DisabledCardTemplate.bind({});
DisabledCard.args = {
  title: "This card is disabled",
  subtitle: "But you could still try to click somewhere",
  onOpen: () => {},
  onClose: () => {},
  children: (
    <>
      <div>Any content can go in here!</div>
    </>
  ),
};

export const WithError = Template.bind({});
WithError.args = {
  title: "Error state",
  subtitle: "Something happened here",
  onOpen: () => {},
  onClose: () => {},
  hasError: true,
  children: (
    <>
      <div>Nothing you can do to clear that.</div>
    </>
  ),
};

export const PermanentlyOpenWithDisabedHover = PermanentlyOpen.bind({});
PermanentlyOpenWithDisabedHover.args = {
  title: "Your title here",
  subtitle: "A subtitle here",
  onOpen: () => {},
  onClose: () => {},
  isOpen: true,
  disableHover: true,
  children: (
    <>
      <div>
        This is just a card with information. Here's a list of useless facts:
      </div>
      <ul>
        <li>
          Movie trailers got their name because they were originally shown after
          the movie.
        </li>
        <li>Rubber bands last longer when refrigerated.</li>

        <li>
          Oreo has made enough cookies to span five back and forth trips to the
          moon.
        </li>
        <li>Your fingernails grow faster on your dominant hand.</li>

        <li>A giraffe can go longer without water than a camel can.</li>

        <li>A dragonfly has a lifespan of only 24 hours.</li>
      </ul>
    </>
  ),
};

export default {
  title: "Components/CollapsibleCard",
  component: CollapsibleCard,
};
