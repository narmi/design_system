/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import Avatar from "../Avatar";

// FIXME: code and story for `footerContent`
// FIXME: code and story for render prop trigger

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
