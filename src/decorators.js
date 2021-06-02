import React from "react";

export const Centered = (Story) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "90%",
      height: "80vh",
    }}
  >
    <Story />
  </div>
);
