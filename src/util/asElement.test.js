import React from "react";
import { render } from "@testing-library/react";
import AsElement from "./AsElement";
import { getSafeHref } from "./AsElement";

describe("getSafeHref", () => {
  it.each([
    ["/", "/"],
    ["/dashboard", "/dashboard"],
    ["./settings", "./settings"],
    ["../settings", "../settings"],
    ["#section", "#section"],
    ["?tab=profile", "?tab=profile"],
    ["//example.com/path", "//example.com/path"],
    ["https://narmi.com", "https://narmi.com"],
    ["http://narmi.com", "http://narmi.com"],
    ["mailto:test@example.com", "mailto:test@example.com"],
    ["tel:+15555555555", "tel:+15555555555"],
  ])("preserves safe href %s", (input, expected) => {
    expect(getSafeHref(input)).toBe(expected);
  });

  it("returns null for null input", () => {
    expect(getSafeHref(null)).toBeNull();
  });

  it("returns undefined for undefined input", () => {
    expect(getSafeHref(undefined)).toBeUndefined();
  });

  it("returns undefined for non-string input", () => {
    expect(getSafeHref(123)).toBeUndefined();
    expect(getSafeHref({})).toBeUndefined();
  });

  it.each([
    "javascript:alert(1)",
    "JaVaScRiPt:alert(1)",
    "java\nscript:alert(1)",
    "data:text/html,<script>alert(1)</script>",
    "vbscript:msgbox(1)",
    "file:///etc/passwd",
    "blob:https://x/y",
    "about:blank",
  ])("blocks unsafe href %s", (input) => {
    expect(getSafeHref(input)).toBeUndefined();
  });
});

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

  it("strips unsafe href from native element", () => {
    render(
      <AsElement elementType="a" href="javascript:alert(1)">
        link
      </AsElement>,
    );
    const el = document.querySelector("a");
    expect(el).toBeInTheDocument();
    expect(el).not.toHaveAttribute("href");
  });

  it("preserves safe href on native element", () => {
    render(
      <AsElement elementType="a" href="https://narmi.com">
        link
      </AsElement>,
    );
    const el = document.querySelector("a");
    expect(el).toHaveAttribute("href", "https://narmi.com");
  });

  it("sanitizes href passed to custom React component", () => {
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    const CustomLink = (props) => <a {...props} />;
    render(
      <AsElement elementType={CustomLink} href="javascript:alert(1)">
        link
      </AsElement>,
    );
    const el = document.querySelector("a");
    expect(el).not.toHaveAttribute("href");
  });
});
