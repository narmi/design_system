import React from "react";
import { render, screen } from "@testing-library/react";
import SeparatorList from "./";

const items = [
  <span key="one">One</span>,
  <span key="two">Two</span>,
  <span key="three">Three</span>,
];

describe("SeparatorList", () => {
  it("renders all items", () => {
    render(<SeparatorList items={items} />);
    ["One", "Two", "Three"].forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  it("passes correct separator value through to data attribute", () => {
    render(<SeparatorList items={items} separator="*" />);
    expect(document.querySelector("[data-separator]")).toHaveAttribute(
      "data-separator",
      "*",
    );
  });

  it("applies data separator class to all but last item", () => {
    render(<SeparatorList items={items} />);
    expect(document.querySelector("li:last-child")).not.toHaveAttribute(
      "data-separator",
    );
  });

  it("filters out null items", () => {
    const itemsWithNull = [
      <span key="one">One</span>,
      null,
      <span key="three">Three</span>,
    ];
    render(<SeparatorList items={itemsWithNull} testId="separator-list" />);

    expect(screen.getByText("One")).toBeInTheDocument();
    expect(screen.getByText("Three")).toBeInTheDocument();

    const list = screen.getByTestId("separator-list");
    expect(list.querySelectorAll("li")).toHaveLength(2);
  });

  it("filters out undefined items", () => {
    const itemsWithUndefined = [
      <span key="one">One</span>,
      undefined,
      <span key="three">Three</span>,
    ];
    render(
      <SeparatorList items={itemsWithUndefined} testId="separator-list" />,
    );

    expect(screen.getByText("One")).toBeInTheDocument();
    expect(screen.getByText("Three")).toBeInTheDocument();

    const list = screen.getByTestId("separator-list");
    expect(list.querySelectorAll("li")).toHaveLength(2);
  });

  it("filters out both null and undefined items", () => {
    const itemsWithNullAndUndefined = [
      <span key="one">One</span>,
      null,
      <span key="two">Two</span>,
      undefined,
      <span key="three">Three</span>,
      null,
    ];
    render(
      <SeparatorList
        items={itemsWithNullAndUndefined}
        testId="separator-list"
      />,
    );

    expect(screen.getByText("One")).toBeInTheDocument();
    expect(screen.getByText("Two")).toBeInTheDocument();
    expect(screen.getByText("Three")).toBeInTheDocument();

    const list = screen.getByTestId("separator-list");
    expect(list.querySelectorAll("li")).toHaveLength(3);
  });

  it("applies separator correctly after filtering null/undefined items", () => {
    const itemsWithNull = [
      <span key="one">One</span>,
      null,
      <span key="two">Two</span>,
      undefined,
      <span key="three">Three</span>,
    ];
    render(<SeparatorList items={itemsWithNull} testId="separator-list" />);

    const list = screen.getByTestId("separator-list");
    const listItems = list.querySelectorAll("li");

    // First two items should have separator
    expect(listItems[0]).toHaveAttribute("data-separator", "|");
    expect(listItems[1]).toHaveAttribute("data-separator", "|");

    // Last item should not have separator
    expect(listItems[2]).not.toHaveAttribute("data-separator");
  });
});
