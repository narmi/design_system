import React from "react";
import PropTypes from "prop-types";

/**
 * Optionally clickable outlined content card
 */
const Card = (props) => {
  const icon = props.icon ? (
    <span className={`narmi-icon-${props.icon}`}>&nbsp;</span>
  ) : (
    ""
  );
  return (
    <div
      className={`nds-card nds-typography ${props.classes}`}
      data-hoverable={props.hoverable.toString()}
      data-selected={props.selected.toString()}
      {...props}
    >
      {props.iconSize ? (
        <div className="nds-card-heading" style={{ alignItems: "center", justifyContent: "start"}}>
          <h4 className="nds-sans nds-card-title">
            {props.title}&nbsp;
          </h4>
          <h4 className="nds-sans nds-card-title" style={{ fontSize: `${props.iconSize}px` }}>{icon}</h4>
          {props.button ? props.button : ""}
        </div>
        ) : (
        <div className="nds-card-heading">
          <h4 className="nds-sans nds-card-title">
            {props.title}&nbsp;{icon}
          </h4>
          {props.button ? props.button : ""}
        </div>
        )}
      {props.children ? (
        <div className="nds-card-content">{props.children}</div>
      ) : (
        ""
      )}
    </div>
  );
};

Card.propTypes = {
  /** JSX to render in the title */
  title: PropTypes.node,
  /** JSX to render in content area */
  children: PropTypes.node.isRequired,
  /** JSX to render in the top right of the card */
  button: PropTypes.node,
  /** `narmi-icon` name */
  icon: PropTypes.string,
  /** `narmi-icon` size in px */
  iconSize: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
  /** When true, the Card will change style on hover */
  hoverable: PropTypes.bool,
  /** When true, the Card will change style to appear selected */
  selected: PropTypes.bool,
  /** classes to add to the `className` string of the root Card element */
  classes: PropTypes.string,
};

Card.defaultProps = {
  hoverable: false,
  selected: false,
  icon: "",
  classes: "",
};

export default Card;
