// extend jest's `expect` matchers
import "@testing-library/jest-dom";

class MockResizeObserver {
  observe() {}
  disconnect() {}
  unobserve() {}
}
window.ResizeObserver = MockResizeObserver;

window.HTMLElement.prototype.scroll = function () {};
