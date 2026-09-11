import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import Drawer, { type DrawerProps } from "./";

let isDesktop = true;
vi.mock("../hooks/useBreakpoints", () => ({
  default: () => ({
    s: isDesktop,
    m: isDesktop,
    l: false,
    xl: false,
    largestSatisfiedBreakpoint: "m",
  }),
}));
vi.mock("../hooks/useLockBodyScroll", () => ({ default: vi.fn() }));

const renderDrawer = (props: Partial<DrawerProps> = {}) => {
  const result = render(
    <Drawer isOpen testId="drawer" {...props}>
      {props.children ?? <p>Drawer content</p>}
    </Drawer>,
  );
  act(() => {}); // flush the mount transition effect
  return result;
};

const POSITIONS = ["right", "left", "top", "bottom"] as const;

describe("Drawer", () => {
  beforeEach(() => {
    isDesktop = true;
  });

  afterEach(() => {
    document.getElementById("outlet")?.remove();
  });

  describe("rendering", () => {
    it("renders content into a single body-level outlet", () => {
      renderDrawer();
      const outlet = document.getElementById("outlet");
      expect(outlet?.parentElement).toBe(document.body);
      expect(outlet).toContainElement(screen.getByRole("dialog"));
      expect(screen.getByText("Drawer content")).toBeInTheDocument();
    });

    it("renders nothing when closed", () => {
      renderDrawer({ isOpen: false });
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    it("stays mounted for the close transition, then unmounts", () => {
      vi.useFakeTimers();
      const { rerender } = renderDrawer();
      rerender(
        <Drawer isOpen={false} testId="drawer">
          <p>Drawer content</p>
        </Drawer>,
      );
      expect(screen.getByRole("dialog")).not.toHaveClass("drawer--open--right");
      act(() => {
        vi.advanceTimersByTime(300);
      });
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
      vi.useRealTimers();
    });

    it("passes visibility to function children", () => {
      renderDrawer({
        children: ({ isVisible }) => <p>visible: {String(isVisible)}</p>,
      });
      expect(screen.getByText("visible: true")).toBeInTheDocument();
    });

    it("renders footer when provided", () => {
      renderDrawer({ footer: <span>Footer</span>, paddingSize: "s" });
      const footer = screen.getByText("Footer").parentElement;
      expect(footer).toHaveClass("drawer-footer", "padding--x--s");
    });

    it("applies paddingSize to content", () => {
      renderDrawer({ paddingSize: "none" });
      expect(screen.getByText("Drawer content").parentElement).toHaveClass(
        "padding--all--none",
      );
    });

    it("wraps content in a live region only when controls are shown", () => {
      renderDrawer();
      expect(screen.getByRole("region")).toContainElement(
        screen.getByRole("dialog"),
      );
      document.getElementById("outlet")?.remove();
      renderDrawer({ showControls: false });
      expect(screen.queryByRole("region")).not.toBeInTheDocument();
    });
  });

  describe("depth", () => {
    it("sets width for vertical drawers and height for horizontal ones", () => {
      renderDrawer({ depth: "400px", position: "left" });
      expect(screen.getByRole("dialog")).toHaveStyle({ width: "400px" });
      document.getElementById("outlet")?.remove();
      renderDrawer({ depth: "400px", position: "top" });
      expect(screen.getByRole("dialog")).toHaveStyle({ height: "400px" });
    });

    it("forces full width for vertical drawers on mobile", () => {
      isDesktop = false;
      renderDrawer({ depth: "400px", position: "right" });
      const dialog = screen.getByRole("dialog");
      expect(dialog).toHaveStyle({ width: "100%" });
      expect(dialog).toHaveClass("drawer--vertical--mobile");
    });
  });

  describe("dismissal", () => {
    it.each(POSITIONS)(
      "dismisses via Escape, backdrop, and nav shim (%s)",
      (position) => {
        const onUserDismiss = vi.fn();
        renderDrawer({ position, onUserDismiss });

        fireEvent.keyDown(window, { key: "a" });
        expect(onUserDismiss).not.toHaveBeenCalled();

        fireEvent.keyDown(window, { key: "Escape" });
        fireEvent.click(document.querySelector(".backdrop")!);
        fireEvent.click(document.querySelector(".navigation")!);
        expect(onUserDismiss).toHaveBeenCalledTimes(3);

        // clicks on nav children (not the shim itself) do not dismiss
        fireEvent.click(
          document.querySelector(`.navigation-container--${position}`)!,
        );
        expect(onUserDismiss).toHaveBeenCalledTimes(3);
      },
    );

    it("does not listen for Escape when closed", () => {
      const onUserDismiss = vi.fn();
      renderDrawer({ isOpen: false, onUserDismiss });
      fireEvent.keyDown(window, { key: "Escape" });
      expect(onUserDismiss).not.toHaveBeenCalled();
    });

    it("dismisses via the close button", () => {
      const onUserDismiss = vi.fn();
      renderDrawer({ onUserDismiss });
      fireEvent.click(screen.getByRole("button", { name: "Close" }));
      expect(onUserDismiss).toHaveBeenCalledTimes(1);
    });

    it("hides the close button when showClose is false", () => {
      renderDrawer({ showClose: false });
      expect(
        screen.queryByRole("button", { name: "Close" }),
      ).not.toBeInTheDocument();
    });
  });

  describe("desktop navigation", () => {
    it.each(POSITIONS)("wires next and previous buttons (%s)", (position) => {
      const onNext = vi.fn();
      const onPrev = vi.fn();
      renderDrawer({ position, onNext, onPrev });

      fireEvent.click(screen.getByRole("button", { name: "Next" }));
      fireEvent.click(screen.getByRole("button", { name: "Previous" }));
      expect(onNext).toHaveBeenCalledTimes(1);
      expect(onPrev).toHaveBeenCalledTimes(1);
    });

    it("orders buttons Prev/Next on vertical drawers and Next/Prev on horizontal ones", () => {
      renderDrawer({ position: "right" });
      let buttons = screen
        .getAllByRole("button")
        .map((b) => b.getAttribute("aria-label"));
      expect(buttons).toEqual(["Close", "Previous", "Next"]);

      document.getElementById("outlet")?.remove();
      renderDrawer({ position: "top" });
      buttons = screen
        .getAllByRole("button")
        .map((b) => b.getAttribute("aria-label"));
      expect(buttons).toEqual(["Close", "Next", "Previous"]);
    });

    it("marks a navigation button disabled when its callback is omitted", () => {
      renderDrawer({ onNext: vi.fn() });
      expect(screen.getByRole("button", { name: "Next" })).not.toHaveClass(
        "navigation-button--disabled",
      );
      expect(screen.getByRole("button", { name: "Previous" })).toHaveClass(
        "navigation-button--disabled",
      );
    });

    it("hides navigation buttons when showControls is false", () => {
      renderDrawer({ showControls: false });
      expect(
        screen.queryByRole("button", { name: "Next" }),
      ).not.toBeInTheDocument();
      expect(
        screen.queryByRole("button", { name: "Previous" }),
      ).not.toBeInTheDocument();
      expect(screen.getByRole("button", { name: "Close" })).toBeInTheDocument();
    });
  });

  describe("mobile navigation", () => {
    beforeEach(() => {
      isDesktop = false;
    });

    it("renders in-content controls instead of the side navigation", () => {
      const onUserDismiss = vi.fn();
      const onNext = vi.fn();
      const onPrev = vi.fn();
      renderDrawer({ onUserDismiss, onNext, onPrev });

      expect(document.querySelector(".navigation")).toBeNull();
      fireEvent.click(screen.getByRole("button", { name: "Next" }));
      fireEvent.click(screen.getByRole("button", { name: "Previous" }));
      fireEvent.click(
        document.querySelector(".mobile-navigation-button--close")!,
      );
      expect(onNext).toHaveBeenCalledTimes(1);
      expect(onPrev).toHaveBeenCalledTimes(1);
      expect(onUserDismiss).toHaveBeenCalledTimes(1);
    });

    it("hides mobile next/prev when showControls is false", () => {
      renderDrawer({ showControls: false });
      expect(
        screen.queryByRole("button", { name: "Next" }),
      ).not.toBeInTheDocument();
      expect(
        document.querySelector(".mobile-navigation-button--close"),
      ).not.toBeNull();
    });

    it("keeps the side navigation for horizontal drawers", () => {
      renderDrawer({ position: "bottom" });
      expect(document.querySelector(".navigation")).not.toBeNull();
      expect(
        document.querySelector(".mobile-navigation-button--close"),
      ).toBeNull();
    });
  });
});
