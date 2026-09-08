import React from "react";
import Select from "src/Select";
import Combobox from "src/Combobox";

const storyDescription =
  "Reproduction for NDS-3176. Two `Select` inputs sit side-by-side in a " +
  "row inside a tall, vertically scrollable page. Tall spacers above and " +
  "below keep the row mid-document so it can be scrolled toward the top or " +
  "bottom edge of the viewport. Scrolling changes the space available " +
  "above/below the trigger, which exercises the `position-try` fallbacks " +
  "wired up by `useDropdownLayer`: `--nds-dropdown-above` flips the layer " +
  "above the trigger when space below is tight, `flip-inline` shifts it on " +
  "the cross axis when it would overflow horizontally, and " +
  "`position-try-order: most-height` clamps the menu to the tallest " +
  "available slot. Open the first (long) select near the bottom of the " +
  "viewport to force the flip-above case, and near the top to keep it " +
  "below.";

// ~30 options so the open menu overflows a typical viewport height and the
// browser must choose a `position-try` fallback / clamp the menu height.
const longOptions = Array.from({ length: 30 }, (_, i) => {
  const label = `Option ${String(i + 1).padStart(2, "0")}`;
  const value = `option-${i + 1}`;
  return (
    <Select.Item key={value} value={value} searchValue={label}>
      {label}
    </Select.Item>
  );
});

const shortOptions = Array.from({ length: 8 }, (_, i) => {
  const label = `Choice ${String.fromCharCode(65 + i)}`;
  const value = `choice-${i + 1}`;
  return (
    <Select.Item key={value} value={value} searchValue={label}>
      {label}
    </Select.Item>
  );
});

// Combobox equivalents of the option sets above so the same reproduction can
// be exercised with `Combobox`, which shares the `useDropdownLayer` machinery.
const longComboboxOptions = Array.from({ length: 30 }, (_, i) => {
  const label = `Option ${String(i + 1).padStart(2, "0")}`;
  const value = `option-${i + 1}`;
  return (
    <Combobox.Item key={value} value={value} searchValue={label}>
      {label}
    </Combobox.Item>
  );
});

const shortComboboxOptions = Array.from({ length: 8 }, (_, i) => {
  const label = `Choice ${String.fromCharCode(65 + i)}`;
  const value = `choice-${i + 1}`;
  return (
    <Combobox.Item key={value} value={value} searchValue={label}>
      {label}
    </Combobox.Item>
  );
});

/**
 * Full-height scrollable page. Tall spacers above and below the row of
 * selects push the row into the middle of a long document so it can be
 * scrolled to either viewport edge, triggering the `position-try`
 * fallbacks on the open dropdown layer.
 */
const ScrollableLayout = (Story) => (
  <div
    style={{
      minHeight: "100vh",
      backgroundColor: "var(--bgColor-white, #fff)",
      padding: "0 16px",
    }}
  >
    <div style={{ height: "90vh" }} />
    <Story />
    <div style={{ height: "90vh" }} />
  </div>
);

export const TwoSelectsInARow = () => (
  <>
    <div className="margin--y--s">
      <Select label="Select one">{longOptions}</Select>
    </div>
    <div className="margin--y--s">
      <Select label="Select two">{shortOptions}</Select>
    </div>
  </>
);
TwoSelectsInARow.decorators = [ScrollableLayout];

/**
 * Same reproduction as `TwoSelectsInARow`, but with two `Combobox` inputs.
 * `Combobox` uses the same `useDropdownLayer` positioning, so this exercises
 * the `position-try` fallbacks (flip-above, flip-inline, height clamp) for the
 * combobox dropdown menus.
 */
export const TwoComboboxesInARow = () => (
  <>
    <div className="margin--y--s">
      <Combobox label="Combobox one">{longComboboxOptions}</Combobox>
    </div>
    <div className="margin--y--s">
      <Combobox label="Combobox two">{shortComboboxOptions}</Combobox>
    </div>
  </>
);
TwoComboboxesInARow.decorators = [ScrollableLayout];

/**
 * A `Select` next to a `Combobox` in the same row to confirm the two input
 * types coexist and each resolves its own `position-try` fallback
 * independently when opened near a viewport edge.
 */
export const SelectAndComboboxInARow = () => (
  <>
    <div className="margin--y--s">
      <Select label="Select one">{longOptions}</Select>
    </div>
    <div className="margin--y--s">
      <Combobox label="Combobox two">{shortComboboxOptions}</Combobox>
    </div>
  </>
);
SelectAndComboboxInARow.decorators = [ScrollableLayout];

export default {
  title: "NDS-3176 Two selects in a row",
  tags: ["!autodocs", "NDS-3176"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: storyDescription,
      },
    },
  },
};
