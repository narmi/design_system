import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  const icon = props.icon ? <span className={`narmi-icon-${props.icon}`}>&nbsp;</span> : "";
  return (
    <div className={`nds-card nds-typography ${props.classes}`}
         data-hoverable={props.hoverable.toString()}
         data-selected={props.selected.toString()}
         {...props}
    >
        <h4 className="nds-sans nds-card-title">{props.title}&nbsp;{icon}</h4>
        {props.children ? (
          <div className="nds-card-content">
            {props.children}
          </div>
        ) : (
          ""
        )}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
  icon: PropTypes.string,
  hoverable: PropTypes.bool,
  selected: PropTypes.bool,
  classes: PropTypes.string
};

Card.defaultProps = {
  hoverable: false,
  selected: false,
  icon: "",
  classes: ""
};

export default Card;
