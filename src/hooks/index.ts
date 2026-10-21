/**
 * Barrel for every NDS hook.
 *
 * Hooks live at `src/hooks/<category>/<name>` and are re-exported here by
 * name so the public API never depends on a hook's category. Components
 * import hooks by their full path; `src/index.ts` imports from this file.
 *
 * Categories:
 * - env: runtime facts (viewport, media queries, feature detection)
 * - value: a component's data and how it's derived
 * - interaction: how elements respond to the user (events, focus, aria-*)
 * - layout: layout mechanics carried out by a stylesheet
 * - util: React plumbing
 */

// env
export { default as useBreakpoints } from "./env/useBreakpoints";
export type { UseBreakpointsResult } from "./env/useBreakpoints";
export { default as useMediaQuery } from "./env/useMediaQuery";
export { default as useSupportsAnchoredContainerQueries } from "./env/useSupportsAnchoredContainerQueries";
export { default as useSupportsAnchorPositioning } from "./env/useSupportsAnchorPositioning";

// interaction
export { default as useOnClickOutside } from "./interaction/useOnClickOutside";

// layout
export { default as useDropdownLayer } from "./layout/useDropdownLayer";
export type {
  UseDropdownLayerOptions,
  UseDropdownLayerResult,
  Placement,
  Alignment,
} from "./layout/useDropdownLayer";
export { default as useLockBodyScroll } from "./layout/useLockBodyScroll";

// util
export { useMergeRefs } from "./util/useMergeRefs";
