import React from "react";
import cc from "classcat";
import PropTypes from "prop-types";
import Row from "../Row";
import IconButton from "../IconButton";

export interface PageHeaderProps {
  /** Variant of PageHeader */
  kind?: "hero" | "compact";
  /** List of `Button` components to use as header actions */
  actions?: React.ReactElement[];
  /** Strings, links, or elements to render as breadcrumbs */
  breadcrumbs?: React.ReactElement[];
  /** When defined with `backLabel`, the PageHeader renders a back link */
  onBackClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** When defined with `onBackClick`, the PageHeader renders a back link */
  backLabel?: string | React.ReactElement;
  /** NDS `MenuButton` content slot */
  menu?: React.ReactNode;
}

/**
 * Use `PageHeader` as the header of the main content area of a page.
 * The `Pageheader` should extend to either the full width of the viewport, or
 * the full width of the main content area.
 *
 * This component adds a navigation landmark for accessibility via the `header` HTML element.
 *
 * __Optional but recommended for accessibility:__
 * - Make the main content area a `main` HTML element
 * - Make this component a direct child of a `main` HTML element
 */
const PageHeader = ({
  kind = "hero",
  actions = [],
  breadcrumbs = [],
  onBackClick,
  backLabel,
  menu,
}: PageHeaderProps) => {
  const isHero = kind === "hero";

  // Override NDS Button `size` to conform to the PageHeader `kind`
  const actionButtons = actions.map((button) =>
    React.cloneElement(button, {
      ...button.props,
      ...{ size: isHero ? "m" : "s" },
    }),
  );

  return (
    <header
      className={cc([
        "nds-pageHeader",
        `nds-pageHeader--${kind}`,
        {
          "padding--y--s": isHero,
          "padding--y--xs": !isHero,
          /* X padding is different for headers with back buttons */
          "padding--x--xl": !isHero && !backLabel,
          "padding--x--m": !isHero && backLabel,
          "padding--x--xxl": isHero && !backLabel,
          "padding--x--l": isHero && backLabel,
        },
      ])}
    >
      <Row alignItems="center">
        <Row.Item>
          <div
            className={cc([
              {
                "fontFamily--heading": isHero,
                "fontSize--heading1": isHero,
                "fontWeight--bold": isHero,
                "fontSize--s": !isHero,
              },
            ])}
          >
            <Row alignItems="center" allowWrap gapSize="s">
              {onBackClick && backLabel && (
                <>
                  <Row.Item shrink>
                    <div className="nds-pageHeader-backLink">
                      <IconButton
                        label="Back"
                        name="chevron-left"
                        kind={isHero ? "action" : "plain"}
                        textSize={isHero ? "l" : "m"}
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                          onBackClick(e)
                        }
                      />
                    </div>
                  </Row.Item>
                  <Row.Item shrink>{backLabel}</Row.Item>
                </>
              )}
              {breadcrumbs.map((crumb, i) => (
                <>
                  <Row.Item key={`${crumb}-${i}`} shrink>
                    <div className="nds-pageHeader-crumb">{crumb}</div>
                  </Row.Item>
                  {i < breadcrumbs.length - 1 && (
                    <Row.Item shrink>
                      <span
                        role="presentation"
                        className={cc([
                          "nds-pageHeader-separator",
                          "narmi-icon-chevron-right",
                          "fontColor--secondary",
                        ])}
                      />
                    </Row.Item>
                  )}
                </>
              ))}
              {menu && <Row.Item shrink>{menu}</Row.Item>}
            </Row>
          </div>
        </Row.Item>
        {actionButtons.map((button, i) => (
          <Row.Item key={`actionButton-${i}`} shrink>
            {button}
          </Row.Item>
        ))}
      </Row>
    </header>
  );
};
PageHeader.propTypes = {
  /** Variant of PageHeader */
  kind: PropTypes.oneOf(["hero", "compact"]),
  /** List of `Button` components to use as header actions */
  actions: PropTypes.arrayOf(PropTypes.node),
  /** Strings, links, or elements to render as breadcrumbs */
  breadcrumbs: PropTypes.arrayOf(PropTypes.node),
  /** When defined with `backLabel`, the PageHeader renders a back link */
  onBackClick: PropTypes.func,
  /** When defined with `onBackClick`, the PageHeader renders a back link */
  backLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** NDS `MenuButton` content slot */
  menu: PropTypes.node,
};

export default PageHeader;
