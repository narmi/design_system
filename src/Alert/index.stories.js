/* eslint-disable jsx-a11y/anchor-is-valid,react/jsx-key */
import React, { useState } from "react";
import Alert from "./";

const Template = (args) => <Alert {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  isActive: true,
  children: (
    <span>
      I like turtles. Turtles are good. I like turtles. Turtles are good.
    </span>
  ),
};

export const ControllingVisibility = () => {
  const [isActive, setIsActive] = useState(true);
  return (
    <>
      <div className="margin--bottom">
        <Alert
          kind="success"
          isActive={isActive}
          onUserDismiss={() => {
            setIsActive(false);
          }}
        >
          You can dismiss this alert!
        </Alert>
      </div>
      {!isActive && (
        <button
          onClick={() => {
            setIsActive(true);
          }}
        >
          Show alert again
        </button>
      )}
    </>
  );
};
ControllingVisibility.parameters = {
  docs: {
    description: {
      story:
        "Visibility of an alert should be controlled by the `isActive` prop instead of conditional rendering. This enables every `Alert` to be announced when it becomes active via an `aria-live` region.",
    },
  },
};

export default {
  title: "Components/Alert",
  component: Alert,
};
