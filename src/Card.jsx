import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  const icon = props.icon ? <span className={`narmi-icon-${props.icon}`}>&nbsp;</span> : "";
  return (
    <div className="nds-card nds-typography" hoverable={props.hoverable}>
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
  hoverable: PropTypes.strin,
};

Card.defaultProps = {
  hoverable: false,
};

export default Card;
