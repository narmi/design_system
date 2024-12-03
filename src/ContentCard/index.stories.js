import React, { useState } from "react";
import ContentCard from "./";

const Template = (args) => (
  <div className="bgColor--snowGrey alignChild--center--center padding--all--xl">
    <ContentCard {...args} />
  </div>
);

export const Overview = Template.bind({});
Overview.args = {
  children: (
    <>
      <h3 className="fontSize--heading4 padding--bottom--s">
        Anything can go in here
      </h3>
      <div>The card will grow to fit the width of its parent container</div>
    </>
  ),
};

export const ButtonCard = () => (
  <ContentCard
    kind="button"
    onClick={() => {
      alert("button card clicked");
    }}
  >
    <h3 className="fontSize--heading4 padding--bottom--xs">Button card</h3>
    <div className="fontSize--s fontColor--secondary">
      This card behaves like an html <code>button</code>.
    </div>
  </ContentCard>
);
ButtonCard.parameters = {
  docs: {
    description: {
      story:
        "Cards of kind `toggle` support a selected state that can be controlled with the `isSelected` prop.",
    },
  },
};

export const ToggleCard = () => {
  const [isCardSelected, setIsCardSelected] = useState(false);

  const handleClick = () => {
    setIsCardSelected((isCardSelected) => !isCardSelected);
  };

  return (
    <ContentCard
      kind="toggle"
      onClick={handleClick}
      isSelected={isCardSelected}
    >
      <h3 className="fontSize--heading4 padding--bottom--xs">Toggle card</h3>
      <div className="fontSize--s fontColor--secondary">
        This card is currently{" "}
        <em>{isCardSelected ? "selected" : "not selected"}</em>
      </div>
    </ContentCard>
  );
};
ToggleCard.parameters = {
  docs: {
    description: {
      story:
        "Cards of kind `toggle` support a selected state that can be controlled with the `isSelected` prop.",
    },
  },
};

export default {
  title: "Components/ContentCard",
  component: ContentCard,
  argTypes: {
    type: { table: { disable: true } },
  },
};
