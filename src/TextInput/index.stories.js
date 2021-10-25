import React, { useRef, useState } from "react";
import TextInput from "./";

const Template = (args) => <TextInput {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  label: "TextInput Label",
};

function phoneFormatter (value) {
  /* this is copied from byzantine.src.utils.functions */
  if (value === null || value === undefined || value.length === 0) {
    return "";
  }
  const numerical = value.replace(/[^0-9]/g, "");
  const length = numerical.length;
  // formatting area code
  if (length < 4) {
    if (numerical[0] === "1" && length === 1) {
      return "";
    }
    return `(${numerical.substring(0, length)})`;
  }
  // formatting the next three digits along with area code
  if (length < 7) {
    //Checks to see if country code is included
    if (numerical[0] === "1") {
      return `(${numerical.substring(1, 4)}) ${numerical.substring(
        4,
        length
      )}`;
    }
    return `(${numerical.substring(0, 3)}) ${numerical.substring(3, length)}`;
  }
  // formatting the full phone number
  if (length < 12) {
    // Checks to see if country code is included
    if (numerical[0] === "1") {
      return `(${numerical.substring(1, 4)}) ${numerical.substring(
        4,
        7
      )}-${numerical.substring(7, length)}`;
    }
    return `(${numerical.substring(0, 3)}) ${numerical.substring(
      3,
      6
    )}-${numerical.substring(6, length)}`;
  }
  // Checks to see if country code is included
  if (numerical[0] === "1") {
    return `(${numerical.substring(1, 4)}) ${numerical.substring(
      4,
      7
    )}-${numerical.substring(7, 11)}`;
  }
  return `(${numerical.substring(0, 3)}) ${numerical.substring(
    3,
    6
  )}-${numerical.substring(6, 10)}`;
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
          label={"Another phone number"}
          formatter={phoneFormatter}
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

export default {
  title: "Components/TextInput",
  component: TextInput,
};
