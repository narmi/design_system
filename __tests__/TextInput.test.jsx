import React from "react";
import { render, screen, getByRole } from "@testing-library/react";
import TextInput from "../src/TextInput";


describe('TextInput', () => {
  it('Basic Test to verify TextInput behaves as an Html input', () => {
    const editScreen = render(
       <TextInput id="textinput" label={"Label"} defaultValue={"Default"} />,
    );
    const label = screen.getByLabelText("Label");
    expect(label.value).toEqual('Default');

    label.value = "User input text";
    expect(label.value).toEqual('User input text');
  });
});