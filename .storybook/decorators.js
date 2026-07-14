import React, { useEffect } from "react";
import { COLOR_MODES } from "../tokens/constants";

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

  useEffect(() => {
    if (contrast) {
      document.body.setAttribute(
        COLOR_MODES.highContrast.attribute,
        COLOR_MODES.highContrast.value,
      );
    } else {
      document.body.removeAttribute(COLOR_MODES.highContrast.attribute);
    }
  }, [contrast]);

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
