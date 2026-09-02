// extend vitest's `expect` matchers
import "@testing-library/jest-dom/vitest";

class MockResizeObserver {
  observe() {}
  disconnect() {}
  unobserve() {}
}
window.ResizeObserver = MockResizeObserver;

window.HTMLElement.prototype.scroll = function () {};
window.HTMLElement.prototype.scrollBy = function () {};

// jsdom does not implement SMIL, so `SVGAnimateElement.beginElement` is missing.
// ProgressBar calls it in a layout effect, which throws on render in any test
// that mounts one.
window.SVGElement.prototype.beginElement = function () {};

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
