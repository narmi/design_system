import React, { useState } from "react";
import useProgressiveDropdown from ".";
import Button from "../../Button";

export const Overview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { anchorProps, layerProps } = useProgressiveDropdown({ isOpen });

  return (
    <>
      <Button {...anchorProps} onClick={() => setIsOpen(!isOpen)}>
        Toggle Dropdown
      </Button>

      <div {...layerProps} className="bgColor--white border padding--all--s">
        Dropdown content
      </div>
    </>
  );
};

export default {
  title: "Hooks/useProgressiveDropdown",
  tags: ["autodocs", "!dev"],
};
