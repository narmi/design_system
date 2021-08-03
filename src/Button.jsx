import React from "react";
import PropTypes from "prop-types";
import { deviceBreakpoints } from "global";

const Button = (props) => {
  const [disabled, setDisabled] = React.useState(false);
  if (props.onMount !== undefined) {
    React.useEffect(() => {
      props.onMount([disabled, setDisabled]);
    }, [props.onMount, disabled]);
  }

  const className = `nds-button ${props.type}${disabled ? " disabled" : ""}`;
  return (
    <a className={className} {...props}>
      <div className="nds-button-content">{props.children}</div>
    </a>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
  type: "primary",
};

Button.styles = `
  .nds-button {
    display: inline-block;
    position: relative;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
    text-align: center;
    padding: 16px 32px;
    color: #fff;
  }
  .nds-button::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgb(var(--nds-primary-color));
    border-radius: 20px;
  }
  .nds-button .nds-button-content {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;
  }

  .nds-button:not(.menu):hover::before {
    filter: brightness(80%);
  }
  .nds-button:not(.menu):hover .nds-button-content {
  }

  /* menu button styles */
  .nds-button.menu {
    text-align: left;
    color: rgb(var(--nds-text-header));
    padding: 10px 0;
  }
  .nds-button.menu::before {
    display: none;
  }

  /* plain button styles */
  .nds-button.plain {
    color: rgb(var(--nds-text-header));
  }
  .nds-button.plain::before {
    display: none;
  }
  .nds-button.plain:hover {
    text-decoration: underline;
  }

  /* put disabled styles below type styles */
  .nds-button.disabled {
    pointer-events: none;
  }
  .nds-button.disabled::before {
    background-color: rgb(var(--nds-disabled));
  }

  /* mobile buttons have slightly different padding? */
  @media ${`(min-width: ${deviceBreakpoints.mobile})`} {
    .nds-button {
      padding: 12px 32px;
    }

    .nds-button.menu {
      margin: 0 12px;
    }
  }
`;

export default Button;
