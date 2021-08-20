import React from "react";
import PropTypes from "prop-types";

// const StyledCard = styled.div`
//   width: 100%;
//   min-height: 68px;

//   box-shadow: ${(props) =>
//     props.hoverable ? null : "var(--nds-dropshadow-light)"};
//   border-radius: 4px;
//   #{yo}
//   padding: 20px;
//   @media (max-width: ${deviceBreakpoints.mobileMax}) {
//     padding: 0px;
//   }
//   box-sizing: border-box;
//   background-color: var(--nds-white);

//   :last-child {
//     margin-right: 0px;
//   }

//   border: ${(props) =>
//     props.hoverable ? "1px solid var(--nds-grey-disabled)" : null};

//   &:hover {
//     border: ${(props) =>
//       props.hoverable ? "2px solid var(--nds-primary-color)" : null};
//     padding: ${(props) => (props.hoverable ? "19px" : "20px")};
//   }

//   @media (max-width: ${deviceBreakpoints.mobileMax}) {
//     max-width: auto;
//   }
// `;

// const StyledCardBody = styled.div`
//   margin-top: ${(props) => (props.hoverable ? "8px" : "12px")};
// `;

const Card = (props) => {
  return (
    <div className="nds-card nds-typography" style={props.style}>
        <div style={{"display": "flex", alignItems:"center"}}><h4 style={{paddingRight: "9px"}}>{props.title}</h4>{props.icon}</div>
        {props.children ? (
          <div hoverable={props.hoverable}>
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
  hoverable: PropTypes.bool,
};

Card.defaultProps = {
  hoverable: false,
};

export default Card;
