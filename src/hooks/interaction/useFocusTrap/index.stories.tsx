import React, { useRef, useState } from "react";
import { Meta } from "@storybook/react-vite";
import useFocusTrap from ".";
import Button from "../../../Button";
import TextInput from "../../../TextInput";

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

export const Overview = () => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { trapProps } = useFocusTrap({ ref, isActive });

  return (
    <>
      <Button kind="secondary" onClick={() => setIsActive(!isActive)}>
        {isActive ? "Release" : "Trap"} focus
      </Button>
      <div
        role="group"
        aria-label="Focus trap example"
        ref={ref}
        {...trapProps}
        className="margin--top--s padding--all--l rounded--all"
        style={{
          border: `2px solid ${isActive ? "var(--theme-primary)" : "var(--border-color-default)"}`,
        }}
      >
        <p className="margin--bottom--s">
          While trapped, Tab and Shift+Tab cycle through these fields.
        </p>
        <TextInput label="First" />
        <TextInput label="Second" />
        <Button kind="primary" onClick={() => setIsActive(false)}>
          Done
        </Button>
      </div>
      <Button kind="plain">A button outside the trap</Button>
    </>
  );
};

const meta: Meta = {
  title: "Hooks/Interaction/useFocusTrap", // Show doc page not individual stories
  tags: ["autodocs", "!dev"],
  component: Overview,
};

export default meta;
