import React from "react";
import PropTypes from "prop-types";
import cc from "classcat";
import Row from "../Row";
import IconButton from "../IconButton";
import DisabledShim from "../DisabledShim";

const noop = () => {};

const CollapsibleCard = ({
  title,
  subtitle,
  statusText,
  isOpen,
  trigger = "header",
  onOpen = noop,
  onClose = noop,
  isDisabled = false,
  onDisabledClick = noop,
  renderTitle,
  hasError = false,
  disableHover = false,
  children,
  radiusSize = "m",
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
    <div
      className={`collapsible-card--title-container rounded--top--${radiusSize}`}
    >
      <DisabledShim isDisabled={isDisabled}>
        {typeof renderTitle === "function" ? (
          renderTitle(isOpen)
        ) : (
          <Row alignItems="center" gapSize="s">
            {trigger === "caret-start" && (
              <Row.Item shrink>{caretTriggerJsx}</Row.Item>
            )}
            <Row.Item>
              <h4
                className={cc([
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
        )}
      </DisabledShim>
    </div>
  );

  return isOpen && !isDisabled ? (
    <div
      className={cc([
        "collapsible-card--content-card",
        {
          "content-card--disabled": isDisabled,
          "content-card--hasCaretTrigger": trigger.includes("caret"),
          "content-card--error": hasError,
          "content-card--hover": trigger === "header" && !disableHover && hover,
          "collapsible-card--no-user-select":
            !disableHover || trigger === "header",
        },
        `rounded--all--${radiusSize}`,
        "bgColor--white",
      ])}
    >
      <div
        className={`collapsible-card--title-expanded rounded--top--${radiusSize}`}
        role={trigger === "header" ? "button" : undefined}
        tabIndex={trigger === "header" ? 0 : undefined}
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
        `rounded--all--${radiusSize}`,
        "bgColor--white",
      ])}
      role={trigger === "header" ? "button" : undefined}
      tabIndex={trigger === "header" ? 0 : undefined}
      onKeyUp={({ key }) => {
        if (key === "Enter" && trigger === "header")
          onTitleContainerClick(isDisabled, "open");
      }}
      aria-expanded="false"
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
  title: PropTypes.string,
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
  /** Callback to handle user clicking on disabled card */
  onDisabledClick: PropTypes.func,
  /** Displays a red border on the card. Does not interfere with user interactions */
  hasError: PropTypes.bool,
  /** Disable hover. Useful for cards that are always open */
  disableHover: PropTypes.bool,
  /** Controls which element is used as the open/close trigger */
  trigger: PropTypes.oneOf(["header", "caret-start", "caret-end"]),
  /**
   * User-defined render prop that returns JSX.
   * Called with `(isOpen)` arg you may use for conditional rendering in your custom title JSX.
   */
  renderTitle: PropTypes.func,
  /**
   * Amount of border radius to add on all sides of card.
   */
  radiusSize: PropTypes.oneOf(["s", "m", "l"]),
};

export default CollapsibleCard;
