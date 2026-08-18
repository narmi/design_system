import React from "react";
import Navigation from "../Navigation";
import { NavigationItem } from "./";

export default {
  title: "Components/NavigationItem",
  component: NavigationItem,
};

/**
 * A single navigation control. It always renders as a button, and the click
 * behavior is passed in explicitly via `onClick`.
 *
 * `NavigationItem` is valid anywhere — it renders no `li`, so it can sit
 * directly in a `nav` or be composed inside other components.
 */
export const Overview = () => (
  <div style={{ maxWidth: "280px" }}>
    <Navigation label="Roles">
      <NavigationItem onClick={() => {}}>Dashboard</NavigationItem>
    </Navigation>
  </div>
);

/**
 * `isSelected` maps to `aria-current="page"` on the control, which drives the
 * selected row background in CSS so the accessible state and the visual
 * indicator cannot drift apart.
 */
export const Selected = () => (
  <div style={{ maxWidth: "280px" }}>
    <Navigation label="Roles">
      <NavigationItem isSelected onClick={() => {}}>
        Admin
      </NavigationItem>
    </Navigation>
  </div>
);

/**
 * `endContent` renders as a grid sibling of the control, not as a child of it —
 * so a secondary action (e.g. a "more" affordance) never creates invalid nested
 * interactive elements.
 */
export const WithEndContent = () => (
  <div style={{ maxWidth: "280px" }}>
    <Navigation label="Roles">
      <NavigationItem
        onClick={() => {}}
        endContent={<span className="narmi-icon-lock" aria-hidden="true" />}
      >
        <div>Admin</div>
        <div className="fontSize--s">2 users</div>
      </NavigationItem>
    </Navigation>
  </div>
);
