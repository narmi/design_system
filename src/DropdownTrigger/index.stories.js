import React, { useState } from "react";
import DropdownTrigger from "./";
import Popover from "../Popover";
import RadioButtons from "../RadioButtons";

const Template = (args) => <DropdownTrigger {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  labelText: "State",
};

export const LabelOnly = () => <DropdownTrigger labelText="Filters (6)" />;
LabelOnly.parameters = {
  docs: {
    description: {
      story:
        "The `displayValue` can be omitted if you only need to render a label",
    },
  },
};

export const WithTokens = () => {
  const [tokens, setTokens] = useState([
    "Detroit, MI",
    "Chicago, IL",
    "Miami, FL",
  ]);
  return (
    <DropdownTrigger
      tokens={tokens}
      onTokensChange={(tokes) => setTokens(tokes)}
    />
  );
};
WithTokens.parameters = {
  docs: {
    description: {
      story: "Tokens in `DropdownTrigger` are fully controlled.",
    },
  },
};

export const ErrorState = () => (
  <DropdownTrigger
    labelText="Account"
    displayValue="Checking (1234)"
    errorText="This account is not eligible"
  />
);
ErrorState.parameters = {
  docs: {
    description: {
      story: "Pass `errorText` to enable the error state of `DropdownTrigger`",
    },
  },
};

export const ComposingWithPopover = () => {
  const [fondueType, setFondueType] = useState("");

  const popoverContent = (
    <div className="padding--top padding--x">
      <RadioButtons
        name="fondueType"
        options={{
          Chocolate: "Chocolate",
          Cheese: "Cheese",
        }}
        onChange={({ target }) => {
          setFondueType(target.value);
        }}
      />
    </div>
  );

  return (
    <>
      <Popover content={popoverContent} matchTriggerWidth>
        <DropdownTrigger
          labelText="Fondue Preference"
          displayValue={fondueType}
          minWidth="340px"
        />
      </Popover>
    </>
  );
};
ComposingWithPopover.parameters = {
  docs: {
    description: {
      story:
        "The `DropdownTrigger` component was designed to be composed with `Popover` or any other modal UI element. In this example, `DropdownTrigger` is used as a triggering element for the `Popover` component.",
    },
  },
};

export default {
  title: "Components/DropdownTrigger",
  component: DropdownTrigger,
  argTypes: {
    displayValue: {
      options: ["", "NY", "CA"],
    },
  },
};
