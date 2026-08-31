import React, {
  forwardRef,
  useState,
  type ReactNode,
  type HTMLAttributes,
} from "react";
import { NavigationSelectionContext } from "./context";

export interface NavigationProps extends Omit<
  HTMLAttributes<HTMLElement>,
  "aria-label" | "className" | "onSelect"
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
  /**
   * The `itemId` of the currently selected `NavigationItem` (controlled).
   *
   * Providing this opts into coordinated single-selection and makes `Navigation`
   * a controlled component: own this value in your app (typically derived from
   * the router) and update it in `onSelect`.
   */
  selectedId?: string;
  /**
   * The initially selected `itemId` (uncontrolled). `Navigation` owns selection
   * state internally and updates it as items are clicked. Use this for local,
   * non-URL-driven selection; use `selectedId` when the router is the source of
   * truth.
   */
  defaultSelectedId?: string;
  /**
   * Called with a `NavigationItem`'s `itemId` when it is clicked. Fires in both
   * controlled and uncontrolled modes.
   */
  onSelect?: (id: string) => void;
  /** Optional value for `data-testid` attribute */
  testId?: string;
}

/**
 * Sidebar navigation container. Renders a `nav` landmark whose accessible name
 * comes from `label`.
 *
 * ## Selection
 * `Navigation` coordinates single-selection across `NavigationItem` children by
 * their `itemId`:
 * - **Uncontrolled:** pass `defaultSelectedId`; `Navigation` owns the state and
 *   updates it as items are clicked.
 * - **Controlled:** pass `selectedId` (with `onSelect`) and own the value in
 *   your app — the right choice when the router is the source of truth.
 */
const Navigation = forwardRef<HTMLElement, NavigationProps>(function Navigation(
  { label, children, selectedId, defaultSelectedId, onSelect, testId, ...rest },
  ref,
) {
  const isControlled = selectedId !== undefined;
  const [internalId, setInternalId] = useState(defaultSelectedId);
  const resolvedId = isControlled ? selectedId : internalId;

  const handleSelect = (id: string) => {
    if (!isControlled) setInternalId(id);
    onSelect?.(id);
  };

  return (
    <nav
      {...rest}
      ref={ref}
      aria-label={label}
      className="nds-navigation"
      data-testid={testId}
    >
      <NavigationSelectionContext.Provider
        value={{
          selectedId: resolvedId,
          onSelect: handleSelect,
          isManaged: true,
        }}
      >
        {children}
      </NavigationSelectionContext.Provider>
    </nav>
  );
});

export default Navigation;
