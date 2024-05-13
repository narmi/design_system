import React from "react";
import TruncatedAccount from "./";
import Select from "../Select"

const Template = (args) => <TruncatedAccount {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  name: "Secondary Checking Account",
  lastFour: 4321,
};

export const LongAccountName = (args) => (
  <>
    <h4 className="margin--bottom">The element below can be resized:</h4>
    <div
      style={{
        outline: "1px dotted hotpink",
        width: "300px",
        height: "36px",
        resize: "both",
        overflow: "auto",
      }}
    >
      <TruncatedAccount {...args} />
    </div>
  </>
);
LongAccountName.args = {
  name: "Secondary Savings Account / Car Repair Funds",
  lastFour: 4441,
};
LongAccountName.parameters = {
  docs: {
    description: {
      story:
        "When the account name is longer than available space, it will be truncated automatically. Resize the element in this example to see truncation in action.",
    },
  },
};

export const StylingThisComponent = (args) => (
  <div className="fontSize--heading1 fontFamily--heading">
    <TruncatedAccount {...args} />
  </div>
);
StylingThisComponent.args = {
  name: "Primary Savings Account",
  lastFour: 9695,
};
StylingThisComponent.parameters = {
  docs: {
    description: {
      story: "This component will inherit any text styles from its parent.",
    },
  },
};

export const AccountSelector = () => (
  <div style={{width:"500px"}}>
    <Select label="Loan" >
      <Select.Item value="123">
        <TruncatedAccount name="A Loan" lastFour="1234 ($1,234.24)" />
      </Select.Item>
      <Select.Item value="234">
        <TruncatedAccount name="My Favorite Loan With A Very Long Name" lastFour="33=0008 ($92,050.95)" />
      </Select.Item>
    </Select>
  </div>
);

AccountSelector.parameters = {
  docs: {
    description: {
      story: "An example of using this component in a Select",
    },
  },
};


export default {
  title: "Components/TruncatedAccount",
  component: TruncatedAccount,
};
