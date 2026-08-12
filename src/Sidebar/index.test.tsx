import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Sidebar from "./";

const items = [
  <Sidebar.Item label="Home" isActive={true} key="home" />,
  <Sidebar.Item label="Accounts" key="accounts" />,
];

describe("Sidebar", () => {
  it("renders a labelled button for each Sidebar.Item child", () => {
    render(<Sidebar>{items}</Sidebar>);
    expect(screen.getByRole("button", { name: "Home" })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Accounts" }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
  });

  it("marks only the active item with the active class", () => {
    render(<Sidebar>{items}</Sidebar>);
    expect(screen.getByRole("button", { name: "Home" })).toHaveClass(
      "sidebar-item--active",
    );
    expect(screen.getByRole("button", { name: "Accounts" })).not.toHaveClass(
      "sidebar-item--active",
    );
  });

  it("calls the item's onClick when that item is clicked", async () => {
    const onClick = vi.fn();
    render(
      <Sidebar>
        {[
          <Sidebar.Item label="Home" onClick={onClick} key="home" />,
          <Sidebar.Item label="Accounts" key="accounts" />,
        ]}
      </Sidebar>,
    );
    await userEvent.click(screen.getByRole("button", { name: "Home" }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("renders start and end icons only when provided", () => {
    const { container } = render(
      <Sidebar>
        {[
          <Sidebar.Item
            label="Home"
            startIcon="feed"
            endIcon="smile"
            key="home"
          />,
          <Sidebar.Item label="Accounts" key="accounts" />,
        ]}
      </Sidebar>,
    );
    expect(container.querySelector(".narmi-icon-feed")).toBeInTheDocument();
    expect(container.querySelector(".narmi-icon-smile")).toBeInTheDocument();
    // the item without icons contributes none
    expect(container.querySelectorAll("[class*='narmi-icon-']")).toHaveLength(
      2,
    );
  });

  it("applies the `kind` modifier to the nav element", () => {
    const { container } = render(<Sidebar kind="nav">{items}</Sidebar>);
    expect(container.querySelector("nav")).toHaveClass("sidebar--nav");
  });
});
