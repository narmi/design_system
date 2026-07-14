import React from "react";
import Drawer from "src/Drawer";
import TextInput from "src/TextInput";
import Tooltip from "src/Tooltip";

/**
 * Simulates a Drawer containing a TextInput with a Tooltip in endContent.
 * The input fills the drawer width, placing the info icon (and tooltip trigger)
 * at the right edge of the viewport.
 */

export const Default = () => (
  <Drawer isOpen={true} onUserDismiss={() => {}} paddingSize="s">
    <TextInput
      label="Account Number"
      endContent={
        <Tooltip
          isOpen={true}
          text="If you don't have an account number, enter your customer ID"
        >
          <span className="narmi-icon-info"></span>
        </Tooltip>
      }
    />
  </Drawer>
);

export const AlwaysOpen = () => (
  <Drawer isOpen={true} onUserDismiss={() => {}}>
    <div style={{ padding: "0" }}>
      <TextInput
        label="Account Number"
        endContent={
          <Tooltip
            text="If you don't have an account number, enter your customer ID"
            isOpen={true}
          >
            <span className="narmi-icon-info"></span>
          </Tooltip>
        }
      />
    </div>
  </Drawer>
);

const storyDescription =
  "Reproduces a tooltip positioning bug where a Tooltip in TextInput endContent " +
  "is at the right edge of the viewport inside a Drawer. " +
  "The tooltip may clip or misposition at the right viewport edge.";

export default {
  title: "NDS-3096 Drawer Right Edge Tooltip",
  tags: ["!autodocs", "NDS-3096"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: storyDescription,
      },
    },
  },
};
