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

export const Top = (Story) => (
  <div
    style={{
      display: "flex",
      position: "absolute",
      justifyContent: "top",
      alignItems: "top",
      width: "100%",
      top: "0",
      left: "0",
      height: "100%",
    }}
  >
    <Story />
  </div>
);

export const Right = (Story) => (
  <div
    style={{
      display: "flex",
      position: "absolute",
      justifyContent: "flex-end",
      alignItems: "top",
      width: "100%",
      top: "0",
      right: "0",
    }}
  >
    <Story />
  </div>
);