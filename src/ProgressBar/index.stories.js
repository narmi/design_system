import React, { useState } from "react";
import ProgressBar from "./";
import Row from "../Row";
import Button from "../Button";
import TextInput from "../TextInput";

const Template = (args) => <ProgressBar {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  percentComplete: 25,
};

export const Animation = () => {
  const [pct, setPct] = useState(0);
  const [dur, setDur] = useState(undefined);

  const handleChange = (amount) => {
    if (amount >= 0 && amount <= 100) {
      setPct((p) => p + amount);
    }
  };

  return (
    <>
      <div className="margin--bottom">
        <ProgressBar percentComplete={pct} dur={dur} />
      </div>
      <Row>
        <Row.Item shrink>
          <Button size="xs" label="Add 2%" onClick={() => handleChange(2)} />
        </Row.Item>
        <Row.Item shrink>
          <Button size="xs" label="Add 10%" onClick={() => handleChange(10)} />
        </Row.Item>
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
      <div className="margin--top">
        <div>
          <label htmlFor="dur">Duration (in seconds)</label>
        </div>
        <input
          type="number"
          step="0.05"
          id="dur"
          min="0.1"
          max="1"
          value={dur}
          onChange={(e) => {
            setPct(0);
            setDur(e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default {
  title: "Components/ProgressBar",
  component: ProgressBar,
};
