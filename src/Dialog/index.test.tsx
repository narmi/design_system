import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Dialog from "./";

// Mock ReactDOM.createPortal since Dialog uses portals
jest.mock("react-dom", () => ({
  ...jest.requireActual("react-dom"),
  createPortal: (children) => children,
}));

// Mock useLockBodyScroll hook
jest.mock("../hooks/useLockBodyScroll", () => jest.fn());

// Mock rafSchd
jest.mock("raf-schd", () => (fn) => fn);

const defaultProps = {
  isOpen: true,
  title: "Test Dialog",
  children: <div>Dialog content</div>,
  onUserDismiss: jest.fn(),
};

const renderDialog = (props = {}) => {
  return render(<Dialog {...defaultProps} {...props} />);
};

describe("Dialog", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Create outlet div for portal
    const outlet = document.createElement("div");
    outlet.setAttribute("id", "outlet");
    document.body.appendChild(outlet);
  });

  afterEach(() => {
    // Clean up outlet
    const outlet = document.getElementById("outlet");
    if (outlet) {
      document.body.removeChild(outlet);
    }
  });

  describe("Basic rendering", () => {
    it("renders when isOpen is true", () => {
      renderDialog();
      expect(screen.getByRole("dialog")).toBeInTheDocument();
      expect(screen.getByText("Test Dialog")).toBeInTheDocument();
      expect(screen.getByText("Dialog content")).toBeInTheDocument();
    });

    it("does not render when isOpen is false", () => {
      renderDialog({ isOpen: false });
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    it("applies correct testId", () => {
      renderDialog({ testId: "custom-dialog" });
      expect(screen.getByTestId("custom-dialog")).toBeInTheDocument();
    });

    it("applies custom width style", () => {
      renderDialog({ width: "800px" });
      const dialog = screen.getByRole("dialog");
      expect(dialog).toHaveStyle("--dialog-preferred-width: 800px");
    });
  });

  describe("Header styles", () => {
    it("renders bordered header by default", () => {
      renderDialog();
      expect(screen.getByText("Test Dialog").closest(".nds-dialog-header")).toHaveClass(
        "nds-dialog-header--bordered"
      );
    });

    it("renders plain header", () => {
      renderDialog({ headerStyle: "plain" });
      expect(screen.getByText("Test Dialog").closest(".nds-dialog-header")).toHaveClass(
        "nds-dialog-header--plain"
      );
    });

    it("renders banner header with centered title", () => {
      renderDialog({ headerStyle: "banner" });
      const header = screen.getByText("Test Dialog").closest(".nds-dialog-header");
      expect(header).toHaveClass("nds-dialog-header--banner");
      expect(screen.getByText("Test Dialog")).toHaveStyle("text-align: center");
    });
  });

  describe("Close functionality", () => {
    it("renders close button", () => {
      renderDialog();
      expect(screen.getByRole("button", { name: "close" })).toBeInTheDocument();
    });

    it("calls onUserDismiss when close button is clicked", async () => {
      const onUserDismiss = jest.fn();
      renderDialog({ onUserDismiss });
      
      const closeButton = screen.getByRole("button", { name: "close" });
      await userEvent.click(closeButton);
      
      expect(onUserDismiss).toHaveBeenCalledTimes(1);
    });

    it("calls onUserDismiss when Escape key is pressed", () => {
      const onUserDismiss = jest.fn();
      renderDialog({ onUserDismiss });
      
      fireEvent.keyDown(window, { key: "Escape" });
      
      expect(onUserDismiss).toHaveBeenCalledTimes(1);
    });

    it("calls onUserDismiss when clicking on backdrop", async () => {
      const onUserDismiss = jest.fn();
      renderDialog({ onUserDismiss });
      
      const backdrop = document.querySelector(".nds-shim--dark");
      await userEvent.click(backdrop);
      
      expect(onUserDismiss).toHaveBeenCalledTimes(1);
    });

    it("does not call onUserDismiss when clicking on dialog content", async () => {
      const onUserDismiss = jest.fn();
      renderDialog({ onUserDismiss });
      
      const dialog = screen.getByRole("dialog");
      await userEvent.click(dialog);
      
      expect(onUserDismiss).not.toHaveBeenCalled();
    });
  });

  describe("Content sections", () => {
    it("renders notification section when provided", () => {
      const notification = <div data-testid="notification">Important notice</div>;
      renderDialog({ notification });
      
      expect(screen.getByTestId("notification")).toBeInTheDocument();
      expect(screen.getByText("Important notice")).toBeInTheDocument();
    });

    it("renders footer section when provided", () => {
      const footer = (
        <div data-testid="footer">
          <button>Cancel</button>
          <button>Save</button>
        </div>
      );
      renderDialog({ footer });
      
      expect(screen.getByTestId("footer")).toBeInTheDocument();
      expect(screen.getByRole("button", { name: "Cancel" })).toBeInTheDocument();
      expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument();
    });

    it("applies correct content padding when footer is present", () => {
      const footer = <div>Footer content</div>;
      renderDialog({ footer });
      
      const content = document.querySelector(".nds-dialog-content");
      expect(content).not.toHaveClass("padding--bottom--xl");
    });

    it("applies correct content padding when no footer", () => {
      renderDialog();
      
      const content = document.querySelector(".nds-dialog-content");
      expect(content).toHaveClass("padding--bottom--xl");
    });
  });

  describe("Accessibility", () => {
    it("has correct ARIA attributes", () => {
      renderDialog();
      const dialog = screen.getByRole("dialog");
      
      expect(dialog).toHaveAttribute("aria-labelledby", "aria-dialog-label");
      expect(dialog).toHaveAttribute("aria-modal", "true");
    });

    it("has title linked to dialog via aria-labelledby", () => {
      renderDialog();
      const titleElement = document.getElementById("aria-dialog-label");
      
      expect(titleElement).toBeInTheDocument();
      expect(titleElement).toHaveTextContent("Test Dialog");
    });

    it("focuses the dialog when opened", async () => {
      renderDialog();
      
      await waitFor(() => {
        expect(document.querySelector(".nds-dialog-focuslock")).toBeInTheDocument();
      });
    });
  });

  describe("Overflow detection", () => {
    it("applies correct classes when content is not overflowing", async () => {
      const footer = <div data-testid="footer">Footer content</div>;
      
      // Mock scrollHeight and clientHeight to simulate no overflow
      Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
        configurable: true,
        value: 300,
      });
      Object.defineProperty(HTMLElement.prototype, 'clientHeight', {
        configurable: true,
        value: 400,
      });
      
      renderDialog({ footer });

      await waitFor(() => {
        const content = document.querySelector(".nds-dialog-content");
        const footer = document.querySelector(".nds-dialog-footer");

        // When not overflowing, content should not have bottom padding
        expect(content).not.toHaveClass("padding--bottom--xl");
        // Footer should not have overflowing class
        expect(footer).not.toHaveClass("nds-dialog-footer--overflowing");
      });
    });

    it("applies correct classes when content is overflowing", async () => {
      const footer = <div data-testid="footer">Footer content</div>;

      // Mock scrollHeight and clientHeight to simulate overflow
      Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
        configurable: true,
        value: 600,
      });
      Object.defineProperty(HTMLElement.prototype, 'clientHeight', {
        configurable: true,
        value: 400,
      });

      renderDialog({ footer });

      await waitFor(() => {
        const content = document.querySelector(".nds-dialog-content");
        const footer = document.querySelector(".nds-dialog-footer");

        // When overflowing, content should have bottom padding
        expect(content).toHaveClass("padding--bottom--xl");
        // Footer should have overflowing class
        expect(footer).toHaveClass("nds-dialog-footer--overflowing");
      });
    });

    it("applies bottom padding when no footer is present", () => {
      // Mock no overflow scenario
      Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
        configurable: true,
        value: 300,
      });
      Object.defineProperty(HTMLElement.prototype, 'clientHeight', {
        configurable: true,
        value: 400,
      });
      
      renderDialog(); // No footer

      const content = document.querySelector(".nds-dialog-content");
      // When no footer, content should always have bottom padding
      expect(content).toHaveClass("padding--bottom--xl");
    });
  });

  describe("Event cleanup", () => {
    it("removes event listeners when unmounted", () => {
      const removeEventListenerSpy = jest.spyOn(window, "removeEventListener");
      const { unmount } = renderDialog();
      
      unmount();
      
      expect(removeEventListenerSpy).toHaveBeenCalledWith("keydown", expect.any(Function));
      expect(removeEventListenerSpy).toHaveBeenCalledWith("resize", expect.any(Function));
      
      removeEventListenerSpy.mockRestore();
    });
  });

  describe("Edge cases", () => {
    it("handles missing onUserDismiss gracefully", () => {
      renderDialog({ onUserDismiss: undefined });
      
      const closeButton = screen.getByRole("button", { name: "close" });
      expect(() => fireEvent.click(closeButton)).not.toThrow();
    });

    it("handles empty title", () => {
      renderDialog({ title: "" });

      const titleElement = document.getElementById("aria-dialog-label");
      expect(titleElement).toHaveTextContent("");
    });

    it("handles complex children content", () => {
      const complexChildren = (
        <div>
          <h2>Complex Content</h2>
          <p>Paragraph content</p>
          <button>Action Button</button>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
          </ul>
        </div>
      );
      
      renderDialog({ children: complexChildren });

      expect(screen.getByText("Complex Content")).toBeInTheDocument();
      expect(screen.getByText("Paragraph content")).toBeInTheDocument();
      expect(screen.getByRole("button", { name: "Action Button" })).toBeInTheDocument();
      expect(screen.getByText("List item 1")).toBeInTheDocument();
    });
  });
});
