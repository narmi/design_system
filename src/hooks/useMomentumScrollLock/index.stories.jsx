import React, { useState } from "react";
import useMomentumScrollLock from ".";

export const Overview = () => {
  const [isLocked, setIsLocked] = useState(false);
  const actuallyLocked = useMomentumScrollLock(isLocked);

  return (
    <div>
      <p>
        Momentum scroll is locked:{" "}
        <strong>{actuallyLocked ? "Yes" : "No"}</strong>
      </p>
      <p>
        <em>Only locks scroll for touch devices</em>
      </p>
      <button onClick={() => setIsLocked(!isLocked)}>
        {isLocked ? "Unlock" : "Lock"} scroll
      </button>
    </div>
  );
};

export default {
  title: "Hooks/useMomentumScrollLock",
  tags: ["autodocs", "!dev"],
};
