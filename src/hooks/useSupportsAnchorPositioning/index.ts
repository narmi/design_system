/**
 * Hook to detect if the browser supports CSS anchor positioning.
 *
 * Detection uses CSS.supports() checks for the property/value support we rely
 * on. The value is browser-only, so it is exposed via useSyncExternalStore:
 * `false` on the server (getServerSnapshot) to keep SSR and hydration in
 * agreement, then the real value on the first client render. There is no
 * module-load-time work or side effect.
 */

import { useSyncExternalStore } from "react";

/** CSS.supports checks for all anchor positioning features we use. */
const cssChecksPass = (): boolean => {
  if (typeof CSS === "undefined" || typeof CSS.supports !== "function") {
    return false;
  }
  return [
    CSS.supports("anchor-name", "--a"),
    CSS.supports("position-anchor", "--a"),
    CSS.supports("position-area", "bottom center"),
    CSS.supports("position-try-fallbacks", "flip-block"),
    CSS.supports("width", "anchor-size(width)"),
  ].every(Boolean);
};

/** Never-changing subscription: support status is static per page load. */
const emptySubscribe = () => () => {};

/**
 * Lazily computed + cached client value. Computed on first client read
 * (never at module load), so there is no SSR/import-time side effect and
 * `getSnapshot` returns a stable reference across renders.
 */
let clientSupportCache: boolean | undefined;
const getClientSnapshot = (): boolean => {
  if (clientSupportCache === undefined) {
    clientSupportCache = cssChecksPass();
  }
  return clientSupportCache;
};

/**
 * Returns whether the browser supports CSS anchor positioning
 * (based on CSS.supports checks).
 *
 * SSR-safe: emits `false` on the server (getServerSnapshot) so the server
 * HTML and hydration agree, then returns the real value on the first client
 * render. Unlike a useState + useEffect flip, useSyncExternalStore does not
 * depend on a passive effect committing, so it cannot get stuck at `false`.
 */
const useSupportsAnchorPositioning = (): boolean =>
  useSyncExternalStore(emptySubscribe, getClientSnapshot, () => false);

export default useSupportsAnchorPositioning;
