import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CollapsibleCard from "./";

describe("CollapsibleCard", () => {
  it("renders title and subtitle, and hides children, when closed", () => {
    render(
      <CollapsibleCard isOpen={false} title="My title" subtitle="My subtitle">
        <p>card content</p>
      </CollapsibleCard>,
    );
    expect(screen.getByText("My title")).toBeInTheDocument();
    expect(screen.getByText("My subtitle")).toBeInTheDocument();
    expect(screen.queryByText("card content")).not.toBeInTheDocument();
  });

  it("renders children when `isOpen` is true", () => {
    render(
      <CollapsibleCard isOpen={true} title="My title">
        <p>card content</p>
      </CollapsibleCard>,
    );
    expect(screen.getByText("card content")).toBeInTheDocument();
  });

  it("fires onOpen when closed and onClose when open, via the header trigger", async () => {
    const onOpen = vi.fn();
    const onClose = vi.fn();

    const { rerender } = render(
      <CollapsibleCard isOpen={false} onOpen={onOpen} onClose={onClose}>
        <p>c</p>
      </CollapsibleCard>,
    );
    await userEvent.click(screen.getByRole("button"));
    expect(onOpen).toHaveBeenCalledTimes(1);
    expect(onClose).not.toHaveBeenCalled();

    rerender(
      <CollapsibleCard isOpen={true} onOpen={onOpen} onClose={onClose}>
        <p>c</p>
      </CollapsibleCard>,
    );
    await userEvent.click(screen.getAllByRole("button")[0]);
    expect(onClose).toHaveBeenCalledTimes(1);
    expect(onOpen).toHaveBeenCalledTimes(1);
  });

  it("fires onDisabledClick instead of onOpen when `isDisabled`", async () => {
    const onOpen = vi.fn();
    const onDisabledClick = vi.fn();
    render(
      <CollapsibleCard
        isOpen={false}
        isDisabled
        onOpen={onOpen}
        onDisabledClick={onDisabledClick}
      >
        <p>c</p>
      </CollapsibleCard>,
    );
    await userEvent.click(screen.getByRole("button"));
    expect(onDisabledClick).toHaveBeenCalledTimes(1);
    expect(onOpen).not.toHaveBeenCalled();
  });

  it("renders a caret trigger that toggles the card", async () => {
    const onOpen = vi.fn();
    render(
      <CollapsibleCard isOpen={false} trigger="caret-end" onOpen={onOpen}>
        <p>c</p>
      </CollapsibleCard>,
    );
    const caret = screen.getByRole("button", { name: "Open" });
    await userEvent.click(caret);
    expect(onOpen).toHaveBeenCalledTimes(1);
  });

  describe("toggling exactly once per activation", () => {
    const setup = (trigger: "header" | "caret-start" | "caret-end") => {
      const onOpen = vi.fn();
      const onClose = vi.fn();
      const Controlled = () => {
        const [isOpen, setIsOpen] = React.useState(false);
        return (
          <CollapsibleCard
            isOpen={isOpen}
            trigger={trigger}
            title="My title"
            onOpen={() => {
              onOpen();
              setIsOpen(true);
            }}
            onClose={() => {
              onClose();
              setIsOpen(false);
            }}
          >
            <p>card content</p>
          </CollapsibleCard>
        );
      };
      render(<Controlled />);
      return { onOpen, onClose };
    };

    const activations: [string, (el: HTMLElement) => Promise<void>][] = [
      [
        "Enter",
        async (el) => {
          el.focus();
          await userEvent.keyboard("{Enter}");
        },
      ],
      [
        "Space",
        async (el) => {
          el.focus();
          await userEvent.keyboard(" ");
        },
      ],
      ["click", (el) => userEvent.click(el)],
    ];

    describe.each(["caret-start", "caret-end"] as const)("%s", (trigger) => {
      it.each(activations)("%s opens, then closes", async (_, activate) => {
        const { onOpen, onClose } = setup(trigger);

        await activate(screen.getByRole("button", { name: "Open" }));
        expect(onOpen).toHaveBeenCalledTimes(1);
        expect(onClose).not.toHaveBeenCalled();
        expect(screen.getByText("card content")).toBeInTheDocument();

        await activate(screen.getByRole("button", { name: "Close" }));
        expect(onOpen).toHaveBeenCalledTimes(1);
        expect(onClose).toHaveBeenCalledTimes(1);
        expect(screen.queryByText("card content")).not.toBeInTheDocument();
      });
    });

    it.each([activations[0], activations[2]])(
      "header: %s opens, then closes",
      async (_, activate) => {
        const { onOpen, onClose } = setup("header");

        await activate(screen.getByRole("button", { expanded: false }));
        expect(onOpen).toHaveBeenCalledTimes(1);
        expect(onClose).not.toHaveBeenCalled();
        expect(screen.getByText("card content")).toBeInTheDocument();

        await activate(screen.getByRole("button", { expanded: true }));
        expect(onOpen).toHaveBeenCalledTimes(1);
        expect(onClose).toHaveBeenCalledTimes(1);
      },
    );
  });

  describe.each(["caret-start", "caret-end"] as const)(
    "%s trigger state",
    (trigger) => {
      it("exposes expanded state and the content relationship on the caret button only", () => {
        const { container, rerender } = render(
          <CollapsibleCard isOpen={false} trigger={trigger}>
            <p>card content</p>
          </CollapsibleCard>,
        );
        expect(screen.getByRole("button", { name: "Open" })).toHaveAttribute(
          "aria-expanded",
          "false",
        );

        rerender(
          <CollapsibleCard isOpen={true} trigger={trigger}>
            <p>card content</p>
          </CollapsibleCard>,
        );
        const caret = screen.getByRole("button", { name: "Close" });
        expect(caret).toHaveAttribute("aria-expanded", "true");
        const content = document.getElementById(
          caret.getAttribute("aria-controls") as string,
        );
        expect(content).toContainElement(screen.getByText("card content"));
        expect(container.querySelectorAll("[aria-expanded]")).toHaveLength(1);
      });
    },
  );

  it("exposes expanded state and the content relationship on the header trigger", () => {
    render(
      <CollapsibleCard isOpen={true} title="My title">
        <p>card content</p>
      </CollapsibleCard>,
    );
    const header = screen.getByRole("button", { expanded: true });
    const content = document.getElementById(
      header.getAttribute("aria-controls") as string,
    );
    expect(content).toContainElement(screen.getByText("card content"));
  });

  it("uses `renderTitle` in place of the default title, passing `isOpen`", () => {
    const renderTitle = vi.fn((isOpen: boolean) => (
      <span>{isOpen ? "custom open" : "custom closed"}</span>
    ));
    render(
      <CollapsibleCard isOpen={true} title="ignored" renderTitle={renderTitle}>
        <p>c</p>
      </CollapsibleCard>,
    );
    expect(screen.getByText("custom open")).toBeInTheDocument();
    expect(screen.queryByText("ignored")).not.toBeInTheDocument();
    expect(renderTitle).toHaveBeenCalledWith(true);
  });
});
