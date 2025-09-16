import React from "react";
import useSupportsTouchScroll from ".";

export const Overview = () => {
  const supportsTouchScroll = useSupportsTouchScroll();

  return (
    <div>
      Supports touch scrolling:{" "}
      <strong>{supportsTouchScroll ? "Yes" : "No"}</strong>
    </div>
  );
};

export default {
  title: "Hooks/useSupportsTouchScroll",
  tags: ["autodocs", "!dev"],
};
