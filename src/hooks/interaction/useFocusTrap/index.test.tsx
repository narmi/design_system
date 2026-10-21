import React, { useRef } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import useFocusTrap, { UseFocusTrapOptions } from ".";

type HarnessProps = Partial<Omit<UseFocusTrapOptions, "ref">> & {
  children?: React.ReactNode;
};

const Harness = ({ isActive = true, children, ...rest }: HarnessProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { trapProps } = useFocusTrap({ ref, isActive, ...rest });
  return (
    <>
      <button>before</button>
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
      <div role="dialog" aria-label="trap" ref={ref} {...trapProps}>
        {children}
      </div>
      <button>after</button>
    </>
  );
};

const threeButtons = (
  <>
    <button>one</button>
    <button>two</button>
    <button>three</button>
  </>
);

describe("useFocusTrap", () => {
  it("returns tabIndex -1 so the container can take focus", () => {
    render(<Harness />);
    expect(screen.getByRole("dialog")).toHaveAttribute("tabindex", "-1");
  });

  it("moves focus to the first tabbable on activation", () => {
    render(<Harness>{threeButtons}</Harness>);
    expect(screen.getByText("one")).toHaveFocus();
  });

  it("focuses the container itself when it has no tabbables", () => {
    render(<Harness>plain text</Harness>);
    expect(screen.getByRole("dialog")).toHaveFocus();
  });

  it("focuses the container when initialFocus is 'container'", () => {
    render(<Harness initialFocus="container">{threeButtons}</Harness>);
    expect(screen.getByRole("dialog")).toHaveFocus();
  });

  it("leaves focus alone when initialFocus is 'none'", () => {
    render(<Harness initialFocus="none">{threeButtons}</Harness>);
    expect(screen.getByText("one")).not.toHaveFocus();
  });

  it("prefers a data-autofocus descendant", () => {
    render(
      <Harness>
        <button>one</button>
        <button data-autofocus>two</button>
      </Harness>,
    );
    expect(screen.getByText("two")).toHaveFocus();
  });

  it("moves from the container to the first tabbable on Tab", async () => {
    render(<Harness initialFocus="container">{threeButtons}</Harness>);
    await userEvent.tab();
    expect(screen.getByText("one")).toHaveFocus();
    screen.getByRole("dialog").focus();
    await userEvent.tab({ shift: true });
    expect(screen.getByText("three")).toHaveFocus();
  });

  it("skips disabled and hidden descendants", async () => {
    render(
      <Harness>
        <button>one</button>
        <button disabled>no</button>
        <button style={{ display: "none" }}>hidden</button>
        <button>two</button>
      </Harness>,
    );
    screen.getByText("one").focus();
    await userEvent.tab();
    expect(screen.getByText("two")).toHaveFocus();
  });

  it("wraps Tab from the last tabbable to the first", async () => {
    render(<Harness>{threeButtons}</Harness>);
    screen.getByText("three").focus();
    await userEvent.tab();
    expect(screen.getByText("one")).toHaveFocus();
  });

  it("wraps Shift+Tab from the first tabbable to the last", async () => {
    render(<Harness>{threeButtons}</Harness>);
    screen.getByText("one").focus();
    await userEvent.tab({ shift: true });
    expect(screen.getByText("three")).toHaveFocus();
  });

  it("lets Tab move normally between inner tabbables", async () => {
    render(<Harness>{threeButtons}</Harness>);
    screen.getByText("one").focus();
    await userEvent.tab();
    expect(screen.getByText("two")).toHaveFocus();
  });

  it("keeps focus on the container when there are no tabbables", async () => {
    render(<Harness>plain text</Harness>);
    await userEvent.tab();
    expect(screen.getByRole("dialog")).toHaveFocus();
  });

  it("returns focus to the previously focused element on deactivation", () => {
    const { rerender } = render(
      <Harness isActive={false}>{threeButtons}</Harness>,
    );
    screen.getByText("before").focus();
    rerender(<Harness isActive>{threeButtons}</Harness>);
    expect(screen.getByText("one")).toHaveFocus();
    rerender(<Harness isActive={false}>{threeButtons}</Harness>);
    expect(screen.getByText("before")).toHaveFocus();
  });

  it("does not return focus when returnFocus is false", () => {
    const { rerender } = render(
      <Harness isActive={false}>{threeButtons}</Harness>,
    );
    screen.getByText("before").focus();
    rerender(
      <Harness isActive returnFocus={false}>
        {threeButtons}
      </Harness>,
    );
    rerender(
      <Harness isActive={false} returnFocus={false}>
        {threeButtons}
      </Harness>,
    );
    expect(screen.getByText("before")).not.toHaveFocus();
  });

  it("does not trap while inactive", async () => {
    render(<Harness isActive={false}>{threeButtons}</Harness>);
    screen.getByText("three").focus();
    await userEvent.tab();
    expect(screen.getByText("after")).toHaveFocus();
  });
});
