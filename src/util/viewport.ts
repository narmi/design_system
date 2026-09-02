/**
 * Ensures the document carries the viewport meta tag the design system
 * depends on. In particular, `interactive-widget=resizes-content` opts mobile
 * browsers into resizing the viewport (rather than overlaying) when the
 * on-screen keyboard appears, which our layout/positioning code assumes.
 *
 * This module runs as a side effect on import so every consumer of the
 * package (and Storybook, which imports it from `.storybook/preview.js`)
 * gets the tag without any setup. It is intentionally NOT part of the public
 * API — none of these functions are re-exported from `src/index.ts`.
 *
 * Behavior: the design system always ensures a default `width=device-width`
 * when creating a brand-new tag. On existing tags, it preserves any consumer-
 * provided `width` value. It still owns the directives listed in
 * `ENSURE_META_CONTENT` and upserts each one — adds it if missing, corrects it
 * if the value differs, leaves it if already right. Any other directive a
 * consumer has set (e.g. `viewport-fit=cover`) is preserved in place.
 *
 * Accessibility guardrail: never add `maximum-scale` or `user-scalable=no` to
 * `ENSURE_META_CONTENT`. Those disable pinch-to-zoom and violate WCAG 1.4.4.
 */

// The directives the design system manages. Also used verbatim as the content
// for a brand-new tag. Keep this to zoom-safe directives only (see above).
const DEFAULT_META_CONTENT =
  "width=device-width, initial-scale=1, interactive-widget=resizes-content";

const ENSURE_META_CONTENT = "initial-scale=1, interactive-widget=resizes-content";

/**
 * Parse a viewport `content` string into an ordered map of directives.
 *
 * Keys are lowercased because viewport directive names are case-insensitive to
 * browsers; this prevents `Width` and `width` from being treated as distinct
 * (which would otherwise produce a duplicate). Later duplicate keys win,
 * matching browser behavior.
 */
export function parseViewport(content: string): Map<string, string> {
  const map = new Map<string, string>();
  for (const part of content.split(",")) {
    const trimmed = part.trim();
    if (!trimmed) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) {
      // Valueless directive; preserve it as an empty value.
      map.set(trimmed.toLowerCase(), "");
      continue;
    }
    const key = trimmed.slice(0, eq).trim().toLowerCase();
    const value = trimmed.slice(eq + 1).trim();
    if (key) map.set(key, value);
  }
  return map;
}

/** Serialize an ordered map of directives back into a viewport `content` string. */
export function serializeViewport(map: Map<string, string>): string {
  return Array.from(map.entries())
    .map(([key, value]) => (value === "" ? key : `${key}=${value}`))
    .join(", ");
}

/**
 * Given the current viewport `content` (or null/empty when no tag exists),
 * return the content string that should be applied.
 *
 * Pure. Returns `DEFAULT_META_CONTENT` when no tag exists. Otherwise preserves
 * any consumer-provided `width`, inserts the default width when missing, and
 * upserts every directive from `ENSURE_META_CONTENT`: adds it when missing
 * (appended in order), corrects it when the value differs, keeps it when
 * already correct. Directives the consumer set that we don't manage are
 * preserved in their original position (`Map.set` keeps insertion order on
 * update).
 */
export function mergeViewportContent(existing: string | null): string {
  if (!existing || !existing.trim()) {
    return DEFAULT_META_CONTENT;
  }
  const map = parseViewport(existing);
  if (!map.has("width")) {
    map.set("width", "device-width");
  }
  for (const [key, value] of parseViewport(ENSURE_META_CONTENT)) {
    map.set(key, value);
  }
  return serializeViewport(map);
}

/**
 * Ensure a `<meta name="viewport">` tag exists in the document and carries the
 * managed directives. SSR-safe (no-op without a document), idempotent, and
 * HMR-safe (never creates a duplicate tag). Targets the first viewport meta if
 * more than one is present.
 */
export function ensureViewportMeta(
  doc: Document | null | undefined = typeof document !== "undefined"
    ? document
    : null,
): void {
  if (!doc) return;
  const head = doc.head;
  if (!head) return;

  const existingMeta = head.querySelector<HTMLMetaElement>(
    'meta[name="viewport"]',
  );

  if (!existingMeta) {
    const meta = doc.createElement("meta");
    meta.setAttribute("name", "viewport");
    meta.setAttribute("content", mergeViewportContent(null));
    head.appendChild(meta);
    return;
  }

  const current = existingMeta.getAttribute("content");
  const next = mergeViewportContent(current);
  if (next !== current) {
    existingMeta.setAttribute("content", next);
  }
}

// Run on import. Guarded so importing this module during SSR or in a
// non-DOM environment is a harmless no-op.
ensureViewportMeta();
