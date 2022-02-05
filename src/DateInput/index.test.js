import React, { useState } from "react";
import { render } from "@testing-library/react";
import DateInput from "./";

describe("DateInput", () => {
  it("functions properly as a controlled component", () => {
    const ControllingComponent = () => {
      const [value, setValue] = useState("2022-02-05");
      return (
        <DateInput
          label="Date (mm/dd/yyyy)"
          altInput={true}
          altFormat={"m/d/Y"}
          value={value}
          onChange={setValue}
        />
      );
    }
    render(
      <ControllingComponent />
    );
  });
});