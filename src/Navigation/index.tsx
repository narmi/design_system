import React, { forwardRef, type ReactNode, type HTMLAttributes } from "react";

export interface NavigationProps extends Omit<
  HTMLAttributes<HTMLElement>,
  "aria-label" | "className"
> {
  /**
   * Accessible name for the `nav` landmark; applied as `aria-label`.
   *
   * A sidebar usually has multiple `nav` landmarks; the label is what
   * distinguishes them for assistive technology.
   */
  label: string;
  /** `NavigationItem` children (or any content). */
  children?: ReactNode;
  /** Optional value for `data-testid` attribute */
  testId?: string;
}

/**
 * Sidebar navigation container. Renders a `nav` landmark whose accessible name
 * comes from `label`.
 *
 * There is intentionally **no `ul`/`li`**: the `nav` landmark already groups its
 * contents for assistive technology, and omitting the list wrapper lets a
 * `NavigationItem` be valid anywhere (directly here, or nested inside other
 * components) without smuggling list semantics through.
 *
 * Additional props are spread onto the `nav` element.
 */
const Navigation = forwardRef<HTMLElement, NavigationProps>(function Navigation(
  { label, children, testId, ...rest },
  ref,
) {
  return (
    <nav
      ref={ref}
      aria-label={label}
      className="navigation"
      data-testid={testId}
      {...rest}
    >
      {children}
    </nav>
  );
});

export default Navigation;
