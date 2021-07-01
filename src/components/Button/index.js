import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import {deviceBreakpoints} from "../../globalStyles";

const disabledStyles = css`
  cursor: default;
  background-color: var(--nds-grey-disabled);
  border-color: var(--nds-grey-disabled);
  color: var(--nds-white);
  pointer-events: none;

  &:hover {
    /* explicitly remains same */
    background-color: var(--nds-grey-disabled);
    border-color: var(--nds-grey-disabled);
    color: var(--nds-white);
  }
`;

const secondaryStyles = css`
  background-color: var(--nds-white);
  color: var(--nds-primary-color);

  &:hover {
    background-color: var(--nds-primary-color-lightest);
    color: var(--nds-primary-color);
  }
`;

const secondaryDisabledStyles = css`
  background-color: var(--nds-white);
  color: var(--nds-grey-disabled);

  &:hover {
    /* explicitly remains same */
    background-color: var(--nds-white);
    color: var(--nds-grey-disabled);
  }
`;

const transparentStyles = css`
  background-color: transparent;
  border: none;
  padding-left: 0;
  padding-right: 0;

  &:hover {
    background-color: transparent;
    border: none;
  }
`;

const Styled = styled.a`
  display: inline-block;
  cursor: pointer;
  font-family: var(--nds-font-family);
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0px;
  line-height: 16px;
  text-align: center;
  vertical-align: top;

  background-color: var(--nds-primary-color);
  border-color: var(--nds-primary-color);
  border-width: 1px;
  border-style: solid;
  color: var(--nds-white);
  border-radius: 28px;
  padding: 12px 32px;

  &:hover {
    background-color: var(--nds-primary-color-dark);
    color: var(--nds-white);
  }

  ${(props) => (props.secondary ? secondaryStyles : null)}
  ${(props) => (props.disabled ? disabledStyles : null)}
  ${(props) => (props.transparent ? transparentStyles : null)}

  /* style combos go after for ordering dep reasons*/
  ${(props) =>
    props.secondary && props.disabled ? secondaryDisabledStyles : null}

  // mobile buttons have slightly different padding
  @media ${`(max-width: ${deviceBreakpoints.mobileMax})`} {
    padding: 16px 32px;
  }
`;

const Button = (props) => {
  return <Styled {...props}>{props.label || props.children}</Styled>;
};

Button.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  secondary: PropTypes.bool,
  transparent: PropTypes.bool,
  // either label or children are required
  children: PropTypes.node, // numbers, string, DOM elements, arrays, fragments, ...
};

Button.defaultProps = {
  disabled: false,
  secondary: false,
};

export default Button;
