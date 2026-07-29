import React from "react";
import cc from "classcat";
import Row from "../Row";
import IconButton from "../IconButton";
import DisabledShim from "../DisabledShim";

const noop = () => {};

export type CollapsibleCardTrigger = "header" | "caret-start" | "caret-end";
export type CollapsibleCardKind = "ai" | "default";
export type CollapsibleCardRadiusSize = "s" | "m" | "l";

export interface CollapsibleCardProps {
  /** Accepts any content as children */
  children: React.ReactNode;
  /** Card title */
  title?: string;
  /** Card subtitle */
  subtitle?: string;
  /** Card status text, placed on the right side of the title container. Can be a JSX fragment. */
  statusText?: React.ReactNode;
  /** Controls whether card is opened */
  isOpen: boolean;
  /** Callback to handle user opening card */
  onOpen?: () => void;
  /** Callback to handle user closing card */
  onClose?: () => void;
  /** Disabled cards are greyed out and do not open */
  isDisabled?: boolean;
  /** Callback to handle user clicking on disabled card */
  onDisabledClick?: () => void;
  /** Displays a red border on the card. Does not interfere with user interactions */
  hasError?: boolean;
  /** Disable hover. Useful for cards that are always open */
  disableHover?: boolean;
  /** Controls which element is used as the open/close trigger */
  trigger?: CollapsibleCardTrigger;
  /**
   * User-defined render prop that returns JSX.
   * Called with `(isOpen)` arg you may use for conditional rendering in your custom title JSX.
   */
  renderTitle?: (isOpen: boolean) => React.ReactNode;
  /**
   * Amount of border radius to add on all sides of card.
   */
  radiusSize?: CollapsibleCardRadiusSize;
  /**
   * Visual variant of the Collapsible card.
   */
  kind?: CollapsibleCardKind;
}

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
  radiusSize = "l",
  kind = "default",
}: CollapsibleCardProps) => {
  const [hover, setHover] = React.useState(false);

  const onTitleContainerClick = (
    disabled = false,
    action?: "open" | "close",
  ) => {
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
        onKeyUp={({ key }: React.KeyboardEvent) => {
          if (key === "Enter") onCaretClick();
        }}
      />
    </div>
  );

  const titleContainerJSX = (
    <div
      className={cc([
        "collapsible-card-titleBar",
        /**
         * Radius is not customizable for "ai" kind, which relies on a fixed
         * radius to mask the gradient.
         */
        `rounded--top--${kind === "ai" ? "m" : radiusSize}`,
      ])}
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
                  "fontSize--xl",
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

  // Common className configuration
  const cardClassName = cc([
    "collapsible-card--content-card",
    `collapisble-card--${kind}`,
    {
      "content-card--hasCaretTrigger": trigger.includes("caret"),
      "content-card--error": hasError,
      "content-card--disabled": isDisabled,
      "content-card--hover": trigger === "header" && !disableHover && hover,
      "collapsible-card--no-user-select": !disableHover || trigger === "header",
      "collapsible-card--customTitle": typeof renderTitle === "function",
    },
    isOpen && !isDisabled ? undefined : "content-card--closed",
    `rounded--all--${radiusSize}`,
    "bgColor--white",
  ]);

  const headerTriggerProps: React.HTMLAttributes<HTMLDivElement> =
    trigger === "header"
      ? {
          role: "button",
          tabIndex: 0,
          onKeyUp: ({ key }) => {
            if (key === "Enter") {
              const action = isOpen && !isDisabled ? "close" : "open";
              const disabled = action === "open" ? isDisabled : false;
              onTitleContainerClick(disabled, action);
            }
          },
          onClick: () => {
            const action = isOpen && !isDisabled ? "close" : "open";
            const disabled = action === "open" ? isDisabled : false;
            onTitleContainerClick(disabled, action);
          },
        }
      : {};

  return (
    <div className={cardClassName}>
      {isOpen && !isDisabled ? (
        <>
          <div
            className={`collapsible-card--title-expanded rounded--top--${radiusSize}`}
            aria-expanded="true"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            {...headerTriggerProps}
          >
            {titleContainerJSX}
          </div>
          <div className="padding--all--l">{children}</div>
        </>
      ) : (
        <div aria-expanded="false" {...headerTriggerProps}>
          {titleContainerJSX}
        </div>
      )}
    </div>
  );
};

export default CollapsibleCard;
