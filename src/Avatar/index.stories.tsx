/* eslint-disable react/prop-types */
import React from "react";
import Avatar from "./";
import Row from "../Row";

export const Overview = ({ initials = "CP", label = "Christian Paz" }) => {
  return <Avatar initials={initials} label={label} />;
};

export const WithImage = () => {
  return (
    <Avatar
      imgurl="https://media.licdn.com/dms/image/v2/D4E0BAQHnVTkZjhvlQg/company-logo_200_200/company-logo_200_200/0/1680295112021?e=2147483647&v=beta&t=-4A2TRSHuDiBT_anhoqTULvjXfzVh7_vZApmdXUVzsc"
      label="Narmi linked in logo"
    />
  );
};

export const WithLink = () => {
  return <Avatar initials="NM" label="Narmi" linkurl="https://narmi.com" />;
};

export const Tonal = () => {
  return (
    <Avatar
      kind="tonal"
      initials="NM"
      label="Narmi"
      linkurl="https://narmi.com"
    />
  );
};

export const WithFallbackIcon = () => {
  return <Avatar label="Narmi" />;
};
WithFallbackIcon.parameters = {
  docs: {
    description: {
      story:
        "Avatar will render a fallback user icon when `initials` or `imgurl` are not passed.",
    },
  },
};

export const Sizes = () => {
  return (
    <>
      <Row>
        <Row.Item>
          <Avatar initials="xs" label="extra small" size="xs" />
        </Row.Item>
        <Row.Item>
          <Avatar initials="s" label="small" size="s" />
        </Row.Item>
        <Row.Item>
          <Avatar initials="m" label="medium" size="m" />
        </Row.Item>
      </Row>
      <Row className="margin--top">
        <Row.Item>
          <Avatar kind="tonal" initials="xs" label="extra small" size="xs" />
        </Row.Item>
        <Row.Item>
          <Avatar kind="tonal" initials="s" label="small" size="s" />
        </Row.Item>
        <Row.Item>
          <Avatar kind="tonal" initials="m" label="medium" size="m" />
        </Row.Item>
      </Row>
    </>
  );
};

export default {
  title: "Components/Avatar",
  component: Avatar,
};
