import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Typography from "components/Typography";
import {deviceBreakpoints} from "../../globalStyles";

const StyledCard = styled.div`
  box-shadow: var(--nds-dropshadow-dark);
  border-radius: 4px;
  padding: 20px;
  margin-right 20px;
  width: 100%;
  max-width: 372px;
  min-height: 68px;
  box-sizing: border-box;

  :last-child {
    margin-right: 0px;
  }

  @media (max-width: ${deviceBreakpoints.mobileMax}) {
    max-width: auto;
  }
`;

const StyledCardBody = styled.div`
  margin-top: 20px;
`;

const Card = (props) => {
  return (
    <StyledCard {...props}>
      <Typography>{props.title}</Typography>
      {props.children ? <StyledCardBody>{props.children}</StyledCardBody> : ""}
    </StyledCard>
  );
};

Card.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
};

export default Card;
