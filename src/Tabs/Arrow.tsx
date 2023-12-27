import PropTypes from "prop-types";
import React, { useContext, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import IconButton from "../IconButton";
import TabsContext from "./context";

interface ArrowProps {
  /** Direction of the arrow button */
  direction: "left" | "right";
  onClick?: React.EventHandler<React.SyntheticEvent>;
  show?: boolean;
  isResponsive?: boolean;
}

const Arrow: React.FC<ArrowProps> = ({ direction, onClick, show }) => {
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

Arrow.propTypes = {
  /** Direction of the arrow button */
  // @ts-expect-error inferred type is "string"
  direction: PropTypes.oneOf(["left", "right"]).isRequired,
  onClick: PropTypes.func,
  show: PropTypes.bool,
  isResponsive: PropTypes.bool,
};

Arrow.displayName = "Arrow";

export default Arrow;
