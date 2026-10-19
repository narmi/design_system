import React, { useState } from "react";
import { act, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FieldDate } from "./index";
import { TOUCH_DEVICE_QUERY } from "./useFieldDate";

type FieldProps = React.ComponentProps<typeof FieldDate>;

/** Holds `value` in state, like a real form would */
const ControlledField = ({
  value: initialValue = "",
  onChange,
  ...props
}: Partial<FieldProps>) => {
  const [value, setValue] = useState(initialValue);
  return (
    <FieldDate
      label="Start date"
      value={value}
      onChange={(next) => {
        setValue(next);
        onChange?.(next);
      }}
      {...props}
    />
  );
};

/** Makes `matchMedia` report a coarse primary pointer (a phone or tablet) */
const mockTouchDevice = (isTouch: boolean) => {
  vi.mocked(window.matchMedia).mockImplementation((query) => ({
    matches: isTouch && query === TOUCH_DEVICE_QUERY,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
};

describe("Field.Date", () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true, toFake: ["Date"] });
    vi.setSystemTime(new Date(2026, 9, 14)); // Wed Oct 14 2026, local
    mockTouchDevice(false);
  });
  afterEach(() => vi.useRealTimers());

  const renderField = (props: Partial<FieldProps> = {}) => {
    const onChange = vi.fn();
    const result = render(<ControlledField onChange={onChange} {...props} />);
    return {
      ...result,
      onChange,
      user: userEvent.setup({ advanceTimers: vi.advanceTimersByTime }),
      input: screen.getByLabelText("Start date") as HTMLInputElement,
      dialog: () =>
        screen.queryByRole("dialog", { name: "Start date calendar" }),
      /** A day button, found within the grid so footer buttons don't match */
      day: (name: RegExp) =>
        within(screen.getByRole("grid")).getByRole("button", { name }),
    };
  };

  describe("field scaffolding", () => {
    it("binds the label, helper text and errors to the input", () => {
      const { input, container } = renderField({
        id: "start",
        errors: ["Required"],
        renderHelperText: () => <span>MM/DD/YYYY</span>,
      });

      expect(input.id).toBe("start");
      expect(screen.getByText("MM/DD/YYYY")).toBeInTheDocument();
      expect(input).toHaveAttribute("aria-invalid", "true");
      expect(input).toHaveAttribute("aria-describedby", "start-error");
      expect(container.querySelector(".nds-field-errors")).toHaveTextContent(
        "Required",
      );
      expect(container.querySelector(".nds-field")).toHaveClass(
        "nds-field--hasError",
      );
    });

    it("forwards the ref to the input", () => {
      const ref = React.createRef<HTMLInputElement>();
      render(
        <FieldDate ref={ref} label="Start date" value="" onChange={vi.fn()} />,
      );
      expect(ref.current).toBe(screen.getByLabelText("Start date"));
    });

    it("disables the input", () => {
      const { input, container } = renderField({ isDisabled: true });

      expect(input).toBeDisabled();
      expect(container.querySelector(".nds-field")).toHaveClass(
        "nds-field--isDisabled",
      );
    });

    it("shows the value as MM/DD/YYYY beside a calendar icon", () => {
      const { input, container } = renderField({ value: "2026-10-14" });
      expect(input).toHaveValue("10/14/2026");
      expect(
        container.querySelector(".narmi-icon-calendar"),
      ).toBeInTheDocument();
    });
  });

  describe("typing", () => {
    it("reports a complete date as YYYY-MM-DD", async () => {
      const { input, user, onChange } = renderField();

      await user.type(input, "10/14/2026");

      expect(onChange).toHaveBeenLastCalledWith("2026-10-14");
      expect(input).toHaveValue("10/14/2026");
    });

    it("reports an empty value while the date is incomplete", async () => {
      const { input, user, onChange } = renderField({ value: "2026-10-14" });

      await user.clear(input);
      expect(onChange).toHaveBeenLastCalledWith("");

      await user.type(input, "10/14/202");
      expect(onChange).toHaveBeenCalledTimes(1);
      // The text stays so the user can finish it
      expect(input).toHaveValue("10/14/202");
    });

    it("lets the mask roll an impossible date forward", async () => {
      // Maskito's date mask normalises overflow rather than refusing it
      const { input, user, onChange } = renderField();

      await user.type(input, "02/30/2026");

      expect(input).toHaveValue("03/02/2026");
      expect(onChange).toHaveBeenLastCalledWith("2026-03-02");
    });

    it("rejects dates outside the range or unavailable", async () => {
      const { input, user, onChange } = renderField({
        minDate: "2026-10-01",
        maxDate: "2026-10-31",
        isDateUnavailable: (iso) => iso === "2026-10-20",
      });

      await user.type(input, "09/30/2026");
      await user.clear(input);
      await user.type(input, "10/20/2026");
      expect(onChange).not.toHaveBeenCalledWith("2026-09-30");
      expect(onChange).not.toHaveBeenCalledWith("2026-10-20");

      await user.clear(input);
      await user.type(input, "10/21/2026");
      expect(onChange).toHaveBeenLastCalledWith("2026-10-21");
    });

    it("follows a value set by the parent", () => {
      const { rerender } = render(
        <FieldDate label="Start date" value="" onChange={() => {}} />,
      );
      const input = screen.getByLabelText("Start date");
      rerender(
        <FieldDate label="Start date" value="2026-01-02" onChange={() => {}} />,
      );
      expect(input).toHaveValue("01/02/2026");

      rerender(<FieldDate label="Start date" value="" onChange={() => {}} />);
      expect(input).toHaveValue("");
    });
  });

  describe("calendar", () => {
    it("opens when the input is focused, on today's month", async () => {
      const { input, dialog } = renderField();

      expect(dialog()).not.toBeInTheDocument();
      expect(input).toHaveAttribute("role", "combobox");
      expect(input).toHaveAttribute("aria-haspopup", "dialog");
      expect(input).toHaveAttribute("aria-expanded", "false");

      act(() => input.focus());

      expect(dialog()).toBeInTheDocument();
      expect(input).toHaveAttribute("aria-expanded", "true");
      expect(input).toHaveAttribute("aria-controls", dialog()!.id);
      expect(input).toHaveFocus();
      expect(
        screen.getByRole("grid", { name: /october 2026/i }),
      ).toBeInTheDocument();
    });

    it("opens on the selected date's month and follows a typed date", async () => {
      const { input, user } = renderField({ value: "2025-03-05" });

      act(() => input.focus());
      expect(
        screen.getByRole("grid", { name: /march 2025/i }),
      ).toBeInTheDocument();

      await user.clear(input);
      await user.type(input, "06/10/2026");
      expect(
        screen.getByRole("grid", { name: /june 2026/i }),
      ).toBeInTheDocument();
    });

    it("selects a day with the mouse, closes and keeps focus in the input", async () => {
      const { user, day, dialog, onChange, input } = renderField();

      await user.click(input);
      await user.click(day(/^(Monday|monday), October 19th, 2026/i));

      expect(onChange).toHaveBeenLastCalledWith("2026-10-19");
      expect(input).toHaveValue("10/19/2026");
      expect(dialog()).not.toBeInTheDocument();
      expect(input).toHaveFocus();
    });

    it("selects with the keyboard and returns focus to the input", async () => {
      const { user, day, dialog, onChange, input } = renderField({
        value: "2026-10-14",
      });

      await user.click(input);
      await user.keyboard("{ArrowDown}");
      expect(day(/selected/i)).toHaveFocus();
      expect(dialog()).toBeInTheDocument();

      await user.keyboard("{ArrowRight}{ArrowDown}{Enter}");

      expect(onChange).toHaveBeenLastCalledWith("2026-10-22");
      expect(dialog()).not.toBeInTheDocument();
      expect(input).toHaveFocus();
    });

    it("closes on Escape and reopens on click or ArrowDown", async () => {
      const { user, day, dialog, onChange, input } = renderField();

      await user.click(input);
      await user.tab();
      await user.keyboard("{Escape}");
      expect(dialog()).not.toBeInTheDocument();
      expect(input).toHaveFocus();

      await user.click(input);
      expect(dialog()).toBeInTheDocument();

      await user.keyboard("{Escape}");
      expect(dialog()).not.toBeInTheDocument();

      await user.keyboard("{ArrowDown}");
      expect(dialog()).toBeInTheDocument();
      expect(input).toHaveFocus();

      await user.keyboard("{ArrowDown}");
      expect(day(/today/i)).toHaveFocus();
      expect(onChange).not.toHaveBeenCalled();
    });

    it("keeps the grid tabbable from the input", async () => {
      const { user, day, input } = renderField();

      await user.click(input);
      await user.tab();
      expect(screen.getByRole("button", { name: /previous/i })).toHaveFocus();
      await user.tab();
      await user.tab();
      expect(day(/today/i)).toHaveFocus();
    });

    it("closes when focus leaves the field", async () => {
      const { user, dialog, input } = renderField();
      render(<button type="button">Elsewhere</button>);

      await user.click(input);
      await user.click(screen.getByRole("button", { name: "Elsewhere" }));
      expect(dialog()).not.toBeInTheDocument();

      await user.click(input);
      await user.tab({ shift: true });
      expect(dialog()).not.toBeInTheDocument();
    });

    it("disables days outside the range and unavailable days", async () => {
      const { user, day, onChange, input } = renderField({
        minDate: "2026-10-05",
        maxDate: "2026-10-25",
        isDateUnavailable: (iso) => iso === "2026-10-20",
      });

      await user.click(input);

      const dayOfMonth = (n: number) =>
        day(new RegExp(`October ${n}(st|nd|rd|th), 2026`));
      expect(dayOfMonth(4)).toBeDisabled();
      expect(dayOfMonth(26)).toBeDisabled();
      expect(dayOfMonth(20)).toBeDisabled();
      expect(dayOfMonth(21)).toBeEnabled();
      expect(
        screen.getByRole("button", { name: /previous month/i }),
      ).toHaveAttribute("aria-disabled", "true");

      await user.click(dayOfMonth(20));
      expect(onChange).not.toHaveBeenCalled();
    });

    it("clears the field and selects today from the default footer", async () => {
      const { user, input, dialog, onChange } = renderField({
        value: "2026-10-20",
      });

      await user.click(input);
      await user.click(screen.getByRole("button", { name: "Clear" }));
      expect(onChange).toHaveBeenLastCalledWith("");
      expect(input).toHaveValue("");
      expect(dialog()).toBeInTheDocument();

      await user.click(screen.getByRole("button", { name: "Today" }));
      expect(onChange).toHaveBeenLastCalledWith("2026-10-14");
      expect(input).toHaveValue("10/14/2026");
      expect(dialog()).toBeInTheDocument();
    });

    it("disables Today when today can't be selected", async () => {
      const { user, input } = renderField({ minDate: "2026-10-15" });

      await user.click(input);
      expect(screen.getByRole("button", { name: "Today" })).toBeDisabled();
    });

    it("renders a custom footer that can close the calendar", async () => {
      const { user, input, dialog } = renderField({
        renderFooter: ({ close }) => (
          <button type="button" onClick={close}>
            Continue
          </button>
        ),
      });

      await user.click(input);
      expect(
        screen.queryByRole("button", { name: "Today" }),
      ).not.toBeInTheDocument();

      await user.click(screen.getByRole("button", { name: "Continue" }));
      expect(dialog()).not.toBeInTheDocument();
      expect(input).toHaveFocus();
    });

    it("closes when the field becomes disabled", async () => {
      const { user, dialog, input, rerender } = renderField();

      await user.click(input);
      expect(dialog()).toBeInTheDocument();

      rerender(<ControlledField isDisabled />);
      expect(dialog()).not.toBeInTheDocument();
    });
  });

  describe("on touch devices", () => {
    beforeEach(() => mockTouchDevice(true));

    it("renders a native date input and no calendar", () => {
      const { input, container } = renderField({
        value: "2026-10-14",
        minDate: "2026-10-01",
        maxDate: "2026-10-31",
      });

      expect(input).toHaveAttribute("type", "date");
      expect(input).toHaveValue("2026-10-14");
      expect(input).toHaveAttribute("min", "2026-10-01");
      expect(input).toHaveAttribute("max", "2026-10-31");
      expect(container.querySelector(".narmi-icon-calendar")).toBeNull();
      act(() => input.focus());
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    it("passes the picked date straight through", async () => {
      const { input, user, onChange } = renderField();

      await act(async () => {
        await user.type(input, "2026-10-19");
      });

      expect(onChange).toHaveBeenLastCalledWith("2026-10-19");
    });

    it("rejects an unavailable date but keeps it visible", async () => {
      const { input, user, onChange } = renderField({
        value: "2026-10-14",
        isDateUnavailable: (iso) => iso === "2026-10-20",
      });

      await act(async () => {
        await user.clear(input);
        await user.type(input, "2026-10-20");
      });

      expect(onChange).toHaveBeenLastCalledWith("");
      expect(input).toHaveValue("2026-10-20");
    });

    it("keeps the custom calendar when opted out", () => {
      const { input, dialog } = renderField({ shouldUseNativeOnTouch: false });

      expect(input).toHaveAttribute("type", "text");
      act(() => input.focus());
      expect(dialog()).toBeInTheDocument();
    });
  });
});
