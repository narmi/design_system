import React, { useState } from "react";
import { expect, waitFor } from "storybook/test";
import FieldToken from ".";

const Template = (args) => <FieldToken {...args} />;
export const Overview = Template.bind({});
Overview.args = {
  label: "Label",
};

/**
 * Interaction test verifying the dismiss button fires `onDismiss`,
 * removing the token.
 */
export const Dismisses = {
  name: "Interaction: Removes token on dismiss",
  render: () => {
    const Wrapper = () => {
      const [visible, setVisible] = useState(true);
      return visible ? (
        <FieldToken label="Chicago" onDismiss={() => setVisible(false)} />
      ) : (
        <div>Token removed</div>
      );
    };
    return <Wrapper />;
  },
  play: async ({ canvas, userEvent }) => {
    expect(canvas.getByText("Chicago")).toBeVisible();

    await userEvent.click(
      canvas.getByRole("button", { name: /remove chicago/i }),
    );
    await waitFor(() =>
      expect(canvas.queryByText("Chicago")).not.toBeInTheDocument(),
    );
    expect(canvas.getByText("Token removed")).toBeVisible();
  },
};

export default {
  title: "Components/FieldToken",
  component: FieldToken,
};
