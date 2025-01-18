import React, { useState } from "react";
import useLockBodyScroll from ".";
import Button from "../../Button";

export const Overview = () => {
  const [isLocked, setIsLocked] = useState(false);
  useLockBodyScroll(isLocked);

  return (
    <>
      <Button
        kind={"secondary"}
        onClick={() => {
          setIsLocked(!isLocked);
        }}
      >
        Click to {isLocked ? "En" : "Dis"}able Scrolling
      </Button>
    </>
  );
};

export default {
  title: "Hooks/useLockBodyScroll", // Show doc page not individual stories
  tags: ["autodocs", "!dev"],
};
