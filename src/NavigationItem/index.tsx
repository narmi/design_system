import React, {
  forwardRef,
  type ReactNode,
  type Ref,
  type ButtonHTMLAttributes,
} from "react";

interface BaseProps {
  /**
   * Called when the item is clicked.
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * Marks this item as the current page. Maps directly to
   * `aria-current="page"` on the control, which also drives the selected
   * visual (stripe + row background) in CSS so the two cannot drift apart.
   *
   * Selection is per-item; v1 does not coordinate single-selection. A future
   * selection manager is the additive, non-breaking follow-up for that.
   */
  isSelected?: boolean;
  /** Content of the control (its accessible label). */
  children?: ReactNode;
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
}

export type NavigationItemProps = BaseProps &
  Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "className" | "type" | "onClick"
  >;

/**
 * A single sidebar navigation control.
 *
 * Renders a decorative grid wrapper `[stripe][startContent][control][endContent]`.
 * The control is the only interactive element, and it is always a
 * `<button type="button">` for predictable behavior and simpler semantics.
 *
 * Native `onClick`, `aria-*`, and `data-*` props pass through the button.
 * The forwarded ref targets the control.
 */
export const NavigationItem = forwardRef<
  HTMLButtonElement,
  NavigationItemProps
>(
  (
    {
      isSelected,
      children,
      startContent,
      endContent,
      testId,
      onClick,
      ...rest
    },
    ref,
  ) => {
    return (
      <div className="nds-navigationItem" data-testid={testId}>
        {startContent && (
          <span className="nds-navigationItem-start">{startContent}</span>
        )}
        <button
          ref={ref as Ref<HTMLButtonElement>}
          type="button"
          className="nds-navigationItem-control button--reset"
          aria-current={isSelected ? "page" : undefined}
          onClick={onClick}
          {...rest}
        >
          {children}
        </button>
        {endContent && (
          <span className="nds-navigationItem-end">{endContent}</span>
        )}
      </div>
    );
  },
);

NavigationItem.displayName = "NavigationItem";

export default NavigationItem;
