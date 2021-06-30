import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Typography from "components/Typography";
import { deviceBreakpoints } from "../../globalStyles";

const StyledCard = styled.div`
  width: 100%;
  min-height: 68px;

  box-shadow: var(--nds-dropshadow-light);
  border-radius: 4px;
  padding: 20px;
  box-sizing: border-box;
  background-color: var(--nds-white);

  :last-child {
    margin-right: 0px;
  }

  &:hover {
    border: ${props=> props.hoverable ? "2px solid var(--nds-primary-color)" : null};
    padding: ${props=> props.hoverable ? "18px" : "20px" };
  }

  @media (max-width: ${deviceBreakpoints.mobileMax}) {
    max-width: auto;
  }
`;

const StyledCardBody = styled.div`
  margin-top: 12px;
`;

const Card = (props) => {
  return (
    <StyledCard {...props}>
      <Typography h3>{props.title}</Typography>
      {props.children ? (
        <StyledCardBody>
          <Typography>{props.children}</Typography>
        </StyledCardBody>
      ) : (
        ""
      )}
    </StyledCard>
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
