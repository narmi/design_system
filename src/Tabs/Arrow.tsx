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
  const { isResponsive } = useContext(TabsContext);

  return (
    isResponsive && (
      <div className="arrow-reponsive">
        <div
          className={cc([
            "nds-tabs-arrow",
            { "nds-tabs-arrow--visible": show },
          ])}
        >
          <IconButton
            onClick={onClick}
            name={direction === "left" ? "arrow-left" : "arrow-right"}
            kind="action"
          />
        </div>
      </div>
    )
  );
};

export default Arrow;
