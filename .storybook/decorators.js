import React from "react";

export const NdsStyles = (Story) => (
  <div style={{ margin: "3em" }}>
    <style>
      {`
      :root {
        --nds-primary-color: 26, 67, 56;
        --nds-secondary-color: 0, 101, 83;
        };
      `}
    </style>
    <Story />
  </div>
);
