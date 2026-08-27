import React, { useEffect, useLayoutEffect, useState } from "react";
import Combobox from "src/Combobox";
import { HAS_SCROLL_CONTAINER_BUG } from "src/hooks/useSupportsAnchorPositioning";

const storyDescription =
  "Regression test for Android soft-keyboard dropdown positioning. " +
  "Must be tested on a real Android device (e.g. BrowserStack Local). " +
  "Two anchor positions probe different failure modes. " +
  "`ComboboxLowInViewport` targets the flip-above coordinate-mixup " +
  "bug (useAnchorPolyfill.ts:54-58) — expected failure: menu " +
  "positioned off-screen below the keyboard. " +
  "`ComboboxMiddleInViewport` targets the reactive flip decision and " +
  "the `window.resize` close bug (useAnchorPolyfill.ts:185-186) — the " +
  "menu may still position correctly here but should not disappear " +
  "on keyboard open. `ComboboxMiddleInViewport_WithMetaTag` re-runs " +
  "the middle-viewport case with " +
  "`<meta name=viewport content=...,interactive-widget=resizes-content>` " +
  "injected at mount. If this variant passes while " +
  "`ComboboxMiddleInViewport` fails on the same device, the fix is a " +
  "consumer-side viewport meta change rather than a design-system " +
  "code change. `LayerPositionMonitor` renders a fixed diagnostic " +
  "overlay showing anchor + layer rects and visualViewport dimensions " +
  "live; use it to determine whether CSS anchor-positioning re-fires " +
  "its fallbacks on visualViewport.resize (layer rect changes) or " +
  "commits to its initial placement (layer rect stays). " +
  "`VirtualKeyboardApiProbe` reports whether the VirtualKeyboard API " +
  "(`navigator.virtualKeyboard`, `env(keyboard-inset-*)`) is available " +
  "for future progressive-enhancement work. " +
  "`DvhViewportProbe` measures `100dvh` / `100svh` / `100lvh` / `100vh` " +
  "before and after the keyboard opens; the critical question is " +
  "whether `100dvh` shrinks with the keyboard. If yes, keyboard-aware " +
  "max-height and fallback selection can be handled entirely in CSS " +
  "via `calc(100dvh - anchor(...))` and `position-try-order: most-height`, " +
  "no JS required. " +
  "Use the DetectionProbe story to confirm which code path (native " +
  "anchor-positioning vs. JS polyfill) is active on the tested device.";

/**
 * Pins the Combobox near the bottom of the viewport so `spaceBelow`
 * is smaller than `spaceAbove` and the polyfill takes the "flip above"
 * branch in useAnchorPolyfill (calculatePosition, lines 54-58). That
 * branch is where the visual-viewport / layout-viewport coordinate
 * mixup manifests when the Android soft keyboard opens.
 */
const BottomAnchoredLayout = (Story) => (
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      padding: "12px",
      backgroundColor: "var(--bgColor-white, #fff)",
    }}
  >
    <Story />
  </div>
);

/**
 * Centers the Combobox vertically so both `spaceBelow` and `spaceAbove`
 * start out ample. When the Android soft keyboard opens, `spaceBelow`
 * (useAnchorPolyfill.ts) can go negative and the flip decision swaps
 * mid-interaction. Max-height is no longer computed in JS — the layer
 * uses a fixed CSS max-height (%nds-dropdown-layer), so if the menu
 * still disappears the flip/coordinate math in `calculatePosition` is
 * implicated rather than a max-height calc.
 */
const CenterAnchoredLayout = (Story) => (
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "12px",
      backgroundColor: "var(--bgColor-white, #fff)",
    }}
  >
    <Story />
  </div>
);

/**
 * Injects `interactive-widget=resizes-content` into the viewport meta
 * tag on mount and restores the original value on unmount. In this
 * mode, Chromium shrinks the layout viewport when the virtual keyboard
 * opens, which makes `getBoundingClientRect()`, `window.innerHeight`,
 * and CSS anchor-positioning's `position-try-fallbacks` all react to
 * the keyboard. Used to test whether the observed native-path bug is
 * solvable by a consumer-side viewport meta change.
 */
const WithInteractiveWidgetResizesContent = (Story) => {
  useLayoutEffect(() => {
    let meta = document.querySelector('meta[name="viewport"]');
    let created = false;
    let originalContent = null;

    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "viewport");
      document.head.appendChild(meta);
      created = true;
    } else {
      originalContent = meta.getAttribute("content");
    }

    const parts = new Set(
      (originalContent ?? "width=device-width, initial-scale=1")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
    );
    for (const part of Array.from(parts)) {
      if (part.startsWith("interactive-widget=")) parts.delete(part);
    }
    parts.add("interactive-widget=resizes-content");
    meta.setAttribute("content", Array.from(parts).join(", "));

    return () => {
      if (created) {
        meta.remove();
      } else if (originalContent != null) {
        meta.setAttribute("content", originalContent);
      }
    };
  }, []);

  return <Story />;
};

export const ComboboxLowInViewport = () => (
  <Combobox label="Select an option">
    <Combobox.Item value="apple" searchValue="apple">
      Apple
    </Combobox.Item>
    <Combobox.Item value="banana" searchValue="banana">
      Banana
    </Combobox.Item>
    <Combobox.Item value="cherry" searchValue="cherry">
      Cherry
    </Combobox.Item>
    <Combobox.Item value="date" searchValue="date">
      Date
    </Combobox.Item>
  </Combobox>
);
ComboboxLowInViewport.decorators = [BottomAnchoredLayout];

export const ComboboxMiddleInViewport = () => (
  <Combobox label="Select an option">
    <Combobox.Item value="apple" searchValue="apple">
      Apple
    </Combobox.Item>
    <Combobox.Item value="banana" searchValue="banana">
      Banana
    </Combobox.Item>
    <Combobox.Item value="cherry" searchValue="cherry">
      Cherry
    </Combobox.Item>
    <Combobox.Item value="date" searchValue="date">
      Date
    </Combobox.Item>
  </Combobox>
);
ComboboxMiddleInViewport.decorators = [CenterAnchoredLayout];

export const ComboboxMiddleInViewport_WithMetaTag = () => (
  <Combobox label="Select an option">
    <Combobox.Item value="apple" searchValue="apple">
      Apple
    </Combobox.Item>
    <Combobox.Item value="banana" searchValue="banana">
      Banana
    </Combobox.Item>
    <Combobox.Item value="cherry" searchValue="cherry">
      Cherry
    </Combobox.Item>
    <Combobox.Item value="date" searchValue="date">
      Date
    </Combobox.Item>
  </Combobox>
);
// Decorators wrap in reverse array order — WithInteractiveWidgetResizesContent
// runs last, so it wraps the CenterAnchoredLayout output and ensures the
// meta tag is applied before the layout renders.
ComboboxMiddleInViewport_WithMetaTag.decorators = [
  CenterAnchoredLayout,
  WithInteractiveWidgetResizesContent,
];

/**
 * Renders a fixed diagnostic overlay in the top-left corner that live-
 * updates on every `visualViewport.resize` event. Displays the current
 * anchor and layer bounding rects (queried from the DOM via the
 * `.nds-combobox--active` classname the Combobox toggles when open) and
 * the visualViewport / innerHeight dimensions. Use this on-device to
 * determine whether CSS anchor-positioning re-fires its fallbacks when
 * the keyboard opens (layer rect would change) or commits to its
 * initial placement (layer rect stays constant while visualViewport
 * shrinks).
 */
const LayerPositionOverlay = () => {
  const [state, setState] = useState(() => ({
    resizeEventCount: 0,
    visualViewportHeight:
      typeof window !== "undefined"
        ? (window.visualViewport?.height ?? "n/a")
        : "n/a",
    visualViewportOffsetTop:
      typeof window !== "undefined"
        ? (window.visualViewport?.offsetTop ?? "n/a")
        : "n/a",
    innerHeight: typeof window !== "undefined" ? window.innerHeight : "n/a",
    anchorRect: null,
    layerRect: null,
  }));

  useEffect(() => {
    if (typeof window === "undefined" || !window.visualViewport) return;

    const readRects = () => {
      const anchor = document.querySelector(
        ".nds-combobox--active > div:first-child",
      );
      const list = document.querySelector(
        ".nds-combobox--active .nds-combobox-list",
      );
      const layer = list?.parentElement ?? null;
      const format = (el) => {
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return {
          top: Math.round(r.top),
          bottom: Math.round(r.bottom),
          left: Math.round(r.left),
          right: Math.round(r.right),
          width: Math.round(r.width),
          height: Math.round(r.height),
        };
      };
      return { anchorRect: format(anchor), layerRect: format(layer) };
    };

    const update = () => {
      setState((prev) => ({
        resizeEventCount: prev.resizeEventCount + 1,
        visualViewportHeight: window.visualViewport.height,
        visualViewportOffsetTop: window.visualViewport.offsetTop,
        innerHeight: window.innerHeight,
        ...readRects(),
      }));
    };

    // Also read initial state on next frame so the Combobox has mounted.
    const raf = requestAnimationFrame(() => {
      setState((prev) => ({ ...prev, ...readRects() }));
    });

    window.visualViewport.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(raf);
      window.visualViewport.removeEventListener("resize", update);
    };
  }, []);

  const rows = {
    resizeEventCount: state.resizeEventCount,
    "visualViewport.height": state.visualViewportHeight,
    "visualViewport.offsetTop": state.visualViewportOffsetTop,
    "window.innerHeight": state.innerHeight,
    "anchor rect": state.anchorRect
      ? JSON.stringify(state.anchorRect)
      : "(not found)",
    "layer rect": state.layerRect
      ? JSON.stringify(state.layerRect)
      : "(not found)",
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 99999,
        pointerEvents: "none",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        border: "1px solid #999",
        padding: "6px 8px",
        fontFamily: "monospace",
        fontSize: "10px",
        lineHeight: 1.3,
        maxWidth: "70vw",
        wordBreak: "break-all",
      }}
    >
      {Object.entries(rows).map(([k, v]) => (
        <div key={k}>
          <strong>{k}:</strong> {String(v)}
        </div>
      ))}
    </div>
  );
};

export const LayerPositionMonitor = () => (
  <>
    <LayerPositionOverlay />
    <Combobox label="Select an option">
      <Combobox.Item value="apple" searchValue="apple">
        Apple
      </Combobox.Item>
      <Combobox.Item value="banana" searchValue="banana">
        Banana
      </Combobox.Item>
      <Combobox.Item value="cherry" searchValue="cherry">
        Cherry
      </Combobox.Item>
      <Combobox.Item value="date" searchValue="date">
        Date
      </Combobox.Item>
    </Combobox>
  </>
);
LayerPositionMonitor.decorators = [CenterAnchoredLayout];

/**
 * On mount, opts into the VirtualKeyboard API by setting
 * `navigator.virtualKeyboard.overlaysContent = true` (Chromium only)
 * and subscribes to the `geometrychange` event. Also injects a style
 * tag exposing `env(keyboard-inset-*)` values as CSS custom properties
 * so getComputedStyle can observe them. Restores prior state on
 * unmount.
 */
const WithVirtualKeyboardOverlaysContent = (Story) => {
  useLayoutEffect(() => {
    if (typeof navigator === "undefined" || !("virtualKeyboard" in navigator)) {
      return;
    }
    // eslint-disable-next-line compat/compat
    const vk = navigator.virtualKeyboard;
    const originalOverlays = vk.overlaysContent;
    vk.overlaysContent = true;

    const styleEl = document.createElement("style");
    styleEl.setAttribute("data-nds-3164-vk-probe", "");
    styleEl.textContent =
      ":root{" +
      "--nds-kbd-inset-top:env(keyboard-inset-top,0px);" +
      "--nds-kbd-inset-bottom:env(keyboard-inset-bottom,0px);" +
      "--nds-kbd-inset-height:env(keyboard-inset-height,0px);" +
      "}";
    document.head.appendChild(styleEl);

    return () => {
      vk.overlaysContent = originalOverlays;
      styleEl.remove();
    };
  }, []);
  return <Story />;
};

const VirtualKeyboardProbeOverlay = () => {
  const [state, setState] = useState(() => ({
    geometrychangeEventCount: 0,
    boundingRect: null,
    insetTop: "",
    insetBottom: "",
    insetHeight: "",
  }));

  useEffect(() => {
    if (typeof navigator === "undefined" || !("virtualKeyboard" in navigator)) {
      return;
    }
    // eslint-disable-next-line compat/compat
    const vk = navigator.virtualKeyboard;

    const readInsets = () => {
      const root = getComputedStyle(document.documentElement);
      return {
        insetTop: root.getPropertyValue("--nds-kbd-inset-top").trim(),
        insetBottom: root.getPropertyValue("--nds-kbd-inset-bottom").trim(),
        insetHeight: root.getPropertyValue("--nds-kbd-inset-height").trim(),
      };
    };

    const formatRect = (r) => {
      if (!r) return null;
      return {
        top: Math.round(r.top),
        bottom: Math.round(r.bottom),
        left: Math.round(r.left),
        right: Math.round(r.right),
        width: Math.round(r.width),
        height: Math.round(r.height),
      };
    };

    const update = () => {
      setState((prev) => ({
        geometrychangeEventCount: prev.geometrychangeEventCount + 1,
        boundingRect: formatRect(vk.boundingRect),
        ...readInsets(),
      }));
    };

    // Initial read on next frame so the injected style tag is applied.
    const raf = requestAnimationFrame(() => {
      setState((prev) => ({
        ...prev,
        boundingRect: formatRect(vk.boundingRect),
        ...readInsets(),
      }));
    });

    vk.addEventListener("geometrychange", update);
    return () => {
      cancelAnimationFrame(raf);
      vk.removeEventListener("geometrychange", update);
    };
  }, []);

  const hasApi =
    typeof navigator !== "undefined" && "virtualKeyboard" in navigator;

  const rows = {
    "'virtualKeyboard' in navigator": hasApi,
    "virtualKeyboard.overlaysContent": hasApi
      ? // eslint-disable-next-line compat/compat
        navigator.virtualKeyboard.overlaysContent
      : "n/a",
    geometrychangeEventCount: state.geometrychangeEventCount,
    "virtualKeyboard.boundingRect": state.boundingRect
      ? JSON.stringify(state.boundingRect)
      : "(none)",
    "env(keyboard-inset-top)": state.insetTop || "(empty)",
    "env(keyboard-inset-bottom)": state.insetBottom || "(empty)",
    "env(keyboard-inset-height)": state.insetHeight || "(empty)",
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 99999,
        pointerEvents: "none",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        border: "1px solid #999",
        padding: "6px 8px",
        fontFamily: "monospace",
        fontSize: "10px",
        lineHeight: 1.3,
        maxWidth: "70vw",
        wordBreak: "break-all",
      }}
    >
      {Object.entries(rows).map(([k, v]) => (
        <div key={k}>
          <strong>{k}:</strong> {String(v)}
        </div>
      ))}
    </div>
  );
};

export const VirtualKeyboardApiProbe = () => (
  <>
    <VirtualKeyboardProbeOverlay />
    <Combobox label="Select an option">
      <Combobox.Item value="apple" searchValue="apple">
        Apple
      </Combobox.Item>
      <Combobox.Item value="banana" searchValue="banana">
        Banana
      </Combobox.Item>
      <Combobox.Item value="cherry" searchValue="cherry">
        Cherry
      </Combobox.Item>
      <Combobox.Item value="date" searchValue="date">
        Date
      </Combobox.Item>
    </Combobox>
  </>
);
VirtualKeyboardApiProbe.decorators = [
  CenterAnchoredLayout,
  WithVirtualKeyboardOverlaysContent,
];

/**
 * Measures the pixel height of a hidden element sized to `100dvh`, `100svh`,
 * `100lvh`, and `100vh` and reports each on every `visualViewport.resize`.
 * The critical question: does `100dvh` shrink when the soft keyboard opens
 * on the target device? If yes, keyboard-aware max-height and fallback
 * selection can be handled entirely in CSS via `calc(100dvh - anchor(...))`
 * and `position-try-order: most-height`. If no, we cannot use the CSS
 * route and have to keep JS in the loop.
 */
const DvhViewportProbeOverlay = () => {
  const [state, setState] = useState(() => ({
    resizeEventCount: 0,
    dvh: null,
    svh: null,
    lvh: null,
    vh: null,
    visualViewportHeight:
      typeof window !== "undefined"
        ? (window.visualViewport?.height ?? "n/a")
        : "n/a",
    innerHeight: typeof window !== "undefined" ? window.innerHeight : "n/a",
  }));

  useEffect(() => {
    if (typeof window === "undefined" || !window.visualViewport) return;

    // Create four hidden measurement elements sized to each viewport unit.
    const container = document.createElement("div");
    container.style.cssText =
      "position:absolute;top:0;left:0;width:1px;visibility:hidden;pointer-events:none;";
    const makeCell = (height) => {
      const el = document.createElement("div");
      el.style.cssText = `width:1px;height:${height};`;
      container.appendChild(el);
      return el;
    };
    const dvhEl = makeCell("100dvh");
    const svhEl = makeCell("100svh");
    const lvhEl = makeCell("100lvh");
    const vhEl = makeCell("100vh");
    document.body.appendChild(container);

    const measure = () => ({
      dvh: dvhEl.getBoundingClientRect().height,
      svh: svhEl.getBoundingClientRect().height,
      lvh: lvhEl.getBoundingClientRect().height,
      vh: vhEl.getBoundingClientRect().height,
    });

    const update = () => {
      setState((prev) => ({
        ...prev,
        resizeEventCount: prev.resizeEventCount + 1,
        visualViewportHeight: window.visualViewport.height,
        innerHeight: window.innerHeight,
        ...measure(),
      }));
    };

    // Initial read on next frame.
    const raf = requestAnimationFrame(() => {
      setState((prev) => ({
        ...prev,
        visualViewportHeight: window.visualViewport.height,
        innerHeight: window.innerHeight,
        ...measure(),
      }));
    });

    window.visualViewport.addEventListener("resize", update);

    return () => {
      cancelAnimationFrame(raf);
      window.visualViewport.removeEventListener("resize", update);
      container.remove();
    };
  }, []);

  const rows = {
    resizeEventCount: state.resizeEventCount,
    "100dvh (px)": state.dvh != null ? state.dvh : "(pending)",
    "100svh (px)": state.svh != null ? state.svh : "(pending)",
    "100lvh (px)": state.lvh != null ? state.lvh : "(pending)",
    "100vh (px)": state.vh != null ? state.vh : "(pending)",
    "visualViewport.height": state.visualViewportHeight,
    "window.innerHeight": state.innerHeight,
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 99999,
        pointerEvents: "none",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        border: "1px solid #999",
        padding: "6px 8px",
        fontFamily: "monospace",
        fontSize: "10px",
        lineHeight: 1.3,
        maxWidth: "70vw",
        wordBreak: "break-all",
      }}
    >
      {Object.entries(rows).map(([k, v]) => (
        <div key={k}>
          <strong>{k}:</strong> {String(v)}
        </div>
      ))}
    </div>
  );
};

export const DvhViewportProbe = () => {
  return (
    <>
      <DvhViewportProbeOverlay />
      <input
        placeholder="Tap here to open the keyboard"
        style={{
          padding: "12px",
          fontSize: "16px",
          border: "1px solid #999",
          borderRadius: "4px",
          width: "100%",
          boxSizing: "border-box",
        }}
      />
    </>
  );
};
DvhViewportProbe.decorators = [CenterAnchoredLayout];

/**
 * Static readout of the runtime feature-detection values that determine
 * which positioning code path Combobox takes on this device. Use this to
 * confirm whether the JS polyfill (useAnchorPolyfill) is actually active
 * on the Android device under test, since the ticket's root cause is
 * gated on that path running.
 */
export const DetectionProbe = () => {
  const [readings] = useState(() => {
    if (typeof window === "undefined") {
      return null;
    }

    const cssSupports =
      typeof CSS !== "undefined" && typeof CSS.supports === "function"
        ? CSS.supports.bind(CSS)
        : () => false;

    const checks = {
      "CSS.supports(anchor-name, --a)": cssSupports("anchor-name", "--a"),
      "CSS.supports(position-anchor, --a)": cssSupports(
        "position-anchor",
        "--a",
      ),
      "CSS.supports(position-area, bottom center)": cssSupports(
        "position-area",
        "bottom center",
      ),
      "CSS.supports(position-try-fallbacks, flip-block)": cssSupports(
        "position-try-fallbacks",
        "flip-block",
      ),
      "CSS.supports(width, anchor-size(width))": cssSupports(
        "width",
        "anchor-size(width)",
      ),
    };

    const allCssChecksPass = Object.values(checks).every(Boolean);
    // Combobox opts into polyfillScrollBug: true, so the polyfill path
    // runs when either (a) native anchor-positioning is unavailable, or
    // (b) the scroll-container bug is detected.
    const polyfillPathActive = !allCssChecksPass || HAS_SCROLL_CONTAINER_BUG;

    // Measure 100dvh and 100vh via hidden elements so we can see if dvh
    // reacts to virtual keyboard on this device (dvh should shrink with
    // keyboard on Chrome/Android in default keyboard mode).
    const measureViewportUnit = (heightValue) => {
      const el = document.createElement("div");
      el.style.cssText = `position:absolute;top:0;left:0;width:1px;height:${heightValue};visibility:hidden;pointer-events:none;`;
      document.body.appendChild(el);
      const measured = el.getBoundingClientRect().height;
      el.remove();
      return measured;
    };

    return {
      ...checks,
      HAS_SCROLL_CONTAINER_BUG,
      "window.visualViewport?.height": window.visualViewport?.height ?? "n/a",
      "window.innerHeight": window.innerHeight,
      "100dvh (px)": measureViewportUnit("100dvh"),
      "100vh (px)": measureViewportUnit("100vh"),
      "meta[name=viewport] content":
        document
          .querySelector('meta[name="viewport"]')
          ?.getAttribute("content") ?? "(not set)",
      "'virtualKeyboard' in navigator":
        typeof navigator !== "undefined" && "virtualKeyboard" in navigator,
      "navigator.virtualKeyboard.overlaysContent":
        typeof navigator !== "undefined" && "virtualKeyboard" in navigator
          ? // eslint-disable-next-line compat/compat
            navigator.virtualKeyboard.overlaysContent
          : "n/a",
      "navigator.userAgent": navigator.userAgent,
      "Polyfill path active (Combobox)": polyfillPathActive,
    };
  });

  if (!readings) return null;

  return (
    <div style={{ padding: "12px", fontFamily: "monospace", fontSize: "12px" }}>
      <dl style={{ margin: 0 }}>
        {Object.entries(readings).map(([key, value]) => (
          <div
            key={key}
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "8px",
              borderBottom: "1px solid var(--color-lightGrey, #ddd)",
              paddingBottom: "4px",
            }}
          >
            <dt style={{ fontWeight: "bold", wordBreak: "break-all" }}>
              {key}
            </dt>
            <dd style={{ margin: 0, wordBreak: "break-all" }}>
              {String(value)}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default {
  title: "NDS-3164 Android Combobox positioning",
  tags: ["!autodocs", "NDS-3164"],
  parameters: {
    viewport: { defaultViewport: "mobile1" },
    layout: "fullscreen",
    docs: {
      description: {
        component: storyDescription,
      },
    },
  },
};
