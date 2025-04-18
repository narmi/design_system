import React, { useState } from "react";
import ProgressBar from "./";
import Row from "../Row";
import Button from "../Button";

const Template = (args) => <ProgressBar {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  percentComplete: 25,
};

export const FullBleed = Template.bind({});
FullBleed.args = {
  fullBleed: true,
  percentComplete: 50,
};
FullBleed.parameters = {
  docs: {
    description: {
      story:
        "The ProgressBar will fill 100% of its parent container. We typically pad our containers, but in the event the ProgressBar should span the whole container width, the `fullBleed` prop flattens the edges of the bar.",
    },
  },
};

export const Animation = () => {
  const [pct, setPct] = useState(0);

  const handleChange = (amount) => {
    if (amount >= 0 && amount <= 100) {
      setPct((p) => p + amount);
    }
  };

  return (
    <>
      <div className="margin--bottom">
        <ProgressBar percentComplete={pct} />
      </div>
      <Row>
        <Row.Item shrink>
          <Button size="xs" label="Add 25%" onClick={() => handleChange(25)} />
        </Row.Item>
        <Row.Item shrink>
          <Button size="xs" label="Add 33%" onClick={() => handleChange(33)} />
        </Row.Item>
        <Row.Item shrink>
          <Button
            kind="secondary"
            size="xs"
            label="Reset"
            onClick={() => setPct(0)}
          />
        </Row.Item>
      </Row>
    </>
  );
};
Animation.parameters = {
  docs: {
    description: {
      story:
        "The SVG progress line will animate (ease out) to its new position when `percentComplete` changes.",
    },
  },
};

export default {
  title: "Components/ProgressBar",
  component: ProgressBar,
};
