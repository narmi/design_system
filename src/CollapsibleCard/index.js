import React from "react";
import PropTypes from "prop-types";
import cc from "classcat";

const CollapsibleCard = ({
  title,
  subtitle,
  statusText,
  isOpen,
  onOpen = () => {},
  onClose = () => {},
  isDisabled = false,
  onDisabledClick = () => {},
  hasError = false,
  disableHover = false,
  children,
}) => {
  const [hover, setHover] = React.useState(false);

  const onTitleContainerClick = (disabled = false, action) => {
    if (disabled) {
      onDisabledClick();
      return;
    } else if (action === "open") {
      onOpen();
      // When clicking to open mouse will always be on the title container, so setHover to true
      setHover(true);
    } else if (action === "close") {
      onClose();
      // When closing, let the css set the hover state
      setHover(false);
    }
  };

  const titleContainerJSX = (
    <div className="collapsible-card--title-container">
      <div>
        <h4
          className={cc([
            !isDisabled ? "title" : "title--disabled",
            "fontWeight--bold",
            "fontSize--l",
            "padding--top--l",
            "padding--left--l",
            "fontFamily--body",
          ])}
        >
          {title}
        </h4>
        <div
          className={cc([
            !isDisabled ? "subtitle" : "subtitle--disabled",
            "padding--left--l",
            "padding--bottom--l",
            "margin--top--xxs",
          ])}
        >
          {subtitle}
        </div>
      </div>
      {statusText && (
        <div style={{ display: "flex" }}>
          <div
            className="collapsible-card--statusText padding--right--l fontSize--s"
            style={{ alignSelf: "center" }}
          >
            {statusText}
          </div>
        </div>
      )}
    </div>
  );

  return isOpen && !isDisabled ? (
    <div
      className={cc([
        "collapsible-card--content-card",
        {
          "content-card--error": hasError,
          "content-card--hover": !disableHover && hover,
          "collapsible-card--no-user-select": !disableHover,
        },
        "rounded--bottom",
        "bgColor--white",
      ])}
    >
      <div
        className="collapsible-card--title-expanded"
        role="button"
        tabIndex={0}
        onKeyUp={({ key }) => {
          if (key === "Enter") onTitleContainerClick(false, "close");
        }}
        aria-expanded="true"
        onClick={() => onTitleContainerClick(false, "close")}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {titleContainerJSX}
      </div>
      <div className="padding--all--l">{children}</div>
    </div>
  ) : (
    <div
      className={cc([
        "collapsible-card--content-card",
        {
          "content-card--error": hasError,
          "content-card--disabled": isDisabled,
          "content-card--hover": !disableHover && hover,
          "collapsible-card--no-user-select": !disableHover,
        },
        "content-card--closed",
        "rounded--all",
        "bgColor--white",
      ])}
      role="button"
      tabIndex={0}
      onKeyUp={({ key }) => {
        if (key === "Enter") onTitleContainerClick(isDisabled, "open");
      }}
      aria-expanded="false"
      aria-disabled={isDisabled ? "true" : "false"}
      onClick={() => onTitleContainerClick(isDisabled, "open")}
    >
      {titleContainerJSX}
    </div>
  );
};

CollapsibleCard.propTypes = {
  /** Accepts any content as children */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  /** Card title */
  title: PropTypes.string.isRequired,
  /** Card subtitle */
  subtitle: PropTypes.string,
  /** Card status text, placed on the right side of the title container. Can be a JSX fragment. */
  statusText: PropTypes.node,
  /** Controls whether card is opened */
  isOpen: PropTypes.bool.isRequired,
  /** Callback to handle user opening card */
  onOpen: PropTypes.func,
  /** Callback to handle user closing card */
  onClose: PropTypes.func,
  /** Disabled cards are greyed out and do not open */
  isDisabled: PropTypes.bool,
  /** Callback to handle user clickling on disabled card */
  onDisabledClick: PropTypes.func,
  /** Displays a red border on the card. Does not interfere with user interactions */
  hasError: PropTypes.bool,
  /** Disable hover. Useful for cards that are always open */
  disableHover: PropTypes.bool,
};

export default CollapsibleCard;
