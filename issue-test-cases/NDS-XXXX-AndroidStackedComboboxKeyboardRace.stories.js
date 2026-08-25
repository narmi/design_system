/* eslint-disable react/prop-types */
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Combobox from "src/Combobox";

const storyDescription =
  "Regression test for a suspected Android soft-keyboard race between " +
  "two stacked Combobox instances. Reported symptom (matches the " +
  "screenshot in the ticket): the first Combobox works correctly, but " +
  "when the user selects an item in the first Combobox and then " +
  "immediately taps the second Combobox, the second popover appears " +
  "in the wrong position (offset by the keyboard-height delta) or " +
  "briefly appears and disappears. Must be tested on a real Android " +
  "device (e.g. BrowserStack Local) — the desktop Storybook viewport " +
  "preset cannot reproduce this because there is no real soft " +
  "keyboard. " +
  "Suspected cause: the NDS-2906 blur→refocus sandwich in " +
  "`onSelectedItemChange` (src/Combobox/index.tsx:316-327) fires when " +
  "an item is picked in Combobox #1. On Android this begins collapsing " +
  "the soft keyboard, emitting a burst of `visualViewport.resize` " +
  "events. If the user taps Combobox #2 during that burst, Android " +
  "re-opens the keyboard mid-animation. `useDropdownLayer` (opted " +
  "into `polyfillScrollBug: true` at src/Combobox/index.tsx:353-359) " +
  "then computes the second popover's position and/or fires its " +
  "`window.resize` close handler against a mid-animation viewport, " +
  "leaving the popover mispositioned. " +
  "Reproduction steps: (1) tap the first Combobox and select any " +
  "item, (2) immediately tap the second Combobox's input. " +
  "`TwoStackedComboboxes` is the primary reproduction. " +
  "`TwoStackedComboboxesWithLayerMonitor` overlays a live readout of " +
  "the currently-open combobox's anchor + layer rects and the " +
  "visualViewport dimensions so an on-device tester can see whether " +
  "the second popover commits to a stale (mid-animation) viewport " +
  "height. `TwoStackedComboboxesNoRefocus` is a diagnostic isolation: " +
  "it monkey-patches `HTMLInputElement.prototype.focus` on the " +
  "story's inputs so the internal refocus at " +
  "src/Combobox/index.tsx:325 becomes a no-op, without editing " +
  "Combobox. If that variant passes on-device while " +
  "`TwoStackedComboboxes` fails, the NDS-2906 refocus is confirmed as " +
  "the trigger and the fix work should focus on debouncing or " +
  "conditionally skipping it. " +
  "Cross-references: NDS-3164 (single-combobox positioning on " +
  "Android) and NDS-2906 (introduced the blur/refocus sandwich this " +
  "story stresses).";

const options = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
  { value: "maybe", label: "Maybe" },
  { value: "prefer-not-to-say", label: "Prefer not to say" },
];

/**
 * Two stacked Comboboxes rendered in a padded flex column with generous
 * vertical spacing between them, roughly matching the reported form
 * layout. Both are fully controlled so `onSelectedItemChange` fires the
 * NDS-2906 blur→refocus path when a user picks an item — that path is
 * the suspected trigger for the Android keyboard race documented in the
 * component description.
 */
const ControlledCombobox = ({ label, value, onChange }) => {
  const [inputValue, setInputValue] = useState(value);

  return (
    <Combobox
      label={label}
      inputValue={inputValue}
      onInputChange={setInputValue}
      onChange={(nextValue) => {
        const match = options.find((o) => o.value === nextValue);
        setInputValue(match ? match.label : "");
        onChange(nextValue ?? "");
      }}
    >
      {options.map((option) => (
        <Combobox.Item
          key={option.value}
          value={option.value}
          searchValue={option.label}
        >
          {option.label}
        </Combobox.Item>
      ))}
    </Combobox>
  );
};

const StackedLayout = (Story) => (
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      gap: "48px",
      padding: "10vh 16px 24px",
      backgroundColor: "var(--bgColor-white, #fff)",
    }}
  >
    <Story />
  </div>
);

export const TwoStackedComboboxes = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");

  return (
    <>
      <ControlledCombobox
        label="First question"
        value={first}
        onChange={setFirst}
      />
      <ControlledCombobox
        label="Second question"
        value={second}
        onChange={setSecond}
      />
    </>
  );
};
TwoStackedComboboxes.decorators = [StackedLayout];
TwoStackedComboboxes.parameters = {
  docs: {
    description: {
      story:
        "Primary reproduction. On a real Android device: tap the first " +
        "Combobox, select any item, then immediately tap the second " +
        "Combobox's input. Expected failure: the second popover " +
        "positions incorrectly (offset by keyboard height) or appears " +
        "then disappears.",
    },
  },
};

/**
 * Live overlay showing the currently-open Combobox's anchor + layer
 * bounding rects and visualViewport dimensions. Adapted from the
 * `LayerPositionOverlay` in NDS-3164 — since only one Combobox can be
 * open at a time, `.nds-combobox--active` naturally tracks whichever
 * popover the user is interacting with. Use this on-device to see
 * whether the second popover's layer rect gets computed against a
 * mid-animation viewport height (i.e. `visualViewport.height` is
 * partway between "keyboard open" and "keyboard closed" when the layer
 * mounts) and whether it recovers once the resize burst settles.
 */
const LayerPositionOverlay = () => {
  const [state, setState] = useState(() => ({
    resizeEventCount: 0,
    visualViewportHeight:
      typeof window !== "undefined"
        ? (window.visualViewport?.height ?? "n/a")
        : "n/a",
    visualViewportOffsetTop:
      typeof window !== "undefined"
        ? (window.visualViewport?.offsetTop ?? "n/a")
        : "n/a",
    innerHeight: typeof window !== "undefined" ? window.innerHeight : "n/a",
    activeLabel: null,
    anchorRect: null,
    layerRect: null,
  }));

  useEffect(() => {
    if (typeof window === "undefined" || !window.visualViewport) return;

    const readRects = () => {
      const active = document.querySelector(".nds-combobox--active");
      const anchor = active?.querySelector(":scope > div:first-child") ?? null;
      const list = active?.parentElement?.querySelector(".nds-combobox-list");
      const layer = list?.parentElement ?? null;
      const activeLabel =
        active?.querySelector("label")?.textContent?.trim() ?? null;
      const format = (el) => {
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return {
          top: Math.round(r.top),
          bottom: Math.round(r.bottom),
          left: Math.round(r.left),
          right: Math.round(r.right),
          width: Math.round(r.width),
          height: Math.round(r.height),
        };
      };
      return {
        activeLabel,
        anchorRect: format(anchor),
        layerRect: format(layer),
      };
    };

    const update = () => {
      setState((prev) => ({
        ...prev,
        resizeEventCount: prev.resizeEventCount + 1,
        visualViewportHeight: window.visualViewport.height,
        visualViewportOffsetTop: window.visualViewport.offsetTop,
        innerHeight: window.innerHeight,
        ...readRects(),
      }));
    };

    // Poll on every animation frame so we can see the layer rect during
    // the keyboard-swap window even if no resize event fires while it's
    // mid-animation. This is heavier than a plain resize listener but
    // this is a diagnostic story, not a shipping component.
    let raf = 0;
    const tick = () => {
      setState((prev) => ({ ...prev, ...readRects() }));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.visualViewport.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(raf);
      window.visualViewport.removeEventListener("resize", update);
    };
  }, []);

  const rows = {
    resizeEventCount: state.resizeEventCount,
    "active combobox": state.activeLabel ?? "(none open)",
    "visualViewport.height": state.visualViewportHeight,
    "visualViewport.offsetTop": state.visualViewportOffsetTop,
    "window.innerHeight": state.innerHeight,
    "anchor rect": state.anchorRect
      ? JSON.stringify(state.anchorRect)
      : "(not found)",
    "layer rect": state.layerRect
      ? JSON.stringify(state.layerRect)
      : "(not found)",
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 99999,
        pointerEvents: "none",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        border: "1px solid #999",
        padding: "6px 8px",
        fontFamily: "monospace",
        fontSize: "10px",
        lineHeight: 1.3,
        maxWidth: "70vw",
        wordBreak: "break-all",
      }}
    >
      {Object.entries(rows).map(([k, v]) => (
        <div key={k}>
          <strong>{k}:</strong> {String(v)}
        </div>
      ))}
    </div>
  );
};

export const TwoStackedComboboxesWithLayerMonitor = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");

  return (
    <>
      <LayerPositionOverlay />
      <ControlledCombobox
        label="First question"
        value={first}
        onChange={setFirst}
      />
      <ControlledCombobox
        label="Second question"
        value={second}
        onChange={setSecond}
      />
    </>
  );
};
TwoStackedComboboxesWithLayerMonitor.decorators = [StackedLayout];
TwoStackedComboboxesWithLayerMonitor.parameters = {
  docs: {
    description: {
      story:
        "Same reproduction as `TwoStackedComboboxes`, plus a live " +
        "overlay reporting the currently-open Combobox's anchor + " +
        "layer rects and the visualViewport dimensions. Watch the " +
        "layer rect while performing the reproduction to see whether " +
        "the second popover commits to a stale viewport-height " +
        "position during the keyboard swap.",
    },
  },
};

/**
 * Diagnostic isolation. Monkey-patches `HTMLInputElement.prototype.focus`
 * scoped to the two Combobox inputs mounted inside this story so the
 * internal refocus at src/Combobox/index.tsx:325
 * (`inputRef.current?.focus({ preventScroll: true })`) becomes a no-op
 * — without editing Combobox itself.
 *
 * If this story passes on-device while `TwoStackedComboboxes` fails,
 * the NDS-2906 blur→refocus sandwich is confirmed as the trigger for
 * the keyboard race and the fix should focus on debouncing or
 * conditionally skipping the refocus (e.g. skip when a pointerdown on
 * another focusable input is already pending).
 *
 * Implementation note: patching a prototype is intentionally hacky.
 * We scope it to inputs inside `containerRef.current` and restore the
 * original method on unmount so the patch never leaks outside this
 * story.
 */
const NoRefocusIsolation = ({ children }) => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const originalFocus = HTMLInputElement.prototype.focus;
    HTMLInputElement.prototype.focus = function patchedFocus(...args) {
      if (container.contains(this)) {
        // Diagnostic no-op: swallow programmatic refocus from Combobox's
        // onSelectedItemChange handler so the keyboard-swap race
        // doesn't get triggered by the design-system side of the
        // interaction. User-driven taps still open the keyboard via
        // native focus behavior on pointerdown / click, which does
        // not route through .focus().
        return;
      }
      return originalFocus.apply(this, args);
    };

    return () => {
      HTMLInputElement.prototype.focus = originalFocus;
    };
  }, []);

  return <div ref={containerRef}>{children}</div>;
};

export const TwoStackedComboboxesNoRefocus = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");

  return (
    <NoRefocusIsolation>
      <ControlledCombobox
        label="First question"
        value={first}
        onChange={setFirst}
      />
      <div style={{ height: "48px" }} />
      <ControlledCombobox
        label="Second question"
        value={second}
        onChange={setSecond}
      />
    </NoRefocusIsolation>
  );
};
TwoStackedComboboxesNoRefocus.decorators = [StackedLayout];
TwoStackedComboboxesNoRefocus.parameters = {
  docs: {
    description: {
      story:
        "Diagnostic isolation. Monkey-patches " +
        "`HTMLInputElement.prototype.focus` scoped to this story's " +
        "inputs so the internal refocus at " +
        "src/Combobox/index.tsx:325 becomes a no-op, without editing " +
        "Combobox. If this variant passes on-device while " +
        "`TwoStackedComboboxes` fails, the NDS-2906 blur→refocus is " +
        "confirmed as the trigger.",
    },
  },
};

export default {
  title: "NDS-XXXX Android stacked combobox keyboard race",
  tags: ["!autodocs", "NDS-XXXX"],
  parameters: {
    viewport: { defaultViewport: "mobile1" },
    layout: "fullscreen",
    docs: {
      description: {
        component: storyDescription,
      },
    },
  },
};
