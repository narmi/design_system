import React, { useState } from "react";
import Tooltip from "src/Tooltip";
import IconButton from "src/IconButton";

/**
 * Mimics the fixed-position, overflow-hidden collapsed sidebar nav
 * from Azul that contains the expand/collapse tooltip trigger.
 */
// eslint-disable-next-line react/prop-types
const CollapsedSidebar = ({ children }) => (
  <nav
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "80px",
      height: "100vh",
      overflowX: "hidden",
      overflowY: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      paddingTop: "30px",
      borderRight: "1px solid var(--color-lightGrey)",
    }}
  >
    {children}
  </nav>
);

/**
 * Reproduces the Azul sidebar expand/collapse tooltip pattern:
 * - Trigger is inside a position:fixed, overflow-hidden, 80px-wide sidebar
 * - Controlled `isOpen` prop on Tooltip
 * - Mouse events on a parent wrapper div
 * - Tooltip uses default side="top"
 */
export const SidebarExpandCollapse = () => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  return (
    <CollapsedSidebar>
      <div
        onMouseEnter={() => setIsTooltipOpen(true)}
        onMouseLeave={() => setIsTooltipOpen(false)}
      >
        <Tooltip text="Expand sidebar" isOpen={isTooltipOpen}>
          <div
            style={{
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton
              kind="action"
              label="Expand sidebar"
              name="chevrons-left"
            />
          </div>
        </Tooltip>
      </div>
    </CollapsedSidebar>
  );
};

/**
 * Same as SidebarExpandCollapse but with isOpen forced to true
 * so the positioning issue is immediately visible without hovering.
 */
export const AlwaysOpen = () => (
  <CollapsedSidebar>
    <div>
      <Tooltip text="Expand sidebar" isOpen={true}>
        <div
          style={{
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton
            kind="action"
            label="Expand sidebar"
            name="chevrons-left"
          />
        </div>
      </Tooltip>
    </div>
  </CollapsedSidebar>
);

const storyDescription =
  "Reproduces the Azul sidebar tooltip pattern where the trigger lives " +
  "inside a position:fixed, overflow-x:hidden, 80px-wide collapsed sidebar. " +
  "The tooltip (side='top') may clip or misposition at the viewport edge.";

export default {
  title: "NDS-2870 Left Edge Controlled Tooltip",
  tags: ["!autodocs", "NDS-2870"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: storyDescription,
      },
    },
  },
};
