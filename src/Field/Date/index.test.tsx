import React, { useState } from "react";
import { act, render, screen, waitFor } from "@testing-library/react";
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
      trigger: () =>
        screen.getByRole("button", { name: /choose|change date/i }),
      dialog: () =>
        screen.queryByRole("dialog", { name: "Start date calendar" }),
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

    it("disables the input and the trigger", () => {
      const { input, trigger, container } = renderField({ isDisabled: true });

      expect(input).toBeDisabled();
      expect(trigger()).toBeDisabled();
      expect(container.querySelector(".nds-field")).toHaveClass(
        "nds-field--isDisabled",
      );
    });

    it("shows the value as MM/DD/YYYY", () => {
      const { input } = renderField({ value: "2026-10-14" });
      expect(input).toHaveValue("10/14/2026");
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
    it("is closed until the trigger is clicked, then focuses today", async () => {
      const { user, trigger, dialog } = renderField();

      expect(dialog()).not.toBeInTheDocument();
      expect(trigger()).toHaveAttribute("aria-haspopup", "dialog");
      expect(trigger()).toHaveAttribute("aria-expanded", "false");

      await user.click(trigger());

      expect(dialog()).toBeInTheDocument();
      expect(trigger()).toHaveAttribute("aria-expanded", "true");
      expect(
        screen.getByRole("grid", { name: /october 2026/i }),
      ).toBeInTheDocument();
      await waitFor(() =>
        expect(screen.getByRole("button", { name: /today/i })).toHaveFocus(),
      );
    });

    it("opens with Alt+ArrowDown from the input", async () => {
      const { input, user, dialog } = renderField();

      input.focus();
      await user.keyboard("{Alt>}{ArrowDown}{/Alt}");

      expect(dialog()).toBeInTheDocument();
    });

    it("names the trigger after the selection and opens on its month", async () => {
      const { user, trigger } = renderField({ value: "2025-03-05" });

      expect(trigger()).toHaveAccessibleName("Change date, March 5, 2025");
      await user.click(trigger());

      expect(
        screen.getByRole("grid", { name: /march 2025/i }),
      ).toBeInTheDocument();
      await waitFor(() =>
        expect(screen.getByRole("button", { name: /selected/i })).toHaveFocus(),
      );
    });

    it("selects a day, closes and returns focus to the trigger", async () => {
      const { user, trigger, dialog, onChange, input } = renderField();

      await user.click(trigger());
      await user.click(
        screen.getByRole("button", {
          name: /^(Monday|monday), October 19th, 2026/i,
        }),
      );

      expect(onChange).toHaveBeenLastCalledWith("2026-10-19");
      expect(input).toHaveValue("10/19/2026");
      expect(dialog()).not.toBeInTheDocument();
      expect(trigger()).toHaveFocus();
    });

    it("selects with the keyboard", async () => {
      const { user, trigger, onChange } = renderField({ value: "2026-10-14" });

      await user.click(trigger());
      await waitFor(() =>
        expect(screen.getByRole("button", { name: /selected/i })).toHaveFocus(),
      );
      await user.keyboard("{ArrowRight}{ArrowDown}{Enter}");

      expect(onChange).toHaveBeenLastCalledWith("2026-10-22");
      expect(trigger()).toHaveFocus();
    });

    it("closes on Escape and returns focus to the trigger", async () => {
      const { user, trigger, dialog, onChange } = renderField();

      await user.click(trigger());
      await user.keyboard("{Escape}");

      expect(dialog()).not.toBeInTheDocument();
      expect(trigger()).toHaveFocus();
      expect(onChange).not.toHaveBeenCalled();
    });

    it("closes on an outside click without stealing focus", async () => {
      const { user, trigger, dialog } = renderField();
      render(<button type="button">Elsewhere</button>);

      await user.click(trigger());
      const elsewhere = screen.getByRole("button", { name: "Elsewhere" });
      await user.click(elsewhere);

      expect(dialog()).not.toBeInTheDocument();
      expect(trigger()).not.toHaveFocus();
    });

    it("disables days outside the range and unavailable days", async () => {
      const { user, trigger, onChange } = renderField({
        minDate: "2026-10-05",
        maxDate: "2026-10-25",
        isDateUnavailable: (iso) => iso === "2026-10-20",
      });

      await user.click(trigger());

      const day = (n: number) =>
        screen.getByRole("button", {
          name: new RegExp(`October ${n}(st|nd|rd|th), 2026`),
        });
      expect(day(4)).toBeDisabled();
      expect(day(26)).toBeDisabled();
      expect(day(20)).toBeDisabled();
      expect(day(21)).toBeEnabled();
      expect(
        screen.getByRole("button", { name: /previous month/i }),
      ).toHaveAttribute("aria-disabled", "true");

      await user.click(day(20));
      expect(onChange).not.toHaveBeenCalled();
    });

    it("renders month and year selects for the dropdown caption", async () => {
      const { user, trigger } = renderField({
        calendarCaption: "dropdown",
        minDate: "1900-01-01",
        maxDate: "2026-12-31",
      });

      await user.click(trigger());

      expect(screen.getByRole("combobox", { name: /month/i })).toHaveValue("9");
      expect(screen.getByRole("combobox", { name: /year/i })).toHaveValue(
        "2026",
      );
    });

    it("closes when the field becomes disabled", async () => {
      const { user, trigger, dialog, rerender } = renderField();

      await user.click(trigger());
      expect(dialog()).toBeInTheDocument();

      rerender(<ControlledField isDisabled />);
      expect(dialog()).not.toBeInTheDocument();
    });
  });

  describe("on touch devices", () => {
    beforeEach(() => mockTouchDevice(true));

    it("renders a native date input and no calendar trigger", () => {
      const { input } = renderField({
        value: "2026-10-14",
        minDate: "2026-10-01",
        maxDate: "2026-10-31",
      });

      expect(input).toHaveAttribute("type", "date");
      expect(input).toHaveValue("2026-10-14");
      expect(input).toHaveAttribute("min", "2026-10-01");
      expect(input).toHaveAttribute("max", "2026-10-31");
      expect(screen.queryByRole("button")).not.toBeInTheDocument();
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
      const { input, trigger } = renderField({ shouldUseNativeOnTouch: false });

      expect(input).toHaveAttribute("type", "text");
      expect(trigger()).toBeInTheDocument();
    });
  });
});
