// extend vitest's `expect` matchers
import "@testing-library/jest-dom/vitest";

class MockResizeObserver {
  observe() {}
  disconnect() {}
  unobserve() {}
}
window.ResizeObserver = MockResizeObserver;

window.HTMLElement.prototype.scroll = function () {};
