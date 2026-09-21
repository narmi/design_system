import React, { useState } from "react";
import { expect, waitFor } from "storybook/test";
import TextInput, { VALID_ICON_NAMES } from "./";
import Button from "../Button";

const Template = (args) => <TextInput {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  label: "TextInput Label",
};

/**
 * Interaction test verifying that typing updates the input value.
 */
export const TypesValue = {
  name: "Interaction: Accepts typed input",
  render: () => <TextInput label="Full name" />,
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByRole("textbox", { name: /full name/i });
    await userEvent.type(input, "Ada Lovelace");
    await waitFor(() => expect(input).toHaveValue("Ada Lovelace"));
  },
};

/**
 * Interaction test verifying that the clear button empties the input.
 */
export const ClearsValue = {
  name: "Interaction: Clears input on button click",
  render: () => {
    const ClearableInput = () => {
      const [value, setValue] = useState("");
      return (
        <TextInput
          label="Search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          showClearButton
        />
      );
    };
    return <ClearableInput />;
  },
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByRole("textbox", { name: /search/i });
    await userEvent.type(input, "hello");
    await waitFor(() => expect(input).toHaveValue("hello"));

    // the clear button only renders once there is a value
    await userEvent.click(canvas.getByRole("button", { name: /clear/i }));
    await waitFor(() => expect(input).toHaveValue(""));
  },
};

/**
 * Interaction test verifying the character counter updates as the user types.
 */
export const CharacterCounter = {
  name: "Interaction: Updates character counter",
  render: () => <TextInput label="Bio" maxLength={20} />,
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByRole("textbox", { name: /bio/i });
    expect(canvas.getByText("0/20")).toBeInTheDocument();

    await userEvent.type(input, "hello");
    await waitFor(() => expect(canvas.getByText("5/20")).toBeInTheDocument());
  },
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
          type={"date"}
          label={"Test Quotes"}
          formatter={(text) => text.replace("“", '"').replace("”", '"')}
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
        <TextInput type="text" label="Text" maxLength={10} />
        <TextInput
          type="text"
          label="Text"
          maxLength={10}
          error={"Error message"}
        />
        <TextInput
          type="text"
          label="Text"
          defaultValue="Text input that is too long"
          maxLength={10}
        />
      </div>
    </div>
  );
};

export const MultiLine = () => {
  return (
    <>
      <TextInput multiline />
      <TextInput multiline label="Multiline with label" />
    </>
  );
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: "Search",
  startIcon: "search",
};

export const CustomStartAndEndContent = Template.bind({});
CustomStartAndEndContent.args = {
  label: "Search",
  endContent: (
    <button className="button--reset">
      <i className="narmi-icon-info" />
    </button>
  ),
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

export const WithClearInputIcon = () => {
  return <TextInput showClearButton />;
};

export const WithClearInputIconAndOnChange = () => {
  const [text, setText] = useState("");

  return (
    <>
      <TextInput onChange={(e) => setText(e.target.value)} showClearButton />
      <div>Your text is: {text}</div>
    </>
  );
};

export const DateTime = () => {
  const [dateTime, setDateTime] = useState(null);
  return (
    <>
      <TextInput
        type="datetime-local"
        label="Start datetime"
        onChange={(e) => setDateTime(e.target.value)}
      />
      <div className="margin--top--xxs">Value: {dateTime}</div>
    </>
  );
};

export const Time = () => {
  const [time, setTime] = useState(null);
  return (
    <>
      <TextInput
        type="time"
        label="Start time"
        onChange={(e) => setTime(e.target.value)}
      />
      <div className="margin--top--xxs">Value: {time}</div>
    </>
  );
};

export const PasswordShowHide = () => {
  const [showInputVal, setShowInputVal] = useState(false);
  return (
    <>
      <TextInput
        type={showInputVal ? "text" : "password"}
        label="Password"
        endContent={
          <Button
            kind="plain"
            label={showInputVal ? "Hide" : "Show"}
            onClick={() => {
              setShowInputVal((curr) => !curr);
            }}
          />
        }
      />
    </>
  );
};

export const WithMaxLength = () => {
  const [inputValue, setInputValue] = useState("Default value");
  return (
    <>
      <TextInput
        label="Limited to 20 chars"
        maxLength={20}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
    </>
  );
};

export default {
  title: "Components/TextInput",
  component: TextInput,
  argTypes: {
    startIcon: { options: ["", ...VALID_ICON_NAMES] },
    endIcon: { options: ["", ...VALID_ICON_NAMES] },
  },
};
