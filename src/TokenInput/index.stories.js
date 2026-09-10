import React, { useState } from "react";
import { expect, waitFor } from "storybook/test";
import TokenInput from "./";

const Template = (args) => <TokenInput {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  label: "Which cities would you like to add?",
  tokens: ["New York", "Chicago"],
};

/**
 * Stateful wrapper used by interaction stories, since `TokenInput` is a
 * fully controlled component.
 */
const ControlledTokenInput = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [tokens, setTokens] = useState([]);
  return (
    <TokenInput
      label="Favorite Foods"
      fieldName="favorite_foods"
      fieldValue={tokens.join(",")}
      inputValue={inputValue}
      tokens={tokens}
      onInputChange={(e) => setInputValue(e.target.value)}
      onTokensChange={setTokens}
      {...props}
    />
  );
};

/**
 * Interaction test verifying that typing text and pressing Enter creates
 * a token.
 */
export const CreatesToken = {
  name: "Interaction: Creates a token on Enter",
  render: () => <ControlledTokenInput />,
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByRole("textbox", { name: /favorite foods/i });
    await userEvent.type(input, "bananas{Enter}");
    await waitFor(() => expect(canvas.getByText("bananas")).toBeVisible());
    // input is reset after tokenizing
    expect(input).toHaveValue("");
  },
};

/**
 * Interaction test verifying that a token can be dismissed.
 */
export const RemovesToken = {
  name: "Interaction: Removes a token on dismiss",
  render: () => <ControlledTokenInput />,
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByRole("textbox", { name: /favorite foods/i });
    await userEvent.type(input, "bananas{Enter}");
    await waitFor(() => expect(canvas.getByText("bananas")).toBeVisible());

    await userEvent.click(
      canvas.getByRole("button", { name: /remove bananas/i }),
    );
    await waitFor(() =>
      expect(canvas.queryByText("bananas")).not.toBeInTheDocument(),
    );
  },
};

export const UsingWithState = () => {
  const [inputValue, setInputValue] = useState("");
  const [tokens, setTokens] = useState(["apples"]);
  const value = tokens.join(","); // list formatted for submission
  return (
    <>
      <div
        className="margin--bottom"
        style={{ fontFamily: "consolas, monaco, monospaced" }}
      >
        <label htmlFor="result" className="fontColor--azul margin--right--l">
          Hidden input value:
        </label>
        <output name="result" htmlFor="favorite_foods">
          {value}
        </output>
      </div>
      <TokenInput
        label="Favorite Foods"
        fieldName="favorite_foods"
        fieldValue={value}
        inputValue={inputValue}
        tokens={tokens}
        onInputChange={(e) => {
          setInputValue(e.target.value);
        }}
        onTokensChange={(tokens) => {
          setTokens(tokens);
        }}
      />
    </>
  );
};

export default {
  title: "Components/TokenInput",
  component: TokenInput,
};
