import { createContext } from "react";

export interface NavigationSelectionContextValue {
  /**
   * The `itemId` of the currently selected `NavigationItem`, resolved by the
   * parent `Navigation` (from `selectedId` or its own uncontrolled state).
   */
  selectedId?: string;
  /**
   * Called with a `NavigationItem`'s `itemId` when it is clicked, so the parent
   * can update selection.
   */
  onSelect?: (id: string) => void;
  /**
   * `true` when a `Navigation` provides this context. When managed, a
   * `NavigationItem` derives its selected state from `itemId === selectedId`;
   * otherwise it falls back to its own `isSelected` prop.
   */
  isManaged: boolean;
}

/**
 * Internal context used by `Navigation` to coordinate single-selection across
 * `NavigationItem` children. The default is unmanaged, so a `NavigationItem`
 * used standalone falls back to its own `isSelected` prop.
 */
export const NavigationSelectionContext =
  createContext<NavigationSelectionContextValue>({ isManaged: false });
