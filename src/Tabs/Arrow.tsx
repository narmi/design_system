import cc from "classcat";
import React, { useContext } from "react";
import IconButton from "../IconButton";
import TabsContext from "./context";

interface ArrowProps {
  direction: string;
  onClick?: () => void;
  show?: boolean;
}

const Arrow = ({ direction, onClick, show }: ArrowProps) => {
  const { isResponsive, kind } = useContext(TabsContext);
  const iconName =
    direction === "left"
      ? kind === "segmented"
        ? "chevron-left"
        : "arrow-left"
      : kind === "segmented"
        ? "chevron-right"
        : "arrow-right";

  return (
    isResponsive && (
      <div className="arrow-reponsive">
        <div
          className={cc([
            "nds-tabs-arrow",
            { "nds-tabs-arrow--visible": show },
          ])}
        >
          <IconButton onClick={onClick} name={iconName} kind="action" />
        </div>
      </div>
    )
  );
};

export default Arrow;
