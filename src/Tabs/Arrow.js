import PropTypes from "prop-types";
import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import IconButton from "../IconButton";

const Arrow = ({ direction, onClick, show, isResponsive }) => {
  const arrowRef = useRef();

  if (isResponsive === true) {
    return (
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
    );
  }
  return (
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
  );
};

Arrow.propTypes = {
  /** Direction of the arrow button */
  direction: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  show: PropTypes.bool,
  isResponsive: PropTypes.bool,
};

Arrow.displayName = "Arrow";

export default Arrow;
