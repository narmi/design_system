import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import useDialog, { UseDialogOptions } from ".";

type HarnessProps = Partial<UseDialogOptions> & {
  onDismiss: UseDialogOptions["onDismiss"];
  hasTitle?: boolean;
  hasDescription?: boolean;
  children?: React.ReactNode;
};

const Harness = ({
  isOpen = true,
  onDismiss,
  hasTitle = true,
  hasDescription = true,
  children,
  ...rest
}: HarnessProps) => {
  const {
    dialogProps,
    backdropProps,
    titleProps,
    descriptionProps,
    closeButtonProps,
  } = useDialog({ isOpen, onDismiss, ...rest });
  return (
    <>
      <button>outside</button>
      {isOpen && (
        <div data-testid="backdrop" {...backdropProps}>
          <div {...dialogProps}>
            {hasTitle && <h2 {...titleProps}>Title</h2>}
            {hasDescription && <p {...descriptionProps}>Description</p>}
            {children}
            <button {...closeButtonProps}>
              <span aria-hidden="true">×</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

describe("useDialog", () => {
  describe("ARIA", () => {
    it("renders a dialog named by its title and described by its description", () => {
      render(<Harness onDismiss={vi.fn()} />);
      const dialog = screen.getByRole("dialog", { name: "Title" });
      expect(dialog).toHaveAccessibleDescription("Description");
      expect(dialog).toHaveAttribute(
        "aria-labelledby",
        screen.getByText("Title").id,
      );
      expect(dialog).toHaveAttribute(
        "aria-describedby",
        screen.getByText("Description").id,
      );
    });

    it("omits aria-labelledby and aria-describedby while their targets are not rendered", () => {
      render(
        <Harness
          onDismiss={vi.fn()}
          hasTitle={false}
          hasDescription={false}
          label="Named by option"
        />,
      );
      const dialog = screen.getByRole("dialog", { name: "Named by option" });
      expect(dialog).not.toHaveAttribute("aria-labelledby");
      expect(dialog).not.toHaveAttribute("aria-describedby");
    });

    it("prefers `label` over a rendered title", () => {
      render(<Harness onDismiss={vi.fn()} label="Option label" />);
      const dialog = screen.getByRole("dialog", { name: "Option label" });
      expect(dialog).not.toHaveAttribute("aria-labelledby");
    });

    it("sets aria-modal only for a modal dialog", () => {
      const { rerender } = render(<Harness onDismiss={vi.fn()} />);
      expect(screen.getByRole("dialog")).toHaveAttribute("aria-modal", "true");
      rerender(<Harness onDismiss={vi.fn()} isModal={false} />);
      expect(screen.getByRole("dialog")).not.toHaveAttribute("aria-modal");
    });

    it("returns tabIndex -1 so the dialog can take focus", () => {
      render(<Harness onDismiss={vi.fn()} />);
      expect(screen.getByRole("dialog")).toHaveAttribute("tabindex", "-1");
    });

    it("labels the close button", () => {
      render(<Harness onDismiss={vi.fn()} />);
      const close = screen.getByRole("button", { name: "Close" });
      expect(close).toHaveAttribute("type", "button");
    });

    it("gives each dialog its own ids", () => {
      render(
        <>
          <Harness onDismiss={vi.fn()} />
          <Harness onDismiss={vi.fn()} />
        </>,
      );
      const [a, b] = screen.getAllByText("Title");
      expect(a.id).not.toBe(b.id);
    });
  });

  describe("dismissal", () => {
    it("reports 'escape' on Escape wherever focus is", async () => {
      const onDismiss = vi.fn();
      render(<Harness onDismiss={onDismiss} />);
      screen.getByText("outside").focus();
      await userEvent.keyboard("{Escape}");
      expect(onDismiss).toHaveBeenCalledTimes(1);
      expect(onDismiss.mock.calls[0][0]).toBe("escape");
    });

    it("does not report Escape when escapeKey is false", async () => {
      const onDismiss = vi.fn();
      render(<Harness onDismiss={onDismiss} escapeKey={false} />);
      await userEvent.keyboard("{Escape}");
      expect(onDismiss).not.toHaveBeenCalled();
    });

    it("reports 'backdrop' for a mousedown directly on the backdrop", async () => {
      const onDismiss = vi.fn();
      render(<Harness onDismiss={onDismiss} />);
      await userEvent.click(screen.getByText("Description"));
      expect(onDismiss).not.toHaveBeenCalled();
      await userEvent.click(screen.getByTestId("backdrop"));
      expect(onDismiss).toHaveBeenCalledTimes(1);
      expect(onDismiss.mock.calls[0][0]).toBe("backdrop");
    });

    it("reports 'close' with the click event from the close button", async () => {
      const onDismiss = vi.fn();
      render(<Harness onDismiss={onDismiss} />);
      await userEvent.click(screen.getByRole("button", { name: "Close" }));
      expect(onDismiss).toHaveBeenCalledTimes(1);
      expect(onDismiss.mock.calls[0][0]).toBe("close");
      expect(onDismiss.mock.calls[0][1].type).toBe("click");
    });

    it("ignores outside clicks on a modal dialog", async () => {
      const onDismiss = vi.fn();
      render(<Harness onDismiss={onDismiss} />);
      await userEvent.click(screen.getByText("outside"));
      expect(onDismiss).not.toHaveBeenCalled();
    });

    it("reports 'outside' for a click outside a non-modal dialog", async () => {
      const onDismiss = vi.fn();
      render(<Harness onDismiss={onDismiss} isModal={false} />);
      await userEvent.click(screen.getByText("Description"));
      expect(onDismiss).not.toHaveBeenCalled();
      await userEvent.click(screen.getByText("outside"));
      expect(onDismiss).toHaveBeenCalledTimes(1);
      expect(onDismiss.mock.calls[0][0]).toBe("outside");
    });

    it("lets outsideClick override the modal default", async () => {
      const onDismiss = vi.fn();
      render(<Harness onDismiss={onDismiss} outsideClick />);
      await userEvent.click(screen.getByText("outside"));
      expect(onDismiss.mock.calls[0][0]).toBe("outside");
    });

    it("calls the latest onDismiss without remounting", async () => {
      const first = vi.fn();
      const second = vi.fn();
      const { rerender } = render(<Harness onDismiss={first} />);
      rerender(<Harness onDismiss={second} />);
      await userEvent.keyboard("{Escape}");
      expect(first).not.toHaveBeenCalled();
      expect(second).toHaveBeenCalledTimes(1);
    });

    it("does nothing while closed", async () => {
      const onDismiss = vi.fn();
      render(<Harness onDismiss={onDismiss} isOpen={false} isModal={false} />);
      await userEvent.keyboard("{Escape}");
      await userEvent.click(screen.getByText("outside"));
      expect(onDismiss).not.toHaveBeenCalled();
    });
  });

  describe("focus", () => {
    it("moves focus to the first tabbable element on open", () => {
      render(
        <Harness onDismiss={vi.fn()}>
          <button>first</button>
        </Harness>,
      );
      expect(screen.getByText("first")).toHaveFocus();
    });

    it("honors initialFocus", () => {
      render(
        <Harness onDismiss={vi.fn()} initialFocus="container">
          <button>first</button>
        </Harness>,
      );
      expect(screen.getByRole("dialog")).toHaveFocus();
    });

    it("keeps Tab inside the dialog", async () => {
      render(
        <Harness onDismiss={vi.fn()}>
          <button>first</button>
        </Harness>,
      );
      await userEvent.tab();
      expect(screen.getByRole("button", { name: "Close" })).toHaveFocus();
      await userEvent.tab();
      expect(screen.getByText("first")).toHaveFocus();
    });

    it("returns focus to the opener on close", async () => {
      const Controlled = () => {
        const [isOpen, setIsOpen] = useState(false);
        return (
          <>
            <button onClick={() => setIsOpen(true)}>open</button>
            <Harness isOpen={isOpen} onDismiss={() => setIsOpen(false)}>
              <button>first</button>
            </Harness>
          </>
        );
      };
      render(<Controlled />);
      const opener = screen.getByText("open");
      await userEvent.click(opener);
      expect(screen.getByText("first")).toHaveFocus();
      await userEvent.keyboard("{Escape}");
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
      expect(opener).toHaveFocus();
    });
  });

  describe("scroll lock", () => {
    it("locks body scroll only while a modal dialog is open", () => {
      const { rerender, unmount } = render(<Harness onDismiss={vi.fn()} />);
      expect(document.body).toHaveClass("overflow--hidden");
      rerender(<Harness onDismiss={vi.fn()} isOpen={false} />);
      expect(document.body).not.toHaveClass("overflow--hidden");
      unmount();
    });

    it("does not lock body scroll for a non-modal dialog", () => {
      render(<Harness onDismiss={vi.fn()} isModal={false} />);
      expect(document.body).not.toHaveClass("overflow--hidden");
    });
  });
});
