import React from "react";
import { Callout } from ".";
import TimelineEvent from "../TimelineEvent";

export const Overview = () => (
  <Callout
    detailList={[
      { label: "Amount", description: "$1,250.00" },
      { label: "Account", description: "Checking 1234" },
      { label: "Confirmation", description: "A1B2C3D4" },
    ]}
  />
);

export const LabelOnly = () => (
  <Callout
    detailList={[
      { label: "Submitted for review" },
      { label: "Approved by manager" },
      { label: "Sent to processor", description: "Batch #42" },
    ]}
  />
);

export const CustomContent = () => (
  <Callout
    renderContent={() => (
      <div className="fontSize--s">
        <div>
          <span className="narmi-icon-check-circle margin--right--xs" />
          <strong>Note from reviewer</strong>
        </div>
        <div>Approved with a follow-up scheduled for next week.</div>
      </div>
    )}
  />
);

export const InATimeline = () => (
  <TimelineEvent
    kind="divided"
    detailList={[
      { label: "Amount", description: "$1,250.00" },
      { label: "Account", description: "Checking 1234" },
      { label: "Confirmation", description: "A1B2C3D4" },
    ]}
  >
    <h4>Payment processed</h4>
  </TimelineEvent>
);

export default {
  title: "Components/Callout",
  component: Callout,
};
