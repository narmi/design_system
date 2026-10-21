import React, { useRef, useState } from "react";
import { Meta } from "@storybook/react-vite";
import useDismiss, { DismissReason } from ".";
import Button from "../../../Button";

export const Overview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastReason, setLastReason] = useState<DismissReason | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const { backdropProps } = useDismiss({
    isOpen,
    ref,
    onDismiss: (reason) => {
      setLastReason(reason);
      setIsOpen(false);
    },
  });

  return (
    <>
      <Button kind="secondary" onClick={() => setIsOpen(true)}>
        Open layer
      </Button>
      <p className="margin--top--s">
        Last dismissed by: <code>{lastReason ?? "—"}</code>
      </p>
      {isOpen && (
        <div
          {...backdropProps}
          style={{
            position: "fixed",
            inset: 0,
            display: "grid",
            placeItems: "center",
            background: "rgba(0, 0, 0, 0.4)",
          }}
        >
          <div
            role="dialog"
            aria-label="Example layer"
            ref={ref}
            className="bgColor--white padding--all--l rounded--all"
          >
            <p>Press Escape or click the backdrop.</p>
            <Button kind="primary" onClick={() => setIsOpen(false)}>
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

const meta: Meta = {
  title: "Hooks/Interaction/useDismiss", // Show doc page not individual stories
  tags: ["autodocs", "!dev"],
  component: Overview,
};

export default meta;
