import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";

import Accordion from "./Accordion";
import Alert from "./Alert";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Dialog from "./Dialog";
import MenuButton from "./MenuButton";
import Pagination from "./Pagination";
import RadioButtons from "./RadioButtons";
import Select from "./Select";
import Tabs from "./Tabs";
import TextInput from "./TextInput";
import Toggle from "./Toggle";
import Tooltip from "./Tooltip";

expect.extend(toHaveNoViolations);

const expectNoViolations = async (ui) => {
  const { container } = render(ui);
  expect(await axe(container)).toHaveNoViolations();
};

describe("axe accessibility assertions", () => {
  it("Button has no violations", async () => {
    await expectNoViolations(<Button label="Save" onClick={() => {}} />);
  });

  it("TextInput has no violations", async () => {
    await expectNoViolations(<TextInput label="Account nickname" />);
  });

  it("Checkbox has no violations", async () => {
    await expectNoViolations(<Checkbox label="Remember me" />);
  });

  it("Toggle has no violations", async () => {
    await expectNoViolations(<Toggle labelledBy="toggle-label" />);
  });

  it("RadioButtons has no violations", async () => {
    await expectNoViolations(
      <RadioButtons
        name="account-type"
        options={[
          { label: "Checking", value: "checking" },
          { label: "Savings", value: "savings" },
        ]}
      />,
    );
  });

  it("Alert has no violations", async () => {
    await expectNoViolations(<Alert kind="info">Statement is ready</Alert>);
  });

  it("Accordion has no violations", async () => {
    await expectNoViolations(
      <Accordion renderSummary={() => "Details"}>
        <p>Account details</p>
      </Accordion>,
    );
  });

  it("Pagination has no violations", async () => {
    await expectNoViolations(
      <Pagination itemsPerPage={10} totalItems={100} onChange={() => {}} />,
    );
  });

  // KNOWN VIOLATION (axe: nested-interactive): li[role="tab"] wraps a
  // button[tabindex="-1"], an interactive element nested in a control.
  // `it.fails` starts failing once the violation is fixed — flip it to `it`.
  it.fails("Tabs has no violations", async () => {
    await expectNoViolations(
      <Tabs onTabChange={() => {}}>
        <Tabs.List>
          <Tabs.Tab label="Activity" tabId="activity" />
          <Tabs.Tab label="Details" tabId="details" />
        </Tabs.List>
        <Tabs.Panel tabId="activity">Activity content</Tabs.Panel>
        <Tabs.Panel tabId="details">Details content</Tabs.Panel>
      </Tabs>,
    );
  });

  // KNOWN VIOLATION (axe: aria-required-children, aria-required-parent, list):
  // the open listbox renders li[role="option"] inside a ul that is not the
  // element carrying role="listbox". Flip to `it` once fixed.
  it.fails("Select has no violations when open", async () => {
    const user = userEvent.setup();
    const { container, getByRole } = render(
      <Select label="Account" onChange={() => {}}>
        <Select.Item value="checking" searchValue="checking">
          Checking
        </Select.Item>
        <Select.Item value="savings" searchValue="savings">
          Savings
        </Select.Item>
      </Select>,
    );
    await user.click(getByRole("combobox"));
    expect(await axe(container)).toHaveNoViolations();
  });

  it("MenuButton has no violations when open", async () => {
    const user = userEvent.setup();
    const { container, getByRole } = render(
      <MenuButton label="More options">
        <MenuButton.Item label="Edit" onSelect={() => {}} />
        <MenuButton.Item label="Delete" onSelect={() => {}} />
      </MenuButton>,
    );
    await user.click(getByRole("combobox"));
    expect(await axe(container)).toHaveNoViolations();
  });

  it("Tooltip has no violations", async () => {
    await expectNoViolations(
      <Tooltip text="Routing number">
        <span>123456789</span>
      </Tooltip>,
    );
  });

  it("Dialog has no violations when open", async () => {
    await expectNoViolations(
      <Dialog isOpen title="Confirm transfer" onUserDismiss={() => {}}>
        <p>Transfer $100 to Savings?</p>
      </Dialog>,
    );
  });
});
