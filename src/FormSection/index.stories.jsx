import React from "react";
import FormSection from "./";
import TextInput from "../TextInput";
import Row from "../Row";

const Template = (args) => <FormSection {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  title: "Personal Details",
};

export const WithInputs = (args) => (
  <FormSection {...args}>
    <div className="margin--bottom">
      <Row alignItems="center">
        <Row.Item>
          <TextInput label={"Name"} />
        </Row.Item>
        <Row.Item>
          <TextInput label={"Email"} type={"email"} />
        </Row.Item>
      </Row>
    </div>
    <div className="margin--bottom">
      <Row alignItems="center">
        <Row.Item shrink>
          <TextInput
            label={"Phone number"}
            defaultValue={"(555) 867-5309"}
            type={"tel"}
          />
        </Row.Item>
        <Row.Item>
          <TextInput label={"Street Address"} />
        </Row.Item>
      </Row>
    </div>
  </FormSection>
);
WithInputs.args = {
  title: "Contact Information",
};

export default {
  title: "Components/FormSection",
  component: FormSection,
};
