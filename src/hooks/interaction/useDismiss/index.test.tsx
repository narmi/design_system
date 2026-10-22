import React, { useRef } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import useDismiss, { UseDismissOptions } from ".";

type HarnessProps = Partial<UseDismissOptions> & {
  onDismiss: UseDismissOptions["onDismiss"];
};

const Harness = ({ isOpen = true, onDismiss, ...rest }: HarnessProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { backdropProps } = useDismiss({
    isOpen,
    onDismiss,
    ref,
    ...rest,
  });
  return (
    <>
      <button>outside</button>
      <div data-testid="backdrop" {...backdropProps}>
        <div role="dialog" ref={ref}>
          <button>inside</button>
        </div>
      </div>
    </>
  );
};

describe("useDismiss", () => {
  it("dismisses with reason 'escape' on Escape wherever focus is", async () => {
    const onDismiss = vi.fn();
    render(<Harness onDismiss={onDismiss} />);
    screen.getByText("outside").focus();
    await userEvent.keyboard("{Escape}");
    expect(onDismiss).toHaveBeenCalledTimes(1);
    expect(onDismiss.mock.calls[0][0]).toBe("escape");
  });

  it("ignores other keys and Escape when escapeKey is false", async () => {
    const onDismiss = vi.fn();
    render(<Harness onDismiss={onDismiss} escapeKey={false} />);
    screen.getByText("inside").focus();
    await userEvent.keyboard("{Escape}{Enter}");
    expect(onDismiss).not.toHaveBeenCalled();
  });

  it("ignores an Escape a descendant already handled", async () => {
    const onDismiss = vi.fn();
    const Nested = () => {
      const ref = useRef<HTMLDivElement>(null);
      useDismiss({ isOpen: true, onDismiss, ref });
      return (
        <div ref={ref}>
          <input
            aria-label="inner"
            onKeyDown={(e) => e.key === "Escape" && e.preventDefault()}
          />
        </div>
      );
    };
    render(<Nested />);
    screen.getByLabelText("inner").focus();
    await userEvent.keyboard("{Escape}");
    expect(onDismiss).not.toHaveBeenCalled();
  });

  it("dismisses with reason 'backdrop' only for mousedown directly on the backdrop", async () => {
    const onDismiss = vi.fn();
    render(<Harness onDismiss={onDismiss} />);
    await userEvent.click(screen.getByText("inside"));
    expect(onDismiss).not.toHaveBeenCalled();
    await userEvent.click(screen.getByTestId("backdrop"));
    expect(onDismiss).toHaveBeenCalledTimes(1);
    expect(onDismiss.mock.calls[0][0]).toBe("backdrop");
  });

  it("dismisses with reason 'outside' when outsideClick is enabled", async () => {
    const onDismiss = vi.fn();
    render(<Harness onDismiss={onDismiss} outsideClick />);
    await userEvent.click(screen.getByText("inside"));
    expect(onDismiss).not.toHaveBeenCalled();
    await userEvent.click(screen.getByText("outside"));
    expect(onDismiss).toHaveBeenCalledTimes(1);
    expect(onDismiss.mock.calls[0][0]).toBe("outside");
  });

  it("removes the Escape listener on unmount", async () => {
    const onDismiss = vi.fn();
    const { unmount } = render(<Harness onDismiss={onDismiss} />);
    unmount();
    await userEvent.keyboard("{Escape}");
    expect(onDismiss).not.toHaveBeenCalled();
  });

  it("does not dismiss on outside clicks by default", async () => {
    const onDismiss = vi.fn();
    render(<Harness onDismiss={onDismiss} />);
    await userEvent.click(screen.getByText("outside"));
    expect(onDismiss).not.toHaveBeenCalled();
  });

  describe("nested layers", () => {
    const Layer = ({
      isOpen,
      onDismiss,
      children,
      label,
    }: {
      isOpen: boolean;
      onDismiss: UseDismissOptions["onDismiss"];
      children?: React.ReactNode;
      label: string;
    }) => {
      const ref = useRef<HTMLDivElement>(null);
      useDismiss({ isOpen, onDismiss, ref });
      if (!isOpen) return null;
      return (
        <div role="dialog" aria-label={label} ref={ref}>
          {children}
        </div>
      );
    };

    it("lets only the top layer handle Escape", async () => {
      const onParent = vi.fn();
      const onChild = vi.fn();
      render(
        <Layer isOpen onDismiss={onParent} label="parent">
          <Layer isOpen onDismiss={onChild} label="child" />
        </Layer>,
      );
      await userEvent.keyboard("{Escape}");
      expect(onChild).toHaveBeenCalledTimes(1);
      expect(onParent).not.toHaveBeenCalled();
    });

    it("hands Escape back to the parent once the child closes", async () => {
      const onParent = vi.fn();
      const onChild = vi.fn();
      const { rerender } = render(
        <Layer isOpen onDismiss={onParent} label="parent">
          <Layer isOpen onDismiss={onChild} label="child" />
        </Layer>,
      );
      rerender(
        <Layer isOpen onDismiss={onParent} label="parent">
          <Layer isOpen={false} onDismiss={onChild} label="child" />
        </Layer>,
      );
      await userEvent.keyboard("{Escape}");
      expect(onChild).not.toHaveBeenCalled();
      expect(onParent).toHaveBeenCalledTimes(1);
    });

    it("hands Escape back to the parent once the child unmounts", async () => {
      const onParent = vi.fn();
      const onChild = vi.fn();
      const { rerender } = render(
        <Layer isOpen onDismiss={onParent} label="parent">
          <Layer isOpen onDismiss={onChild} label="child" />
        </Layer>,
      );
      rerender(<Layer isOpen onDismiss={onParent} label="parent" />);
      await userEvent.keyboard("{Escape}");
      expect(onChild).not.toHaveBeenCalled();
      expect(onParent).toHaveBeenCalledTimes(1);
    });

    it("treats the most recently opened sibling as the top layer", async () => {
      const onFirst = vi.fn();
      const onSecond = vi.fn();
      const { rerender } = render(
        <>
          <Layer isOpen onDismiss={onFirst} label="first" />
          <Layer isOpen={false} onDismiss={onSecond} label="second" />
        </>,
      );
      rerender(
        <>
          <Layer isOpen onDismiss={onFirst} label="first" />
          <Layer isOpen onDismiss={onSecond} label="second" />
        </>,
      );
      await userEvent.keyboard("{Escape}");
      expect(onSecond).toHaveBeenCalledTimes(1);
      expect(onFirst).not.toHaveBeenCalled();
    });

    it("marks the handled Escape as defaultPrevented", async () => {
      const onDismiss = vi.fn();
      render(<Layer isOpen onDismiss={onDismiss} label="layer" />);
      await userEvent.keyboard("{Escape}");
      const [, event] = onDismiss.mock.calls[0];
      expect((event as KeyboardEvent).defaultPrevented).toBe(true);
    });
  });

  it("does nothing while closed", async () => {
    const onDismiss = vi.fn();
    render(<Harness onDismiss={onDismiss} isOpen={false} outsideClick />);
    await userEvent.keyboard("{Escape}");
    await userEvent.click(screen.getByTestId("backdrop"));
    await userEvent.click(screen.getByText("outside"));
    expect(onDismiss).not.toHaveBeenCalled();
  });
});
