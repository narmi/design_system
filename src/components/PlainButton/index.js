import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const smallStyles = css`
  font-size: 14px;
`;

export const StyledPlainButton = styled.a`
  font-family: var(--nds-font-family);
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0px;
  line-height: 22px;
  text-align: left;
  vertical-align: middle;

  cursor: pointer;

  color: var(--nds-secondary-color);
  border-color: var(--nds-secondary-color);
  border-width: 0;
  border-radius: 0;
  padding: 0;

  &:hover {
    // fully specify a base style that can be overridden
    color: var(--nds-secondary-color);
    border-color: var(--nds-secondary-color);

    text-decoration: underline;
    -webkit-text-underline-position: under;
    -ms-text-underline-position: below;
    text-underline-position: under;
    text-decoration-thickness: 1px;
  }

  ${(props) => (props.small ? smallStyles : null)}
`;

const PlainButton = (props) => {
  return (
    <StyledPlainButton {...props}>
      {props.label || props.children}
    </StyledPlainButton>
  );
};

PlainButton.propTypes = {
  label: PropTypes.string,
  small: PropTypes.bool,
  // either label or children are required
  children: PropTypes.node, // numbers, string, DOM elements, arrays, fragments, ...
};

PlainButton.defaultProps = {
  small: false,
};

export default PlainButton;
