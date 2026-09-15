import React, { useState } from "react";
import Navigation from "./";
import NavigationItem from "../NavigationItem";

const Template = (args) => (
  <div style={{ maxWidth: "280px" }}>
    <Navigation {...args}>
      <NavigationItem itemId="admin" label="Admin" />
      <NavigationItem itemId="editor" label="Editor" />
      <NavigationItem itemId="viewer" label="Viewer" />
    </Navigation>
  </div>
);

/**
 * `Navigation` owns the selection here. Seed it with `defaultSelectedId` (the
 * second item, "editor") and it updates itself as items are clicked — no
 * external state required. Items only carry an `itemId`; you never set
 * `isSelected` on them.
 */
export const Uncontrolled = Template.bind({});
Uncontrolled.args = {
  label: "Roles",
  defaultSelectedId: "editor",
};

/**
 * Your app owns the selection: pass `selectedId` and update it in `onSelect`.
 * This is how you bind navigation to a router — the pattern is
 * `selectedId={idForRoute(location)}` and `onSelect={(id) => navigate(pathFor[id])}`.
 * You still tell `Navigation` which `itemId` is current; items never receive
 * `isSelected`.
 */
export const Controlled = () => {
  const [selectedId, setSelectedId] = useState("editor");
  return (
    <div style={{ maxWidth: "280px" }}>
      <Navigation
        label="Roles"
        selectedId={selectedId}
        onSelect={setSelectedId}
      >
        <NavigationItem itemId="admin" label="Admin" />
        <NavigationItem itemId="editor" label="Editor" />
        <NavigationItem itemId="viewer" label="Viewer" />
      </Navigation>
    </div>
  );
};

/**
 * Real navigation: give items an `href` (or `as={Link}` with a router's link
 * component) and the control renders as an `<a>`, with `aria-current="page"` on
 * the anchor for the current page. Pair links with a controlled `selectedId`
 * derived from the current route so browser back/forward stays in sync.
 * Selection is still tracked by `itemId`.
 */
export const AsLinks = () => (
  <div style={{ maxWidth: "280px" }}>
    <Navigation label="Roles" selectedId="editor">
      <NavigationItem itemId="admin" label="Admin" href="#admin" />
      <NavigationItem itemId="editor" label="Editor" href="#editor" />
      <NavigationItem itemId="viewer" label="Viewer" href="#viewer" />
    </Navigation>
  </div>
);

/**
 * Selection is still coordinated by `itemId` even when items carry richer
 * content — here the selected item also shows a `detail` line and an
 * `endContent` action, which stays beside the control rather than nesting
 * inside it.
 */
export const WithItemContent = () => (
  <div style={{ maxWidth: "280px" }}>
    <Navigation label="Roles" defaultSelectedId="admin">
      <NavigationItem itemId="dashboard" label="Dashboard" />
      <NavigationItem
        itemId="admin"
        label="Admin"
        detail="2 users"
        endContent={<span className="narmi-icon-lock" aria-hidden="true" />}
      />
      <NavigationItem itemId="viewer" label="Viewer" />
    </Navigation>
  </div>
);

export default {
  title: "Components/Navigation",
  component: Navigation,
  parameters: {
    docs: {
      description: {
        component:
          "`Navigation` is a selection manager. It renders a `nav` landmark and " +
          "coordinates single-selection across its `NavigationItem` children by a " +
          "stable `itemId`. Instead of setting `isSelected` on each item, you tell " +
          "`Navigation` which item is current — **uncontrolled** via " +
          "`defaultSelectedId`, or **controlled** via `selectedId` + `onSelect` " +
          "(bind it to your router or app state). The selected item receives " +
          '`aria-current="page"`.',
      },
    },
  },
  argTypes: {
    label: { control: "text" },
    selectedId: { control: "text" },
    defaultSelectedId: { control: "text" },
    onSelect: { action: "selected", control: false },
    testId: { control: "text" },
  },
};
