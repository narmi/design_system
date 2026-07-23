import React from "react";

export default {
  title: "Examples/Color Modes",
  parameters: {
    docs: {
      description: {
        component: `
Color modes allow the design system to adapt to user preferences like high contrast.
Tokens are overridden via a \`data-prefers-contrast\` attribute on an ancestor element,
or automatically via the \`prefers-contrast: more\` media query.

**Use the "Contrast" toolbar button to toggle high contrast mode and see the changes below.**
        `,
      },
    },
  },
};

const swatchStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "64px",
  borderRadius: "4px",
  border: "1px solid var(--border-color-default)",
  fontSize: "14px",
  fontWeight: 600,
  color: "#000",
};

const labelStyle = {
  fontSize: "13px",
  marginTop: "4px",
  color: "var(--font-color-secondary)",
  fontFamily: "monospace",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
  gap: "16px",
  marginBottom: "32px",
};

const sectionHeadingStyle = {
  fontSize: "16px",
  fontWeight: 700,
  marginBottom: "12px",
  color: "var(--font-color-heading)",
};

const backgroundTokens = [
  { name: "--bgColor-white", label: "white" },
  { name: "--bgColor-snowGrey", label: "snowGrey" },
  { name: "--bgColor-neutralGrey", label: "neutralGrey" },
  { name: "--bgColor-smokeGrey", label: "smokeGrey" },
  { name: "--bgColor-blueGrey", label: "blueGrey" },
  { name: "--bgColor-cloudGrey", label: "cloudGrey" },
];

const fontTokens = [
  { name: "--font-color-heading", label: "heading" },
  { name: "--font-color-primary", label: "primary" },
  { name: "--font-color-secondary", label: "secondary" },
  { name: "--font-color-hint", label: "hint" },
];

const borderTokens = [
  { name: "--border-color-default", label: "default" },
  { name: "--border-color-light", label: "light" },
  { name: "--border-color-primary", label: "primary" },
];

export const Specimen = () => (
  <div style={{ fontFamily: "var(--font-family-default, sans-serif)" }}>
    <p
      style={{
        fontSize: "14px",
        color: "var(--font-color-secondary)",
        marginBottom: "32px",
      }}
    >
      Use the <strong>Contrast</strong> toolbar button to change the color
      contrast mode.
    </p>

    {/* Background Colors */}
    <div style={sectionHeadingStyle}>Background Colors</div>
    <div style={gridStyle}>
      {backgroundTokens.map(({ name, label }) => (
        <div key={name}>
          <div style={{ ...swatchStyle, backgroundColor: `var(${name})` }}>
            Aa
          </div>
          <div style={labelStyle}>{label}</div>
        </div>
      ))}
    </div>

    {/* Font Colors */}
    <div style={sectionHeadingStyle}>Font Colors</div>
    <div style={gridStyle}>
      {fontTokens.map(({ name, label }) => (
        <div key={name}>
          <div
            style={{
              ...swatchStyle,
              backgroundColor: "#FFFFFF",
              color: `var(${name})`,
              fontSize: "16px",
            }}
          >
            The quick brown fox
          </div>
          <div style={labelStyle}>{label}</div>
        </div>
      ))}
    </div>

    {/* Border Colors */}
    <div style={sectionHeadingStyle}>Border Colors</div>
    <div style={gridStyle}>
      {borderTokens.map(({ name, label }) => (
        <div key={name}>
          <div
            style={{
              ...swatchStyle,
              backgroundColor: "#FFFFFF",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: `var(${name})`,
            }}
          >
            border
          </div>
          <div style={labelStyle}>{label}</div>
        </div>
      ))}
    </div>
  </div>
);
Specimen.storyName = "Color Modes";
