/**
 * Hook to detect if the browser supports CSS anchor positioning.
 *
 * Detection strategy:
 * 1. CSS.supports() checks for property/value support (fast path).
 * 2. A separate exported `hasScrollContainerBug()` runs a runtime test to
 *    detect Safari's broken anchor-size/position-try-fallbacks inside scroll
 *    containers. Components opt into this check via `polyfillScrollBug: true`
 *    on useDropdownLayer.
 *
 * The CSS check runs once at module load; the runtime probe runs lazily on
 * first call. Both are cached.
 */

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

/**
 * Runtime check for Safari's specific scroll container bug.
 *
 * Creates 3 hidden elements (scroll container + anchor + positioned layer),
 * measures the layer width, and cleans up. If the layer doesn't match the
 * anchor's 100px width, the browser has the bug.
 *
 * Only called when cssChecksPass() is true (browser claims support).
 */
const detectScrollContainerBug = (): boolean => {
  if (typeof document === "undefined" || !document.body) return false;

  const container = document.createElement("div");
  container.style.cssText =
    "position:fixed;left:-9999px;width:200px;height:50px;overflow:auto;visibility:hidden;pointer-events:none";

  const anchor = document.createElement("div");
  anchor.style.cssText = "anchor-name:--nds-bug-test;width:100px;height:20px";

  const layer = document.createElement("div");
  layer.style.cssText =
    "position:fixed;position-anchor:--nds-bug-test;position-area:bottom;width:anchor-size(width);height:10px;margin:0";

  container.append(anchor, layer);
  document.body.appendChild(container);
  const layerWidth = layer.getBoundingClientRect().width;
  document.body.removeChild(container);

  return layerWidth !== 100;
};

/** Whether the browser supports CSS anchor positioning (CSS checks only). */
const SUPPORTS_ANCHOR_POSITIONING: boolean = cssChecksPass();

let scrollContainerBugResult: boolean | undefined;

/**
 * Whether the browser has the Safari scroll-container bug where
 * anchor-size() and position-try-fallbacks fail inside overflow:auto ancestors.
 * Only runs the runtime test if CSS checks pass (otherwise irrelevant).
 * Self-healing: returns false once Safari ships a fix.
 *
 * Evaluated lazily on first call (not at module load) and cached. This keeps
 * `import`ing the bundle free of DOM side effects: the runtime probe appends to
 * `document.body`, which is `null` when a bundle is loaded from a non-deferred
 * `<head>` script — evaluating it at module scope would throw and take the whole
 * import down, as well as force a synchronous layout on every import.
 */
export const hasScrollContainerBug = (): boolean => {
  if (scrollContainerBugResult === undefined) {
    scrollContainerBugResult =
      SUPPORTS_ANCHOR_POSITIONING && detectScrollContainerBug();
  }
  return scrollContainerBugResult;
};

/**
 * Returns whether the browser supports CSS anchor positioning
 * (based on CSS.supports checks).
 */
const useSupportsAnchorPositioning = (): boolean => SUPPORTS_ANCHOR_POSITIONING;

export default useSupportsAnchorPositioning;
