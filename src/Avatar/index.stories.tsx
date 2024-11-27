import React from "react";
import Avatar from "./";
import Row from "../Row";

export const Overview = () => {
  return <Avatar initials="CP" label="Christian Paz" />;
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

export const Sizes = () => {
  return (
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
  );
};

export default {
  title: "Components/Avatar",
  component: Avatar,
};
