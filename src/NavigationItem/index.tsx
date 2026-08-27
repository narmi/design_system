import React, { useContext, type ReactNode, type ElementType } from "react";
import { getSafeHref } from "../util/AsElement";
import { NavigationSelectionContext } from "../Navigation/context";

export interface NavigationItemProps {
  /**
   * Called when the item is clicked. Fires in addition to a parent
   * `Navigation`'s `onSelect` when selection is coordinated.
   */
  onClick?: React.MouseEventHandler<HTMLElement>;
  /**
   * Marks this item as the current page. Maps directly to
   * `aria-current="page"` on the control, which also drives the selected
   * visual (stripe + row background) in CSS so the two cannot drift apart.
   *
   * When this item is inside a `Navigation`, selection is coordinated by the
   * parent and derived from `itemId`; `isSelected` is the fallback for
   * standalone (unmanaged) use.
   */
  isSelected?: boolean;
  /**
   * Stable identity for coordinated selection. When the parent `Navigation`'s
   * resolved selection matches this `itemId`, the item renders as selected, and
   * clicking it reports this `itemId` to the parent's `onSelect`.
   */
  itemId?: string;
  /**
   * The element or component to render as the control. Defaults to `"a"` when
   * `href` is set, otherwise `"button"`. Pass a router link component (e.g.
   * `as={Link}`) and its props (e.g. `to`) to integrate with client routing.
   */
  as?: ElementType;
  /**
   * When set, the control renders as an anchor (unless `as` overrides it). The
   * href is sanitized against unsafe protocols.
   */
  href?: string;
  /** The control's primary text (its accessible label). */
  label: string;
  /** Optional secondary text rendered beneath the label. */
  detail?: string;
  /** Optional decorative content rendered before the control (e.g. an icon). */
  startContent?: ReactNode;
  /**
   * Optional content rendered after the control as a grid sibling (e.g. a
   * "more" action). Because it is a sibling of the control, not a child, it does
   * not create invalid nested interactive elements.
   */
  endContent?: ReactNode;
  /** Optional value for `data-testid` attribute */
  testId?: string;
  /**
   * Additional props are spread onto the control (e.g. `id`, `aria-*`, or a
   * router link's `to`).
   */
  [key: string]: unknown;
}

/**
 * A single sidebar navigation control.
 *
 * **Wrap in a `<nav>` element or the `Navigation` component for accessibility.**
 * This ensures your set of navigation items becomes a single navigation landmark.
 *
 * Renders a decorative grid wrapper `[stripe][startContent][control][endContent]`.
 * The control is the only interactive element. By default it is a
 * `<button type="button">`; set `href` (or `as`) to render an `<a>` or a custom
 * link component for real navigation.
 *
 * ## Selection
 * Give the item an `itemId` and let a parent `Navigation` coordinate selection.
 * For standalone use, set `isSelected` to mark the selected item.
 */
export const NavigationItem = ({
  isSelected,
  itemId,
  as,
  href,
  label,
  detail,
  startContent,
  endContent,
  testId,
  onClick,
  ...rest
}: NavigationItemProps) => {
  const { selectedId, onSelect, isManaged } = useContext(
    NavigationSelectionContext,
  );

  // Managed selection wins whenever an item sits inside a `Navigation`;
  // otherwise fall back to the standalone `isSelected` prop.
  const resolvedIsSelected = isManaged
    ? itemId !== undefined && selectedId === itemId
    : isSelected;

  const handleClick: React.MouseEventHandler<HTMLElement> = (event) => {
    onClick?.(event);
    if (itemId !== undefined) onSelect?.(itemId);
  };

  const Control = (as ?? (href != null ? "a" : "button")) as ElementType;

  const controlProps: Record<string, unknown> = {
    ...rest,
    className: "nds-navigationItem-control button--reset",
    "aria-current": resolvedIsSelected ? "page" : undefined,
    onClick: handleClick,
  };

  if (Control === "button") controlProps.type = "button";
  if (href != null) controlProps.href = getSafeHref(href);

  return (
    <div className="nds-navigationItem" data-testid={testId}>
      {startContent && (
        <span className="nds-navigationItem-start">{startContent}</span>
      )}
      <Control {...controlProps}>
        <span className="nds-navigationItem-label">{label}</span>
        {detail != null && (
          <span className="nds-navigationItem-detail fontSize--s">
            {detail}
          </span>
        )}
      </Control>
      {endContent && (
        <span className="nds-navigationItem-end">{endContent}</span>
      )}
    </div>
  );
};

export default NavigationItem;
