import React, { useState } from "react";
import RadioButtons from "./";

const Template = (args) => <RadioButtons {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  options: {
    OptionA: "A",
    OptionB: "B",
    OptionC: "C",
  },
  name: "options",
};

export const Example = () => {
  const [color, setColor] = useState();
  return (
    <div className="nds-typography">
      <h3 className="margin--bottom--l"> What is your favourite colour? </h3>
      <RadioButtons
        options={{
          Red: "red",
          Blue: "blue",
          Green: "green",
          Yellow: "yellow",
        }}
        name="colours"
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      <div>{color && `You have selected ${color}`}</div>
    </div>
  );
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  options: {
    OptionA: "A",
    OptionB: "B",
    OptionC: "C",
  },
  name: "options",
  error: "Selection required",
};

export const FullyControlled = () => {
  const [value, setValue] = useState("blue");
  return (
    <>
      <RadioButtons
        options={{
          Red: "red",
          Blue: "blue",
          Green: "green",
          Yellow: "yellow",
        }}
        name="colours"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />
      <div className="margin--top">
        <button
          onClick={() => {
            setValue(null);
          }}
        >
          Clear selection
        </button>
      </div>
    </>
  );
};
FullyControlled.parameters = {
  docs: {
    description: {
      story:
        "Passing a `value` prop makes the component fully controlled; you must manage the value of `value` with the `onChange` handler. To clear selection, pass `null` or an empty string to `value`.",
    },
  },
};

export const AsCard = Template.bind({});
AsCard.args = {
  options: {
    OptionA: "A",
    OptionB: "B",
    OptionC: "C",
  },
  name: "card_options",
  kind: "card",
};
AsCard.parameters = {
  docs: {
    description: {
      story:
        "Renders a radio group styled as a cards. The cards will grow to fill the width of their parent container.",
    },
  },
};

export default {
  title: "Components/RadioButtons",
  component: RadioButtons,
  artTypes: {
    onChange: { action: "change" },
  },
};
