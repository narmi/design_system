import React, { useState } from "react";
import Dialog from "src/Dialog";
import Select from "src/Select";
import Button from "src/Button";
import TruncatedAccount from "src/TruncatedAccount";

const storyDescription =
  "Mirrors ao/components/funding/funding_method/modals/InternalModal.tsx: " +
  "an NDS Select with many items rendered inside an NDS Dialog. At mobile " +
  "widths the Dialog is a bottom sheet, so the Select anchor sits near the " +
  "bottom of the viewport. Reported: the open list runs past the bottom of " +
  "the screen and cannot be scrolled (NDS-3388). " +
  "`LongLabelsWithTruncatedAccount` covers DEP-6935: selecting a long " +
  "`TruncatedAccount` label must not widen the trigger or the Dialog past " +
  "the viewport (Cancel, Submit and the close button stay reachable). " +
  "Test at a phone width (e.g. 430px) so the Dialog renders as a bottom sheet.";

const accounts = Array.from({ length: 14 }, (_, i) => ({
  id: String(i),
  label: `Account ${i + 1} - ${String(1000 + i * 37).slice(-4)} - $${(i * 1234.56).toFixed(2)}`,
}));

// Mirrors AO: name is "nickname - last4" from the server, balance goes in lastFour.
const longAccounts = [
  { id: "a", name: "Personal Money Market - 8588", balance: "$917.85" },
  {
    id: "b",
    name: "Cameron STUDENT CHECKING PLUS PREMIUM REWARDS - 5912",
    balance: "$10.87",
  },
  { id: "c", name: "Bill Pay & DD - 8072", balance: "$13,193.91" },
  {
    id: "d",
    name: "Joint Household Emergency Savings Reserve Fund Account - 4729",
    balance: "$113,455.16",
  },
];

export const SelectInDialog = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [value, setValue] = useState();
  return (
    <div style={{ minHeight: "150vh", padding: 12 }}>
      <Button label="Open dialog" onClick={() => setIsOpen(true)} />
      <Dialog
        isOpen={isOpen}
        onUserDismiss={() => setIsOpen(false)}
        title="Select your account"
      >
        <div className="margin--top--l">
          <Select label="Account" value={value} onChange={setValue}>
            {accounts.map((a) => (
              <Select.Item key={a.id} value={a.id} searchValue={a.label}>
                {a.label}
              </Select.Item>
            ))}
          </Select>
        </div>
        <div
          style={{
            marginTop: 40,
            display: "flex",
            justifyContent: "flex-end",
            gap: 12,
          }}
        >
          <Button
            kind="negative"
            label="Cancel"
            onClick={() => setIsOpen(false)}
          />
          <Button label="Submit" onClick={() => setIsOpen(false)} />
        </div>
      </Dialog>
    </div>
  );
};

export const LongLabelsWithTruncatedAccount = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [value, setValue] = useState();
  return (
    <div style={{ minHeight: "150vh", padding: 12 }}>
      <Button label="Open dialog" onClick={() => setIsOpen(true)} />
      <Dialog
        isOpen={isOpen}
        onUserDismiss={() => setIsOpen(false)}
        title="Select your account"
      >
        <div className="margin--top--l">
          <Select label="Account" value={value} onChange={setValue}>
            {longAccounts.map((a) => (
              <Select.Item key={a.id} value={a.id} searchValue={a.name}>
                <TruncatedAccount name={a.name} lastFour={a.balance} />
              </Select.Item>
            ))}
          </Select>
        </div>
        <div
          style={{
            marginTop: 40,
            display: "flex",
            justifyContent: "flex-end",
            gap: 12,
          }}
        >
          <Button
            kind="negative"
            label="Cancel"
            onClick={() => setIsOpen(false)}
          />
          <Button label="Submit" onClick={() => setIsOpen(false)} />
        </div>
      </Dialog>
    </div>
  );
};

export default {
  title: "NDS-3388 Select in Dialog",
  parameters: { docs: { description: { component: storyDescription } } },
};
