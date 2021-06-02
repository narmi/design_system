import React from "react";
import PropTypes, { bool } from "prop-types";
import styled, { css } from "styled-components";

const TypographyStyle = styled.span`
  font-family: var(--nds-font-family) 
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  align-items: center;
  position: relative;
  color: #4C4C4C;
  font-weight: 600;
  :hover {
    color: ${(props) => (props.hover ? "var(--nds-primary-color)" : "none")}; 
  }
`;

const Typography = (props) => {
    return (
      <TypographyStyle {...props}> {props.text} </TypographyStyle>
    );
  };


Typography.propTypes = {
    text: PropTypes.string,
    hover: PropTypes.bool, 
  };
  
  Typography.defaultProps = {
    text : "",
    hover: false,
  };
  
  export default Typography;