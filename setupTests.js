// extend vitest's `expect` matchers
import "@testing-library/jest-dom/vitest";

class MockResizeObserver {
  observe() {}
  disconnect() {}
  unobserve() {}
}
window.ResizeObserver = MockResizeObserver;

window.HTMLElement.prototype.scroll = function () {};

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});
