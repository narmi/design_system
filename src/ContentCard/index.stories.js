import React, { useState } from "react";
import ContentCard from "./";
import Row from "../Row";

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

export const SelectableCard = () => {
  const [isCardSelected, setIsCardSelected] = useState(false);

  const handleClick = () => {
    setIsCardSelected((isCardSelected) => !isCardSelected);
  };

  return (
    <ContentCard
      type="interactive"
      onClick={handleClick}
      isSelected={isCardSelected}
    >
      <Row>
        <Row.Item>
          <h3 className="fontSize--heading4 padding--bottom--xs">
            Selectable card
          </h3>
          <div className="fontSize--s fontColor--secondary">
            This card is currently{" "}
            <em>{isCardSelected ? "selected" : "not selected"}</em>
          </div>
        </Row.Item>
        {isCardSelected && (
          <Row.Item shrink>
            <span className="narmi-icon-check color--successDark fontSize--heading2" />
          </Row.Item>
        )}
      </Row>
    </ContentCard>
  );
};
SelectableCard.parameters = {
  docs: {
    description: {
      story:
        "Cards of type `interactive` support a selected state that can be controlled with the `isSelected` prop.",
    },
  },
};

export default {
  title: "Components/ContentCard",
  component: ContentCard,
  argTypes: {
    onClick: { action: "clicked (only fires for `interactive` type)" },
    children: { control: false },
  },
};
