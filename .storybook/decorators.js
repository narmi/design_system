import React from "react";

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
