/* eslint-disable jsx-a11y/no-autofocus, jsx-a11y/anchor-is-valid, jsx-a11y/no-noninteractive-tabindex */
import React, { useRef } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import useFocusTrap, { UseFocusTrapOptions, getTabbables } from ".";

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

  it("skips autoFocus when disabled", () => {
    render(<Harness autoFocus={false}>{threeButtons}</Harness>);
    expect(screen.getByText("one")).not.toHaveFocus();
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

  describe("getTabbables", () => {
    it("excludes disabled, hidden, and negative-tabindex elements", () => {
      render(
        <Harness autoFocus={false}>
          <button>yes</button>
          <button disabled>no</button>
          <input type="hidden" />
          <a href="#x">link</a>
          <a>no href</a>
          <div tabIndex={-1}>neg</div>
          <div tabIndex={0}>zero</div>
          <button hidden>hidden</button>
        </Harness>,
      );
      const names = getTabbables(screen.getByRole("dialog")).map(
        (el) => el.textContent,
      );
      expect(names).toEqual(["yes", "link", "zero"]);
    });
  });
});
