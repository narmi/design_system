import React from "react";
import { render } from "@testing-library/react";
import AsElement from "./AsElement";

describe("AsElement", () => {
  it("renders the given element", () => {
    const elementType = "p";
    render(<AsElement elementType={elementType} />);
    expect(document.querySelector(elementType)).toBeInTheDocument();
  });
  it("passes through any additional props", () => {
    const elementType = "p";
    const testClass = "color--azul";
    render(<AsElement elementType={elementType} className={testClass} />);
    expect(document.querySelector(elementType)).toHaveClass(testClass);
  });
  it("renders a react component directly", () => {
    const TestComponent = () => <p>Test</p>;
    render(<AsElement elementType={TestComponent} />);
    expect(document.querySelector("p")).toBeInTheDocument();
  });
});
