import React from "react";
import { render } from "@testing-library/react";

import { Button, formatNumber } from "../dist";

describe("Example consumer import check", () => {
  it("can import a component and render it without errors", () => {
    expect(() => render(<Button label="test" />)).not.toThrow();
  });

  it("can import a formatter function and invoke it without errors", () => {
    expect(() => {
      formatNumber("10");
    }).not.toThrow();
  });
});
