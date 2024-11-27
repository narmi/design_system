/* eslint-disable react/jsx-key */
import React from "react";
import Avatar from "../Avatar";

const Template = (args) => <Avatar {...args} />;

export const Overview = () => {
  return (
    <div style={{ margin: "8rem" }}>
      <Avatar initials="CP" label="Christian Paz" />
    </div>
  );
};

export default {
  title: "Components/Avatar",
  component: Avatar,
};
