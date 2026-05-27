import React from "react";
import { render } from "@testing-library/react";
import Avatar from "./";

describe("Avatar", () => {
  it("renders an anchor with href when linkurl is safe", () => {
    render(<Avatar label="User" linkurl="https://narmi.com" initials="NM" />);
    const el = document.querySelector("a");
    expect(el).toBeInTheDocument();
    expect(el).toHaveAttribute("href", "https://narmi.com");
  });

  it("does not render a dangerous href when linkurl is unsafe", () => {
    render(
      <Avatar label="User" linkurl="javascript:alert(1)" initials="NM" />,
    );
    const el = document.querySelector("a");
    expect(el).toBeInTheDocument();
    expect(el).not.toHaveAttribute("href");
  });
});
