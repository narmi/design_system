import React from "react";
import PropTypes, { bool } from "prop-types";
import styled, { css } from "styled-components";

const StyledCard = styled.div`
  box-shadow: var(--nds-dropshadow-dark);
  border-radius: 4px;
  shadow: Blur 12 px;
  padding: 20px;
`;

const StyledDiv = styled.div`
  margin-top: 20px;
`;

const Card = (props) => {
  return (
    <StyledCard {...props}>
      <div>{props.title}</div>
      <StyledDiv>{props.children}</StyledDiv>
    </StyledCard>
  );
};

Card.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node, // numbers, string, DOM elements, arrays, fragments, ...
};

export default Card;
