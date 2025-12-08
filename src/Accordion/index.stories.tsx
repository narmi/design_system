import React from "react";
import Accordion, { AccordionProps } from "./";

const Template = (args: AccordionProps) => <Accordion {...args} />;

export const Overview = Template.bind({});
// @ts-expect-error - Storybook args pattern
Overview.args = {
  behavior: "native",
  children: (
    <>
      <Accordion.Item renderSummary={() => "First Item"}>
        <span>Summary item here</span>
      </Accordion.Item>
      <Accordion.Item renderSummary={() => "Second Item"}>
        <p>First listed accordion item</p>
      </Accordion.Item>
      <Accordion.Item renderSummary={() => "Third Item"}>
        <p>Second listed accordion item</p>
      </Accordion.Item>
    </>
  ),
};

export default {
  title: "Components/Accordion",
  component: Accordion,
};
