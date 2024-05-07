import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TextInput from "./";

describe("TextInput", () => {
  it("Basic Test to verify TextInput behaves as an Html input", () => {
    render(
      <TextInput data-testid={1} label={"Label"} defaultValue={"Default"} />,
    );
    const basicInput = screen.getByTestId(1);
    expect(basicInput.value).toEqual("Default");

    fireEvent.change(basicInput, { target: { value: "User input text" } });
    expect(basicInput.value).toEqual("User input text");
  });

  it("Formatter prop test", () => {
    render(
      <TextInput
        id="test"
        label={"Test Quotes"}
        formatter={(text) => text.replace("“", '"').replace("”", '"')}
      />,
    );
    const smartQuoteInput = screen.getByLabelText("Test Quotes");

    fireEvent.change(smartQuoteInput, {
      target: { value: "“this is a test”" },
    });

    expect(smartQuoteInput.value).toBe("“this is a test”");

    fireEvent.blur(smartQuoteInput);

    expect(smartQuoteInput.value).toBe('"this is a test"');
  });

  it("No Formatter prop test", () => {
    render(<TextInput id="test" label={"Test Quotes"} />);
    const basicInput = screen.getByLabelText("Test Quotes");

    fireEvent.change(basicInput, { target: { value: "“this is a test”" } });

    expect(basicInput.value).toBe("“this is a test”");
  });

  it("multiline with label sets placeholder attribute", () => {
    render(<TextInput label={"Label"} multiline />);
    const multilineInput = screen.getByPlaceholderText("Label");
    expect(multilineInput).toBeInTheDocument();
  });

  it.only("passes prop down to native input element", () => {
    render(<TextInput label={"Label"} error="the cake is a lie" testId="inputEl" />);
    const inputEl = screen.getByPlaceholderText("Label")
    const errorAttribute = inputEl.getAttribute("error");
    expect(errorAttribute).toBe("the cake is a lie");
  });
});
