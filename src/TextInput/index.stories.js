import React, { useState } from "react";
import TextInput, { VALID_ICON_NAMES } from "./";

const Template = (args) => <TextInput {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  label: "TextInput Label",
};

export const Example = () => {
  return (
    <div className={"nds-typography"}>
      <div className="storybook-4col">
        <TextInput label={"Label"} />
        <TextInput />
        <TextInput label={"Label"} defaultValue={"Text"} />
        <TextInput
          label={"Label"}
          defaultValue={"Text"}
          error={"Error message"}
        />
        <TextInput label={"Label"} defaultValue={"Disabled"} disabled />
        <TextInput
          label={"Phone number"}
          defaultValue={"(555) 867-5309"}
          type={"tel"}
        />
        <TextInput
          label={"Test Quotes"}
          formatter={(text) => text.replace("“", '"').replace("”", '"')}
        />
        <form>
          <TextInput
            label={"Secret phrase"}
            type="password"
            autoComplete="on"
          />
        </form>
      </div>
    </div>
  );
};

export const MultiLine = () => {
  return <TextInput multiline />;
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: "Search",
  icon: "search",
};

export const AsColorInput = () => {
  const [color, setColor] = useState("#915F6D");
  return (
    <div className={"nds-typography"}>
      <h1 style={{ marginBottom: "1em" }}>Edit Primary Accessible Color</h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        <TextInput
          label={"Hex Code"}
          defaultValue="915F6D"
          formatter={(text) => text.replace("#", "")}
          onBlur={(e) => {
            setColor("#" + e.target.value);
          }}
        />
        <span
          className="narmi-icon-solid-circle"
          style={{ marginLeft: "20px", color: color, fontSize: "50px" }}
        ></span>
      </div>
    </div>
  );
};

export const Search = () => {
  return <TextInput search />;
};

export default {
  title: "Components/TextInput",
  component: TextInput,
  argTypes: {
    onChange: { action: "change" },
    onBlur: { action: "blur" },
    icon: { table: { disable: true } },
    startIcon: { options: ["", ...VALID_ICON_NAMES] },
    endIcon: { options: ["", ...VALID_ICON_NAMES] },
  },
};
