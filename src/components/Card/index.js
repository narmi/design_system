import React from "react";
import PropTypes, { bool } from "prop-types";
import styled, { css } from "styled-components";


const StyledCard = styled.div`
  background-color: black;
  border-radius: 4px;
  shadow: Blur 12 px;
`;

const StyledDiv = styled.div`
  box-shadow: 0px 2px 12px 0px #5050500D;
  background-color: white;
  border-radius: 4px;
  shadow: Blur 12 px;
`;

const Card = (props) => {
  return (
    <StyledCard>
      <StyledDiv>
          <p>yoyoyy</p>
      </StyledDiv>
    </StyledCard>
  );
};

Card.propTypes = {
  primaryLabel: PropTypes.string,
  secondaryLabel: PropTypes.string,
  // either label or children are required
  children: PropTypes.node, // numbers, string, DOM elements, arrays, fragments, ...
};

export default Card;
