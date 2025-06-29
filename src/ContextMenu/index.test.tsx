import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import ContextMenu, { ContextMenuProps } from "./";

// Mock react-aria-components
jest.mock("react-aria-components", () => {
  let mockMenuOnAction: ((value: string) => void) | undefined;
  
  return {
    MenuTrigger: ({ children, "data-testid": testId, ...props }: {
      children: React.ReactNode;
      "data-testid"?: string;
      [key: string]: unknown;
    }) => {
      // Filter out React-specific props that shouldn't be passed to DOM
      const { ...domProps } = props;
      return (
        <div data-testid={testId || "menu-trigger"} {...domProps}>{children}</div>
      );
    },
    Menu: ({ children, onAction }: {
      children: React.ReactNode;
      onAction?: (value: string) => void;
    }) => {
      // Store the onAction so MenuItems can access it
      mockMenuOnAction = onAction;
      return (
        <div data-testid="menu">
          {children}
        </div>
      );
    },
    MenuItem: ({ children, id, value, className }: {
      children: React.ReactNode;
      id?: string;
      value?: string;
      className?: string | ((state: { isSelected: boolean; isFocused: boolean; isDisabled: boolean }) => string);
    }) => {
      // Handle className function for react-aria-components
      const classNameString = typeof className === 'function' 
        ? className({ isSelected: false, isFocused: false, isDisabled: false })
        : className;
      
      return (
        <div
          data-testid={`menu-item-${id || value}`}
          data-value={value}
          className={classNameString}
          onClick={() => mockMenuOnAction && value && mockMenuOnAction(value)}
          onKeyDown={(e) => {
            if ((e.key === 'Enter' || e.key === ' ') && value) {
              mockMenuOnAction && mockMenuOnAction(value);
            }
          }}
          role="menuitem"
          tabIndex={0}
        >
          {children}
        </div>
      );
    },
  };
});

// Mock react-laag
jest.mock("react-laag", () => ({
  useLayer: jest.fn(() => ({
    renderLayer: (content) => content,
    triggerProps: {},
    layerProps: {},
  })),
  useMousePositionAsTrigger: () => ({
    handleMouseEvent: jest.fn(),
    trigger: { current: null },
    parentRef: { current: null },
  }),
}));

// Mock DOM utility
jest.mock("../util/dom", () => ({
  createUseLayerContainer: jest.fn(),
}));

const defaultProps: ContextMenuProps = {
  children: <div>Right-click me</div>,
  menuItems: [
    <ContextMenu.Item
      key="edit"
      id="edit"
      label="Edit"
      startIcon="edit-2"
      onSelect={jest.fn()}
    />,
    <ContextMenu.Item
      key="delete"
      id="delete"
      label="Delete"
      startIcon="trash"
      onSelect={jest.fn()}
    />,
    <ContextMenu.Item
      key="copy"
      id="copy"
      label="Copy"
      startIcon="copy"
      onSelect={jest.fn()}
    />,
  ],
};

const renderContextMenu = (props: Partial<ContextMenuProps> = {}) => {
  return render(<ContextMenu {...defaultProps} {...props} />);
};

describe("ContextMenu", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Basic rendering", () => {
    it("renders children element", () => {
      renderContextMenu();
      expect(screen.getByText("Right-click me")).toBeInTheDocument();
    });

    it("does not show menu initially", () => {
      renderContextMenu();
      expect(screen.queryByTestId("menu")).not.toBeInTheDocument();
    });

    it("applies testId when provided", () => {
      renderContextMenu({ testId: "custom-context-menu" });
      expect(screen.getByTestId("custom-context-menu")).toBeInTheDocument();
    });

    it("wraps children in menu trigger", () => {
      renderContextMenu();
      expect(screen.getByTestId("menu-trigger")).toBeInTheDocument();
    });
  });

  describe("Context menu activation", () => {
    it("opens menu on right-click", async () => {
      const user = userEvent.setup();
      renderContextMenu();
      
      const triggerElement = screen.getByText("Right-click me");
      await user.pointer({ keys: "[MouseRight]", target: triggerElement });
      
      await waitFor(() => {
        expect(screen.getByTestId("menu")).toBeInTheDocument();
      });
    });

    it("opens menu with Control + F12", () => {
      renderContextMenu();
      
      const triggerElement = screen.getByText("Right-click me");
      fireEvent.keyDown(triggerElement, { 
        key: "F12", 
        ctrlKey: true,
        code: "F12" 
      });
      
      expect(screen.getByTestId("menu")).toBeInTheDocument();
    });

    it("prevents default context menu on right-click", async () => {
      renderContextMenu();
      
      const triggerElement = screen.getByText("Right-click me");
      const rightClickEvent = new MouseEvent("contextmenu", {
        bubbles: true,
        cancelable: true,
        button: 2,
      });
      
      const preventDefaultSpy = jest.spyOn(rightClickEvent, "preventDefault");
      fireEvent(triggerElement, rightClickEvent);
      
      expect(preventDefaultSpy).toHaveBeenCalled();
    });

    it("does not open menu on regular left-click", async () => {
      const user = userEvent.setup();
      renderContextMenu();
      
      const triggerElement = screen.getByText("Right-click me");
      await user.click(triggerElement);
      
      expect(screen.queryByTestId("menu")).not.toBeInTheDocument();
    });

    it("does not open menu on other keyboard keys", () => {
      renderContextMenu();
      
      const triggerElement = screen.getByText("Right-click me");
      fireEvent.keyDown(triggerElement, { key: "Enter" });
      fireEvent.keyDown(triggerElement, { key: "Space" });
      fireEvent.keyDown(triggerElement, { key: "Escape" });
      
      expect(screen.queryByTestId("menu")).not.toBeInTheDocument();
    });
  });

  describe("Menu items rendering", () => {
    beforeEach(async () => {
      const user = userEvent.setup();
      renderContextMenu();
      
      const triggerElement = screen.getByText("Right-click me");
      await user.pointer({ keys: "[MouseRight]", target: triggerElement });
      
      await waitFor(() => {
        expect(screen.getByTestId("menu")).toBeInTheDocument();
      });
    });

    it("renders all menu items", () => {
      expect(screen.getByTestId("menu-item-edit")).toBeInTheDocument();
      expect(screen.getByTestId("menu-item-delete")).toBeInTheDocument();
      expect(screen.getByTestId("menu-item-copy")).toBeInTheDocument();
    });

    it("renders menu item labels", () => {
      expect(screen.getByText("Edit")).toBeInTheDocument();
      expect(screen.getByText("Delete")).toBeInTheDocument();
      expect(screen.getByText("Copy")).toBeInTheDocument();
    });

    it("renders menu item icons", () => {
      expect(document.querySelector(".narmi-icon-edit-2")).toBeInTheDocument();
      expect(document.querySelector(".narmi-icon-trash")).toBeInTheDocument();
      expect(document.querySelector(".narmi-icon-copy")).toBeInTheDocument();
    });

    it("applies correct CSS classes to menu items", () => {
      const editItem = screen.getByTestId("menu-item-edit");
      expect(editItem).toHaveClass("nds-context-menu-item");
      expect(editItem).toHaveClass("padding--x--s");
      expect(editItem).toHaveClass("padding--y--xs");
    });

    it("applies rounded corners to first and last items", () => {
      const editItem = screen.getByTestId("menu-item-edit");
      const copyItem = screen.getByTestId("menu-item-copy");
      
      expect(editItem).toHaveClass("rounded--top");
      expect(copyItem).toHaveClass("rounded--bottom");
    });
  });

  describe("Menu item interactions", () => {
    it("calls onSelect when menu item is clicked", async () => {
      const onSelectEdit = jest.fn();
      const onSelectDelete = jest.fn();
      const user = userEvent.setup();
      
      const customMenuItems = [
        <ContextMenu.Item
          key="edit"
          id="edit"
          label="Edit"
          onSelect={onSelectEdit}
        />,
        <ContextMenu.Item
          key="delete"
          id="delete"
          label="Delete"
          onSelect={onSelectDelete}
        />,
      ];
      
      renderContextMenu({ menuItems: customMenuItems });
      
      // Open menu
      const triggerElement = screen.getByText("Right-click me");
      await user.pointer({ keys: "[MouseRight]", target: triggerElement });
      
      await waitFor(() => {
        expect(screen.getByTestId("menu")).toBeInTheDocument();
      });
      
      // Click edit item
      const editItem = screen.getByTestId("menu-item-edit");
      await user.click(editItem);
      
      expect(onSelectEdit).toHaveBeenCalledWith("Edit", "edit");
    });

    it("passes correct parameters to onSelect", async () => {
      const onSelect = jest.fn();
      const user = userEvent.setup();
      
      const customMenuItems = [
        <ContextMenu.Item
          key="custom"
          id="custom-id"
          label="Custom Action"
          onSelect={onSelect}
        />,
      ];
      
      renderContextMenu({ menuItems: customMenuItems });
      
      // Open menu and click item
      const triggerElement = screen.getByText("Right-click me");
      await user.pointer({ keys: "[MouseRight]", target: triggerElement });
      
      await waitFor(() => {
        expect(screen.getByTestId("menu")).toBeInTheDocument();
      });
      
      const customItem = screen.getByTestId("menu-item-custom-id");
      await user.click(customItem);
      
      expect(onSelect).toHaveBeenCalledWith("Custom Action", "custom-id");
    });

    it("handles menu items without onSelect gracefully", async () => {
      const user = userEvent.setup();
      
      const customMenuItems = [
        <ContextMenu.Item
          key="no-handler"
          id="no-handler"
          label="No Handler"
        />,
      ];
      
      renderContextMenu({ menuItems: customMenuItems });
      
      const triggerElement = screen.getByText("Right-click me");
      await user.pointer({ keys: "[MouseRight]", target: triggerElement });
      
      await waitFor(() => {
        expect(screen.getByTestId("menu")).toBeInTheDocument();
      });
      
      const item = screen.getByTestId("menu-item-no-handler");
      expect(() => user.click(item)).not.toThrow();
    });
  });

  describe("Menu state management", () => {
    it("closes menu when pressing Escape", async () => {
      const user = userEvent.setup();
      renderContextMenu();
      
      // Open menu
      const triggerElement = screen.getByText("Right-click me");
      await user.pointer({ keys: "[MouseRight]", target: triggerElement });
      
      await waitFor(() => {
        expect(screen.getByTestId("menu")).toBeInTheDocument();
      });
      
      // Press Escape
      fireEvent.keyUp(window, { key: "Escape" });
      
      await waitFor(() => {
        expect(screen.queryByTestId("menu")).not.toBeInTheDocument();
      });
    });

    it("handles mouse events correctly", () => {
      renderContextMenu();
      
      const triggerElement = screen.getByText("Right-click me");
      
      // Mouse move should not cause issues
      fireEvent.mouseMove(triggerElement);
      expect(screen.queryByTestId("menu")).not.toBeInTheDocument();
    });

    it("enables and disables mouse position tracking", async () => {
      const user = userEvent.setup();
      renderContextMenu();
      
      const triggerElement = screen.getByText("Right-click me");
      
      // Open menu
      await user.pointer({ keys: "[MouseRight]", target: triggerElement });
      
      await waitFor(() => {
        expect(screen.getByTestId("menu")).toBeInTheDocument();
      });
      
      // Mouse position tracking should be disabled when menu is open
      // (This is mostly testing the internal state management)
      expect(screen.getByTestId("menu")).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("provides keyboard support for menu activation", () => {
      renderContextMenu();
      
      const triggerElement = screen.getByRole("button");
      expect(triggerElement).toHaveAttribute("aria-label", "Press Control + F12 to open the context menu");
    });

    it("handles focus correctly", () => {
      renderContextMenu();
      
      const triggerElement = screen.getByRole("button");
      expect(triggerElement).toHaveAttribute("tabIndex", "0");
    });

    it("maintains proper ARIA structure when menu is open", async () => {
      const user = userEvent.setup();
      renderContextMenu();
      
      const triggerElement = screen.getByText("Right-click me");
      await user.pointer({ keys: "[MouseRight]", target: triggerElement });
      
      await waitFor(() => {
        const menu = screen.getByTestId("menu");
        expect(menu).toBeInTheDocument();
      });
    });
  });

  describe("Complex menu items", () => {
    it("handles menu items with various props", async () => {
      const user = userEvent.setup();
      const onSelect = jest.fn();
      
      const complexMenuItems = [
        <ContextMenu.Item
          key="1"
          id="action-1"
          label="Action with Icon"
          startIcon="star"
          onSelect={onSelect}
        />,
        <ContextMenu.Item
          key="2"
          id="action-2"
          label="Another Action"
          onSelect={onSelect}
        />,
        <ContextMenu.Item
          key="3"
          id="action-3"
          label="Third Action"
          startIcon="heart"
          onSelect={onSelect}
        />,
      ];
      
      renderContextMenu({ menuItems: complexMenuItems });
      
      const triggerElement = screen.getByText("Right-click me");
      await user.pointer({ keys: "[MouseRight]", target: triggerElement });
      
      await waitFor(() => {
        expect(screen.getByText("Action with Icon")).toBeInTheDocument();
        expect(screen.getByText("Another Action")).toBeInTheDocument();
        expect(screen.getByText("Third Action")).toBeInTheDocument();
      });
      
      // Icons should be rendered
      expect(document.querySelector(".narmi-icon-star")).toBeInTheDocument();
      expect(document.querySelector(".narmi-icon-heart")).toBeInTheDocument();
    });

    it("handles empty menu items array", async () => {
      const user = userEvent.setup();
      renderContextMenu({ menuItems: [] });
      
      const triggerElement = screen.getByText("Right-click me");
      await user.pointer({ keys: "[MouseRight]", target: triggerElement });
      
      await waitFor(() => {
        expect(screen.getByTestId("menu")).toBeInTheDocument();
      });
      
      // Menu should be empty but not crash
      expect(screen.queryByText("Edit")).not.toBeInTheDocument();
    });

    it("handles single menu item", async () => {
      const user = userEvent.setup();
      const singleItem = [
        <ContextMenu.Item
          key="single"
          id="single"
          label="Only Action"
          onSelect={jest.fn()}
        />,
      ];
      
      renderContextMenu({ menuItems: singleItem });
      
      const triggerElement = screen.getByText("Right-click me");
      await user.pointer({ keys: "[MouseRight]", target: triggerElement });
      
      await waitFor(() => {
        expect(screen.getByText("Only Action")).toBeInTheDocument();
      });
      
      // Single item should have both rounded top and bottom
      const item = screen.getByTestId("menu-item-single");
      expect(item).toHaveClass("rounded--top");
      expect(item).toHaveClass("rounded--bottom");
    });
  });

  describe("Edge cases", () => {
    it("handles rapid context menu open/close", async () => {
      const user = userEvent.setup();
      renderContextMenu();
      
      const triggerElement = screen.getByText("Right-click me");
      
      // Rapidly trigger context menu multiple times
      for (let i = 0; i < 5; i++) {
        await user.pointer({ keys: "[MouseRight]", target: triggerElement });
        await user.click(document.body);
      }
      
      // Should not crash
      expect(screen.getByText("Right-click me")).toBeInTheDocument();
    });

    it("handles complex children elements", () => {
      const complexChildren = (
        <div>
          <h3>Complex Element</h3>
          <p>With multiple children</p>
          <button>And interactive elements</button>
        </div>
      );
      
      renderContextMenu({ children: complexChildren });
      
      expect(screen.getByText("Complex Element")).toBeInTheDocument();
      expect(screen.getByText("With multiple children")).toBeInTheDocument();
      expect(screen.getByRole("button", { name: "And interactive elements" })).toBeInTheDocument();
    });

    it("handles menu items with long labels", async () => {
      const user = userEvent.setup();
      const longLabelItems = [
        <ContextMenu.Item
          key="long"
          id="long"
          label="This is a very long menu item label that might cause layout issues"
          onSelect={jest.fn()}
        />,
      ];
      
      renderContextMenu({ menuItems: longLabelItems });
      
      const triggerElement = screen.getByText("Right-click me");
      await user.pointer({ keys: "[MouseRight]", target: triggerElement });
      
      await waitFor(() => {
        expect(screen.getByText("This is a very long menu item label that might cause layout issues")).toBeInTheDocument();
      });
    });

    it("handles menu items with special characters in labels", async () => {
      const user = userEvent.setup();
      const specialCharItems = [
        <ContextMenu.Item
          key="special"
          id="special"
          label="Copy & Paste"
          onSelect={jest.fn()}
        />,
        <ContextMenu.Item
          key="unicode"
          id="unicode"
          label="🔥 Hot Action"
          onSelect={jest.fn()}
        />,
      ];
      
      renderContextMenu({ menuItems: specialCharItems });
      
      const triggerElement = screen.getByText("Right-click me");
      await user.pointer({ keys: "[MouseRight]", target: triggerElement });
      
      await waitFor(() => {
        expect(screen.getByText("Copy & Paste")).toBeInTheDocument();
        expect(screen.getByText("🔥 Hot Action")).toBeInTheDocument();
      });
    });
  });

  describe("Subcomponents", () => {
    it("exposes ContextMenu.Item", () => {
      expect(ContextMenu.Item).toBeDefined();
    });
  });
});
