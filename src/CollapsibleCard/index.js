import React from "react";
import PropTypes from "prop-types";
import cc from "classcat";
import Row from "../Row";
import IconButton from "../IconButton";

const CollapsibleCard = ({
  title,
  subtitle,
  statusText,
  isOpen,
  trigger = "header",
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

  const onCaretClick = () => {
    setHover(false);
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  };

  const caretTriggerJsx = (
    <div
      className={cc([
        "collapsible-card-trigger",
        "alignChild--center--center",
        {
          "padding--left": trigger == "caret-start",
          "padding--right--l": trigger == "caret-end",
        },
      ])}
    >
      <IconButton
        kind="action"
        label={isOpen ? "Close" : "Open"}
        onClick={onCaretClick}
        name={`chevron-${isOpen ? "up" : "down"}`}
        textSize="l"
        onKeyUp={({ key }) => {
          if (key === "Enter") onCaretClick();
        }}
      />
    </div>
  );

  const titleContainerJSX = (
    <div className="collapsible-card--title-container">
      <Row alignItems="center" gapSize="s">
        {trigger === "caret-start" && (
          <Row.Item shrink>{caretTriggerJsx}</Row.Item>
        )}
        <Row.Item>
          <h4
            className={cc([
              !isDisabled ? "title" : "title--disabled",
              "fontWeight--bold",
              "fontSize--l",
              "padding--top--l",
              "fontFamily--body",
              {
                "padding--left--l": trigger !== "caret-start",
              },
            ])}
          >
            {title}
          </h4>
          <div
            className={cc([
              !isDisabled ? "subtitle" : "subtitle--disabled",
              "padding--bottom--l",
              "margin--top--xxs",
              {
                "padding--left--l": trigger !== "caret-start",
              },
            ])}
          >
            {subtitle}
          </div>
        </Row.Item>
        {trigger === "caret-end" && (
          <Row.Item shrink>{caretTriggerJsx}</Row.Item>
        )}
        {statusText && (
          <Row.Item shrink>
            <div className="collapsible-card--statusText padding--right--l fontSize--s alignChild--right--center">
              <span>{statusText}</span>
            </div>
          </Row.Item>
        )}
      </Row>
    </div>
  );

  return isOpen && !isDisabled ? (
    <div
      className={cc([
        "collapsible-card--content-card",
        {
          "content-card--hasCaretTrigger": trigger.includes("caret"),
          "content-card--error": hasError,
          "content-card--hover": trigger === "header" && !disableHover && hover,
          "collapsible-card--no-user-select":
            !disableHover || trigger === "header",
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
          if (key === "Enter" && trigger === "header")
            onTitleContainerClick(false, "close");
        }}
        aria-expanded="true"
        onClick={() => {
          if (trigger === "header") {
            onTitleContainerClick(false, "close");
          }
        }}
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
          "content-card--hasCaretTrigger": trigger.includes("caret"),
          "content-card--error": hasError,
          "content-card--disabled": isDisabled,
          "content-card--hover": trigger === "header" && !disableHover && hover,
          "collapsible-card--no-user-select":
            !disableHover || trigger === "header",
        },
        "content-card--closed",
        "rounded--all",
        "bgColor--white",
      ])}
      role={trigger === "header" ? "button" : undefined}
      tabIndex={trigger === "header" ? 0 : undefined}
      onKeyUp={({ key }) => {
        if (key === "Enter" && trigger === "header")
          onTitleContainerClick(isDisabled, "open");
      }}
      aria-expanded="false"
      aria-disabled={isDisabled ? "true" : "false"}
      onClick={() => {
        if (trigger === "header") {
          onTitleContainerClick(isDisabled, "open");
        }
      }}
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
  /** Controls which element is used as the open/close trigger */
  trigger: PropTypes.oneOf(["header", "caret-start", "caret-end"]),
};

export default CollapsibleCard;
