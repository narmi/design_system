import React, { useState } from "react";
import { expect, waitFor } from "storybook/test";
import { FieldDate } from "./index";
import Button from "../../Button";
import Dialog from "../../Dialog";

export default {
  title: "Components/Field/Field.Date",
  component: FieldDate,
  argTypes: {
    calendarCaption: { control: "radio", options: ["label", "dropdown"] },
  },
};

const Template = (args) => {
  const [value, setValue] = useState(args.value || "");
  return (
    <>
      <FieldDate {...args} value={value} onChange={setValue} />
      <p className="fontSize--s fontColor--secondary margin--top--s">
        value: <code>{JSON.stringify(value)}</code>
      </p>
    </>
  );
};

export const Overview = Template.bind({});
Overview.args = {
  id: "start-date",
  label: "Start date",
  value: "",
};
Overview.parameters = {
  docs: {
    description: {
      story:
        "Type a date as `MM/DD/YYYY` or pick one from the calendar. `value` and `onChange` always use `YYYY-MM-DD`; `onChange` is called with `\"\"` while the field is empty, incomplete or holds a date it can't accept. On phones and tablets the browser's native date picker is used instead (see **Native on touch devices**).",
    },
  },
};

export const WithValue = Template.bind({});
WithValue.args = {
  id: "with-value",
  label: "Statement date",
  value: "2026-10-14",
};

export const WithMinAndMax = Template.bind({});
WithMinAndMax.args = {
  id: "scheduled",
  label: "Scheduled for",
  value: "",
  minDate: "2026-10-15",
  maxDate: "2026-11-30",
  renderHelperText: () => "Within the next 45 days",
};
WithMinAndMax.parameters = {
  docs: {
    description: {
      story:
        '`minDate` and `maxDate` are inclusive `YYYY-MM-DD` strings. Days outside the range are disabled in the calendar, navigation stops at its edges, and a typed date outside it is reported as `""`.',
    },
  },
};

const isWeekend = (iso) => {
  const [y, m, d] = iso.split("-").map(Number);
  const day = new Date(y, m - 1, d).getDay();
  return day === 0 || day === 6;
};

export const WithUnavailableDates = Template.bind({});
WithUnavailableDates.args = {
  id: "transfer",
  label: "Transfer date",
  value: "",
  isDateUnavailable: isWeekend,
  renderHelperText: () => "Business days only",
};
WithUnavailableDates.parameters = {
  docs: {
    description: {
      story:
        "`isDateUnavailable` receives each `YYYY-MM-DD` and returns `true` for days that can't be picked. Here weekends are unavailable.",
    },
  },
};

export const DateOfBirth = Template.bind({});
DateOfBirth.args = {
  id: "dob",
  label: "Date of birth",
  value: "",
  calendarCaption: "dropdown",
  minDate: "1900-01-01",
  maxDate: "2026-10-14",
};
DateOfBirth.parameters = {
  docs: {
    description: {
      story:
        '`calendarCaption="dropdown"` swaps the month label for native month and year `<select>`s, so far-off dates are a couple of clicks away. Pair it with `minDate`/`maxDate` to bound the year list.',
    },
  },
};

export const WithErrors = Template.bind({});
WithErrors.args = {
  id: "with-errors",
  label: "Start date",
  value: "",
  errors: ["Start date is required"],
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: "disabled",
  label: "Start date",
  value: "2026-10-14",
  isDisabled: true,
};

export const InADialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <>
      <Button label="Open dialog" onClick={() => setIsOpen(true)} />
      <Dialog
        title="Schedule a payment"
        isOpen={isOpen}
        onUserDismiss={() => setIsOpen(false)}
      >
        <FieldDate
          id="in-dialog"
          label="Payment date"
          value={value}
          onChange={setValue}
          isPortalled
        />
      </Dialog>
    </>
  );
};
InADialog.parameters = {
  docs: {
    description: {
      story:
        "Set `isPortalled` when the field sits inside a Dialog or Drawer so the calendar layers above it.",
    },
  },
};

export const NativeOnTouchDevices = Template.bind({});
NativeOnTouchDevices.args = {
  id: "native",
  label: "Start date",
  value: "",
  shouldUseNativeOnTouch: true,
};
NativeOnTouchDevices.parameters = {
  docs: {
    description: {
      story:
        'By default, devices whose primary pointer is coarse (`(pointer: coarse)` — phones and tablets, but not a touchscreen laptop driven by a trackpad) get a native `<input type="date">` instead of the calendar. Open this story on a phone, or emulate one in devtools, to see it. Set `shouldUseNativeOnTouch={false}` to always use the calendar. Native pickers can\'t grey out individual days, so an `isDateUnavailable` date is reported as `""` after the fact; show why with `errors`.',
    },
  },
};

export const Narrow = () => {
  const [value, setValue] = useState("");
  return (
    <div style={{ width: 320 }}>
      <FieldDate
        id="narrow"
        label="Start date"
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

/**
 * Interaction test for the keyboard path through the calendar.
 */
export const KeyboardSelection = {
  name: "Interaction: Picks a date with the keyboard",
  render: () => {
    const Controlled = () => {
      const [value, setValue] = useState("2026-10-14");
      return (
        <FieldDate
          id="keyboard"
          label="Start date"
          value={value}
          onChange={setValue}
        />
      );
    };
    return <Controlled />;
  },
  play: async ({ canvas, userEvent }) => {
    const trigger = canvas.getByRole("button", { name: /change date/i });
    await userEvent.click(trigger);
    await waitFor(() =>
      expect(canvas.getByRole("button", { name: /selected/i })).toHaveFocus(),
    );

    await userEvent.keyboard("{ArrowRight}{ArrowDown}{Enter}");

    const input = canvas.getByLabelText("Start date");
    await waitFor(() => expect(input).toHaveValue("10/22/2026"));
    await waitFor(() => expect(trigger).toHaveFocus());
  },
};

/**
 * Interaction test verifying typed input is parsed and reported.
 */
export const TypedInput = {
  name: "Interaction: Accepts a typed date",
  render: () => {
    const Controlled = () => {
      const [value, setValue] = useState("");
      return (
        <>
          <FieldDate
            id="typed"
            label="Start date"
            value={value}
            onChange={setValue}
          />
          <output data-testid="value">{value}</output>
        </>
      );
    };
    return <Controlled />;
  },
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByLabelText("Start date");
    await userEvent.type(input, "10142026");
    await waitFor(() => expect(input).toHaveValue("10/14/2026"));
    await waitFor(() =>
      expect(canvas.getByTestId("value")).toHaveTextContent("2026-10-14"),
    );
  },
};
