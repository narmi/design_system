import React from "react";
import TimelineEvent, { VALID_ICON_NAMES } from ".";

const Template = (args) => <TimelineEvent {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  children: "This is a timeline event",
};

export const StackingTimelineEvents = () => (
  <>
    <TimelineEvent kind="pending">
      We are still waiting on this one
    </TimelineEvent>
    <TimelineEvent>
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
      praesentium voluptatum deleniti atque corrupti quos dolores et quas
      molestias excepturi sint occaecati cupiditate non provident, similique
      sunt in culpa qui officia deserunt mollitia animi, id est laborum et
      dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
      Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
      impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
      assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut
      officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates
      repudiandae sint et molestiae non recusandae.
    </TimelineEvent>
    <TimelineEvent imgUrl="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg">
      <b>The Cat</b> has been consulted
    </TimelineEvent>
    <TimelineEvent icon="user" tooltip={"John Doe"}>
      <h3>Communication update</h3>
      <div>We talked about it.</div>
    </TimelineEvent>
    <TimelineEvent kind="start">
      Something kicked off this whole process
    </TimelineEvent>
  </>
);

export default {
  title: "Components/TimelineEvent",
  component: TimelineEvent,
  argTypes: {
    icon: { options: ["", ...VALID_ICON_NAMES] },
  },
};
