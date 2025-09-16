import React from "react";
import useSupportsMomentumScroll from ".";

export const Overview = () => {
  const supportsMomentumScroll = useSupportsMomentumScroll();

  return (
    <div>
      Supports momentum scrolling:{" "}
      <strong>{supportsMomentumScroll ? "Yes" : "No"}</strong>
    </div>
  );
};

export default {
  title: "Hooks/useSupportsMomentumScroll",
  tags: ["autodocs", "!dev"],
};
