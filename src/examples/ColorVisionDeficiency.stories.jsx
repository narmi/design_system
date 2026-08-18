import React from "react";

export default {
  title: "Examples/Color Vision",
  parameters: {
    docs: {
      description: {
        component: `
Status colors are re-based per color-vision deficiency so meaning rides the
axis that survives. Palettes are opt-in via a \`data-color-vision-deficiency\`
attribute on the \`<html>\` element:

- _no attribute_ → **Typical Vision**: the default status palette
- \`data-color-vision-deficiency="red-green"\` → **Protanopia / Deuteranopia**:
  the two red–green deficiencies share one setting; meaning moves onto the intact
  blue–amber axis (Okabe-Ito CVD-safe values). The clinical names
  \`"protanopia"\` / \`"deuteranopia"\` are also accepted as aliases.
- \`data-color-vision-deficiency="tritanopia"\` → blue–yellow deficiency:
  status colors are re-based to stay distinguishable under tritanopia, with success/error
  pushed toward lightness extremes and info/warn separated by hue + lightness

Because these override the primitive \`--color-*Dark\` / \`--color-*Light\` custom
properties, any consumer using them picks up the CVD-safe value automatically.

> **Color never carries the load alone.** Every status must still be paired with
> a non-color cue (icon and/or label). These palettes only improve the odds that
> color reinforces — never replaces — that cue.

**Use the "Color Vision" toolbar button to preview each palette below.**
        `,
      },
    },
  },
};

const STATUSES = [
  { key: "success", icon: "✓", label: "Success" },
  { key: "info", icon: "ⓘ", label: "Info" },
  { key: "warn", icon: "⚠", label: "Warning" },
  { key: "error", icon: "✕", label: "Error" },
];

const PALETTES = [
  { attr: undefined, title: "Typical Vision" },
  { attr: "red-green", title: "Protanopia / Deuteranopia" },
  { attr: "tritanopia", title: "Tritanopia" },
];

const StatusStack = () => (
  <div>
    {STATUSES.map(({ key, icon, label }) => (
      <div
        key={key}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "10px 14px",
          borderRadius: "6px",
          marginBottom: "8px",
          backgroundColor: `var(--color-${key}Light)`,
          border: `1px solid var(--color-${key}Dark)`,
        }}
      >
        <span
          aria-hidden="true"
          style={{
            color: `var(--color-${key}Dark)`,
            fontWeight: 700,
            fontSize: "16px",
            width: "20px",
            textAlign: "center",
          }}
        >
          {icon}
        </span>
        <span
          style={{
            color: `var(--color-${key}Dark)`,
            fontWeight: 600,
            fontSize: "14px",
          }}
        >
          {label}
        </span>
      </div>
    ))}
  </div>
);

/**
 * Reacts to the "Color Vision" toolbar toggle (which sets the attribute on
 * <html>). Non-color cues (icon + label) accompany every status.
 */
export const Specimen = () => (
  <div style={{ fontFamily: "var(--font-family-default, sans-serif)" }}>
    <p
      style={{
        fontSize: "14px",
        color: "var(--font-color-secondary)",
        marginBottom: "24px",
      }}
    >
      Use the <strong>Color Vision</strong> toolbar button to switch the active
      palette. Every status keeps an icon and label so color never carries
      meaning alone.
    </p>
    <StatusStack />
  </div>
);
Specimen.storyName = "Color Vision";

/**
 * Side-by-side comparison of every palette at once, each column scoped with its
 * own `data-color-vision-deficiency` attribute — independent of the toolbar.
 */
export const Comparison = () => (
  <div style={{ fontFamily: "var(--font-family-default, sans-serif)" }}>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "24px",
      }}
    >
      {PALETTES.map(({ attr, title }) => (
        <div
          key={title}
          {...(attr ? { "data-color-vision-deficiency": attr } : {})}
        >
          <div
            style={{
              fontSize: "13px",
              fontWeight: 700,
              marginBottom: "12px",
              color: "var(--font-color-heading)",
            }}
          >
            {title}
            {attr ? (
              <span
                style={{
                  display: "block",
                  fontWeight: 400,
                  fontFamily: "monospace",
                  fontSize: "11px",
                  color: "var(--font-color-secondary)",
                }}
              >
                {`[data-color-vision-deficiency="${attr}"]`}
              </span>
            ) : null}
          </div>
          <StatusStack />
        </div>
      ))}
    </div>
  </div>
);
Comparison.storyName = "Palette Comparison";
