import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import IconButton from "../IconButton";
import { CSSTransition } from "react-transition-group";
import cc from "classcat";

const Arrow = ({ direction, onClick, show }) => {
  const arrowRef = useRef();

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
};

Arrow.displayName = "Arrow";

export default Arrow;
