import React from "react";
import Navigation from "./";
import NavigationItem from "../NavigationItem";

export default {
  title: "Components/Navigation",
  component: Navigation,
};

/**
 * The primary sidebar case: a `nav` landmark named "Roles" with a few items,
 * one of which is selected. Each item renders as a button, and the click
 * handlers here are no-ops.
 */
export const Default = () => (
  <div style={{ maxWidth: "280px" }}>
    <Navigation label="Roles">
      <NavigationItem isSelected onClick={() => {}}>
        Admin
      </NavigationItem>
      <NavigationItem onClick={() => {}}>Editor</NavigationItem>
      <NavigationItem onClick={() => {}}>Viewer</NavigationItem>
    </Navigation>
  </div>
);

/**
 * Focused demonstration of the selected stripe + row background, driven by
 * `isSelected` (which maps to `aria-current="page"`). This keeps the selected
 * row in context alongside sibling items, while the `endContent` action stays
 * beside the control instead of nesting an interactive element inside it.
 */
export const Selected = () => (
  <div style={{ maxWidth: "280px" }}>
    <Navigation label="Roles">
      <NavigationItem onClick={() => {}}>Dashboard</NavigationItem>
      <NavigationItem
        isSelected
        onClick={() => {}}
        endContent={<span className="narmi-icon-lock" aria-hidden="true" />}
      >
        <div>Admin</div>
        <div className="fontSize--s">2 users</div>
      </NavigationItem>
      <NavigationItem onClick={() => {}}>Viewer</NavigationItem>
    </Navigation>
  </div>
);
