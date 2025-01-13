import React, { useContext, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import IconButton from "../IconButton";
import TabsContext from "./context";

interface ArrowProps {
  direction: string;
  onClick?: () => void;
  show?: boolean;
}

const Arrow = ({ direction, onClick, show }: ArrowProps) => {
  const { isResponsive } = useContext(TabsContext);
  const arrowRef = useRef();

  return (
    isResponsive && (
      <div className="arrow-reponsive">
        <CSSTransition
          nodeRef={arrowRef}
          in={show}
          timeout={300}
          unmountOnExit
          classNames="nds-tabs-arrow"
        >
          <div ref={arrowRef} className="nds-tabs-arrow">
            <IconButton
              onClick={onClick}
              name={direction === "left" ? "arrow-left" : "arrow-right"}
              kind="action"
            />
          </div>
        </CSSTransition>
      </div>
    )
  );
};

export default Arrow;
