import {
  parseViewport,
  serializeViewport,
  mergeViewportContent,
  ensureViewportMeta,
} from "./viewport";

const CANONICAL =
  "width=device-width, initial-scale=1, interactive-widget=resizes-content";

function getViewportMetas() {
  return Array.from(
    document.head.querySelectorAll('meta[name="viewport"]'),
  ) as HTMLMetaElement[];
}

function setViewportMeta(content: string) {
  const meta = document.createElement("meta");
  meta.setAttribute("name", "viewport");
  meta.setAttribute("content", content);
  document.head.appendChild(meta);
  return meta;
}

describe("parseViewport / serializeViewport", () => {
  it("round-trips a standard content string", () => {
    const map = parseViewport(CANONICAL);
    expect(map.get("width")).toBe("device-width");
    expect(map.get("initial-scale")).toBe("1");
    expect(map.get("interactive-widget")).toBe("resizes-content");
    expect(serializeViewport(map)).toBe(CANONICAL);
  });

  it("ignores empty segments and preserves valueless directives", () => {
    const map = parseViewport("width=device-width, , viewport-fit=cover");
    expect(Array.from(map.keys())).toEqual(["width", "viewport-fit"]);
  });

  it("lowercases keys (directive names are case-insensitive)", () => {
    const map = parseViewport("Width=device-width, Initial-Scale=1");
    expect(map.get("width")).toBe("device-width");
    expect(map.get("initial-scale")).toBe("1");
  });
});

describe("mergeViewportContent", () => {
  it("returns the canonical content when nothing exists", () => {
    expect(mergeViewportContent(null)).toBe(CANONICAL);
    expect(mergeViewportContent("")).toBe(CANONICAL);
    expect(mergeViewportContent("   ")).toBe(CANONICAL);
  });

  it("appends managed directives when missing, preserving order", () => {
    expect(mergeViewportContent("width=device-width, initial-scale=1")).toBe(
      CANONICAL,
    );
  });

  it("leaves content unchanged when already correct", () => {
    expect(mergeViewportContent(CANONICAL)).toBe(CANONICAL);
  });

  it("preserves a consumer's width while normalizing owned directives", () => {
    expect(mergeViewportContent("width=1024, initial-scale=0.5")).toBe(
      "width=1024, initial-scale=1, interactive-widget=resizes-content",
    );
  });

  it("modifies a differing interactive-widget value", () => {
    expect(
      mergeViewportContent(
        "width=device-width, initial-scale=1, interactive-widget=overlays-content",
      ),
    ).toBe(CANONICAL);
  });

  it("preserves unrelated directives in place while upserting", () => {
    expect(mergeViewportContent("width=1024, viewport-fit=cover")).toBe(
      "width=1024, viewport-fit=cover, initial-scale=1, interactive-widget=resizes-content",
    );
  });

  it("adds the default width when an existing tag does not set one", () => {
    expect(mergeViewportContent("viewport-fit=cover")).toBe(
      "viewport-fit=cover, width=device-width, initial-scale=1, interactive-widget=resizes-content",
    );
  });

  it("matches managed keys case-insensitively (no duplicates)", () => {
    expect(mergeViewportContent("Width=device-width, Initial-Scale=1")).toBe(
      CANONICAL,
    );
  });
});

describe("ensureViewportMeta", () => {
  beforeEach(() => {
    document.head.innerHTML = "";
  });

  it("creates a full canonical tag when none exists", () => {
    ensureViewportMeta(document);
    const metas = getViewportMetas();
    expect(metas).toHaveLength(1);
    expect(metas[0].getAttribute("content")).toBe(CANONICAL);
  });

  it("upserts managed directives on an existing tag", () => {
    setViewportMeta("width=1024, viewport-fit=cover");
    ensureViewportMeta(document);
    const metas = getViewportMetas();
    expect(metas).toHaveLength(1);
    expect(metas[0].getAttribute("content")).toBe(
      "width=1024, viewport-fit=cover, initial-scale=1, interactive-widget=resizes-content",
    );
  });

  it("is a no-op when the tag is already correct", () => {
    const meta = setViewportMeta(CANONICAL);
    ensureViewportMeta(document);
    expect(getViewportMetas()).toHaveLength(1);
    expect(meta.getAttribute("content")).toBe(CANONICAL);
  });

  it("never creates a duplicate across repeated calls", () => {
    ensureViewportMeta(document);
    ensureViewportMeta(document);
    ensureViewportMeta(document);
    expect(getViewportMetas()).toHaveLength(1);
  });

  it("does nothing when no document is available (SSR guard)", () => {
    expect(() => ensureViewportMeta(null)).not.toThrow();
    expect(getViewportMetas()).toHaveLength(0);
  });
});
