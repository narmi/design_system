import React, { useRef } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import useDismiss, { UseDismissOptions } from ".";

type HarnessProps = Partial<UseDismissOptions> & {
  onDismiss: UseDismissOptions["onDismiss"];
};

const Harness = ({ isOpen = true, onDismiss, ...rest }: HarnessProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { layerProps, backdropProps } = useDismiss({
    isOpen,
    onDismiss,
    ref,
    ...rest,
  });
  return (
    <>
      <button>outside</button>
      <div data-testid="backdrop" {...backdropProps}>
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
        <div role="dialog" ref={ref} {...layerProps}>
          <button>inside</button>
        </div>
      </div>
    </>
  );
};

describe("useDismiss", () => {
  it("dismisses with reason 'escape' on Escape inside the layer", async () => {
    const onDismiss = vi.fn();
    render(<Harness onDismiss={onDismiss} />);
    screen.getByText("inside").focus();
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
      const { layerProps } = useDismiss({ isOpen: true, onDismiss, ref });
      return (
        <div ref={ref} {...layerProps}>
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

  it("does not dismiss on outside clicks by default", async () => {
    const onDismiss = vi.fn();
    render(<Harness onDismiss={onDismiss} />);
    await userEvent.click(screen.getByText("outside"));
    expect(onDismiss).not.toHaveBeenCalled();
  });

  it("does nothing while closed", async () => {
    const onDismiss = vi.fn();
    render(<Harness onDismiss={onDismiss} isOpen={false} outsideClick />);
    screen.getByText("inside").focus();
    await userEvent.keyboard("{Escape}");
    await userEvent.click(screen.getByTestId("backdrop"));
    await userEvent.click(screen.getByText("outside"));
    expect(onDismiss).not.toHaveBeenCalled();
  });
});
