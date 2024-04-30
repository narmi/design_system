import React, { useState } from "react";
import TokenInput from "./";

const Template = (args) => <TokenInput {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  label: "Which cities would you like to add?",
  tokens: ["New York", "Chicago"],
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
        label="Add your favorite foods!"
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
