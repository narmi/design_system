import React from "react";

export default {
  title: "Hooks/useDropdownLayer/Anchor Positioning Diagnostics",
  tags: ["!autodocs", "dev"],
};

/**
 * Tests basic anchor positioning inside an overflow-y: auto container.
 *
 * Expected (working): Layer appears directly below the anchor, matching its width.
 * Broken (Safari bug): Layer has wrong position, wrong width, or doesn't appear.
 */
export const InsideScrollContainer = () => (
  <div>
    <div
      style={{
        marginBottom: "16px",
        padding: "12px",
        background: "#f0f0f0",
        borderRadius: "4px",
        fontSize: "14px",
      }}
    >
      <strong>Test:</strong> Basic anchor positioning inside a scroll container.
      <br />
      <strong>Expected:</strong> Yellow layer appears directly below the grey
      anchor, matching its width (200px).
      <br />
      <strong>Failure:</strong> Layer has wrong position, wrong width, or is
      invisible.
    </div>

    <div
      style={{
        overflowY: "auto" as const,
        height: "300px",
        border: "2px dashed #999",
        padding: "16px",
        position: "relative" as const,
      }}
    >
      <p style={{ color: "#666", margin: "0 0 12px" }}>
        ↓ Scroll container (overflow-y: auto)
      </p>

      {/* Anchor */}
      <div
        style={
          {
            anchorName: "--diag-anchor-1",
            width: "200px",
            height: "40px",
            background: "#e0e0e0",
            border: "1px solid #999",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "14px",
          } as React.CSSProperties
        }
      >
        Anchor
      </div>

      {/* Positioned layer */}
      <div
        style={
          {
            position: "fixed",
            positionAnchor: "--diag-anchor-1",
            positionArea: "bottom",
            width: "anchor-size(width)",
            margin: 0,
            background: "#fff3cd",
            border: "2px solid #ffc107",
            padding: "8px",
            fontSize: "14px",
            zIndex: 10,
          } as React.CSSProperties
        }
      >
        Layer (position-area: bottom, width: anchor-size)
      </div>
    </div>
  </div>
);

/**
 * Tests position-try-fallbacks: flip-block inside a scroll container.
 * The anchor is pushed to the bottom of the viewport so the layer
 * MUST flip above to avoid overflowing.
 *
 * Expected (working): Layer appears ABOVE the anchor.
 * Broken (Safari bug): Layer stays below, overflows viewport, or disappears.
 */
export const TryFallbacksInsideScrollContainer = () => (
  <div>
    <div
      style={{
        marginBottom: "16px",
        padding: "12px",
        background: "#f0f0f0",
        borderRadius: "4px",
        fontSize: "14px",
      }}
    >
      <strong>Test:</strong> position-try-fallbacks: flip-block inside a scroll
      container, with anchor near viewport bottom.
      <br />
      <strong>Expected:</strong> Yellow layer appears ABOVE the grey anchor
      (flip-block activated).
      <br />
      <strong>Failure:</strong> Layer stays below anchor, overflows viewport, or
      is invisible.
    </div>

    <div
      style={{
        overflowY: "auto" as const,
        height: "300px",
        border: "2px dashed #999",
        padding: "16px",
        position: "fixed" as const,
        bottom: "0",
        left: "16px",
        right: "16px",
      }}
    >
      <p style={{ color: "#666", margin: "0 0 12px" }}>
        ↓ Scroll container fixed at viewport bottom
      </p>

      {/* Spacer to push anchor toward bottom */}
      <div style={{ height: "220px" }} />

      {/* Anchor near bottom */}
      <div
        style={
          {
            anchorName: "--diag-anchor-2",
            width: "200px",
            height: "40px",
            background: "#e0e0e0",
            border: "1px solid #999",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "14px",
          } as React.CSSProperties
        }
      >
        Anchor (near viewport bottom)
      </div>

      {/* Positioned layer — tall, must flip above */}
      <div
        style={
          {
            position: "fixed",
            positionAnchor: "--diag-anchor-2",
            positionArea: "bottom",
            positionTryFallbacks: "flip-block",
            width: "anchor-size(width)",
            height: "200px",
            margin: 0,
            background: "#fff3cd",
            border: "2px solid #ffc107",
            padding: "8px",
            fontSize: "14px",
            zIndex: 10,
            overflow: "hidden",
          } as React.CSSProperties
        }
      >
        Layer (should flip ABOVE via flip-block)
      </div>
    </div>
  </div>
);

/**
 * Full Dialog DOM structure mimic with pure CSS anchor positioning.
 * No React components — just the raw HTML/CSS skeleton matching Dialog's
 * actual DOM hierarchy.
 *
 * Tests: position-area, position-try-fallbacks (named @position-try rule),
 * anchor-size, all inside the real Dialog ancestor chain.
 *
 * Expected (working): Layer below anchor, matching width, flips above if scrolled down.
 * Broken (Safari bug): Wrong position, wrong width, no flip.
 */
export const DialogStructure = () => (
  <div>
    <div
      style={{
        marginBottom: "16px",
        padding: "12px",
        background: "#f0f0f0",
        borderRadius: "4px",
        fontSize: "14px",
      }}
    >
      <strong>Test:</strong> Full Dialog DOM structure with named @position-try
      fallback (--nds-dropdown-above).
      <br />
      <strong>Expected:</strong> Yellow layer appears below the anchor, matching
      its width. If scrolled so anchor is near bottom, layer flips above.
      <br />
      <strong>Failure:</strong> Layer has wrong position, wrong width, doesn't
      flip, or is invisible.
      <br />
      <em>
        Note: uses --nds-dropdown-above from global @position-try rules in
        custom-properties.scss
      </em>
    </div>

    {/* .nds-dialog-root */}
    <div style={{ position: "fixed" as const, inset: 0, zIndex: 100 }}>
      {/* .nds-shim--dark */}
      <div
        style={{
          position: "absolute" as const,
          inset: 0,
          background: "rgba(0,0,0,0.3)",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          paddingTop: "10vh",
        }}
      >
        {/* .nds-dialog-focuslock (static on desktop) */}
        <div style={{ position: "static" as const, width: "fit-content" }}>
          {/* .nds-dialog */}
          <div
            style={{
              position: "relative" as const,
              width: "500px",
              maxHeight: "80vh",
              background: "white",
              borderRadius: "8px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
              display: "flex",
              flexDirection: "column" as const,
            }}
          >
            {/* .nds-dialog-header */}
            <div
              style={{
                padding: "16px 24px",
                borderBottom: "1px solid #eee",
                fontWeight: "bold",
              }}
            >
              Dialog Header
            </div>

            {/* .nds-dialog-content — THE SCROLL CONTAINER */}
            <div
              style={{
                overflowY: "auto" as const,
                flexGrow: 1,
                padding: "16px 24px",
              }}
            >
              <p
                style={{ color: "#666", margin: "0 0 16px", fontSize: "13px" }}
              >
                This is .nds-dialog-content (overflow-y: auto). The anchor and
                layer are inside this scroll container.
              </p>

              {/* Anchor (simulates Select trigger) */}
              <div
                style={
                  {
                    anchorName: "--diag-anchor-3",
                    width: "100%",
                    height: "44px",
                    background: "#e0e0e0",
                    border: "1px solid #999",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "12px",
                    fontSize: "14px",
                  } as React.CSSProperties
                }
              >
                Select trigger (anchor)
              </div>

              {/* Positioned layer (simulates Select dropdown) */}
              <div
                style={
                  {
                    position: "fixed",
                    positionAnchor: "--diag-anchor-3",
                    positionArea: "bottom",
                    positionTryFallbacks: "--nds-dropdown-above, flip-inline",
                    width: "anchor-size(width)",
                    maxWidth: "anchor-size(width)",
                    marginTop: "4px",
                    marginBottom: 0,
                    marginLeft: 0,
                    marginRight: 0,
                    background: "#fff3cd",
                    border: "2px solid #ffc107",
                    borderRadius: "4px",
                    padding: "8px",
                    fontSize: "14px",
                    zIndex: 10,
                  } as React.CSSProperties
                }
              >
                <div style={{ padding: "4px 0" }}>Option 1</div>
                <div style={{ padding: "4px 0" }}>Option 2</div>
                <div style={{ padding: "4px 0" }}>Option 3</div>
                <div style={{ padding: "4px 0" }}>Option 4</div>
                <div style={{ padding: "4px 0" }}>Option 5</div>
              </div>

              {/* Extra content to enable scrolling */}
              <div
                style={{ marginTop: "16px", color: "#999", fontSize: "13px" }}
              >
                <p>Extra content to make the dialog scrollable:</p>
                {Array.from({ length: 20 }, (_, i) => (
                  <p key={i}>Filler paragraph {i + 1}</p>
                ))}
              </div>
            </div>

            {/* .nds-dialog-footer */}
            <div
              style={{
                padding: "16px 24px",
                borderTop: "1px solid #eee",
              }}
            >
              Footer
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
