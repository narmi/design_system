import React, { useEffect } from "react";
import { COLOR_MODES, CVD_ATTRIBUTE } from "../tokens/constants";

const ndsStyleTag = (
  <style>
    {`
    :root {
      --nds-primary-color: 26, 67, 56;
      --nds-secondary-color: 0, 101, 83;
    };
    `}
  </style>
);

export const NdsStyles = (Story, context) => {
  const contrast = context.globals?.contrast;
  const colorVision = context.globals?.colorVision;

  useEffect(() => {
    const root = document.documentElement;
    const { attribute } = COLOR_MODES.highContrast;

    if (contrast === "more") {
      root.setAttribute(attribute, COLOR_MODES.highContrast.value);
    } else if (contrast === "standard") {
      root.setAttribute(attribute, COLOR_MODES.standardContrast.value);
    } else {
      // "system" (or any unset/legacy value): follow the OS media query.
      root.removeAttribute(attribute);
    }
  }, [contrast]);

  useEffect(() => {
    const root = document.documentElement;
    // All CVD palettes share a single attribute; the global holds the value.
    if (colorVision && colorVision !== "none") {
      root.setAttribute(CVD_ATTRIBUTE, colorVision);
    } else {
      root.removeAttribute(CVD_ATTRIBUTE);
    }
  }, [colorVision]);

  if (context.title?.startsWith("Issue Test Cases/")) {
    return (
      <>
        {ndsStyleTag}
        <Story />
      </>
    );
  }
  return (
    <div style={{ margin: "3em" }}>
      {ndsStyleTag}
      <Story />
    </div>
  );
};

export const ExamplesBackground = (Story, context) => {
  if (!context.title?.startsWith("Examples/")) return <Story />;
  return (
    <div className="bgColor--blueGrey" style={{ padding: "2rem" }}>
      <Story />
    </div>
  );
};
