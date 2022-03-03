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
  const [value, setValue] = useState();
  return (
    <div className="nds-typography">
      <h3 style={{marginBottom: "16px"}}> What is your favourite colour? </h3>
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
      <div>{value && `You have selected ${value}`}</div>
    </div>
  );
};

export default {
  title: "Components/RadioButtons",
  component: RadioButtons,
};
